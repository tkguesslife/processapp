define([],function (){

    function MemberController(MemberService, $state){

        var MemberCtrl = this;

        MemberCtrl.listView = function(){
            console.log("UserController.listView()");
            MemberService.list().then(function(users){
                MemberCtrl.users = users;

            });
        };

        MemberCtrl.createView = function(){

            MemberService.getUserForm().then(function(user){
                MemberCtrl.user = {};
                for (var property in user) {
                    if (user.hasOwnProperty(property)) {
                        MemberCtrl.user[property] = "";
                    }
                }

            });

        };



        MemberCtrl.editView = function(){
            MemberCtrl.user = {id: $state.params.userId};
            var user = {UserRestType: MemberCtrl.user};
            MemberService.editUser(user).then(function(user){
                console.log(user);
                for (var property in user) {
                    if (user.hasOwnProperty(property)) {
                        MemberCtrl.user[property] = "";
                        console.log(user[property]);
                    }
                }
            });
        };

        MemberCtrl.submitUserForm = function(){
            var user = {UserRestType: MemberCtrl.user};
            MemberService.createUser(user).then(function(response){
                console.log(response);
            });
        };

        switch($state.current.data.view){
            case 'new':
                MemberCtrl.createView();
                break;
            case 'edit':
                MemberCtrl.editView();
                break;
            default:
                break;
        }


    }

    MemberController.$inject = ["MemberService", '$state'];

    return MemberController;

});