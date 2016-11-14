var controllerThree = function ($scope)
{
    //Controller Children
    var vm = this;
    vm.data = 'Nothing here...';

    //To recive message from  father
    $scope.$on('msg', function (event, data) {
        vm.data = data;
    });

    //To send message to father
    vm.sendEvent = function () {
        $scope.$emit('test', vm.message);
    };    
}

controllerThree.$inject = ['$scope'];
