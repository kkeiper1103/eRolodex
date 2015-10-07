/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = ["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("index", {
            url: "/",
            templateUrl: "partials/index.html",
            controller: "MainCtrl"
        })
        .state("people", {
            url: "/people",
            templateUrl: "partials/people.html",
            controller: "PeopleCtrl"
        })
        .state("person", {
            url: "/people/:id",
            templateUrl: "partials/person.html",
            controller: "PersonCtrl"
        });

}];