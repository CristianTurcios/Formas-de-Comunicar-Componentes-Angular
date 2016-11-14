'use strict';
var app = angular.module("myApp", [])
//Services
.factory('utilityService', function() { 
  return {
    message: 'Nothing here...',
    getMessage: function() {
      return this.message;
    },
    setMessage: function(msg) {
      this.message = msg;
    }
  };
})

.controller('controllerTwo', function(utilityService){
  var vm = this;
  
  vm.sendEvent = function() {
    utilityService.setMessage(vm.message);
  };
})

.controller('controllerThree', function(utilityService){
  var vm = this;
    
  vm.data = function(){
    return utilityService.getMessage();
  };
});