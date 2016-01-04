define([], function(){
    'use strict'

    function AppController($scope, Auth, $localStorage){

        $scope.currentUser = $localStorage.currentUser;

        $scope.expandCollapse = function(){
            console.log("clicked");
            $scope.isCollapsed = !$scope.isCollapsed;
        }


    }

    AppController.$inject = ['$scope', 'Auth', '$localStorage'];

    return AppController;
})