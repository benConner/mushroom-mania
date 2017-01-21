angular.module('mushroomApp')
.controller('MainCtrl',function($scope, mushroomFactory){
    mushroomFactory
    .getMushroom()
    .then((res)=>{
        console.log("res", res);
        $scope.mushrooms = res
    })
})
