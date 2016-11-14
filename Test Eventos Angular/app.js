var app = angular.module("myApp", [])

//Controller Parent 
.controller('controllerTwo', function ($scope) {
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
})

//Controller Son
.controller('controllerThree', function ($scope) {
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
});