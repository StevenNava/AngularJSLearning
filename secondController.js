// MODULE
var secondController = angular.module("secondController", []);

// CONTROLLERS
myApp.controller("secondController", [
  "$scope",
  "$rootScope",
  "$log",
  "$filter",
  "$timeout",
  function ($scope, $rootScope, $log, $filter, $timeout) {
    // will the things added in app.js appear here?
    console.log($scope);
    // answer: NO. $scope seems controller specific.

    // will the things added to $rootScope in app.js appear here?
    console.log($rootScope);
    // answer... YES. $rootScope is global whereas $scope is not.

    $log.info($scope);

    // a function to give a lowercase version of the twitter handle
    $scope.lowercaseHandle = function () {
      return $filter("lowercase")($scope.twitterHandle);
    };

    // adding something manually to the watch list in Angular to see how it works
    // this example shows the digest cycle in AngularJS
    $scope.$watch("twitterHandle", function (newValue, oldValue) {
      $log.info("Changed!");
      $log.info(`Old Value:  ${oldValue}`);
      $log.info(`New Value: ${newValue}`);
    });

    // breaking the digest loop -- doesn't actually break but is supposed to?
    setTimeout(function () {
      $scope.twitterHandle = "newTwitterHandle";
      $log.info("$scope changed! $scope.twitterHandle changed!");
    }, 3000);

    // setTimeout with $apply -- should force AngularJS to watch the changes inside of $apply
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.twitterHandle = "newerTwitterHandle";
        $log.info("$scope changed! $scope.twitterHandle changed!");
      });
    }, 6000);

    // AngularJS version of timeout which always watches the inside function...
    $timeout(function () {
      $scope.twitterHandle = "newestTwitterHandle";
    }, 9000);
  },
]);

/* Minified Controller Code Example
 *  It still works!
 *
 *    var secondController = angular.module("secondController", []);
 *    myApp.controller("secondController", [
 *    "$scope",
 *    "$rootScope",
 *    "$log",
 *    function (o, l, n) {
 *        console.log(o), console.log(l), n.info(o);
 *    },
 *    ]);
 */
