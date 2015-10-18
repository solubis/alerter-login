/// <reference path="../../../typings/types.d.ts" />

/*@ngInject*/ 
class LoginController {
    private loginError;

    constructor(private $scope,
                private $oauthToken,
                private $security) {

        $oauthToken.removeToken();
    }

    login(username, password) {
        this.$security.login(username, password)
            .catch((error) => {
                this.loginError = (error.data && error.data.error_description) ? error.data.error_description : 'Authentication error';
            });
    }

}

export default LoginController;
