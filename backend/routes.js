const profile_control = require('./controllers/ProfileController');
const connection_control = require('./controllers/ConnectionController');

module.exports = (app) => {
    app.post('/register', profile_control.register)
    //app.post('/login', profile_control.login)
    //app.post('/update_profile', profile_control.updateInfo)
    app.get('/get_profile_info', profile_control.getInfo)
    //app.get('/get_profile', connection_control.getAProfile)
    //app.send('/decline_profile', connection_control.declineProfile)
    //app.send('/accept_profile', connection_control.acceptProfile)
}