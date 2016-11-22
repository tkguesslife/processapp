define([], function () {

    function AuthorisationController($rootScope, $scope, $location, $localStorage, Auth) {

        function successAuth(res) {

            $localStorage.token = res.token;
            Auth.getCurrentUser(saveCurrentUser, function(){
                $rootScope.error  = 'Error saving current user'
            });

        }

        function saveCurrentUser(currentUser){
            $localStorage.currentUser = currentUser;
            window.location = "/";
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
                password: $scope.password,
                mobileNumber:'0724055192',
                idNumber:$scope.idNumber,
                firstName:$scope.firstName,
                lastName:$scope.lastName
            };

            Auth.signin(formData, successAuth, function () {
                $rootScope.error = 'Invalid username or password.';
            });
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