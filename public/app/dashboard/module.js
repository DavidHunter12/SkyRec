define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-resource',
  'angular-cookies'
], function(ng, couchPotato) {
  "use strict";

  var module = ng.module('app.dashboard', ['ui.router', 'ngResource', 'ngCookies']);

  module.config(function ($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          "content@app": {
            controller: 'DashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'dashboard/dashboard-controller',
                'services/dashboard-service'
              ])
            }
          }
        },
        data: {
          title: 'Dashboard'
        }
      });
  });

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
});
