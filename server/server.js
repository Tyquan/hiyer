const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
const session = require('express-session');
const cors = require('cors')
const bcrypt = require('bcrypt');

const app = express();

const publicPath = path.join(__dirname, '..', 'client/dist');
const port = process.env.PORT || 3000;

// mlab connection 
const mongoUri = 'mongodb://Tyquan:Jamela17!@ds139278.mlab.com:39278/whatsvi';

// mongoose mlab connection
mongoose.connect(mongoUri);
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// API
const Job = require('./api/job');

app.use(compression({level: 1}));
app.use(cors());
//app.use(favicon(path.join(__dirname, 'public', 'images/weemaple2.jpg')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keysessionsaidding',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 180 * 60 * 1000 }
}));

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use('/api/jobs', Job);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server is up! on port ${port}`);
});