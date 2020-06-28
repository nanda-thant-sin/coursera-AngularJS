(function () {
'use strict';

angular.module('mod1', [])
.controller('mod1Controller', mod1Controller);

function mod1Controller ($scope) {
  $scope.items = "";
  $scope.result = "";
  $scope.check = function () {
    if($scope.items == ""){
      $scope.result = "Please enter data first";
    }
    else{
      const words = $scope.items.split(',');
      if(words.length <= 3){
        $scope.result = "Enjoy!";
      }
      else {
        $scope.result = "Too much!";
      }
    }
  };
}

})();
