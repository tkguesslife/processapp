define([], function () {

    function MemberService($http, urls) {

        var svc = {
            'createUser': createUser,
            'editUser': editUser,
            'getUserForm': getUserForm
        };

        return svc;

        function createUser(formData) {
            console.log('MemberService newUser()');
            return $http({
                method: 'POST',
                url: urls.BASE_API + '/member/create.json',
                data: $.param(formData), // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                return response;
            });
        }

        function editUser(formData) {

            return $http({
                method: 'GET',
                url: urls.BASE_API + '/member/'+formData.UserRestType.id+'/edit.json',
                data: $.param(formData), // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                return response.data.children;
            });
        }

        function getUserForm(){
            return $http.get(urls.BASE_API + '/member/create.json').then(
                function (response) {
                    return response.data.children;
                }
            );
        }

    }

    MemberService.$inject = ['$http', 'urls'];

    return MemberService;

});