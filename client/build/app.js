angular.module('client', ['ngRoute', 'client-main', 'templates']).config(function($routeProvider) {
  return $routeProvider.otherwise({
    redirectTo: '/'
  });
});

'app controller goes here';


angular.module('client-main', ['ngRoute']).service('PhormowebServer', function() {
  return console.log(' load my service');
});

angular.module('client-main', ['ngRoute']).config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}).controller('MainCtrl', function($scope) {
  var _i, _results;
  $scope.days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  $scope.halfhours = (function() {
    _results = [];
    for (_i = 16; _i <= 40; _i++){ _results.push(_i); }
    return _results;
  }).apply(this);
  $scope.floor = Math.floor;
  $scope.opened = [];
  $scope.booked = {};
  $scope.selected = {
    day: null,
    halfhour: null,
    index: 0
  };
  $scope.book = function(day, halfhour, index) {
    console.log(" on s'inscrit a " + day + ' ' + halfhour + ' ' + index);
    $scope.selected.day = day;
    $scope.selected.halfhour = halfhour;
    $scope.selected.index = index;
    return $scope.username = '';
  };
  return $scope.confirm = function() {
    var _base, _base1, _name, _name1;
    console.log('serveur non implementé');
    (_base = $scope.booked)[_name = $scope.selected.day] || (_base[_name] = []);
    (_base1 = $scope.booked[$scope.selected.day])[_name1 = $scope.selected.halfhour] || (_base1[_name1] = []);
    $scope.booked[$scope.selected.day][$scope.selected.halfhour][$scope.selected.index] = $scope.username;
    return console.log($scope.booked);
  };
});
