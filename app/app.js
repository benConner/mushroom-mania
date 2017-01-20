angular.module('mushroomApp',['ngRoute'])
.config('',($locationProvider, $routeProvider)=>{
    $locationProvider.hashPrefix('')
    $routeProvider.when('/posion',{
        controller :'PosionCtrl',
        templateUrl :'partials/posion.html'
    })
    .when('/notposion',{
        controller : 'NotPosionCtrl',
        templateUrl : 'partials/notposion.html'


    })
    .otherwise('/')

})
