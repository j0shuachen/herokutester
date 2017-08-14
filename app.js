var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./backend-setup/config/index');
var setupController = require('./backend-setup/controllers/setupController');
var db;
var port = process.env.PORT || 3000;

var muniStopController = require('./backend-setup/controllers/muniStopController');
var actransitBusController = require('./backend-setup/controllers/actransitBusController');
var muniBusController = require('./backend-setup/controllers/muniBusController');
var actransitStopController = require('./backend-setup/controllers/actransitStopController');
var bartStopController = require('./backend-setup/controllers/bartStopController');
var caltrainStopController = require('./backend-setup/controllers/caltrainStopController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString(), (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, function() {
    // console.log('listening to 3000');
  });
});




actransitBusController(app);
muniBusController(app);



actransitBusController(app);
muniBusController(app);

setupController(app); // setupController is a function
actransitStopController(app);

bartStopController(app);
caltrainStopController(app);

muniStopController(app);
