// MODULE
/*
 * First part of module "myApp" is the module name and the second part is the dependency array []. Here, we would
 * put all the module dependencys by name. i.e. ['ngMessages']
 */

var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);
// CONTROLLERS
myApp.controller("mainController", [
  "$scope",
  "$rootScope",
  "$log",
  "$filter",
  "$resource",
  "$timeout",
  function ($scope, $rootScope, $log, $filter, $resource, $timeout) {
    // All AngularJS services start with $
    // Log service is an 'upgraded' console logger
    $log.log("Regular log message.");
    $log.info("An informational message.");
    $log.debug("A debug message.");
    $log.warn("A warning message.");
    $log.error("An error message.");

    // scope is a service in AngularJS that can be added on to like so
    $log.log($scope);
    $log.log($rootScope);

    // Adds name field to $scope
    $scope.name = "Steven Nava";
    $rootScope.name = "Steven Nava";
    $scope.formattedName = $filter("uppercase")($scope.name);

    // Using interpolation with the $scope service
    $scope.headerText = "Hello World!";

    // Using $timeout service to change header text after 5s
    $timeout(function () {
      $scope.headerText = "Hello Great Big World!";
    }, 5000);

    $log.info(`Name: ${$scope.name}`);
    $log.info(`Formatted Name: ${$scope.formattedName}`);

    // Adds occupation field to $scope
    $scope.occupation = "Software Developer";
    $rootScope.occupation = "Software Developer";

    // Adds getSum() function to $scope
    $scope.getSum = function (x, y) {
      return x + y;
    };

    console.log($scope.getSum(5, 3));
    console.log($scope);

    let searchPeople = function searchPeople(
      firstName,
      lastName,
      age,
      occupation
    ) {
      console.log($scope);
      return "Found person";
    };

    // this will log 'Found person'
    console.log(searchPeople(1, 2, 3, 4));
    searchPeople(1, 2, 3, 4);

    // this will convert the function to a string and output it
    console.log(searchPeople);

    console.log(angular.injector().annotate(searchPeople));

    console.log($resource);
  },
]);
