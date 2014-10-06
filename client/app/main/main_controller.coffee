angular.module 'client-main',['ngRoute']

  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'main/main.html'
        controller: 'MainCtrl'

  .controller 'MainCtrl', ($scope) ->
   $scope.days=['lundi','mardi','mercredi','jeudi','vendredi']
   $scope.halfhours=[16..40]
   $scope.floor = Math.floor
   $scope.opened=[]
   $scope.booked ={}
   $scope.username = 'Florent BEAUCHAMP'
   $scope.selected =
      day:null
      halfhour:null
      index:0

   $scope.book= (day,halfhour,index)->
     console.log " on s'inscrit a "+day+' '+halfhour+' '+index
     $scope.selected.day = day
     $scope.selected.halfhour = halfhour
     $scope.selected.index = index

   $scope.confirm = ->
     console.log  'serveur non implementé'
     $scope.booked[$scope.selected.day] or= []
     $scope.booked[$scope.selected.day][$scope.selected.halfhour] or= []
     $scope.booked[$scope.selected.day][$scope.selected.halfhour][$scope.selected.index] = $scope.username
     console.log  $scope.booked