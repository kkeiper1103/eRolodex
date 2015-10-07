/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = ["$scope", "$stateParams", "TitleService", "PeopleFactory", function($scope, $stateParams, Title, PeopleFactory) {

    Title.set("eRolodex - Person View");

    PeopleFactory.find({ _id: $stateParams.id }, function( people ) {
        $scope.people = people;

        Title.set("eRolodex - Viewing " + people[0].data.name);
    });

}];