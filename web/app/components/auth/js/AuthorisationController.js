define([], function () {

    function AuthorisationController($rootScope, $scope, $location, $localStorage, Auth) {

        function successAuth(res) {

            $localStorage.token = res.token;
            Auth.getCurrentUser(saveCurrentUser, function(){
                $rootScope.error  = 'Error saving current user'
            });
            window.location = "/";
        }

        function saveCurrentUser(currentUser){
            $localStorage.currentUser = currentUser;

        }

        $scope.signin = function () {
            var formData = {
                _username: $scope._username,
                _password: $scope._password
            };

            Auth.signin(formData, successAuth, function () {
                $rootScope.error = 'Invalid username or password.';
            })
        };

        $scope.signup = function () {
            var formData = {
                email: $scope.email,
                password: $scope.password
            };

            Auth.signup(formData, successAuth, function () {
                $rootScope.error = 'Failed to signup';
            })
        };

        $scope.logout = function () {
            Auth.logout(function () {
                window.location = "/"
            });
        };

        $scope.token = $localStorage.token;
        $scope.tokenClaims = Auth.getTokenClaims();

    }

    AuthorisationController.$inject = ['$rootScope', '$scope', '$location', '$localStorage', 'Auth'];
    return AuthorisationController;
});