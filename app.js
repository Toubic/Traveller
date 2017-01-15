"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Sequelize = require("sequelize");
var exhand = require("express-handlebars");
var Storage = require("fs-storage");
var storage = new Storage("./storage/");
var app = express();


app.listen(process.env.PORT || 5000);

app.engine("hb", exhand({
    defaultLayout: "index",
    extname: "hb"
}));
app.set("view engine", "hb");

app.use(bodyParser.urlencoded({ extended: true }));

const THE_DATABASE = "postgres";
const THE_USERNAME = "postgres";
const THE_PASSWORD = "tj22fe";


exports.createPostgresDatabase = function (theDatabase, theUsername, thePassword) {

    try {

        if( !isNaN(theDatabase) || !isNaN(theUsername) || !isNaN(thePassword) ){
            throw new Error("Incorrect database info format");
        }
        else if (theDatabase === undefined || theUsername === undefined || thePassword === undefined){
            throw new Error("No database info given");
        }
        else if (theDatabase !== THE_DATABASE || theUsername !== THE_USERNAME || thePassword !== THE_PASSWORD){
            throw new Error ("Incorrect database name/username/password");
        }
        else {
            var Database = new Sequelize(theDatabase, theUsername, thePassword, {
                dialect: 'postgres',
                protocol: 'postgres',
                port: 5432,
                host: 'localhost'
            });
        }
    }
    catch (error){
        console.log(error.message);
    }

    return Database;
};
var Database = exports.createPostgresDatabase(THE_DATABASE, THE_USERNAME, THE_PASSWORD);

var Lists = Database.define('Lists', {
    creator: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    date_created: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

Lists.removeAttribute('id');

var VisitedContinents = Database.define('VisitedContinents', {
    continent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year_visited: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

VisitedContinents.removeAttribute('id');

var VisitedCountries = Database.define('VisitedCountries', {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year_visited: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    continent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

VisitedCountries.removeAttribute('id');

var VisitedCities = Database.define('VisitedCities', {
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year_visited: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

VisitedCities.removeAttribute('id');

/*

Lists.sync({force: true});

VisitedContinents.sync({force: true});

VisitedCountries.sync({force: true});

 VisitedCities.sync({force: true});

*/

Database.sync();

app.get("/", function(req, res) {

    res.render("homepage")
});

app.post("/", function(req, res) {

    Lists.create({
        creator: req.body.creator,
        date_created: Date.now()
    });
    VisitedContinents.create({
        continent: req.body.continent,
        year_visited: req.body.year,
        creator: req.body.creator
    });
    VisitedCountries.create({
        country: req.body.country,
        year_visited: req.body.year,
        continent: req.body.continent,
        creator: req.body.creator
    });

    if(req.body.city !== "") {

        VisitedCities.create({
            city: req.body.city,
            year_visited: req.body.year,
            country: req.body.country,
            creator: req.body.creator
        });
    }
    res.redirect("/");
});

app.get("/css/style.css", function(req, res) {
    res.sendFile(path.join(__dirname + "/css/style.css"));
});

app.get("/robots.txt", function(req, res) {
    res.sendFile(path.join(__dirname + "/robots.txt"));
});