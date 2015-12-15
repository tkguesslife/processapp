define([], function (){
    'use strict';

    function HTTPInterceptor($q, $location, $localStorage) {

        var svc = {
            request: request,
            responseError: responseError
        };

        return svc;

        function request(config) {
            console.log("HTTPInterceptor  request()");
            config.headers = config.headers || {};
            if ($localStorage.token) {
                config.headers.Authorization = 'Bearer ' + $localStorage.token;
            }
            return config;
        }

        function responseError(response) {
            if (response.status === 401 || response.status === 403) {
                delete $localStorage.token;
                $location.path('/signin');
            }
            return $q.reject(response);
        }

    }

    HTTPInterceptor.$inject = ['$q', '$location', '$localStorage']
    return HTTPInterceptor;


});