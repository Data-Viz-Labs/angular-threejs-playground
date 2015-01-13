
/*
                            .__                           __  .__                              __                        .__                                                     .___
_____    ____    ____  __ __|  | _____ _______          _/  |_|  |_________   ____   ____     |__| ______         ______ |  | _____  ___.__. ___________  ____  __ __  ____    __| _/
\__  \  /    \  / ___\|  |  \  | \__  \\_  __ \  ______ \   __\  |  \_  __ \_/ __ \_/ __ \    |  |/  ___/  ______ \____ \|  | \__  \<   |  |/ ___\_  __ \/  _ \|  |  \/    \  / __ | 
 / __ \|   |  \/ /_/  >  |  /  |__/ __ \|  | \/ /_____/  |  | |   Y  \  | \/\  ___/\  ___/    |  |\___ \  /_____/ |  |_> >  |__/ __ \\___  / /_/  >  | \(  <_> )  |  /   |  \/ /_/ | 
(____  /___|  /\___  /|____/|____(____  /__|             |__| |___|  /__|    \___  >\___  >\__|  /____  >         |   __/|____(____  / ____\___  /|__|   \____/|____/|___|  /\____ | 
     \/     \//_____/                 \/                           \/            \/     \/\______|    \/          |__|             \/\/   /_____/                         \/      \/ 

Some angular directives made from three.js website's examples

*/

"use strict";

var myapp = angular.module('angular-threejs-playground', ["ui.router"])


/* Routing ****************************************************************** */
myapp.config(function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/")
  
  $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "home.html",
    })
    .state('chart1', {
        url: "/chart1",
        templateUrl: "chart1.html",
        controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
    });
}).run(function($rootScope, $state) {
      $rootScope.$state = $state;
});


/* Controllers ************************************************************** */
myapp
.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello World!';
}]);


/* Services ***************************************************************** */
myapp.factory('DataService', ['$http', function($http) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);


/* Directives *************************************************************** */
myapp.directive('atpWebglInteractiveDraggableCubes', function() {
  return {
    restrict: 'E',
    scope: {},
    template: '<div> a {{name}} </div>',
    link: function (scope, element, attrs) {
      scope.name = 'Jeff';
    }
  };
});

