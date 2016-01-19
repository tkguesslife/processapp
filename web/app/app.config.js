define([], function () {
    'use strict';

    function config($httpProvider, $stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/app/dashboard");
        // Now set up the states
        $stateProvider
            .state('app', {
                abstract: true,
                url: "/app",
                controller:  "AppController",
                views: {
                    '':{
                        templateUrl: "/app/components/app/views/app.html"
                    },
                    'aside':{
                        templateUrl: "/app/components/app/views/aside.html"
                    },
                    'content':{
                        templateUrl: "/app/components/app/views/content.html"
                    }
                }
            })
            .state('app.dashboard', {
                url: "/dashboard",
                templateUrl: "/app/components/dashboard/views/home.html",
                controller:  "DashboardController",
                data : { title: 'Something'}
            })
            .state('app.user', {
                url: "/user",
                templateUrl: "/app/components/user/views/layout.html",
                data : { title: 'User'}
            })
            .state('app.user.list', {
                url: "/list",
                templateUrl: "/app/components/user/views/list.html",
                controller:  "UserController",
                data : { title: 'User'}
            })
            .state('auth', {
                url: '/auth',
                template: '<div class="indigo bg-big"><div ui-view class="fade-in-down smooth"></div></div>'
            })
            .state('auth.signin', {
                url: "/signin",
                templateUrl: "/app/components/auth/views/signin.html",
                controller:  "AuthorisationController"
            })
        ;

        $httpProvider.interceptors.push('HTTPInterceptor');

    }

    config.$inject=['$httpProvider','$stateProvider', '$urlRouterProvider'];
    return config;

});