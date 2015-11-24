define([], function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider.
            when('/users/list', {
                templateUrl: '/app/components/user/views/list.html',
                controller: 'UserController'
            }).
            when('/', {
                redirectTo: '/'
            }).
            otherwise({
                redirectTo: '/'
            });


    }

    config.$inject = ['$routeProvider'];

    return config;

})