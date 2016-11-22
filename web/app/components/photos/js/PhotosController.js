define([],function (){

    function UserController(UserService, $state){

        var UserCtrl = this;

        UserCtrl.listView = function(){
            console.log("UserController.listView()");
            UserService.list().then(function(users){
                UserCtrl.users = users;

            });
        };

        UserCtrl.createView = function(){

            UserService.getUserForm().then(function(user){
                UserCtrl.user = {};
                for (var property in user) {
                    if (user.hasOwnProperty(property)) {
                        UserCtrl.user[property] = "";
                    }
                }

            });

        };



        UserCtrl.editView = function(){
            UserCtrl.user = {id: $state.params.userId};
            var user = {UserRestType: UserCtrl.user};
            UserService.editUser(user).then(function(user){
                console.log(user);
                for (var property in user) {
                    if (user.hasOwnProperty(property)) {
                        UserCtrl.user[property] = "";
                        console.log(user[property]);
                    }
                }
            });
        };

        UserCtrl.submitUserForm = function(){
            var user = {UserRestType: UserCtrl.user};
            UserService.createUser(user).then(function(response){
                console.log(response);
            });
        };

        switch($state.current.data.view){
            case 'list':
                UserCtrl.listView();
                break;
            case 'new':
                UserCtrl.createView();
                break;
            case 'edit':
                UserCtrl.editView();
                break;
            default:
                break;
        }


    }

    UserController.$inject = ["UserService", '$state'];

    return UserController;

});