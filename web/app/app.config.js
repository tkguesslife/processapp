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
                data : { title: 'Dashboard'}
            })
            .state('app.member', {
                url: "/member",
                templateUrl: "/app/components/member/views/layout.html",
                data : { title: 'Member'}
            })
            .state('app.member.new', {
                url: "/newmember",
                templateUrl: "/app/components/member/views/signup.html",
                controller:  "MemberController as MemberCtrl",
                data : { title: 'Member', view: 'new'}
            })
            .state('app.member.list', {
                url: "/list",
                templateUrl: "/app/components/member/views/list.html",
                controller:  "MemberController as MemberCtrl",

                data : { title: 'Member', view: 'list'}
            })
            .state('app.member.edit', {
                url: "/:userId/edit",
                templateUrl: "/app/components/member/views/edit.html",
                controller:  "MemberController as MemberCtrl",
                data : { title: 'Member', view: 'edit'}
            })
            .state('app.user', {
                url: "/user",
                templateUrl: "/app/components/user/views/layout.html",
                data : { title: 'User'}
            })
            .state('app.user.new', {
                url: "/new",
                templateUrl: "/app/components/user/views/new.html",
                controller:  "UserController as UserCtrl",
                data : { title: 'User', view: 'new'}
            })
            .state('app.user.list', {
                url: "/list",
                templateUrl: "/app/components/user/views/list.html",
                controller:  "UserController as UserCtrl",

                data : { title: 'User', view: 'list'}
            })
            .state('app.user.edit', {
                url: "/:userId/edit",
                templateUrl: "/app/components/user/views/edit.html",
                controller:  "UserController as UserCtrl",
                data : { title: 'User', view: 'edit'}
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
            .state('auth.signup', {
                url: "/signup",
                templateUrl: "/app/components/auth/views/signup.html",
                controller:  "AuthorisationController"
            })
        ;

        $httpProvider.interceptors.push('HTTPInterceptor');

    }

    config.$inject=['$httpProvider','$stateProvider', '$urlRouterProvider'];
    return config;

});