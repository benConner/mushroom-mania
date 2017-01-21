angular.module('mushroomApp',['ngRoute'])
.config(($locationProvider, $routeProvider)=>{
    $locationProvider.hashPrefix('')
    $routeProvider.when('/', {
        controller :'MainCtrl',
        templateUrl :'partials/mushroom.html'
    })
})
