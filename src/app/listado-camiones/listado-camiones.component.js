app.controller('Ctrl', function($scope, service) {
    $scope.displayedCollection = [];

    service.all.then(function(item) {
        $scope.item = item;
        $scope.displayedCollection = item;
    });
});