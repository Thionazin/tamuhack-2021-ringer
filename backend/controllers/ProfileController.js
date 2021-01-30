const mongoose = require('mongoose');
const Users = require('../models/users');
const bcrypt = require("bcryptjs");
const passportLocal = require("passport-local").Strategy;

/*
mongoose.connect(
    "mongodb+srv://dbUser:<secretcode>@ringerdb.nqpsv.mongodb.net/<ringerdb>?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose Is Connected");
    }
);
*/

module.exports = {
    async register (req, res) {
        Users.findOne({ username: req.body.username }, async (err, doc) => {
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
    },
    async updateInfo (req, res) {

    },
    async getInfo (req, res){
        res.send(req.user);
    }
}

