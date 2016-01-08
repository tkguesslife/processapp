define([], function(){

    function Auth($http, $localStorage, urls){
        var svc = {
            signup: function (data, success, error) {
                $http.post(urls.BASE + '/signup', data).success(success).error(error)
            },
            signin: function (data, success, error) {
                $http.post(urls.BASE_API + '/login_check', data).success(success).error(error)
            },
            logout: function (success) {
                tokenClaims = {};
                delete $localStorage.token;
                delete $localStorage.currentUser;
                success();
            },
            getTokenClaims: function () {
                return getClaimsFromToken();
            },
            getCurrentUser: function(success, error){
                getClaimsFromToken();
                $http.get(urls.BASE_API+'/current_user').success(success).error(error)
            }
        };

        return svc;

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }
        var tokenClaims = getClaimsFromToken();

        function getClaimsFromToken() {

            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
                console.log("Auth getClaimsFromToken()");
            }

            return user;
        }
    }

    Auth.$inject = ['$http', '$localStorage', 'urls'];
    return Auth;

});