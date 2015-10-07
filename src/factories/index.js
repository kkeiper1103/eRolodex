
var angular = require("angular"),
    app = angular.module("eRolodex.factories", []);

app.factory("PeopleFactory", require("./PeopleFactory"));

module.exports = app;