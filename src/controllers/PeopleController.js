/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = ["$scope", "TitleService", "PeopleFactory", function($scope, Title, PeopleFactory) {

    Title.set("eRolodex - People Listing");

    PeopleFactory.get(function( data ) {
        $scope.people = data;
    });

}];