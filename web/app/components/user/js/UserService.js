define([], function () {

    function UserService($http, urls) {

        var svc = {
            'createUser': createUser,
            'editUser': editUser,
            'list': list,
            'getUserForm': getUserForm
        };

        return svc;

        function createUser(formData) {
            console.log('UserService newUser()');
            return $http({
                method: 'POST',
                url: urls.BASE_API + '/user/create.json',
                data: $.param(formData), // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                return response;
            });
        }

        function editUser(formData) {

            return $http({
                method: 'GET',
                url: urls.BASE_API + '/user/'+formData.UserRestType.id+'/edit.json',
                data: $.param(formData), // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                return response.data.children;
            });
        }

        function getUserForm(){
            return $http.get(urls.BASE_API + '/user/create.json').then(
                function (response) {
                    return response.data.children;
                }
            );
        }

        function list() {

            console.log('UserService list');
            return $http.get(urls.BASE_API + '/user/list.json').then(
                function (response) {
                    return response.data;
                }
            );
        }

    }

    UserService.$inject = ['$http', 'urls'];

    return UserService;

});