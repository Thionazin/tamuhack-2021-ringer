const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/users");
//----------------------------------------- END OF IMPORTS---------------------------------------------------

mongoose.connect(
  "mongodb+srv://dbUser:secretcode@ringerdb.nqpsv.mongodb.net/ringerdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes

// This is not best practice, but we don't have time to make it good practice.

//profile routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
})
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        name : req.body.name,
        description : req.body.description,
        game_list : req.body.game_list,
        tag_list : req.body.tag_list,
        declined_ids : [""],
        request_ids : [""],
        connected_ids : [""]
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/get_self", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
app.post("/update_profile", (req, res) => {
  if(req.user) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("User doesn't exist");
      if (doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        doc.username = req.body.username;
        doc.password = hashedPassword;
        doc.name = req.body.name;
        doc.description = req.body.description;
        doc.game_list = req.body.game_list;
        doc.tag_list = req.body.tag_list;
        doc.declined_ids = req.body.declined_ids;
        doc.request_ids = req.body.request_ids;
        doc.connected_ids = req.body.connected_ids;
        doc.save().catch(err => console.log(err));
        res.send("Profile Updated");
      }
    });
  } else {
    res.send("Error, you do not have permission to edit this profile.")
  }
});

//connecting with others routes
app.get("/get_a_profile", (req, res) => {
  User.find({} , (err, users) => {
    if(err) console.log(err);
    users.map(user => {
      //Do somethign with the user
    })
  })
});

app.get("/getRandomProfile", (req,res)=>{

  User.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
    // Again query all users but only fetch one offset by our random #
    User.findOne().skip(random).exec(
      function (err, result) {
        res.send(result)
        console.log(result) 
      })
  })


})
app.post("/swipe_yes", (req, res) => {
  if(req.user) {
    User.findOne({ username: req.body.otheruser }, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("User doesn't exist. You should never see this message");
      if (doc) {
        if (doc.request_ids.contain(req.user.username)) {
          doc.connected_ids.push(req.user.username);
          User.findOne({username: req.user.username}, async (err, profile) => {
            if (err) throw err;
            if (!profile) res.send("User doesn't exist. This case should never happen.");
            if (profile) {
              profile.connected_ids.push(doc.username);
              profile.save().catch(err => console.log(err));
              res.send("Matched")
            }
          });
          doc.save().catch(err => console.log(err));
        } else {
          User.findOne({ username: req.user.username }, async (err, doc) => {
            if (err) throw err;
            if (!doc) res.send("User doesn't exist");
            if (doc) {
              doc.request_ids.push(req.body.otheruser);
              doc.save().catch(err => console.log(err));
              res.send("Swiped yes")
            }
          });
        }
      }
    });
  } else {
    res.send("Error, you do not have permission to swipe.")
  }
});

app.post("/swipe_no", (req, res) => {
  if(req.user) {
    User.findOne({ username: req.user.username }, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("User doesn't exist");
      if (doc) {
        doc.declined_ids.push(req.body.otheruser);
        doc.save().catch(err => console.log(err));
        res.send("Swiped no")
      }
    });
  } else {
    res.send("Error, you do not have permission to swipe.")
  }
});

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});