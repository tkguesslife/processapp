define([], function () {

    function UserService($http, urls) {

        var svc = {
            'list': list
        };

        return svc;

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