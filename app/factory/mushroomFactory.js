angular.module('mushroomApp')
.factory('mushroomFactory', function($http){
    return {
        getMushroom(){
            return $http
            .get('data/mushrooms.json')
            .then((res)=>{
                console.log("res", res);
                return res.data.mushrooms
            })
        }
    }
})
