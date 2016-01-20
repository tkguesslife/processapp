define([],function (){

    function UserController($scope, UserService){

        $scope.listView = function(){
            console.log("UserController.listView()");
            UserService.list().then(function(users){
               $scope.users = users;
                console.log(users);
            });
        };

        $scope.listView();

    }

    UserController.$inject = ["$scope", "UserService"];

    return UserController;

});