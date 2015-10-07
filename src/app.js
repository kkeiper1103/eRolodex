/**
 * Created by kkeiper1103 on 10/7/2015.
 */

/**
 * global deps for bootstrap. :/
 */
window.jQuery = window.$ = require("jquery");
var bootstrap = require("bootstrap");

// remove global dependencies. :) yay!
delete jQuery;
delete $;

/**
 * include dependencies
 */
var angular = require("angular"),
    uiRouter = require("angular-ui-router"),
    controllers = require("./controllers"),
    factories = require("./factories"),
    services = require("./services");

/**
 * Create Application
 */
var app = angular.module("eRolodex", [
    "ui.router",

    "eRolodex.controllers",
    "eRolodex.factories",
    "eRolodex.services"
]);

// configure the application
app.config(require("./config"));

module.exports = app;