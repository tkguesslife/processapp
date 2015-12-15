define([], function(){
   'use strict'

    function run($rootScope, $location, Auth, $http){


        $rootScope.$on('$locationChangeStart', function (event, next, current) {

            if (Auth.getTokenClaims() == 'undefined') {
                $location.path('/signin');
            }
        });

    }

    run.$inject = ['$rootScope', '$location', 'Auth', '$http']

    return run;
});