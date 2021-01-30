const mongoose = require('mongoose');
const Users = require('../models/users');

/*mongoose.connect(
    "mongodb+srv://dbUser:<password>@ringerdb.nqpsv.mongodb.net/<dbname>?retryWrites=true&w=majority",
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
    async getAProfile (req, res) {

    },
    async declineProfile (req, res) {

    },
    async acceptProfile (req, res) {

    }
}
