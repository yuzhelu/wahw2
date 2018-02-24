var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
var dotenv = require('dotenv').config();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();

router.route('/gets')
    .get(passport.authenticate('basic', {session: false}),
        function(req, res)
        {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using gets', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );
router.route('/puts')
    .put(passport.authenticate('basic', {session:false}),
        function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using puts', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );

router.route('/posts')
    .post(passport.authenticate('basic', {session:false}),
        function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using posts', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );

router.route('/deletes')
    .delete(passport.authenticate('basic', { session: false }),
        function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using deletes', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );

app.use('/', router);
app.listen(process.env.PORT || 5000);
module.exports = app;