angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.mostRecentLinks = [];
  $scope.addLink = function () {
    var link = $scope.link;
    $scope.link = '';
    Links.addOne(link).then(function (data) {
      $scope.mostRecentLinks = [data];
    });
  };
});

