// app.js

// [LOAD PACKAGES]
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const path          = require('path');
const mongoose      = require('mongoose');
const cors          = require('cors');

// [CONFIGURE mongoose]
// CONNECT TO MONGODB SERVER
mongoose.Promise = global.Promise; // 노드의 프로미스로 교체('bluebird'나 'q'같은 라이브러리도 존재)
function dbConnect() { 
    const MongoDB = mongoose.connect('mongodb://localhost:27017/todoApp', {
        useMongoClient: true,
    });
    MongoDB
        .then((db) => {
            console.log('MongoDB Connected, PORT : ' + db.port);
        })
        .catch((err) => {
            console.error('MongoDB Connection Error', err);
        });
}
dbConnect();
mongoose.connection.on('disconnected', dbConnect);

// DEFINE MODEL
const Model = require('./model');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 8080;

// [CONFIGURE CORS]
app.use(cors());

// [CONFIGURE ROUTER]
const router = require('./route')(app, Model);

// [RUN SERVER]
const server = app.listen(port, () => {
    console.log("Express server has started on port " + port);
});