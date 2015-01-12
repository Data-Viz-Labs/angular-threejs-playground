
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
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "route1.html"
        })
          .state('route1.list', {
              url: "/list",
              templateUrl: "route1.list.html",
              controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
          })
          
        .state('route2', {
            url: "/route2",
            templateUrl: "route2.html"
        })
          .state('route2.list', {
              url: "/list",
              templateUrl: "route2.list.html",
              controller: function($scope){
                $scope.things = ["A", "Set", "Of", "Things"];
              }
          })
    });
 