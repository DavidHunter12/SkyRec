define(['layout/module'], function (module) {

	'use strict';

	module.registerFactory('DashboardService', ['$http', '$cookies', function ($http, $cookies) {

		return {
      list: function (callback) {
        var request = {
          method: 'GET',
          url: appConfig.RestEntry + '/api/v1/dashboard/list',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          }
        };

        $http(request).success(function(data, status) {
          callback(data, status);
        }).error(function(data, status) {
          callback(data, status);
        });
      }
		}
	}]);
})
