

var angular = require("angular"),
    app = angular.module("eRolodex.services", []);

app.service("TitleService", require("./TitleService"));

module.exports = app;