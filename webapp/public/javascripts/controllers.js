app.controller('mainController', function ($scope, $http, $interval) {
    $scope.temperatures = null;
    $scope.latest = null;
    $scope.get_data = function () {
       $http({
           method: 'GET',
           url: '/api/temp',
           headers: {
               'Content-type': 'application/json'
           }
       }).then(function (res) {
           console.log(res);
           $scope.temperatures = res.data;
           $scope.latest = $scope.temperatures.slice().reverse()[0];

       }, function (err) {
           console.log(err);
       })

    };
    $scope.get_data();

    $interval($scope.get_data, 1000);
});