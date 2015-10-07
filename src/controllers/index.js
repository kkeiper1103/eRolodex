/**
 * Created by kkeiper1103 on 10/7/2015.
 */

var angular = require("angular"),
    app = angular.module("eRolodex.controllers", []);

app.controller("MainCtrl", require("./MainController"));
app.controller("PeopleCtrl", require("./PeopleController"));
app.controller("PersonCtrl", require("./PersonController"));
app.controller("TitleCtrl", require("./TitleController"));

module.exports = app;