const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    username : String,
    password : String,
    name : String,
    description : String,
    uid : String,
    game_list : [String],
    tag_list : [String],
    declined_ids : [String],
    request_ids : [String],
    connected_ids : [String]
});

module.exports = mongoose.model("Users", userSchema);