(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.list = "";
  $scope.count= "";
  $scope.message="";
  
  $scope.check = function () {
    var names = $scope.name;
    var re = /\s*,\s*/;
    var nameList = names.split(re);
    var limit = 3;
    
    if (nameList.length <= limit){
        $scope.message = "Enjoy!";
    }
    else{
        $scope.message = "Too much!";
    }
    
    $scope.count = nameList.length;
    $scope.list = nameList;
  };
}

})();