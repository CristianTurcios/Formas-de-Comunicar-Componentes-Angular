var controllerTwo = function ($scope)
{
    //Controller Parent 
    var vm = this;
    vm.data = 'Nothing here...';

    //To send message to son 
    vm.sendEvent = function () {
        $scope.$broadcast('msg', vm.message);
    };

    //To recived message from son
    $scope.$on('test', function (event, data) {
        vm.data = data;
    });
}

controllerTwo.$inject = ['$scope'];
