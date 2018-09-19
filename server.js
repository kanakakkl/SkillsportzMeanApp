const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./src/config/DB');
const { MongoClient } = require("mongodb");

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected'), { useNewUrlParser: true } },
      err => { console.log('Can not connect to the database'+ err)}
    );
    
    const app = express();
    const router = express.Router();

    app.use(bodyParser.urlencoded({ limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));

    
    app.use(cors());

    app.use(express.static(path.join(__dirname + '/dist' )));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    });

    require('./middlewares/Router')(app);
    app.use('/', router);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });