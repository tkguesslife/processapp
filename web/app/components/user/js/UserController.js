define([],function (){

    function UserController($scope){

        $scope.listView = function(){
            console.log("UserController.listView()");

        }

        $scope.listView();

    }

    UserController.$inject = ["$scope"];

    return UserController;

});