var mongoose = require('mongoose')
  , User = mongoose.model('User');

// List all users
exports.getByUsername = function(req, res, next){
  var username = req.params.username;
  User.find({username: username}, function (err, user) {
    if (err) res.send(err);
    var userJson = user[0].toJSON();
    delete userJson['password'];
    res.json(userJson);
  });
}
