define([], function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider.
            when('/users/list', {
                templateUrl: '/app/components/user/views/list.html',
                controller: 'UserController'
            }).
            when('/', {
                templateUrl: '/app/components/dashboard/views/home.html',
                controller: 'DashboardController'
            }).
            otherwise({
                redirectTo: '/users/list'
            });

    }

    config.$inject=['$routeProvider'];
    return config;

});