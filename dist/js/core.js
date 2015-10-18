/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="typings/types.d.ts" />
	var security_1 = __webpack_require__(1);
	var utils_1 = __webpack_require__(7);
	angular.module('alerter.core', [security_1.default.name, utils_1.default.name]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUUzQyx5QkFBcUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNuRCxzQkFBa0IsdUJBQXVCLENBQUMsQ0FBQTtBQUUxQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLGtCQUFRLENBQUMsSUFBSSxFQUFFLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvdHlwZXMuZC50c1wiIC8+XG5cbmltcG9ydCBzZWN1cml0eSBmcm9tICcuL21vZHVsZXMvc2VjdXJpdHkvc2VjdXJpdHknO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vbW9kdWxlcy91dGlscy91dGlscyc7XG5cbmFuZ3VsYXIubW9kdWxlKCdhbGVydGVyLmNvcmUnLCBbc2VjdXJpdHkubmFtZSwgdXRpbHMubmFtZV0pO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/types.d.ts" />
	var SecurityService_1 = __webpack_require__(2);
	var OAuthTokenService_1 = __webpack_require__(3);
	var OAuthInterceptor_1 = __webpack_require__(4);
	var QueryStringService_1 = __webpack_require__(5);
	var AuthorizeDirective_1 = __webpack_require__(6);
	var utils_1 = __webpack_require__(7);
	__webpack_require__(13);
	var module = angular.module('alerter.security', [utils_1.default.name])
	    .config(function ($httpProvider, $configProvider, $securityProvider) {
	    var config = $configProvider.$get();
	    $securityProvider.configure(config);
	    $httpProvider.interceptors.push(OAuthInterceptor_1.default.factory);
	})
	    .run(function ($rootScope, $security) {
	    $rootScope.authorize = $security.authorize.bind($security);
	    $rootScope.owner = $security.owner.bind($security);
	    if ($security.isAuthenticated()) {
	        $rootScope.userLogin = $security.getUserLogin();
	        $rootScope.userFullName = $security.getUserFullName();
	    }
	})
	    .provider('$security', SecurityService_1.SecurityServiceProvider)
	    .provider('$oauthToken', OAuthTokenService_1.OAuthTokenServiceProvider)
	    .service('$queryString', QueryStringService_1.default)
	    .directive('authorize', AuthorizeDirective_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = module;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN1cml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFFakQsZ0NBQXVFLHlCQUF5QixDQUFDLENBQUE7QUFDakcsa0NBQTBDLDJCQUEyQixDQUFDLENBQUE7QUFDdEUsaUNBQTZCLDBCQUEwQixDQUFDLENBQUE7QUFDeEQsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFFNUQsc0JBQWtCLDJCQUEyQixDQUFDLENBQUE7QUFFOUMsUUFBTyxXQUFXLENBQUMsQ0FBQTtBQUVuQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBRXhELE1BQU0sQ0FBQyxVQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsaUJBQXlDO0lBQzlFLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVwQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0tBRUQsR0FBRyxDQUFDLFVBQUMsVUFBVSxFQUFFLFNBQVM7SUFDdkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxVQUFVLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsVUFBVSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUQsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUVELFFBQVEsQ0FBQyxXQUFXLEVBQUUseUNBQXVCLENBQUM7S0FFOUMsUUFBUSxDQUFDLGFBQWEsRUFBRSw2Q0FBeUIsQ0FBQztLQUVsRCxPQUFPLENBQUMsY0FBYyxFQUFFLDRCQUFrQixDQUFDO0tBRTNDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsNEJBQWtCLENBQUMsQ0FBQTtBQUUvQztrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuaW1wb3J0IHsgU2VjdXJpdHlTZXJ2aWNlUHJvdmlkZXIsIFNlY3VyaXR5U2VydmljZSwgQWNjZXNzU3RhdHVzIH0gZnJvbSAnLi9jbGFzcy9TZWN1cml0eVNlcnZpY2UnO1xuaW1wb3J0IHsgT0F1dGhUb2tlblNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4vY2xhc3MvT0F1dGhUb2tlblNlcnZpY2UnO1xuaW1wb3J0IE9BdXRoSW50ZXJjZXB0b3IgZnJvbSAnLi9jbGFzcy9PQXV0aEludGVyY2VwdG9yJztcbmltcG9ydCBRdWVyeVN0cmluZ1NlcnZpY2UgZnJvbSAnLi9jbGFzcy9RdWVyeVN0cmluZ1NlcnZpY2UnO1xuaW1wb3J0IEF1dGhvcml6ZURpcmVjdGl2ZSBmcm9tICcuL2NsYXNzL0F1dGhvcml6ZURpcmVjdGl2ZSc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi9tb2R1bGVzL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0ICdqc3JzYXNpZ24nO1xuXG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FsZXJ0ZXIuc2VjdXJpdHknLCBbdXRpbHMubmFtZV0pXG5cbiAgICAuY29uZmlnKCgkaHR0cFByb3ZpZGVyLCAkY29uZmlnUHJvdmlkZXIsICRzZWN1cml0eVByb3ZpZGVyOlNlY3VyaXR5U2VydmljZVByb3ZpZGVyKSA9PiB7XG4gICAgICAgIHZhciBjb25maWcgPSAkY29uZmlnUHJvdmlkZXIuJGdldCgpO1xuXG4gICAgICAgICRzZWN1cml0eVByb3ZpZGVyLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKE9BdXRoSW50ZXJjZXB0b3IuZmFjdG9yeSk7XG4gICAgfSlcblxuICAgIC5ydW4oKCRyb290U2NvcGUsICRzZWN1cml0eSkgPT4ge1xuICAgICAgICAkcm9vdFNjb3BlLmF1dGhvcml6ZSA9ICRzZWN1cml0eS5hdXRob3JpemUuYmluZCgkc2VjdXJpdHkpO1xuICAgICAgICAkcm9vdFNjb3BlLm93bmVyID0gJHNlY3VyaXR5Lm93bmVyLmJpbmQoJHNlY3VyaXR5KTtcblxuICAgICAgICBpZiAoJHNlY3VyaXR5LmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLnVzZXJMb2dpbiA9ICRzZWN1cml0eS5nZXRVc2VyTG9naW4oKTtcbiAgICAgICAgICAgICRyb290U2NvcGUudXNlckZ1bGxOYW1lID0gJHNlY3VyaXR5LmdldFVzZXJGdWxsTmFtZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5wcm92aWRlcignJHNlY3VyaXR5JywgU2VjdXJpdHlTZXJ2aWNlUHJvdmlkZXIpXG5cbiAgICAucHJvdmlkZXIoJyRvYXV0aFRva2VuJywgT0F1dGhUb2tlblNlcnZpY2VQcm92aWRlcilcblxuICAgIC5zZXJ2aWNlKCckcXVlcnlTdHJpbmcnLCBRdWVyeVN0cmluZ1NlcnZpY2UpXG5cbiAgICAuZGlyZWN0aXZlKCdhdXRob3JpemUnLCBBdXRob3JpemVEaXJlY3RpdmUpXG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTtcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	(function (PermissionCheckType) {
	    PermissionCheckType[PermissionCheckType["One"] = 0] = "One";
	    PermissionCheckType[PermissionCheckType["All"] = 1] = "All";
	})(exports.PermissionCheckType || (exports.PermissionCheckType = {}));
	var PermissionCheckType = exports.PermissionCheckType;
	(function (AccessStatus) {
	    AccessStatus[AccessStatus["NotAuthorised"] = 0] = "NotAuthorised";
	    AccessStatus[AccessStatus["Authorised"] = 1] = "Authorised";
	    AccessStatus[AccessStatus["LoginRequired"] = 2] = "LoginRequired";
	})(exports.AccessStatus || (exports.AccessStatus = {}));
	var AccessStatus = exports.AccessStatus;
	var LOGIN_REDIRECT_TIMEOUT = 3000;
	/*@ngInject*/
	var SecurityService = (function () {
	    function SecurityService($http, $window, $location, $timeout, $queryString, $oauthToken, Organisation, config) {
	        this.$http = $http;
	        this.$window = $window;
	        this.$location = $location;
	        this.$timeout = $timeout;
	        this.$queryString = $queryString;
	        this.$oauthToken = $oauthToken;
	        this.Organisation = Organisation;
	        this.config = config;
	        this.headers = {
	            'Content-Type': 'application/x-www-form-urlencoded',
	            'Authorization': 'Basic YWNtZTphY21lc2VjcmV0'
	        };
	        this.url = config.oauthURL && config.oauthURL.trim();
	        if (this.url && this.url.charAt(this.url.length - 1) !== '/') {
	            this.url += '/';
	        }
	    }
	    /**
	     * Returns Organisation structure
	     * @returns {promise}
	     */
	    SecurityService.prototype.getOrganisation = function () {
	        var _this = this;
	        return this.$http
	            .get(this.url + 'hierarchies')
	            .then(function (result) {
	            return new _this.Organisation(result.data, 'Hierarchies');
	        });
	    };
	    /**
	     * Verifies if the `user` is authenticated or not based on the `token`
	     * cookie.
	     *
	     * @return {boolean}
	     */
	    SecurityService.prototype.isAuthenticated = function () {
	        return !!this.$oauthToken.getToken();
	    };
	    /**
	     * Redirect to application page
	     */
	    SecurityService.prototype.redirectToApplication = function (token) {
	        var _this = this;
	        var applicationURL;
	        var createTokenURL = function (applicationURL, applicationRoute, token) {
	            var url = applicationURL + "#" + applicationRoute;
	            url += applicationRoute.indexOf('?') >= 0 ? '&' : '?';
	            url += "token=" + token;
	            return url;
	        };
	        applicationURL = this.$location.search()['redirect_url'] || this.config.applicationURL;
	        if (!applicationURL) {
	            throw new Error('No application URL in config or redirect_url param');
	        }
	        applicationURL = createTokenURL(applicationURL, this.$location.hash(), token);
	        this.$timeout(function () { return _this.$window.location.assign(applicationURL); });
	    };
	    /**
	     * Redirect to login page
	     */
	    SecurityService.prototype.redirectToLogin = function (time) {
	        var _this = this;
	        if (time === void 0) { time = LOGIN_REDIRECT_TIMEOUT; }
	        this.$timeout(function () {
	            _this.$window.location.assign(_this.config.loginURL + '#?redirect_url=' + encodeURI('' + _this.$window.location));
	        }, time);
	    };
	    /**
	     * Retrieves the `access_token`, decodes it and stores all data in local storage
	     *
	     * @param {string} username
	     * @param {string} password
	     *
	     * @return {promise} A response promise.
	     */
	    SecurityService.prototype.login = function (username, password) {
	        var _this = this;
	        var data;
	        var promise;
	        var config = {
	            headers: this.headers
	        };
	        data = angular.extend(this.config, { username: username, password: password });
	        data = this.$queryString.stringify(data);
	        promise = this.$http
	            .post(this.url + 'oauth/token', data, config)
	            .then(function (result) {
	            var token = result.data;
	            _this.redirectToApplication(token.access_token);
	        });
	        return promise;
	    };
	    /**
	     * Retrieves the profile object (authorities, user_name)
	     *
	     * @return {promise} A response promise.
	     */
	    SecurityService.prototype.decodeTokenContent = function (token) {
	        var data;
	        var config = {
	            headers: this.headers
	        };
	        data = 'token=' + token;
	        return this.$http
	            .post(this.url + 'oauth/check_token', data, config)
	            .then(function (result) { return result.data; });
	    };
	    /**
	     * Removes token and redirects to Login Page
	     */
	    SecurityService.prototype.logout = function () {
	        this.$oauthToken.removeToken();
	        this.redirectToLogin(0);
	    };
	    /**
	     * Retrieves the `refresh_token` and stores the `response.data` on local storage
	     * using the `OAuthToken`.
	     *
	     * @return {promise} A response promise.
	     */
	    SecurityService.prototype.getRefreshToken = function () {
	        var _this = this;
	        var data = {
	            grant_type: 'refresh_token',
	            refresh_token: this.$oauthToken.getRefreshToken(),
	        };
	        var config = {
	            headers: this.headers
	        };
	        data = angular.extend(this.config, data);
	        return this.$http
	            .post(this.url + 'oauth/token', this.$queryString.stringify(data), config)
	            .then(function (response) {
	            _this.$oauthToken.setToken(response.data);
	            return response;
	        });
	    };
	    /**
	     * Revokes the `token` and removes the stored `token` from cookies
	     * using the `OAuthToken`.
	     *
	     * @return {promise} A response promise.
	     */
	    SecurityService.prototype.revokeToken = function () {
	        var _this = this;
	        var data = {
	            token: this.$oauthToken.getRefreshToken() ? this.$oauthToken.getRefreshToken() : this.$oauthToken.getAccessToken()
	        };
	        data = angular.extend(this.config, data);
	        return this.$http
	            .post(this.url + 'oauth/revoke', this.$queryString.stringify(data), this.config)
	            .then(function (response) {
	            _this.$oauthToken.removeToken();
	            return response;
	        });
	    };
	    /**
	     * Returns array of current user permissions
	     *
	     * @returns {string[]}
	     */
	    SecurityService.prototype.getPermissions = function () {
	        return this.$oauthToken.getPermissions();
	    };
	    SecurityService.prototype.getUserPermissions = function () {
	        if (!this.userPermissions) {
	            var permissions = this.getPermissions();
	            this.userPermissions = permissions ? this.getPermissions().map(function (item) { return item.toLowerCase().trim(); }) : [];
	        }
	        return this.userPermissions;
	    };
	    /**
	     * Returns user name
	     *
	     * @returns {string}
	     */
	    SecurityService.prototype.getUserLogin = function () {
	        return this.$oauthToken.getUserLogin();
	    };
	    /**
	     * Returns user name
	     *
	     * @returns {string}
	     */
	    SecurityService.prototype.getUserFullName = function () {
	        return this.$oauthToken.getUserFullName();
	    };
	    /**
	     * Return Access Token
	     */
	    SecurityService.prototype.getAccessToken = function () {
	        return this.$oauthToken.getAccessToken();
	    };
	    /**
	     * State handling for UI router
	     *
	     * @param event
	     * @param toState
	     * @param loginRequiredCallback
	     * @param notAuthorisedCallback
	     */
	    SecurityService.prototype.stateChangeStart = function (event, toState, loginRequiredCallback, notAuthorisedCallback) {
	        var authorised;
	        var requiredPermissions = toState.access && toState.access.requiredPermissions;
	        var isLoginRequired = toState.access && toState.access.isLoginRequired || true;
	        var permissionCheckTypeString = toState.access && toState.access.permissionCheckType;
	        var permissionCheckType = PermissionCheckType[permissionCheckTypeString] || PermissionCheckType.All;
	        if (toState.access !== undefined) {
	            authorised = this.authorize(requiredPermissions, isLoginRequired, permissionCheckType);
	            if (authorised === AccessStatus.LoginRequired) {
	                if (angular.isFunction(loginRequiredCallback)) {
	                    loginRequiredCallback();
	                }
	                this.redirectToLogin(this.config.redirectToLoginTimeout);
	                event.preventDefault();
	            }
	            else if (authorised === AccessStatus.NotAuthorised) {
	                if (angular.isFunction(notAuthorisedCallback)) {
	                    notAuthorisedCallback();
	                }
	                event.preventDefault();
	            }
	        }
	    };
	    /**
	     * Method for checking user permissions
	     *
	     * @param {string, string[]} requiredPermissions
	     * @param {boolean} isLoginRequired
	     * @param {PermissionCheckType} permissionCheckType - all permissions (All) or one of them (One)
	     * @returns {AccessStatus}
	     */
	    SecurityService.prototype.authorize = function (requiredPermissions, isLoginRequired, permissionCheckType) {
	        if (isLoginRequired === void 0) { isLoginRequired = true; }
	        if (permissionCheckType === void 0) { permissionCheckType = PermissionCheckType.One; }
	        var user = this.getUserLogin();
	        var userPermissions = this.getUserPermissions();
	        var length;
	        var hasPermission = true;
	        var permission;
	        var i;
	        /*
	         Login required but no user logged in
	         */
	        if (isLoginRequired === true && !user) {
	            return AccessStatus.LoginRequired;
	        }
	        /*
	         Login required, user logged in but no permissions required
	         */
	        requiredPermissions = angular.isArray(requiredPermissions) ? requiredPermissions : [requiredPermissions];
	        if ((isLoginRequired === true && user) && (requiredPermissions === undefined || requiredPermissions.length === 0)) {
	            return AccessStatus.Authorised;
	        }
	        length = requiredPermissions.length;
	        /*
	         Permission required
	         */
	        if (requiredPermissions && userPermissions) {
	            for (i = 0; i < length; i++) {
	                permission = requiredPermissions[i].toLowerCase().trim();
	                if (permissionCheckType === PermissionCheckType.All) {
	                    hasPermission = hasPermission && userPermissions.indexOf(permission) > -1;
	                    /*
	                     if all the permissions are required and hasPermission is false there is no point carrying on
	                     */
	                    if (hasPermission === false) {
	                        break;
	                    }
	                }
	                else if (permissionCheckType === PermissionCheckType.One) {
	                    hasPermission = userPermissions.indexOf(permission) > -1;
	                    /*
	                     if we only need one of the permissions and we have it there is no point carrying on
	                     */
	                    if (hasPermission) {
	                        break;
	                    }
	                }
	            }
	            return hasPermission ? AccessStatus.Authorised : AccessStatus.NotAuthorised;
	        }
	    };
	    /**
	     * Check if passed user is current user
	     */
	    SecurityService.prototype.owner = function (userName) {
	        return userName === this.getUserLogin();
	    };
	    return SecurityService;
	})();
	exports.SecurityService = SecurityService;
	var SecurityServiceProvider = (function () {
	    function SecurityServiceProvider() {
	        this.config = {
	            'grant_type': 'password',
	            'client_id': 'acme',
	            'scope': 'openid'
	        };
	    }
	    /**
	     * Configure.
	     *
	     * @param {object} params - An `object` of params to extend.
	     */
	    SecurityServiceProvider.prototype.configure = function (params) {
	        if (!(params instanceof Object)) {
	            throw new TypeError('Invalid argument: `config` must be an `Object`.');
	        }
	        angular.extend(this.config, params);
	        return this;
	    };
	    /*@ngInject*/
	    SecurityServiceProvider.prototype.$get = function ($http, $window, $location, $timeout, $queryString, $oauthToken, Organisation) {
	        return new SecurityService($http, $window, $location, $timeout, $queryString, $oauthToken, Organisation, this.config);
	    };
	    return SecurityServiceProvider;
	})();
	exports.SecurityServiceProvider = SecurityServiceProvider;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SecurityService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHlTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VjdXJpdHlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlBlcm1pc3Npb25DaGVja1R5cGUiLCJBY2Nlc3NTdGF0dXMiLCJTZWN1cml0eVNlcnZpY2UiLCJTZWN1cml0eVNlcnZpY2UuY29uc3RydWN0b3IiLCJTZWN1cml0eVNlcnZpY2UuZ2V0T3JnYW5pc2F0aW9uIiwiU2VjdXJpdHlTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCIsIlNlY3VyaXR5U2VydmljZS5yZWRpcmVjdFRvQXBwbGljYXRpb24iLCJTZWN1cml0eVNlcnZpY2UucmVkaXJlY3RUb0xvZ2luIiwiU2VjdXJpdHlTZXJ2aWNlLmxvZ2luIiwiU2VjdXJpdHlTZXJ2aWNlLmRlY29kZVRva2VuQ29udGVudCIsIlNlY3VyaXR5U2VydmljZS5sb2dvdXQiLCJTZWN1cml0eVNlcnZpY2UuZ2V0UmVmcmVzaFRva2VuIiwiU2VjdXJpdHlTZXJ2aWNlLnJldm9rZVRva2VuIiwiU2VjdXJpdHlTZXJ2aWNlLmdldFBlcm1pc3Npb25zIiwiU2VjdXJpdHlTZXJ2aWNlLmdldFVzZXJQZXJtaXNzaW9ucyIsIlNlY3VyaXR5U2VydmljZS5nZXRVc2VyTG9naW4iLCJTZWN1cml0eVNlcnZpY2UuZ2V0VXNlckZ1bGxOYW1lIiwiU2VjdXJpdHlTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuIiwiU2VjdXJpdHlTZXJ2aWNlLnN0YXRlQ2hhbmdlU3RhcnQiLCJTZWN1cml0eVNlcnZpY2UuYXV0aG9yaXplIiwiU2VjdXJpdHlTZXJ2aWNlLm93bmVyIiwiU2VjdXJpdHlTZXJ2aWNlUHJvdmlkZXIiLCJTZWN1cml0eVNlcnZpY2VQcm92aWRlci5jb25zdHJ1Y3RvciIsIlNlY3VyaXR5U2VydmljZVByb3ZpZGVyLmNvbmZpZ3VyZSIsIlNlY3VyaXR5U2VydmljZVByb3ZpZGVyLiRnZXQiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUtwRCxXQUFZLG1C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QSxFQUFFQSxZQUFZQSxFQUFFQSxXQUFXQSxFQUFFQSxZQUFZQTtRQUM3RUcsTUFBTUEsQ0FBQ0EsSUFBSUEsZUFBZUEsQ0FBQ0EsS0FBS0EsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsUUFBUUEsRUFBRUEsWUFBWUEsRUFBRUEsV0FBV0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7SUFDekhBLENBQUNBO0lBQ0xILDhCQUFDQTtBQUFEQSxDQUFDQSxBQTFCRCxJQTBCQztBQTFCWSwrQkFBdUIsMEJBMEJuQyxDQUFBO0FBRUQ7a0JBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHlwZXMuZC50c1wiIC8+XG5cbmltcG9ydCBRdWVyeVN0cmluZ1NlcnZpY2UgZnJvbSAnLi9RdWVyeVN0cmluZ1NlcnZpY2UnO1xuaW1wb3J0IE9BdXRoVG9rZW5TZXJ2aWNlIGZyb20gJy4vT0F1dGhUb2tlblNlcnZpY2UnO1xuXG5leHBvcnQgZW51bSBQZXJtaXNzaW9uQ2hlY2tUeXBlIHsgT25lLCBBbGwgfVxuZXhwb3J0IGVudW0gQWNjZXNzU3RhdHVzIHsgTm90QXV0aG9yaXNlZCwgQXV0aG9yaXNlZCwgTG9naW5SZXF1aXJlZCB9XG5cbmNvbnN0IExPR0lOX1JFRElSRUNUX1RJTUVPVVQgPSAzMDAwO1xuXG4vKkBuZ0luamVjdCovXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHVzZXJQZXJtaXNzaW9uczogYW55W107XG5cbiAgICBwcml2YXRlIGhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWVdOdFpUcGhZMjFsYzJWamNtVjAnXG4gICAgfTtcblxuICAgIHByaXZhdGUgdXJsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSAkd2luZG93OiBuZy5JV2luZG93U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSAkbG9jYXRpb246IG5nLklMb2NhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHRpbWVvdXQ6IG5nLklUaW1lb3V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSAkcXVlcnlTdHJpbmc6IFF1ZXJ5U3RyaW5nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSAkb2F1dGhUb2tlbjogT0F1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgT3JnYW5pc2F0aW9uOiBhbnksXG4gICAgICAgIHByaXZhdGUgY29uZmlnOiBhbnkpIHtcblxuICAgICAgICB0aGlzLnVybCA9IGNvbmZpZy5vYXV0aFVSTCAmJiBjb25maWcub2F1dGhVUkwudHJpbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnVybCAmJiB0aGlzLnVybC5jaGFyQXQodGhpcy51cmwubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy51cmwgKz0gJy8nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBPcmdhbmlzYXRpb24gc3RydWN0dXJlXG4gICAgICogQHJldHVybnMge3Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0T3JnYW5pc2F0aW9uKCk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cFxuICAgICAgICAgICAgLmdldCh0aGlzLnVybCArICdoaWVyYXJjaGllcycpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLk9yZ2FuaXNhdGlvbihyZXN1bHQuZGF0YSwgJ0hpZXJhcmNoaWVzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJpZmllcyBpZiB0aGUgYHVzZXJgIGlzIGF1dGhlbnRpY2F0ZWQgb3Igbm90IGJhc2VkIG9uIHRoZSBgdG9rZW5gXG4gICAgICogY29va2llLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuJG9hdXRoVG9rZW4uZ2V0VG9rZW4oKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIGFwcGxpY2F0aW9uIHBhZ2VcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvQXBwbGljYXRpb24odG9rZW4pIHtcbiAgICAgICAgdmFyIGFwcGxpY2F0aW9uVVJMO1xuICAgICAgICB2YXIgY3JlYXRlVG9rZW5VUkwgPSAoYXBwbGljYXRpb25VUkwsIGFwcGxpY2F0aW9uUm91dGUsIHRva2VuKSA9PiB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYCR7YXBwbGljYXRpb25VUkx9IyR7YXBwbGljYXRpb25Sb3V0ZX1gO1xuXG4gICAgICAgICAgICB1cmwgKz0gYXBwbGljYXRpb25Sb3V0ZS5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JztcbiAgICAgICAgICAgIHVybCArPSBgdG9rZW49JHt0b2tlbn1gO1xuXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwbGljYXRpb25VUkwgPSB0aGlzLiRsb2NhdGlvbi5zZWFyY2goKVsncmVkaXJlY3RfdXJsJ10gfHwgdGhpcy5jb25maWcuYXBwbGljYXRpb25VUkw7XG5cbiAgICAgICAgaWYgKCFhcHBsaWNhdGlvblVSTCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhcHBsaWNhdGlvbiBVUkwgaW4gY29uZmlnIG9yIHJlZGlyZWN0X3VybCBwYXJhbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwbGljYXRpb25VUkwgPSBjcmVhdGVUb2tlblVSTChhcHBsaWNhdGlvblVSTCwgdGhpcy4kbG9jYXRpb24uaGFzaCgpLCB0b2tlbik7XG5cbiAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB0aGlzLiR3aW5kb3cubG9jYXRpb24uYXNzaWduKGFwcGxpY2F0aW9uVVJMKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gbG9naW4gcGFnZVxuICAgICAqL1xuICAgIHJlZGlyZWN0VG9Mb2dpbih0aW1lID0gTE9HSU5fUkVESVJFQ1RfVElNRU9VVCkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5jb25maWcubG9naW5VUkwgKyAnIz9yZWRpcmVjdF91cmw9JyArIGVuY29kZVVSSSgnJyArIHRoaXMuJHdpbmRvdy5sb2NhdGlvbikpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGBhY2Nlc3NfdG9rZW5gLCBkZWNvZGVzIGl0IGFuZCBzdG9yZXMgYWxsIGRhdGEgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtwcm9taXNlfSBBIHJlc3BvbnNlIHByb21pc2UuXG4gICAgICovXG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICB2YXIgcHJvbWlzZTtcblxuICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IGFuZ3VsYXIuZXh0ZW5kKHRoaXMuY29uZmlnLCB7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuICAgICAgICBkYXRhID0gdGhpcy4kcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICAgIHByb21pc2UgPSB0aGlzLiRodHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLnVybCArICdvYXV0aC90b2tlbicsIGRhdGEsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW46IGFueSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvQXBwbGljYXRpb24odG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgcHJvZmlsZSBvYmplY3QgKGF1dGhvcml0aWVzLCB1c2VyX25hbWUpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtwcm9taXNlfSBBIHJlc3BvbnNlIHByb21pc2UuXG4gICAgICovXG4gICAgZGVjb2RlVG9rZW5Db250ZW50KHRva2VuKSB7XG4gICAgICAgIHZhciBkYXRhO1xuXG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcbiAgICAgICAgfTtcblxuICAgICAgICBkYXRhID0gJ3Rva2VuPScgKyB0b2tlbjtcblxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cFxuICAgICAgICAgICAgLnBvc3QodGhpcy51cmwgKyAnb2F1dGgvY2hlY2tfdG9rZW4nLCBkYXRhLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0b2tlbiBhbmQgcmVkaXJlY3RzIHRvIExvZ2luIFBhZ2VcbiAgICAgKi9cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuJG9hdXRoVG9rZW4ucmVtb3ZlVG9rZW4oKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFRvTG9naW4oMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBgcmVmcmVzaF90b2tlbmAgYW5kIHN0b3JlcyB0aGUgYHJlc3BvbnNlLmRhdGFgIG9uIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiB1c2luZyB0aGUgYE9BdXRoVG9rZW5gLlxuICAgICAqXG4gICAgICogQHJldHVybiB7cHJvbWlzZX0gQSByZXNwb25zZSBwcm9taXNlLlxuICAgICAqL1xuICAgIGdldFJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLiRvYXV0aFRva2VuLmdldFJlZnJlc2hUb2tlbigpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcbiAgICAgICAgfTtcblxuICAgICAgICBkYXRhID0gYW5ndWxhci5leHRlbmQodGhpcy5jb25maWcsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLnVybCArICdvYXV0aC90b2tlbicsIHRoaXMuJHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb2F1dGhUb2tlbi5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldm9rZXMgdGhlIGB0b2tlbmAgYW5kIHJlbW92ZXMgdGhlIHN0b3JlZCBgdG9rZW5gIGZyb20gY29va2llc1xuICAgICAqIHVzaW5nIHRoZSBgT0F1dGhUb2tlbmAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtwcm9taXNlfSBBIHJlc3BvbnNlIHByb21pc2UuXG4gICAgICovXG4gICAgcmV2b2tlVG9rZW4oKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgdG9rZW46IHRoaXMuJG9hdXRoVG9rZW4uZ2V0UmVmcmVzaFRva2VuKCkgPyB0aGlzLiRvYXV0aFRva2VuLmdldFJlZnJlc2hUb2tlbigpIDogdGhpcy4kb2F1dGhUb2tlbi5nZXRBY2Nlc3NUb2tlbigpXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YSA9IGFuZ3VsYXIuZXh0ZW5kKHRoaXMuY29uZmlnLCBkYXRhKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cFxuICAgICAgICAgICAgLnBvc3QodGhpcy51cmwgKyAnb2F1dGgvcmV2b2tlJywgdGhpcy4kcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGRhdGEpLCB0aGlzLmNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG9hdXRoVG9rZW4ucmVtb3ZlVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYXJyYXkgb2YgY3VycmVudCB1c2VyIHBlcm1pc3Npb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0UGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2F1dGhUb2tlbi5nZXRQZXJtaXNzaW9ucygpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlclBlcm1pc3Npb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICBsZXQgcGVybWlzc2lvbnMgPSB0aGlzLmdldFBlcm1pc3Npb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXNlclBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMgPyB0aGlzLmdldFBlcm1pc3Npb25zKCkubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0udG9Mb3dlckNhc2UoKS50cmltKCkpIDogW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUGVybWlzc2lvbnM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHVzZXIgbmFtZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVc2VyTG9naW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9hdXRoVG9rZW4uZ2V0VXNlckxvZ2luKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB1c2VyIG5hbWVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VXNlckZ1bGxOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvYXV0aFRva2VuLmdldFVzZXJGdWxsTmFtZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBBY2Nlc3MgVG9rZW5cbiAgICAgKi9cbiAgICBnZXRBY2Nlc3NUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2F1dGhUb2tlbi5nZXRBY2Nlc3NUb2tlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXRlIGhhbmRsaW5nIGZvciBVSSByb3V0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSB0b1N0YXRlXG4gICAgICogQHBhcmFtIGxvZ2luUmVxdWlyZWRDYWxsYmFja1xuICAgICAqIEBwYXJhbSBub3RBdXRob3Jpc2VkQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdGF0ZUNoYW5nZVN0YXJ0KGV2ZW50LCB0b1N0YXRlLCBsb2dpblJlcXVpcmVkQ2FsbGJhY2ssIG5vdEF1dGhvcmlzZWRDYWxsYmFjaykge1xuICAgICAgICB2YXIgYXV0aG9yaXNlZDogQWNjZXNzU3RhdHVzO1xuICAgICAgICB2YXIgcmVxdWlyZWRQZXJtaXNzaW9ucyA9IHRvU3RhdGUuYWNjZXNzICYmIHRvU3RhdGUuYWNjZXNzLnJlcXVpcmVkUGVybWlzc2lvbnM7XG4gICAgICAgIHZhciBpc0xvZ2luUmVxdWlyZWQgPSB0b1N0YXRlLmFjY2VzcyAmJiB0b1N0YXRlLmFjY2Vzcy5pc0xvZ2luUmVxdWlyZWQgfHwgdHJ1ZTtcbiAgICAgICAgdmFyIHBlcm1pc3Npb25DaGVja1R5cGVTdHJpbmc6IHN0cmluZyA9IHRvU3RhdGUuYWNjZXNzICYmIHRvU3RhdGUuYWNjZXNzLnBlcm1pc3Npb25DaGVja1R5cGU7XG4gICAgICAgIHZhciBwZXJtaXNzaW9uQ2hlY2tUeXBlOiBQZXJtaXNzaW9uQ2hlY2tUeXBlID0gUGVybWlzc2lvbkNoZWNrVHlwZVtwZXJtaXNzaW9uQ2hlY2tUeXBlU3RyaW5nXSB8fCBQZXJtaXNzaW9uQ2hlY2tUeXBlLkFsbDtcblxuICAgICAgICBpZiAodG9TdGF0ZS5hY2Nlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXV0aG9yaXNlZCA9IHRoaXMuYXV0aG9yaXplKHJlcXVpcmVkUGVybWlzc2lvbnMsIGlzTG9naW5SZXF1aXJlZCwgcGVybWlzc2lvbkNoZWNrVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChhdXRob3Jpc2VkID09PSBBY2Nlc3NTdGF0dXMuTG9naW5SZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24obG9naW5SZXF1aXJlZENhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dpblJlcXVpcmVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvTG9naW4odGhpcy5jb25maWcucmVkaXJlY3RUb0xvZ2luVGltZW91dCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXV0aG9yaXNlZCA9PT0gQWNjZXNzU3RhdHVzLk5vdEF1dGhvcmlzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKG5vdEF1dGhvcmlzZWRDYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90QXV0aG9yaXNlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgZm9yIGNoZWNraW5nIHVzZXIgcGVybWlzc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nLCBzdHJpbmdbXX0gcmVxdWlyZWRQZXJtaXNzaW9uc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMb2dpblJlcXVpcmVkXG4gICAgICogQHBhcmFtIHtQZXJtaXNzaW9uQ2hlY2tUeXBlfSBwZXJtaXNzaW9uQ2hlY2tUeXBlIC0gYWxsIHBlcm1pc3Npb25zIChBbGwpIG9yIG9uZSBvZiB0aGVtIChPbmUpXG4gICAgICogQHJldHVybnMge0FjY2Vzc1N0YXR1c31cbiAgICAgKi9cbiAgICBhdXRob3JpemUoXG4gICAgICAgIHJlcXVpcmVkUGVybWlzc2lvbnM6IGFueSxcbiAgICAgICAgaXNMb2dpblJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgcGVybWlzc2lvbkNoZWNrVHlwZTogUGVybWlzc2lvbkNoZWNrVHlwZSA9IFBlcm1pc3Npb25DaGVja1R5cGUuT25lKTogQWNjZXNzU3RhdHVzIHtcblxuICAgICAgICB2YXIgdXNlciA9IHRoaXMuZ2V0VXNlckxvZ2luKCk7XG4gICAgICAgIHZhciB1c2VyUGVybWlzc2lvbnMgPSB0aGlzLmdldFVzZXJQZXJtaXNzaW9ucygpO1xuICAgICAgICB2YXIgbGVuZ3RoO1xuICAgICAgICB2YXIgaGFzUGVybWlzc2lvbjogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIHZhciBwZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgICAgIHZhciBpOiBudW1iZXI7XG5cbiAgICAgICAgLypcbiAgICAgICAgIExvZ2luIHJlcXVpcmVkIGJ1dCBubyB1c2VyIGxvZ2dlZCBpblxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlzTG9naW5SZXF1aXJlZCA9PT0gdHJ1ZSAmJiAhdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc1N0YXR1cy5Mb2dpblJlcXVpcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgIExvZ2luIHJlcXVpcmVkLCB1c2VyIGxvZ2dlZCBpbiBidXQgbm8gcGVybWlzc2lvbnMgcmVxdWlyZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmVkUGVybWlzc2lvbnMgPSBhbmd1bGFyLmlzQXJyYXkocmVxdWlyZWRQZXJtaXNzaW9ucykgPyByZXF1aXJlZFBlcm1pc3Npb25zIDogW3JlcXVpcmVkUGVybWlzc2lvbnNdO1xuXG4gICAgICAgIGlmICgoaXNMb2dpblJlcXVpcmVkID09PSB0cnVlICYmIHVzZXIpICYmIChyZXF1aXJlZFBlcm1pc3Npb25zID09PSB1bmRlZmluZWQgfHwgcmVxdWlyZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gQWNjZXNzU3RhdHVzLkF1dGhvcmlzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZW5ndGggPSByZXF1aXJlZFBlcm1pc3Npb25zLmxlbmd0aDtcblxuICAgICAgICAvKlxuICAgICAgICAgUGVybWlzc2lvbiByZXF1aXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHJlcXVpcmVkUGVybWlzc2lvbnMgJiYgdXNlclBlcm1pc3Npb25zKSB7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb24gPSByZXF1aXJlZFBlcm1pc3Npb25zW2ldLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25DaGVja1R5cGUgPT09IFBlcm1pc3Npb25DaGVja1R5cGUuQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1Blcm1pc3Npb24gPSBoYXNQZXJtaXNzaW9uICYmIHVzZXJQZXJtaXNzaW9ucy5pbmRleE9mKHBlcm1pc3Npb24pID4gLTE7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICBpZiBhbGwgdGhlIHBlcm1pc3Npb25zIGFyZSByZXF1aXJlZCBhbmQgaGFzUGVybWlzc2lvbiBpcyBmYWxzZSB0aGVyZSBpcyBubyBwb2ludCBjYXJyeWluZyBvblxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVybWlzc2lvbkNoZWNrVHlwZSA9PT0gUGVybWlzc2lvbkNoZWNrVHlwZS5PbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9ucy5pbmRleE9mKHBlcm1pc3Npb24pID4gLTE7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICBpZiB3ZSBvbmx5IG5lZWQgb25lIG9mIHRoZSBwZXJtaXNzaW9ucyBhbmQgd2UgaGF2ZSBpdCB0aGVyZSBpcyBubyBwb2ludCBjYXJyeWluZyBvblxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFzUGVybWlzc2lvbiA/IEFjY2Vzc1N0YXR1cy5BdXRob3Jpc2VkIDogQWNjZXNzU3RhdHVzLk5vdEF1dGhvcmlzZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBwYXNzZWQgdXNlciBpcyBjdXJyZW50IHVzZXJcbiAgICAgKi9cbiAgICBvd25lcih1c2VyTmFtZSkge1xuICAgICAgICByZXR1cm4gdXNlck5hbWUgPT09IHRoaXMuZ2V0VXNlckxvZ2luKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlTZXJ2aWNlUHJvdmlkZXIgaW1wbGVtZW50cyBuZy5JU2VydmljZVByb3ZpZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZyA9IHtcbiAgICAgICAgJ2dyYW50X3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAnY2xpZW50X2lkJzogJ2FjbWUnLFxuICAgICAgICAnc2NvcGUnOiAnb3BlbmlkJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gQW4gYG9iamVjdGAgb2YgcGFyYW1zIHRvIGV4dGVuZC5cbiAgICAgKi9cbiAgICBjb25maWd1cmUocGFyYW1zKSB7XG4gICAgICAgIGlmICghKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQ6IGBjb25maWdgIG11c3QgYmUgYW4gYE9iamVjdGAuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLmNvbmZpZywgcGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgJGdldCgkaHR0cCwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgJHF1ZXJ5U3RyaW5nLCAkb2F1dGhUb2tlbiwgT3JnYW5pc2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VjdXJpdHlTZXJ2aWNlKCRodHRwLCAkd2luZG93LCAkbG9jYXRpb24sICR0aW1lb3V0LCAkcXVlcnlTdHJpbmcsICRvYXV0aFRva2VuLCBPcmdhbmlzYXRpb24sIHRoaXMuY29uZmlnKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlTZXJ2aWNlO1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/*@ngInject*/
	var OAuthTokenService = (function () {
	    function OAuthTokenService($location, $window, $settings, config) {
	        this.$location = $location;
	        this.$window = $window;
	        this.$settings = $settings;
	        this.config = config;
	    }
	    /**
	     * Set token.
	     *
	     *  @params {object} - Access token
	     */
	    OAuthTokenService.prototype.setToken = function (data) {
	        this.$settings.set(this.config.name, data);
	    };
	    /**
	     * Get token.
	     *
	     *  @returns {object} - Access token
	     */
	    OAuthTokenService.prototype.getToken = function () {
	        this.restoreTokenFromURL();
	        return this.$settings.get(this.config.name);
	    };
	    /**
	     * Get accessToken.
	     *
	     * @returns {string} - Access token
	     */
	    OAuthTokenService.prototype.getAccessToken = function () {
	        return this.getToken() ? this.getToken().access_token : undefined;
	    };
	    /**
	     * Get authorization Header.
	     *
	     * @returns {string} - 'Authorization' Header e.g 'Bearer XXX'
	     */
	    OAuthTokenService.prototype.getAuthorizationHeader = function () {
	        if (!(this.getTokenType() && this.getAccessToken())) {
	            return;
	        }
	        return this.getTokenType().charAt(0).toUpperCase() + this.getTokenType().substr(1) + ' ' + this.getAccessToken();
	    };
	    /**
	     * Get refresh Token.
	     *
	     * @returns {string} - 'Refresh token
	     */
	    OAuthTokenService.prototype.getRefreshToken = function () {
	        return this.getToken() ? this.getToken().refresh_token : undefined;
	    };
	    /**
	     * Get tokenType.
	     *
	     * @returns {string} - Token type e.g. 'bearer', 'refresh'
	     */
	    OAuthTokenService.prototype.getTokenType = function () {
	        return this.getToken() ? this.getToken().token_type : undefined;
	    };
	    OAuthTokenService.prototype.restoreTokenFromURL = function () {
	        var accessToken;
	        var content;
	        accessToken = this.$location.search()['token'];
	        if (accessToken && this.verifyTokenSignature(accessToken)) {
	            this.$location.search('token', null);
	            content = this.decodeToken(accessToken);
	            this.setToken({
	                access_token: accessToken,
	                token_type: 'bearer',
	                content: content
	            });
	        }
	    };
	    OAuthTokenService.prototype.verifyTokenSignature = function (token) {
	        var result = false;
	        var publicKey = this.config.publicKey;
	        try {
	            result = KJUR.jws.JWS.verify(token, publicKey, ["RS256"]);
	        }
	        catch (ex) {
	            console.error("OAuth Token Service Error: " + ex);
	            result = false;
	        }
	        if (result == true) {
	            console.log('Token Signature Valid');
	        }
	        else {
	            console.log('Token Signature Not Valid');
	        }
	        return result;
	    };
	    OAuthTokenService.prototype.urlBase64Decode = function (str) {
	        var output = str.replace(/-/g, '+').replace(/_/g, '/');
	        switch (output.length % 4) {
	            case 0:
	                {
	                    break;
	                }
	            case 2:
	                {
	                    output += '==';
	                    break;
	                }
	            case 3:
	                {
	                    output += '=';
	                    break;
	                }
	            default:
	                {
	                    throw 'Illegal base64url string!';
	                }
	        }
	        return this.$window.decodeURIComponent(this.$window.encodeURIComponent(this.$window.atob(output)));
	    };
	    OAuthTokenService.prototype.decodeToken = function (token) {
	        var parts = token.split('.');
	        if (parts.length !== 3) {
	            throw new Error('JWT must have 3 parts');
	        }
	        var decoded = this.urlBase64Decode(parts[1]);
	        if (!decoded) {
	            throw new Error('Cannot decode the token');
	        }
	        return JSON.parse(decoded);
	    };
	    OAuthTokenService.prototype.getTokenExpirationDate = function (token) {
	        var decoded;
	        decoded = this.decodeToken(token);
	        if (typeof decoded.exp === "undefined") {
	            return null;
	        }
	        var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
	        d.setUTCSeconds(decoded.exp);
	        return d;
	    };
	    OAuthTokenService.prototype.isTokenExpired = function (token, offsetSeconds) {
	        var d = this.getTokenExpirationDate(token);
	        offsetSeconds = offsetSeconds || 0;
	        if (d === null) {
	            return false;
	        }
	        return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
	    };
	    /**
	     * Remove token.
	     */
	    OAuthTokenService.prototype.removeToken = function () {
	        this.$settings.set(this.config.name);
	    };
	    OAuthTokenService.prototype.setContent = function (tokenContent) {
	        this.$settings.set(this.config.name);
	    };
	    OAuthTokenService.prototype.getContent = function () {
	        var token = this.getToken();
	        return token && token.content ? token.content : undefined;
	    };
	    OAuthTokenService.prototype.getUserLogin = function () {
	        var content = this.getContent();
	        return content && content.user_name ? content.user_name : undefined;
	    };
	    OAuthTokenService.prototype.getUserFullName = function () {
	        var content = this.getContent();
	        return content && content.full_name ? content.full_name : undefined;
	    };
	    OAuthTokenService.prototype.getPermissions = function () {
	        var content = this.getContent();
	        return content && content.authorities ? content.authorities : undefined;
	    };
	    return OAuthTokenService;
	})();
	exports.OAuthTokenService = OAuthTokenService;
	var OAuthTokenServiceProvider = (function () {
	    function OAuthTokenServiceProvider() {
	        this.config = {
	            name: 'token'
	        };
	    }
	    /**
	     * Configure.
	     *
	     * @param {object} params - An `object` of params to extend.
	     */
	    OAuthTokenServiceProvider.prototype.configure = function (params) {
	        if (!(params instanceof Object)) {
	            throw new TypeError('Invalid argument: `config` must be an `Object`.');
	        }
	        angular.extend(this.config, params);
	        return this;
	    };
	    /*@ngInject*/
	    OAuthTokenServiceProvider.prototype.$get = function ($location, $window, $settings) {
	        return new OAuthTokenService($location, $window, $settings, this.config);
	    };
	    return OAuthTokenServiceProvider;
	})();
	exports.OAuthTokenServiceProvider = OAuthTokenServiceProvider;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OAuthTokenService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhUb2tlblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPQXV0aFRva2VuU2VydmljZS50cyJdLCJuYW1lcyI6WyJPQXV0aFRva2VuU2VydmljZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiT0F1dGhUb2tlblNlcnZpY2Uuc2V0VG9rZW4iLCJPQXV0aFRva2VuU2VydmljZS5nZXRUb2tlbiIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldEFjY2Vzc1Rva2VuIiwiT0F1dGhUb2tlblNlcnZpY2UuZ2V0QXV0aG9yaXphdGlvbkhlYWRlciIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldFJlZnJlc2hUb2tlbiIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldFRva2VuVHlwZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLnJlc3RvcmVUb2tlbkZyb21VUkwiLCJPQXV0aFRva2VuU2VydmljZS52ZXJpZnlUb2tlblNpZ25hdHVyZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLnVybEJhc2U2NERlY29kZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLmRlY29kZVRva2VuIiwiT0F1dGhUb2tlblNlcnZpY2UuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLmlzVG9rZW5FeHBpcmVkIiwiT0F1dGhUb2tlblNlcnZpY2UucmVtb3ZlVG9rZW4iLCJPQXV0aFRva2VuU2VydmljZS5zZXRDb250ZW50IiwiT0F1dGhUb2tlblNlcnZpY2UuZ2V0Q29udGVudCIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldFVzZXJMb2dpbiIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldFVzZXJGdWxsTmFtZSIsIk9BdXRoVG9rZW5TZXJ2aWNlLmdldFBlcm1pc3Npb25zIiwiT0F1dGhUb2tlblNlcnZpY2VQcm92aWRlciIsIk9BdXRoVG9rZW5TZXJ2aWNlUHJvdmlkZXIuY29uc3RydWN0b3IiLCJPQXV0aFRva2VuU2VydmljZVByb3ZpZGVyLmNvbmZpZ3VyZSIsIk9BdXRoVG9rZW5TZXJ2aWNlUHJvdmlkZXIuJGdldCJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBSXBELGFBQWE7QUFDYjtJQUVJQSwyQkFBb0JBLFNBQVNBLEVBQ2pCQSxPQUFPQSxFQUNQQSxTQUFTQSxFQUNUQSxNQUFNQTtRQUhFQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFBQTtRQUNqQkEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBQUE7UUFDUEEsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBQUE7UUFDVEEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBQUE7SUFDbEJBLENBQUNBO0lBRUREOzs7O09BSUdBO0lBRUhBLG9DQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtRQUNURSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMvQ0EsQ0FBQ0E7SUFFREY7Ozs7T0FJR0E7SUFFSEEsb0NBQVFBLEdBQVJBO1FBQ0lHLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUVESDs7OztPQUlHQTtJQUVIQSwwQ0FBY0EsR0FBZEE7UUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsWUFBWUEsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDdEVBLENBQUNBO0lBRURKOzs7O09BSUdBO0lBRUhBLGtEQUFzQkEsR0FBdEJBO1FBQ0lLLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xEQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtJQUNySEEsQ0FBQ0E7SUFFREw7Ozs7T0FJR0E7SUFFSEEsMkNBQWVBLEdBQWZBO1FBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBO0lBQ3ZFQSxDQUFDQTtJQUVETjs7OztPQUlHQTtJQUVIQSx3Q0FBWUEsR0FBWkE7UUFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDcEVBLENBQUNBO0lBRURQLCtDQUFtQkEsR0FBbkJBO1FBQ0lRLElBQUlBLFdBQW1CQSxDQUFDQTtRQUN4QkEsSUFBSUEsT0FBZUEsQ0FBQ0E7UUFFcEJBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBRS9DQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNyQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUNWQSxZQUFZQSxFQUFFQSxXQUFXQTtnQkFDekJBLFVBQVVBLEVBQUVBLFFBQVFBO2dCQUNwQkEsT0FBT0EsRUFBRUEsT0FBT0E7YUFDbkJBLENBQUNBLENBQUFBO1FBQ05BLENBQUNBO0lBQ0xBLENBQUNBO0lBRURSLGdEQUFvQkEsR0FBcEJBLFVBQXFCQSxLQUFLQTtRQUN0QlMsSUFBSUEsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1FBRXRDQSxJQUFJQSxDQUFDQTtZQUNEQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5REEsQ0FBRUE7UUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsNkJBQTZCQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNsREEsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx1QkFBdUJBLENBQUNBLENBQUNBO1FBQ3pDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwyQkFBMkJBLENBQUNBLENBQUNBO1FBQzdDQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUFFRFQsMkNBQWVBLEdBQWZBLFVBQWdCQSxHQUFHQTtRQUNmVSxJQUFJQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN2REEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLEtBQUtBLENBQUNBO2dCQUNGQSxDQUFDQTtvQkFDR0EsS0FBS0EsQ0FBQ0E7Z0JBQ1ZBLENBQUNBO1lBQ0xBLEtBQUtBLENBQUNBO2dCQUNGQSxDQUFDQTtvQkFDR0EsTUFBTUEsSUFBSUEsSUFBSUEsQ0FBQ0E7b0JBQ2ZBLEtBQUtBLENBQUNBO2dCQUNWQSxDQUFDQTtZQUNMQSxLQUFLQSxDQUFDQTtnQkFDRkEsQ0FBQ0E7b0JBQ0dBLE1BQU1BLElBQUlBLEdBQUdBLENBQUNBO29CQUNkQSxLQUFLQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7WUFDTEE7Z0JBQ0lBLENBQUNBO29CQUNHQSxNQUFNQSwyQkFBMkJBLENBQUNBO2dCQUN0Q0EsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3ZHQSxDQUFDQTtJQUVEVix1Q0FBV0EsR0FBWEEsVUFBWUEsS0FBS0E7UUFDYlcsSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFN0JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JCQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSx1QkFBdUJBLENBQUNBLENBQUNBO1FBQzdDQSxDQUFDQTtRQUVEQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM3Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EseUJBQXlCQSxDQUFDQSxDQUFDQTtRQUMvQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURYLGtEQUFzQkEsR0FBdEJBLFVBQXVCQSxLQUFLQTtRQUN4QlksSUFBSUEsT0FBT0EsQ0FBQ0E7UUFDWkEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFbENBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLE9BQU9BLENBQUNBLEdBQUdBLEtBQUtBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsMERBQTBEQTtRQUMvRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0lBQ2JBLENBQUNBO0lBRURaLDBDQUFjQSxHQUFkQSxVQUFlQSxLQUFLQSxFQUFFQSxhQUFhQTtRQUMvQmEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUMzQ0EsYUFBYUEsR0FBR0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2pCQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxHQUFHQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1RUEsQ0FBQ0E7SUFFRGI7O09BRUdBO0lBRUhBLHVDQUFXQSxHQUFYQTtRQUNJYyxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFFRGQsc0NBQVVBLEdBQVZBLFVBQVdBLFlBQWlCQTtRQUN4QmUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRURmLHNDQUFVQSxHQUFWQTtRQUNJZ0IsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFFNUJBLE1BQU1BLENBQUNBLEtBQUtBLElBQUlBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBO0lBQzlEQSxDQUFDQTtJQUVEaEIsd0NBQVlBLEdBQVpBO1FBQ0lpQixJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUVoQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsSUFBSUEsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDeEVBLENBQUNBO0lBRURqQiwyQ0FBZUEsR0FBZkE7UUFDSWtCLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBRWhDQSxNQUFNQSxDQUFDQSxPQUFPQSxJQUFJQSxPQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtJQUN4RUEsQ0FBQ0E7SUFFRGxCLDBDQUFjQSxHQUFkQTtRQUNJbUIsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7UUFFaENBLE1BQU1BLENBQUNBLE9BQU9BLElBQUlBLE9BQU9BLENBQUNBLFdBQVdBLEdBQUdBLE9BQU9BLENBQUNBLFdBQVdBLEdBQUdBLFNBQVNBLENBQUNBO0lBQzVFQSxDQUFDQTtJQUNMbkIsd0JBQUNBO0FBQURBLENBQUNBLEFBak5ELElBaU5DO0FBa0NtQyx5QkFBaUIscUJBbENwRDtBQUVEO0lBc0JJb0I7UUFwQlFDLFdBQU1BLEdBQUdBO1lBQ2JBLElBQUlBLEVBQUVBLE9BQU9BO1NBQ2hCQSxDQUFDQTtJQW1CRkEsQ0FBQ0E7SUFqQkREOzs7O09BSUdBO0lBRUhBLDZDQUFTQSxHQUFUQSxVQUFVQSxNQUFNQTtRQUNaRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsTUFBTUEsSUFBSUEsU0FBU0EsQ0FBQ0EsaURBQWlEQSxDQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUtERixhQUFhQTtJQUNiQSx3Q0FBSUEsR0FBSkEsVUFBS0EsU0FBU0EsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0E7UUFDOUJHLE1BQU1BLENBQUNBLElBQUlBLGlCQUFpQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDN0VBLENBQUNBO0lBQ0xILGdDQUFDQTtBQUFEQSxDQUFDQSxBQTdCRCxJQTZCQztBQUdRLGlDQUF5Qiw2QkFIakM7QUFFRDtrQkFBZSxpQkFBaUIsQ0FBQztBQUN1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3R5cGVzLmQudHNcIiAvPlxuXG5kZWNsYXJlIHZhciBLSlVSOmFueTtcblxuLypAbmdJbmplY3QqL1xuY2xhc3MgT0F1dGhUb2tlblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbG9jYXRpb24sXG4gICAgICAgIHByaXZhdGUgJHdpbmRvdyxcbiAgICAgICAgcHJpdmF0ZSAkc2V0dGluZ3MsXG4gICAgICAgIHByaXZhdGUgY29uZmlnKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRva2VuLlxuICAgICAqXG4gICAgICogIEBwYXJhbXMge29iamVjdH0gLSBBY2Nlc3MgdG9rZW5cbiAgICAgKi9cblxuICAgIHNldFRva2VuKGRhdGEpIHtcbiAgICAgICAgdGhpcy4kc2V0dGluZ3Muc2V0KHRoaXMuY29uZmlnLm5hbWUsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlbi5cbiAgICAgKlxuICAgICAqICBAcmV0dXJucyB7b2JqZWN0fSAtIEFjY2VzcyB0b2tlblxuICAgICAqL1xuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZVRva2VuRnJvbVVSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2V0dGluZ3MuZ2V0KHRoaXMuY29uZmlnLm5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhY2Nlc3NUb2tlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQWNjZXNzIHRva2VuXG4gICAgICovXG5cbiAgICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oKSA/IHRoaXMuZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW4gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGF1dGhvcml6YXRpb24gSGVhZGVyLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSAnQXV0aG9yaXphdGlvbicgSGVhZGVyIGUuZyAnQmVhcmVyIFhYWCdcbiAgICAgKi9cblxuICAgIGdldEF1dGhvcml6YXRpb25IZWFkZXIoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZ2V0VG9rZW5UeXBlKCkgJiYgdGhpcy5nZXRBY2Nlc3NUb2tlbigpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5UeXBlKCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmdldFRva2VuVHlwZSgpLnN1YnN0cigxKSArICcgJyArIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVmcmVzaCBUb2tlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gJ1JlZnJlc2ggdG9rZW5cbiAgICAgKi9cblxuICAgIGdldFJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oKSA/IHRoaXMuZ2V0VG9rZW4oKS5yZWZyZXNoX3Rva2VuIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlblR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRva2VuIHR5cGUgZS5nLiAnYmVhcmVyJywgJ3JlZnJlc2gnXG4gICAgICovXG5cbiAgICBnZXRUb2tlblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuKCkgPyB0aGlzLmdldFRva2VuKCkudG9rZW5fdHlwZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXN0b3JlVG9rZW5Gcm9tVVJMKCk6IHZvaWQge1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICAgICAgdmFyIGNvbnRlbnQ6IHN0cmluZztcblxuICAgICAgICBhY2Nlc3NUb2tlbiA9IHRoaXMuJGxvY2F0aW9uLnNlYXJjaCgpWyd0b2tlbiddO1xuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAmJiB0aGlzLnZlcmlmeVRva2VuU2lnbmF0dXJlKGFjY2Vzc1Rva2VuKSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24uc2VhcmNoKCd0b2tlbicsIG51bGwpO1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZGVjb2RlVG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5zZXRUb2tlbih7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICB0b2tlbl90eXBlOiAnYmVhcmVyJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZ5VG9rZW5TaWduYXR1cmUodG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB2YXIgcHVibGljS2V5ID0gdGhpcy5jb25maWcucHVibGljS2V5O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBLSlVSLmp3cy5KV1MudmVyaWZ5KHRva2VuLCBwdWJsaWNLZXksIFtcIlJTMjU2XCJdKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPQXV0aCBUb2tlbiBTZXJ2aWNlIEVycm9yOiBcIiArIGV4KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gU2lnbmF0dXJlIFZhbGlkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gU2lnbmF0dXJlIE5vdCBWYWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB1cmxCYXNlNjREZWNvZGUoc3RyKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9ICc9PSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSAnPSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nISc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiR3aW5kb3cuZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMuJHdpbmRvdy5lbmNvZGVVUklDb21wb25lbnQodGhpcy4kd2luZG93LmF0b2Iob3V0cHV0KSkpO1xuICAgIH1cblxuICAgIGRlY29kZVRva2VuKHRva2VuKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWNvZGVkID0gdGhpcy51cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xuICAgICAgICBpZiAoIWRlY29kZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlY29kZSB0aGUgdG9rZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICAgIH1cblxuICAgIGdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW4pIHtcbiAgICAgICAgdmFyIGRlY29kZWQ7XG4gICAgICAgIGRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKHRva2VuKTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQuZXhwID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoMCk7IC8vIFRoZSAwIGhlcmUgaXMgdGhlIGtleSwgd2hpY2ggc2V0cyB0aGUgZGF0ZSB0byB0aGUgZXBvY2hcbiAgICAgICAgZC5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBpc1Rva2VuRXhwaXJlZCh0b2tlbiwgb2Zmc2V0U2Vjb25kcykge1xuICAgICAgICB2YXIgZCA9IHRoaXMuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbik7XG4gICAgICAgIG9mZnNldFNlY29uZHMgPSBvZmZzZXRTZWNvbmRzIHx8IDA7XG4gICAgICAgIGlmIChkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIShkLnZhbHVlT2YoKSA+IChuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIChvZmZzZXRTZWNvbmRzICogMTAwMCkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdG9rZW4uXG4gICAgICovXG5cbiAgICByZW1vdmVUb2tlbigpIHtcbiAgICAgICAgdGhpcy4kc2V0dGluZ3Muc2V0KHRoaXMuY29uZmlnLm5hbWUpO1xuICAgIH1cblxuICAgIHNldENvbnRlbnQodG9rZW5Db250ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kc2V0dGluZ3Muc2V0KHRoaXMuY29uZmlnLm5hbWUpO1xuICAgIH1cblxuICAgIGdldENvbnRlbnQoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcblxuICAgICAgICByZXR1cm4gdG9rZW4gJiYgdG9rZW4uY29udGVudCA/IHRva2VuLmNvbnRlbnQgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0VXNlckxvZ2luKCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQgJiYgY29udGVudC51c2VyX25hbWUgPyBjb250ZW50LnVzZXJfbmFtZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRVc2VyRnVsbE5hbWUoKTogYW55IHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgICByZXR1cm4gY29udGVudCAmJiBjb250ZW50LmZ1bGxfbmFtZSA/IGNvbnRlbnQuZnVsbF9uYW1lIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFBlcm1pc3Npb25zKCk6IGFueVtdIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgICAgICByZXR1cm4gY29udGVudCAmJiBjb250ZW50LmF1dGhvcml0aWVzID8gY29udGVudC5hdXRob3JpdGllcyA6IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNsYXNzIE9BdXRoVG9rZW5TZXJ2aWNlUHJvdmlkZXIgaW1wbGVtZW50cyBuZy5JU2VydmljZVByb3ZpZGVyIHtcblxuICAgIHByaXZhdGUgY29uZmlnID0ge1xuICAgICAgICBuYW1lOiAndG9rZW4nXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBBbiBgb2JqZWN0YCBvZiBwYXJhbXMgdG8gZXh0ZW5kLlxuICAgICAqL1xuXG4gICAgY29uZmlndXJlKHBhcmFtcykge1xuICAgICAgICBpZiAoIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50OiBgY29uZmlnYCBtdXN0IGJlIGFuIGBPYmplY3RgLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5ndWxhci5leHRlbmQodGhpcy5jb25maWcsIHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgICRnZXQoJGxvY2F0aW9uLCAkd2luZG93LCAkc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPQXV0aFRva2VuU2VydmljZSgkbG9jYXRpb24sICR3aW5kb3csICRzZXR0aW5ncywgdGhpcy5jb25maWcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT0F1dGhUb2tlblNlcnZpY2U7XG5leHBvcnQgeyBPQXV0aFRva2VuU2VydmljZVByb3ZpZGVyLCBPQXV0aFRva2VuU2VydmljZSB9O1xuIl19

/***/ },
/* 4 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/*@ngInject*/
	var OAuthHttpInterceptor = (function () {
	    function OAuthHttpInterceptor($rootScope, $q, $oauthToken) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.$q = $q;
	        this.$oauthToken = $oauthToken;
	        this.request = function (config) {
	            /*
	             Inject `Authorization` header.
	             */
	            if (!config.url.match(/.html/) && _this.$oauthToken.getAuthorizationHeader()) {
	                config.headers = config.headers || {};
	                if (!config.headers.Authorization) {
	                    config.headers.Authorization = _this.$oauthToken.getAuthorizationHeader();
	                }
	            }
	            return config;
	        };
	        this.responseError = function (rejection) {
	            var error = {
	                status: rejection.status,
	                message: rejection.data && rejection.data.error_description ? rejection.data.error_description : 'Unknown OAuth Error ' + JSON.stringify(rejection),
	            };
	            /*
	             Catch `invalid_request` and `invalid_grant` errors and ensure that the `token` is removed.
	             */
	            if (400 === rejection.status && rejection.data &&
	                ('invalid_request' === rejection.data.error || 'invalid_grant' === rejection.data.error)) {
	                _this.$oauthToken.removeToken();
	                _this.$rootScope.$broadcast('$oauth:error', error);
	            }
	            /*
	             Catch `invalid_token` and `unauthorized` errors.
	             The token isn't removed here so it can be refreshed when the `invalid_token` error occurs.
	             */
	            if (401 === rejection.status) {
	                if ((rejection.data && 'invalid_token' === rejection.data.error) ||
	                    (rejection.headers('www-authenticate') && 0 === rejection.headers('www-authenticate').indexOf('Bearer'))) {
	                    error.message = 'Invalid token. Should login.';
	                    _this.$rootScope.$broadcast('$oauth:error', error);
	                }
	                else {
	                    error.url = rejection.config.url;
	                    _this.$rootScope.$broadcast('$http:error:authorization', error);
	                }
	            }
	            if (403 === rejection.status) {
	                _this.$rootScope.$broadcast('$oauth:error', error);
	            }
	            return _this.$q.reject(rejection);
	        };
	    }
	    /*@ngInject*/
	    OAuthHttpInterceptor.factory = function ($rootScope, $q, $oauthToken) {
	        return new OAuthHttpInterceptor($rootScope, $q, $oauthToken);
	    };
	    return OAuthHttpInterceptor;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OAuthHttpInterceptor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9BdXRoSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOlsiT0F1dGhIdHRwSW50ZXJjZXB0b3IiLCJPQXV0aEh0dHBJbnRlcmNlcHRvci5jb25zdHJ1Y3RvciIsIk9BdXRoSHR0cEludGVyY2VwdG9yLmZhY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQVFwRCxhQUFhO0FBQ2I7SUFPSUEsOEJBQ1lBLFVBQWdDQSxFQUNoQ0EsRUFBZ0JBLEVBQ2hCQSxXQUFXQTtRQVYzQkMsaUJBb0VDQTtRQTVEZUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBc0JBO1FBQ2hDQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFjQTtRQUNoQkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQUFBO1FBR3ZCQSxZQUFPQSxHQUFHQSxVQUFDQSxNQUFNQTtZQUNiQTs7ZUFFR0E7WUFDSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0Esc0JBQXNCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUVBLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLE9BQU9BLElBQUlBLEVBQUVBLENBQUNBO2dCQUV0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxzQkFBc0JBLEVBQUVBLENBQUNBO2dCQUM3RUEsQ0FBQ0E7WUFDTEEsQ0FBQ0E7WUFFREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDbEJBLENBQUNBLENBQUNBO1FBRUZBLGtCQUFhQSxHQUFH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bnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHlwZXMuZC50c1wiIC8+XG5cbi8qKlxuICogSFRUUCBJbnRlcmNlcHRvciBmb3IgZ2xvYmFsIE9BdXRoIGhhbmRsaW5nXG4gKi9cblxuaW1wb3J0IE9BdXRoVG9rZW5TZXJ2aWNlIGZyb20gJy4vT0F1dGhUb2tlblNlcnZpY2UnO1xuXG4vKkBuZ0luamVjdCovXG5jbGFzcyBPQXV0aEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgcHVibGljIHN0YXRpYyBmYWN0b3J5KCRyb290U2NvcGU6IG5nLklSb290U2NvcGVTZXJ2aWNlLCAkcTogbmcuSVFTZXJ2aWNlLCAkb2F1dGhUb2tlbikge1xuICAgICAgICByZXR1cm4gbmV3IE9BdXRoSHR0cEludGVyY2VwdG9yKCRyb290U2NvcGUsICRxLCAkb2F1dGhUb2tlbik7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgJHJvb3RTY29wZTogbmcuSVJvb3RTY29wZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHE6IG5nLklRU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSAkb2F1dGhUb2tlbikge1xuICAgIH1cblxuICAgIHJlcXVlc3QgPSAoY29uZmlnKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICBJbmplY3QgYEF1dGhvcml6YXRpb25gIGhlYWRlci5cbiAgICAgICAgICovXG4gICAgICAgIGlmICghY29uZmlnLnVybC5tYXRjaCgvLmh0bWwvKSAmJiB0aGlzLiRvYXV0aFRva2VuLmdldEF1dGhvcml6YXRpb25IZWFkZXIoKSkge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAgICAgICAgICAgaWYgKCFjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuJG9hdXRoVG9rZW4uZ2V0QXV0aG9yaXphdGlvbkhlYWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgcmVzcG9uc2VFcnJvciA9IChyZWplY3Rpb24pID0+IHtcbiAgICAgICAgdmFyIGVycm9yOiBhbnkgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IHJlamVjdGlvbi5zdGF0dXMsXG4gICAgICAgICAgICBtZXNzYWdlOiByZWplY3Rpb24uZGF0YSAmJiByZWplY3Rpb24uZGF0YS5lcnJvcl9kZXNjcmlwdGlvbiA/IHJlamVjdGlvbi5kYXRhLmVycm9yX2Rlc2NyaXB0aW9uIDogJ1Vua25vd24gT0F1dGggRXJyb3IgJyArIEpTT04uc3RyaW5naWZ5KHJlamVjdGlvbiksXG4gICAgICAgIH07XG4gICAgICAgIC8qXG4gICAgICAgICBDYXRjaCBgaW52YWxpZF9yZXF1ZXN0YCBhbmQgYGludmFsaWRfZ3JhbnRgIGVycm9ycyBhbmQgZW5zdXJlIHRoYXQgdGhlIGB0b2tlbmAgaXMgcmVtb3ZlZC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICg0MDAgPT09IHJlamVjdGlvbi5zdGF0dXMgJiYgcmVqZWN0aW9uLmRhdGEgJiZcbiAgICAgICAgICAgICgnaW52YWxpZF9yZXF1ZXN0JyA9PT0gcmVqZWN0aW9uLmRhdGEuZXJyb3IgfHwgJ2ludmFsaWRfZ3JhbnQnID09PSByZWplY3Rpb24uZGF0YS5lcnJvcikpIHtcblxuICAgICAgICAgICAgdGhpcy4kb2F1dGhUb2tlbi5yZW1vdmVUb2tlbigpO1xuXG4gICAgICAgICAgICB0aGlzLiRyb290U2NvcGUuJGJyb2FkY2FzdCgnJG9hdXRoOmVycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgIENhdGNoIGBpbnZhbGlkX3Rva2VuYCBhbmQgYHVuYXV0aG9yaXplZGAgZXJyb3JzLlxuICAgICAgICAgVGhlIHRva2VuIGlzbid0IHJlbW92ZWQgaGVyZSBzbyBpdCBjYW4gYmUgcmVmcmVzaGVkIHdoZW4gdGhlIGBpbnZhbGlkX3Rva2VuYCBlcnJvciBvY2N1cnMuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoNDAxID09PSByZWplY3Rpb24uc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHJlamVjdGlvbi5kYXRhICYmICdpbnZhbGlkX3Rva2VuJyA9PT0gcmVqZWN0aW9uLmRhdGEuZXJyb3IpIHx8XG4gICAgICAgICAgICAgICAgKHJlamVjdGlvbi5oZWFkZXJzKCd3d3ctYXV0aGVudGljYXRlJykgJiYgMCA9PT0gcmVqZWN0aW9uLmhlYWRlcnMoJ3d3dy1hdXRoZW50aWNhdGUnKS5pbmRleE9mKCdCZWFyZXInKSkpIHtcblxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnSW52YWxpZCB0b2tlbi4gU2hvdWxkIGxvZ2luLic7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRyb290U2NvcGUuJGJyb2FkY2FzdCgnJG9hdXRoOmVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvci51cmwgPSByZWplY3Rpb24uY29uZmlnLnVybDtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290U2NvcGUuJGJyb2FkY2FzdCgnJGh0dHA6ZXJyb3I6YXV0aG9yaXphdGlvbicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICg0MDMgPT09IHJlamVjdGlvbi5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckb2F1dGg6ZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoSHR0cEludGVyY2VwdG9yO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/*@ngInject*/
	var QueryStringService = (function () {
	    function QueryStringService() {
	    }
	    QueryStringService.prototype.extract = function (maybeUrl) {
	        return maybeUrl.split('?')[1] || '';
	    };
	    QueryStringService.prototype.parse = function (str) {
	        if (typeof str !== 'string') {
	            return {};
	        }
	        str = str.trim().replace(/^(\?|#|&)/, '');
	        if (!str) {
	            return {};
	        }
	        return str.split('&').reduce(function (ret, param) {
	            var parts = param.replace(/\+/g, ' ').split('=');
	            var key = parts[0];
	            var val = parts[1];
	            key = decodeURIComponent(key);
	            val = val === undefined ? null : decodeURIComponent(val);
	            if (!ret.hasOwnProperty(key)) {
	                ret[key] = val;
	            }
	            else if (Array.isArray(ret[key])) {
	                ret[key].push(val);
	            }
	            else {
	                ret[key] = [ret[key], val];
	            }
	            return ret;
	        }, {});
	    };
	    QueryStringService.prototype.stringify = function (obj) {
	        return obj ? Object.keys(obj).sort().map(function (key) {
	            var val = obj[key];
	            if (Array.isArray(val)) {
	                return val.sort().map(function (val2) {
	                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
	                }).join('&');
	            }
	            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	        }).join('&') : '';
	    };
	    return QueryStringService;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = QueryStringService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlTdHJpbmdTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUXVlcnlTdHJpbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlF1ZXJ5U3RyaW5nU2VydmljZSIsIlF1ZXJ5U3RyaW5nU2VydmljZS5jb25zdHJ1Y3RvciIsIlF1ZXJ5U3RyaW5nU2VydmljZS5leHRyYWN0IiwiUXVlcnlTdHJpbmdTZXJ2aWNlLnBhcnNlIiwiUXVlcnlTdHJpbmdTZXJ2aWNlLnN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBRXBELGFBQWE7QUFDYjtJQUVJQTtJQUNBQyxDQUFDQTtJQUVERCxvQ0FBT0EsR0FBUEEsVUFBUUEsUUFBUUE7UUFDWkUsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURGLGtDQUFLQSxHQUFMQSxVQUFNQSxHQUFHQTtRQUNMRyxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxQkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ1BBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFVBQUNBLEdBQUdBLEVBQUVBLEtBQUtBO1lBQ3BDQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNqREEsSUFBSUEsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRW5CQSxHQUFHQSxHQUFHQSxrQkFBa0JBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzlCQSxHQUFHQSxHQUFHQSxHQUFHQSxLQUFLQSxTQUFTQSxHQUFHQSxJQUFJQSxHQUFHQSxrQkFBa0JBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBRXpEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1lBQ25CQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3ZCQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLENBQUNBO1lBRURBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBRURILHNDQUFTQSxHQUFUQSxVQUFVQSxHQUFHQTtRQUNUSSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFHQTtZQUN6Q0EsSUFBSUEsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFFbkJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsSUFBSUE7b0JBQ3ZCQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNqQkEsQ0FBQ0E7WUFFREEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxrQkFBa0JBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ25FQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFDTEoseUJBQUNBO0FBQURBLENBQUNBLEFBckRELElBcURDO0FBRUQ7a0JBQWUsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuLypAbmdJbmplY3QqLyBcbmNsYXNzIFF1ZXJ5U3RyaW5nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBleHRyYWN0KG1heWJlVXJsKSB7XG4gICAgICAgIHJldHVybiBtYXliZVVybC5zcGxpdCgnPycpWzFdIHx8ICcnO1xuICAgIH1cblxuICAgIHBhcnNlKHN0cikge1xuICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdCgnJicpLnJlZHVjZSgocmV0LCBwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBwYXJ0c1swXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcblxuICAgICAgICAgICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuICAgICAgICAgICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldFtrZXldID0gdmFsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldFtrZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBzdHJpbmdpZnkob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5zb3J0KCkubWFwKCh2YWwyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuICAgICAgICB9KS5qb2luKCcmJykgOiAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5U3RyaW5nU2VydmljZTtcbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/types.d.ts" />
	var SecurityService_1 = __webpack_require__(2);
	/*@ngInject*/
	function AuthorizeDirective($security) {
	    return {
	        restrict: 'A',
	        link: function (scope, element, attrs) {
	            var makeVisible = function () {
	                element.removeClass('hidden');
	            };
	            var makeHidden = function () {
	                element.addClass('hidden');
	            };
	            var makeDisabled = function () {
	                element.attr('ng-disabled', 'true');
	            };
	            var makeEnabled = function () {
	                element.removeAttr('disabled');
	            };
	            var roles = attrs.authorize.split(',');
	            var type = attrs.authorizeAction || "show";
	            if (roles.length > 0) {
	                var result;
	                result = $security.authorize(roles, true, SecurityService_1.PermissionCheckType[attrs.authorizeType]);
	                if (result === SecurityService_1.AccessStatus.Authorised) {
	                    type === 'show' ? makeVisible() : makeEnabled();
	                }
	                else {
	                    type === 'show' ? makeHidden() : makeDisabled();
	                }
	            }
	        }
	    };
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuthorizeDirective;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yaXplRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXV0aG9yaXplRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIkF1dGhvcml6ZURpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBRXBELGdDQUFtRSxzQ0FBc0MsQ0FBQyxDQUFBO0FBUTFHLGFBQWE7QUFDYiw0QkFBNEIsU0FBeUI7SUFDakRBLE1BQU1BLENBQUNBO1FBQ0hBLFFBQVFBLEVBQUVBLEdBQUdBO1FBQ2JBLElBQUlBLEVBQUVBLFVBQUNBLEtBQWVBLEVBQUVBLE9BQTJCQSxFQUFFQSxLQUFnQkE7WUFDakVBLElBQUlBLFdBQVdBLEdBQUdBO2dCQUNkQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNsQ0EsQ0FBQ0EsQ0FBQ0E7WUFFRkEsSUFBSUEsVUFBVUEsR0FBR0E7Z0JBQ2JBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQy9CQSxDQUFDQSxDQUFDQTtZQUVGQSxJQUFJQSxZQUFZQSxHQUFHQTtnQkFDZkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDeENBLENBQUNBLENBQUNBO1lBRUZBLElBQUlBLFdBQVdBLEdBQUdBO2dCQUNkQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtZQUNuQ0EsQ0FBQ0EsQ0FBQ0E7WUFFRkEsSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDdkNBLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLGVBQWVBLElBQUlBLE1BQU1BLENBQUNBO1lBRTNDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkJBLElBQUlBLE1BQW1CQSxDQUFDQTtnQkFFeEJBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLHFDQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXBGQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxLQUFLQSw4QkFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxLQUFLQSxNQUFNQSxHQUFHQSxXQUFXQSxFQUFFQSxHQUFHQSxXQUFXQSxFQUFFQSxDQUFDQTtnQkFDcERBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDSkEsSUFBSUEsS0FBS0EsTUFBTUEsR0FBR0EsVUFBVUEsRUFBRUEsR0FBR0EsWUFBWUEsRUFBRUEsQ0FBQ0E7Z0JBQ3BEQSxDQUFDQTtZQUNMQSxDQUFDQTtRQUNMQSxDQUFDQTtLQUNKQSxDQUFDQTtBQUNOQSxDQUFDQTtBQUVEO2tCQUFlLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHlwZXMuZC50c1wiIC8+XG5cbmltcG9ydCB7IFNlY3VyaXR5U2VydmljZSwgQWNjZXNzU3RhdHVzLCBQZXJtaXNzaW9uQ2hlY2tUeXBlIH0gZnJvbSAnLi4vLi4vc2VjdXJpdHkvY2xhc3MvU2VjdXJpdHlTZXJ2aWNlJztcblxuaW50ZXJmYWNlIEF0dHJpYnV0ZXMgZXh0ZW5kcyBuZy5JQXR0cmlidXRlcyB7XG4gICAgYXV0aG9yaXplVHlwZTpzdHJpbmc7XG4gICAgYXV0aG9yaXplQWN0aW9uOnN0cmluZztcbiAgICBhdXRob3JpemU6c3RyaW5nO1xufVxuXG4vKkBuZ0luamVjdCovXG5mdW5jdGlvbiBBdXRob3JpemVEaXJlY3RpdmUoJHNlY3VyaXR5OlNlY3VyaXR5U2VydmljZSk6bmcuSURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogKHNjb3BlOm5nLklTY29wZSwgZWxlbWVudDpuZy5JQXVnbWVudGVkSlF1ZXJ5LCBhdHRyczpBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgbWFrZVZpc2libGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbWFrZUhpZGRlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBtYWtlRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCduZy1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbWFrZUVuYWJsZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHJvbGVzID0gYXR0cnMuYXV0aG9yaXplLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGF0dHJzLmF1dGhvcml6ZUFjdGlvbiB8fCBcInNob3dcIjtcblxuICAgICAgICAgICAgaWYgKHJvbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0OkFjY2Vzc1N0YXR1cztcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRzZWN1cml0eS5hdXRob3JpemUocm9sZXMsIHRydWUsIFBlcm1pc3Npb25DaGVja1R5cGVbYXR0cnMuYXV0aG9yaXplVHlwZV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gQWNjZXNzU3RhdHVzLkF1dGhvcmlzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Nob3cnID8gbWFrZVZpc2libGUoKSA6IG1ha2VFbmFibGVkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Nob3cnID8gbWFrZUhpZGRlbigpIDogbWFrZURpc2FibGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yaXplRGlyZWN0aXZlO1xuIl19

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/types.d.ts" />
	/**
	 * Module with services for error handler, local storage settings and small utils
	 */
	var SettingsService_1 = __webpack_require__(8);
	var RestService_1 = __webpack_require__(9);
	var ConfigService_1 = __webpack_require__(10);
	var HttpInterceptor_1 = __webpack_require__(11);
	var UtilsService_1 = __webpack_require__(12);
	var module = angular.module('core.utils', [])
	    .value('$dateFormat', 'DD.MM.YYYY HH:mm:ss')
	    .filter('dateFormat', function ($utils) { return function (value) { return $utils.formatDate(value); }; })
	    .config(function ($httpProvider) {
	    $httpProvider.interceptors.push(HttpInterceptor_1.default.factory);
	})
	    .provider('$rest', RestService_1.RestServiceProvider)
	    .provider('$config', ConfigService_1.default)
	    .service('$utils', UtilsService_1.default)
	    .provider('$settings', SettingsService_1.SettingsServiceProvider);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = module;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFFakQ7O0dBRUc7QUFFSCxnQ0FBd0MseUJBQXlCLENBQUMsQ0FBQTtBQUNsRSw0QkFBb0MscUJBQXFCLENBQUMsQ0FBQTtBQUMxRCw4QkFBa0MsdUJBQXVCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCw2QkFBeUIsc0JBQXNCLENBQUMsQ0FBQTtBQUVoRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7S0FFeEMsS0FBSyxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQztLQUUzQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsVUFBQyxLQUFLLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixFQUFuQyxDQUFtQyxDQUFDO0tBRXJFLE1BQU0sQ0FBQyxVQUFVLGFBQWE7SUFDM0IsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMseUJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7S0FFRCxRQUFRLENBQUMsT0FBTyxFQUFFLGlDQUFtQixDQUFDO0tBTXRDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsdUJBQXFCLENBQUM7S0FNMUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxzQkFBWSxDQUFDO0tBTS9CLFFBQVEsQ0FBQyxXQUFXLEVBQUUseUNBQXVCLENBQUMsQ0FBQztBQUdwRDtrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuLyoqXG4gKiBNb2R1bGUgd2l0aCBzZXJ2aWNlcyBmb3IgZXJyb3IgaGFuZGxlciwgbG9jYWwgc3RvcmFnZSBzZXR0aW5ncyBhbmQgc21hbGwgdXRpbHNcbiAqL1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2VQcm92aWRlciB9IGZyb20gJy4vY2xhc3MvU2V0dGluZ3NTZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuL2NsYXNzL1Jlc3RTZXJ2aWNlJztcbmltcG9ydCBDb25maWdTZXJ2aWNlUHJvdmlkZXIgZnJvbSBcIi4vY2xhc3MvQ29uZmlnU2VydmljZVwiO1xuaW1wb3J0IEh0dHBJbnRlcmNlcHRvciBmcm9tICcuL2NsYXNzL0h0dHBJbnRlcmNlcHRvcic7XG5pbXBvcnQgVXRpbHNTZXJ2aWNlIGZyb20gJy4vY2xhc3MvVXRpbHNTZXJ2aWNlJztcblxudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdjb3JlLnV0aWxzJywgW10pXG5cbiAgICAudmFsdWUoJyRkYXRlRm9ybWF0JywgJ0RELk1NLllZWVkgSEg6bW06c3MnKVxuXG4gICAgLmZpbHRlcignZGF0ZUZvcm1hdCcsICgkdXRpbHMpID0+ICh2YWx1ZSkgPT4gJHV0aWxzLmZvcm1hdERhdGUodmFsdWUpKVxuXG4gICAgLmNvbmZpZyhmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xuICAgICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKEh0dHBJbnRlcmNlcHRvci5mYWN0b3J5KTtcbiAgICB9KVxuXG4gICAgLnByb3ZpZGVyKCckcmVzdCcsIFJlc3RTZXJ2aWNlUHJvdmlkZXIpXG5cbiAgICAvKlxuICAgICBVdGlsaXR5IHNlcnZpY2VcbiAgICAgKi9cblxuICAgIC5wcm92aWRlcignJGNvbmZpZycsIENvbmZpZ1NlcnZpY2VQcm92aWRlcilcblxuICAgIC8qXG4gICAgIFV0aWxpdHkgc2VydmljZVxuICAgICAqL1xuXG4gICAgLnNlcnZpY2UoJyR1dGlscycsIFV0aWxzU2VydmljZSlcblxuICAgIC8qXG4gICAgIExvY2FsIHN0b3JhZ2UgbWFuYWdlbWVudFxuICAgICAqL1xuXG4gICAgLnByb3ZpZGVyKCckc2V0dGluZ3MnLCBTZXR0aW5nc1NlcnZpY2VQcm92aWRlcik7XG5cblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlO1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/**
	 * Saving and loading settings from local storage
	 */
	/*@ngInject*/
	var SettingsService = (function () {
	    function SettingsService($window, config) {
	        this.$window = $window;
	        this.config = config;
	        this.settings = {
	            debug: false,
	            path: ''
	        };
	        this.settings = JSON.parse($window.localStorage.getItem(this.config.storeName)) || this.settings;
	    }
	    SettingsService.prototype.getSettings = function () {
	        return this.settings;
	    };
	    SettingsService.prototype.saveSettings = function () {
	        var text = JSON.stringify(this.settings);
	        if (text && text !== '{}') {
	            this.$window.localStorage.setItem(this.config.storeName, text);
	        }
	    };
	    SettingsService.prototype.get = function (name) {
	        return this.settings[name];
	    };
	    SettingsService.prototype.put = function (key, value) {
	        if (value === void 0) { value = undefined; }
	        if (value) {
	            this.settings[key] = value;
	        }
	        else {
	            delete this.settings[key];
	        }
	        this.saveSettings();
	    };
	    SettingsService.prototype.set = function (key, value) {
	        if (value === void 0) { value = undefined; }
	        this.put(key, value);
	    };
	    SettingsService.prototype.remove = function (key) {
	        this.put(key);
	    };
	    return SettingsService;
	})();
	exports.SettingsService = SettingsService;
	var SettingsServiceProvider = (function () {
	    function SettingsServiceProvider() {
	        this.config = {
	            storeName: 'iq.settings'
	        };
	    }
	    /**
	     * Configure.
	     *
	     * @param {object} params - An `object` of params to extend.
	     */
	    SettingsServiceProvider.prototype.configure = function (params) {
	        if (!(params instanceof Object)) {
	            throw new TypeError('Invalid argument: `config` must be an `Object`.');
	        }
	        angular.extend(this.config, params);
	        return this;
	    };
	    /*@ngInject*/
	    SettingsServiceProvider.prototype.$get = function ($window) {
	        return new SettingsService($window, this.config);
	    };
	    return SettingsServiceProvider;
	})();
	exports.SettingsServiceProvider = SettingsServiceProvider;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SettingsService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2V0dGluZ3NTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNldHRpbmdzU2VydmljZSIsIlNldHRpbmdzU2VydmljZS5jb25zdHJ1Y3RvciIsIlNldHRpbmdzU2VydmljZS5nZXRTZXR0aW5ncyIsIlNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3MiLCJTZXR0aW5nc1NlcnZpY2UuZ2V0IiwiU2V0dGluZ3NTZXJ2aWNlLnB1dCIsIlNldHRpbmdzU2VydmljZS5zZXQiLCJTZXR0aW5nc1NlcnZpY2UucmVtb3ZlIiwiU2V0dGluZ3NTZXJ2aWNlUHJvdmlkZXIiLCJTZXR0aW5nc1NlcnZpY2VQcm92aWRlci5jb25zdHJ1Y3RvciIsIlNldHRpbmdzU2VydmljZVByb3ZpZGVyLmNvbmZpZ3VyZSIsIlNldHRpbmdzU2VydmljZVByb3ZpZGVyLiRnZXQiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRDs7R0FFRztBQUVILGFBQWE7QUFDYjtJQU9JQSx5QkFBb0JBLE9BQU9BLEVBQ2ZBLE1BQU1BO1FBREVDLFlBQU9BLEdBQVBBLE9BQU9BLENBQUFBO1FBQ2ZBLFdBQU1BLEdBQU5BLE1BQU1BLENBQUFBO1FBTlZBLGFBQVFBLEdBQUdBO1lBQ2ZBLEtBQUtBLEVBQUVBLEtBQUtBO1lBQ1pBLElBQUlBLEVBQUVBLEVBQUVBO1NBQ1hBLENBQUNBO1FBSUVBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3JHQSxDQUFDQTtJQUVERCxxQ0FBV0EsR0FBWEE7UUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQUE7SUFDeEJBLENBQUNBO0lBRURGLHNDQUFZQSxHQUFaQTtRQUNJRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUV6Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ25FQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVESCw2QkFBR0EsR0FBSEEsVUFBSUEsSUFBSUE7UUFDSkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURKLDZCQUFHQSxHQUFIQSxVQUFJQSxHQUFHQSxFQUFFQSxLQUFpQkE7UUFBakJLLHFCQUFpQkEsR0FBakJBLGlCQUFpQkE7UUFDdEJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxPQUFPQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURMLDZCQUFHQSxHQUFIQSxVQUFJQSxHQUFHQSxFQUFFQSxLQUFpQkE7UUFBakJNLHFCQUFpQkEsR0FBakJBLGlCQUFpQkE7UUFDdEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUFBO0lBQ3hCQSxDQUFDQTtJQUVETixnQ0FBTUEsR0FBTkEsVUFBT0EsR0FBR0E7UUFDTk8sSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDbEJBLENBQUNBO0lBQ0xQLHNCQUFDQTtBQUFEQSxDQUFDQSxBQTVDRCxJQTRDQztBQStCaUMsdUJBQWUsbUJBL0JoRDtBQUVEO0lBQUFRO1FBRVlDLFdBQU1BLEdBQUdBO1lBQ2JBLFNBQVNBLEVBQUVBLGFBQWFBO1NBQzNCQSxDQUFDQTtJQXNCTkEsQ0FBQ0E7SUFwQkdEOzs7O09BSUdBO0lBRUhBLDJDQUFTQSxHQUFUQSxVQUFVQSxNQUFNQTtRQUNaRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxZQUFZQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsTUFBTUEsSUFBSUEsU0FBU0EsQ0FBQ0EsaURBQWlEQSxDQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVERixhQUFhQTtJQUNiQSxzQ0FBSUEsR0FBSkEsVUFBS0EsT0FBT0E7UUFDUkcsTUFBTUEsQ0FBQ0EsSUFBSUEsZUFBZUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDckRBLENBQUNBO0lBQ0xILDhCQUFDQTtBQUFEQSxDQUFDQSxBQTFCRCxJQTBCQztBQUdRLCtCQUF1QiwyQkFIL0I7QUFFRDtrQkFBZSxlQUFlLENBQUM7QUFDcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuLyoqXG4gKiBTYXZpbmcgYW5kIGxvYWRpbmcgc2V0dGluZ3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gKi9cblxuLypAbmdJbmplY3QqL1xuY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc2V0dGluZ3MgPSB7XG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgcGF0aDogJydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93LFxuICAgICAgICBwcml2YXRlIGNvbmZpZykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gSlNPTi5wYXJzZSgkd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnLnN0b3JlTmFtZSkpIHx8IHRoaXMuc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzXG4gICAgfVxuXG4gICAgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICB2YXIgdGV4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpO1xuXG4gICAgICAgIGlmICh0ZXh0ICYmIHRleHQgIT09ICd7fScpIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZy5zdG9yZU5hbWUsIHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbbmFtZV07XG4gICAgfVxuXG4gICAgcHV0KGtleSwgdmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNldHRpbmdzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnB1dChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgdGhpcy5wdXQoa2V5KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldHRpbmdzU2VydmljZVByb3ZpZGVyIGltcGxlbWVudHMgbmcuSVNlcnZpY2VQcm92aWRlciB7XG5cbiAgICBwcml2YXRlIGNvbmZpZyA9IHtcbiAgICAgICAgc3RvcmVOYW1lOiAnaXEuc2V0dGluZ3MnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBBbiBgb2JqZWN0YCBvZiBwYXJhbXMgdG8gZXh0ZW5kLlxuICAgICAqL1xuXG4gICAgY29uZmlndXJlKHBhcmFtcykge1xuICAgICAgICBpZiAoIShwYXJhbXMgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50OiBgY29uZmlnYCBtdXN0IGJlIGFuIGBPYmplY3RgLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5ndWxhci5leHRlbmQodGhpcy5jb25maWcsIHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqLyBcbiAgICAkZ2V0KCR3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXR0aW5nc1NlcnZpY2UoJHdpbmRvdywgdGhpcy5jb25maWcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NTZXJ2aWNlO1xuZXhwb3J0IHsgU2V0dGluZ3NTZXJ2aWNlUHJvdmlkZXIsIFNldHRpbmdzU2VydmljZSB9O1xuIl19

/***/ },
/* 9 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/**
	 * REST communication and error handling
	 */
	/*@ngInject*/
	var RestService = (function () {
	    function RestService($http, $q, $window, $rootScope, $log, config) {
	        /*
	         Internet connection mockup/online notification
	         */
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.$window = $window;
	        this.$rootScope = $rootScope;
	        this.$log = $log;
	        this.config = config;
	        this.headers = { 'Content-Type': 'application/json;charset=utf-8' };
	        var updateOnlineStatus = function () {
	            _this.isOffline = !navigator.onLine;
	            if (_this.isOffline) {
	                $rootScope.$broadcast('$rest:offline');
	            }
	            else {
	                $rootScope.$broadcast('$rest:online');
	            }
	        };
	        if ($window.addEventListener) {
	            $window.addEventListener('online', updateOnlineStatus);
	            $window.addEventListener('offline', updateOnlineStatus);
	        }
	        else {
	            $window.attachEvent('online', updateOnlineStatus);
	            $window.attachEvent('offline', updateOnlineStatus);
	        }
	        /*
	         Configuration
	         */
	        this.isMockupEnabled = config.mockupEnabled;
	        if (this.isMockupEnabled) {
	            $log.warn('Using Mockup Data');
	            return;
	        }
	        if (config.restURL) {
	            this.url = config.restURL.trim();
	            if (this.url.charAt(this.url.length - 1) !== '/') {
	                this.url += '/';
	            }
	        }
	        $log.info('REST ' + this.url);
	    }
	    RestService.prototype.init = function () {
	        var _this = this;
	        return this.get({ command: 'version' })
	            .then(function (result) {
	            _this.$rootScope.$restVersion = result.version + '.' + result.revision;
	            _this.$log.info('REST', _this.$rootScope.$restVersion, moment(result.date).format('DD.MM.YYYY hh:mm'));
	        });
	    };
	    /**
	     * Mockup response - return JSON file from 'data' folder instead server request
	     *
	     * @param {object} config
	     * @returns {promise} - Request promise
	     */
	    RestService.prototype.mockupResponse = function (config) {
	        var _this = this;
	        var request;
	        request = this.$http
	            .get('data/' + config.command + '.json')
	            .then(function (response) {
	            var content = response.data.content;
	            if (_this.isMockupEnabled && content) {
	                content = content.slice(config.params.number * config.params.size, (config.params.number + 1) * config.params.size);
	                response.data.content = content;
	                response.data.numberOfElements = content.length;
	            }
	            return response.data;
	        });
	        return request;
	    };
	    /**
	     * Adds request header
	     *
	     * @param name
	     * @param value
	     */
	    RestService.prototype.putHeader = function (name, value) {
	        this.headers[name] = value;
	    };
	    /**
	     * Executes HTTP request
	     *
	     * @param method - HTTP method e.g. PUT, POST etc.
	     * @param config - config {command: 'REST server endpoint command', params, data}
	     * @returns {promise}
	     */
	    RestService.prototype.request = function (method, config) {
	        var _this = this;
	        var deferred = this.$q.defer();
	        if (!config.command) {
	            throw new Error('REST Error: Command is required for REST call : ' + JSON.stringify(config));
	        }
	        config.url = this.url + config.command;
	        config.method = method;
	        config.headers = angular.extend(this.headers, config.headers);
	        config.params = config.params || {};
	        if (this.isMockupEnabled || config.mockup) {
	            return this.mockupResponse(config);
	        }
	        this.$http(config)
	            .success(function (data, status) {
	            _this.$log.debug('RESPONSE ', config.command + ': ', 'status: ' + status + (data.content ? ', ' + (data.content && data.content.length) + ' items' : ''));
	            if (data.result === 'error') {
	                _this.$log.warn('Application error: "' + data.message + '" for: ' + JSON.stringify(config));
	                deferred.reject({
	                    status: status,
	                    message: data
	                });
	                return;
	            }
	            deferred.resolve(data);
	        })
	            .error(function (data, status) {
	            deferred.reject({
	                status: status,
	                message: data
	            });
	        });
	        return deferred.promise;
	    };
	    RestService.prototype.post = function (params) {
	        return this.request('POST', params);
	    };
	    RestService.prototype.patch = function (params) {
	        return this.request('PATCH', params);
	    };
	    RestService.prototype.get = function (params) {
	        return this.request('GET', params);
	    };
	    RestService.prototype.put = function (params) {
	        return this.request('PUT', params);
	    };
	    RestService.prototype.remove = function (params) {
	        return this.request('DELETE', params);
	    };
	    return RestService;
	})();
	exports.RestService = RestService;
	var RestServiceProvider = (function () {
	    function RestServiceProvider() {
	        this.config = {
	            restURL: window.location['origin']
	        };
	    }
	    /**
	     * Configure.
	     *
	     * @param {object} params - An `object` of params to extend.
	     */
	    RestServiceProvider.prototype.configure = function (params) {
	        if (!(params instanceof Object)) {
	            throw new TypeError('Invalid argument: `config` must be an `Object`.');
	        }
	        angular.extend(this.config, params);
	        return this;
	    };
	    /*@ngInject*/
	    RestServiceProvider.prototype.$get = function ($http, $q, $window, $rootScope, $log) {
	        return new RestService($http, $q, $window, $rootScope, $log, this.config);
	    };
	    return RestServiceProvider;
	})();
	exports.RestServiceProvider = RestServiceProvider;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = RestService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXN0U2VydmljZS50cyJdLCJuYW1lcyI6WyJSZXN0U2VydmljZSIsIlJlc3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUmVzdFNlcnZpY2UuaW5pdCIsIlJlc3RTZXJ2aWNlLm1vY2t1cFJlc3BvbnNlIiwiUmVzdFNlcnZpY2UucHV0SGVhZGVyIiwiUmVzdFNlcnZpY2UucmVxdWVzdCIsIlJlc3RTZXJ2aWNlLnBvc3QiLCJSZXN0U2VydmljZS5wYXRjaCIsIlJlc3RTZXJ2aWNlLmdldCIsIlJlc3RTZXJ2aWNlLnB1dCIsIlJlc3RTZXJ2aWNlLnJlbW92ZSIsIlJlc3RTZXJ2aWNlUHJvdmlkZXIiLCJSZXN0U2VydmljZVByb3ZpZGVyLmNvbnN0cnVjdG9yIiwiUmVzdFNlcnZpY2VQcm92aWRlci5jb25maWd1cmUiLCJSZXN0U2VydmljZVByb3ZpZGVyLiRnZXQiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRDs7R0FFRztBQUVILGFBQWE7QUFDYjtJQVFJQSxxQkFDWUEsS0FBS0EsRUFDTEEsRUFBRUEsRUFDRkEsT0FBT0EsRUFDUEEsVUFBVUEsRUFDVkEsSUFBSUEsRUFDSkEsTUFBTUE7UUFFZEM7O1dBRUdBO1FBbEJYQSxpQkFtTENBO1FBMUtlQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFBQTtRQUNMQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFBQTtRQUNGQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtRQUNQQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFBQTtRQUNWQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtRQUNKQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFBQTtRQVZWQSxZQUFPQSxHQUFHQSxFQUFFQSxjQUFjQSxFQUFFQSxnQ0FBZ0NBLEVBQUVBLENBQUNBO1FBZ0JuRUEsSUFBSUEsa0JBQWtCQSxHQUFHQTtZQUNyQkEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsU0FB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LE1BQU1BLENBQUNBLENBQUNBO1FBRXBDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFREYsYUFBYUE7SUFDYkEsa0NBQUlBLEdBQUpBLFVBQUtBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBLFVBQVVBLEVBQUVBLElBQUlBO1FBQ3JDRyxNQUFNQSxDQUFDQSxJQUFJQSxXQUFXQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUM5RUEsQ0FBQ0E7SUFDTEgsMEJBQUNBO0FBQURBLENBQUNBLEFBMUJELElBMEJDO0FBR1EsMkJBQW1CLHVCQUgzQjtBQUVEO2tCQUFlLFdBQVcsQ0FBQztBQUNpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3R5cGVzLmQudHNcIiAvPlxuXG4vKipcbiAqIFJFU1QgY29tbXVuaWNhdGlvbiBhbmQgZXJyb3IgaGFuZGxpbmdcbiAqL1xuXG4vKkBuZ0luamVjdCovXG5jbGFzcyBSZXN0U2VydmljZSB7XG5cbiAgICBwdWJsaWMgdXJsO1xuXG4gICAgcHJpdmF0ZSBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcgfTtcbiAgICBwcml2YXRlIGlzT2ZmbGluZTtcbiAgICBwcml2YXRlIGlzTW9ja3VwRW5hYmxlZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlICRodHRwLFxuICAgICAgICBwcml2YXRlICRxLFxuICAgICAgICBwcml2YXRlICR3aW5kb3csXG4gICAgICAgIHByaXZhdGUgJHJvb3RTY29wZSxcbiAgICAgICAgcHJpdmF0ZSAkbG9nLFxuICAgICAgICBwcml2YXRlIGNvbmZpZykge1xuXG4gICAgICAgIC8qXG4gICAgICAgICBJbnRlcm5ldCBjb25uZWN0aW9uIG1vY2t1cC9vbmxpbmUgbm90aWZpY2F0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciB1cGRhdGVPbmxpbmVTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT2ZmbGluZSA9ICFuYXZpZ2F0b3Iub25MaW5lO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc09mZmxpbmUpIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRyZXN0Om9mZmxpbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckcmVzdDpvbmxpbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHVwZGF0ZU9ubGluZVN0YXR1cyk7XG4gICAgICAgICAgICAkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCB1cGRhdGVPbmxpbmVTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJHdpbmRvdy5hdHRhY2hFdmVudCgnb25saW5lJywgdXBkYXRlT25saW5lU3RhdHVzKTtcbiAgICAgICAgICAgICR3aW5kb3cuYXR0YWNoRXZlbnQoJ29mZmxpbmUnLCB1cGRhdGVPbmxpbmVTdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgIENvbmZpZ3VyYXRpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5pc01vY2t1cEVuYWJsZWQgPSBjb25maWcubW9ja3VwRW5hYmxlZDtcblxuICAgICAgICBpZiAodGhpcy5pc01vY2t1cEVuYWJsZWQpIHtcbiAgICAgICAgICAgICRsb2cud2FybignVXNpbmcgTW9ja3VwIERhdGEnKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXN0VVJMKSB7XG4gICAgICAgICAgICB0aGlzLnVybCA9IGNvbmZpZy5yZXN0VVJMLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmNoYXJBdCh0aGlzLnVybC5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cmwgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJGxvZy5pbmZvKCdSRVNUICcgKyB0aGlzLnVybCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHsgY29tbWFuZDogJ3ZlcnNpb24nIH0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdFNjb3BlLiRyZXN0VmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uICsgJy4nICsgcmVzdWx0LnJldmlzaW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvZy5pbmZvKCdSRVNUJywgdGhpcy4kcm9vdFNjb3BlLiRyZXN0VmVyc2lvbiwgbW9tZW50KHJlc3VsdC5kYXRlKS5mb3JtYXQoJ0RELk1NLllZWVkgaGg6bW0nKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2NrdXAgcmVzcG9uc2UgLSByZXR1cm4gSlNPTiBmaWxlIGZyb20gJ2RhdGEnIGZvbGRlciBpbnN0ZWFkIHNlcnZlciByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAgICogQHJldHVybnMge3Byb21pc2V9IC0gUmVxdWVzdCBwcm9taXNlXG4gICAgICovXG5cbiAgICBtb2NrdXBSZXNwb25zZShjb25maWcpIHtcbiAgICAgICAgdmFyIHJlcXVlc3Q7XG5cbiAgICAgICAgcmVxdWVzdCA9IHRoaXMuJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJ2RhdGEvJyArIGNvbmZpZy5jb21tYW5kICsgJy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVzcG9uc2UuZGF0YS5jb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2NrdXBFbmFibGVkICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoY29uZmlnLnBhcmFtcy5udW1iZXIgKiBjb25maWcucGFyYW1zLnNpemUsIChjb25maWcucGFyYW1zLm51bWJlciArIDEpICogY29uZmlnLnBhcmFtcy5zaXplKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm51bWJlck9mRWxlbWVudHMgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcmVxdWVzdCBoZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG5cbiAgICBwdXRIZWFkZXIobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgSFRUUCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kIC0gSFRUUCBtZXRob2QgZS5nLiBQVVQsIFBPU1QgZXRjLlxuICAgICAqIEBwYXJhbSBjb25maWcgLSBjb25maWcge2NvbW1hbmQ6ICdSRVNUIHNlcnZlciBlbmRwb2ludCBjb21tYW5kJywgcGFyYW1zLCBkYXRhfVxuICAgICAqIEByZXR1cm5zIHtwcm9taXNlfVxuICAgICAqL1xuXG4gICAgcmVxdWVzdChtZXRob2QsIGNvbmZpZykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG5cbiAgICAgICAgaWYgKCFjb25maWcuY29tbWFuZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSRVNUIEVycm9yOiBDb21tYW5kIGlzIHJlcXVpcmVkIGZvciBSRVNUIGNhbGwgOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcudXJsID0gdGhpcy51cmwgKyBjb25maWcuY29tbWFuZDtcbiAgICAgICAgY29uZmlnLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBhbmd1bGFyLmV4dGVuZCh0aGlzLmhlYWRlcnMsIGNvbmZpZy5oZWFkZXJzKTtcbiAgICAgICAgY29uZmlnLnBhcmFtcyA9IGNvbmZpZy5wYXJhbXMgfHwge307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb2NrdXBFbmFibGVkIHx8IGNvbmZpZy5tb2NrdXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vY2t1cFJlc3BvbnNlKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwKGNvbmZpZylcbiAgICAgICAgICAgIC5zdWNjZXNzKChkYXRhLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2cuZGVidWcoJ1JFU1BPTlNFICcsIGNvbmZpZy5jb21tYW5kICsgJzogJywgJ3N0YXR1czogJyArIHN0YXR1cyArIChkYXRhLmNvbnRlbnQgPyAnLCAnICsgKGRhdGEuY29udGVudCAmJiBkYXRhLmNvbnRlbnQubGVuZ3RoKSArICcgaXRlbXMnIDogJycpKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRsb2cud2FybignQXBwbGljYXRpb24gZXJyb3I6IFwiJyArIGRhdGEubWVzc2FnZSArICdcIiBmb3I6ICcgKyBKU09OLnN0cmluZ2lmeShjb25maWcpKTtcblxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcigoZGF0YSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIHBvc3QocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHBhdGNoKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQQVRDSCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgZ2V0KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1dChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUFVUJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICByZW1vdmUocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHBhcmFtcyk7XG4gICAgfVxufVxuXG5jbGFzcyBSZXN0U2VydmljZVByb3ZpZGVyIGltcGxlbWVudHMgbmcuSVNlcnZpY2VQcm92aWRlciB7XG5cbiAgICBwcml2YXRlIGNvbmZpZyA9IHtcbiAgICAgICAgcmVzdFVSTDogd2luZG93LmxvY2F0aW9uWydvcmlnaW4nXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gQW4gYG9iamVjdGAgb2YgcGFyYW1zIHRvIGV4dGVuZC5cbiAgICAgKi9cblxuICAgIGNvbmZpZ3VyZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCEocGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhcmd1bWVudDogYGNvbmZpZ2AgbXVzdCBiZSBhbiBgT2JqZWN0YC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMuY29uZmlnLCBwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICAkZ2V0KCRodHRwLCAkcSwgJHdpbmRvdywgJHJvb3RTY29wZSwgJGxvZykge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3RTZXJ2aWNlKCRodHRwLCAkcSwgJHdpbmRvdywgJHJvb3RTY29wZSwgJGxvZywgdGhpcy5jb25maWcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdFNlcnZpY2U7XG5leHBvcnQgeyBSZXN0U2VydmljZVByb3ZpZGVyLCBSZXN0U2VydmljZSB9O1xuIl19

/***/ },
/* 10 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/*@ngInject*/
	var ConfigServiceProvider = (function () {
	    function ConfigServiceProvider() {
	        this.config = {};
	        angular.extend(this.config, window['ALERTER_CONFIG']);
	    }
	    /**
	     * Configure.
	     *
	     * @param {object} params - An `object` of params to extend.
	     */
	    ConfigServiceProvider.prototype.configure = function (params) {
	        if (!(params instanceof Object)) {
	            throw new TypeError('Invalid argument: `config` must be an `Object`.');
	        }
	        angular.extend(this.config, params);
	        return this;
	    };
	    ConfigServiceProvider.prototype.$get = function () {
	        return this.config;
	    };
	    return ConfigServiceProvider;
	})();
	exports.ConfigServiceProvider = ConfigServiceProvider;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ConfigServiceProvider;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpZ1NlcnZpY2UudHMiXSwibmFtZXMiOlsiQ29uZmlnU2VydmljZVByb3ZpZGVyIiwiQ29uZmlnU2VydmljZVByb3ZpZGVyLmNvbnN0cnVjdG9yIiwiQ29uZmlnU2VydmljZVByb3ZpZGVyLmNvbmZpZ3VyZSIsIkNvbmZpZ1NlcnZpY2VQcm92aWRlci4kZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFFcEQsYUFBYTtBQUNiO0lBSUlBO1FBRlFDLFdBQU1BLEdBQUdBLEVBQUVBLENBQUNBO1FBR2hCQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO0lBQzFEQSxDQUFDQTtJQUdERDs7OztPQUlHQTtJQUVIQSx5Q0FBU0EsR0FBVEEsVUFBVUEsTUFBTUE7UUFDWkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsWUFBWUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLE1BQU1BLElBQUlBLFNBQVNBLENBQUNBLGlEQUFpREEsQ0FBQ0EsQ0FBQ0E7UUFDM0VBLENBQUNBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBRXBDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFREYsb0NBQUlBLEdBQUpBO1FBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUNMSCw0QkFBQ0E7QUFBREEsQ0FBQ0EsQUE1QkQsSUE0QkM7QUFFUSw2QkFBcUIseUJBRjdCO0FBR0Q7a0JBQWUscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuLypAbmdJbmplY3QqL1xuY2xhc3MgQ29uZmlnU2VydmljZVByb3ZpZGVyIGltcGxlbWVudHMgbmcuSVNlcnZpY2VQcm92aWRlciB7XG5cbiAgICBwcml2YXRlIGNvbmZpZyA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMuY29uZmlnLCB3aW5kb3dbJ0FMRVJURVJfQ09ORklHJ10pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIEFuIGBvYmplY3RgIG9mIHBhcmFtcyB0byBleHRlbmQuXG4gICAgICovXG5cbiAgICBjb25maWd1cmUocGFyYW1zKSB7XG4gICAgICAgIGlmICghKHBhcmFtcyBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQ6IGBjb25maWdgIG11c3QgYmUgYW4gYE9iamVjdGAuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmd1bGFyLmV4dGVuZCh0aGlzLmNvbmZpZywgcGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAkZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb25maWdTZXJ2aWNlUHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1NlcnZpY2VQcm92aWRlcjtcbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/**
	 * HTTP Interceptor for global error handling
	 */
	function replacer(key, value) {
	    if (typeof value === "string" && value.length > 35) {
	        return value.substring(0, 34) + "...";
	    }
	    return value;
	}
	/*@ngInject*/
	var HttpInterceptor = (function () {
	    function HttpInterceptor($rootScope, $q, $log) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.$q = $q;
	        this.$log = $log;
	        this.request = function (config) {
	            if (config.command) {
	                _this.$log.debug(config.method + " " + config.command +
	                    ": params " + JSON.stringify(config.params, replacer) +
	                    ", headers " + JSON.stringify(config.headers, replacer) +
	                    (config.data ? ", body: " + JSON.stringify(config.data, replacer) : ""));
	            }
	            return config;
	        };
	        this.responseError = function (rejection) {
	            _this.$log.error('HTTP Response Error, status: ' + rejection.status + ' message: ' + JSON.stringify(rejection.data, replacer));
	            rejection.message = rejection.data && rejection.data.error_description ? rejection.data.error_description : 'Unknown server error';
	            rejection.url = rejection.config.url;
	            switch (rejection.status) {
	                case 0:
	                case 500:
	                case 502:
	                case 503:
	                    _this.$rootScope.$broadcast('$rest:error:communication', rejection);
	                    break;
	                case 400:
	                case 405:
	                    _this.$rootScope.$broadcast('$rest:error:request', rejection);
	                    break;
	                case 401:
	                case 403:
	                    _this.$rootScope.$broadcast('$rest:error:authorization', rejection);
	                    break;
	            }
	            return _this.$q.reject(rejection);
	        };
	    }
	    /*@ngInject*/
	    HttpInterceptor.factory = function ($rootScope, $q, $log) {
	        return new HttpInterceptor($rootScope, $q, $log);
	    };
	    return HttpInterceptor;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpInterceptor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHR0cEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbInJlcGxhY2VyIiwiSHR0cEludGVyY2VwdG9yIiwiSHR0cEludGVyY2VwdG9yLmNvbnN0cnVjdG9yIiwiSHR0cEludGVyY2VwdG9yLmZhY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRDs7R0FFRztBQUVILGtCQUFrQixHQUFHLEVBQUUsS0FBSztJQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsS0FBS0EsS0FBS0EsUUFBUUEsSUFBSUEsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakRBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUNBLEVBQUVBLENBQUNBLEdBQUNBLEtBQUtBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtBQUNqQkEsQ0FBQ0E7QUFFRCxhQUFhO0FBQ2I7SUFPSUMseUJBQW9CQSxVQUErQkEsRUFDL0JBLEVBQWVBLEVBQ2ZBLElBQW1CQTtRQVQzQ0MsaUJBa0RDQTtRQTNDdUJBLGVBQVVBLEdBQVZBLFVBQVVBLENBQXFCQTtRQUMvQkEsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBYUE7UUFDZkEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBZUE7UUFHdkNBLFlBQU9BLEdBQUdBLFVBQUNBLE1BQU1BO1lBQ2JBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsS0FBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0E7b0JBQ2hEQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQTtvQkFDckRBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLEVBQUVBLFFBQVFBLENBQUNBO29CQUN2REEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FDMUVBLENBQUNBO1lBQ05BLENBQUNBO1lBRURBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO1FBQ2xCQSxDQUFDQSxDQUFDQTtRQUVGQSxrQkFBYUEsR0FBR0EsVUFBQ0EsU0FBU0E7WUFFdEJBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLCtCQUErQkEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFOUhBLFNBQVNBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxzQkFBc0JBLENBQUNBO1lBQ25JQSxTQUFTQSxDQUFDQSxHQUFHQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtZQUVyQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDUEEsS0FBS0EsR0FBR0EsQ0FBQ0E7Z0JBQ1RBLEtBQUtBLEdBQUdBLENBQUNBO2dCQUNUQSxLQUFLQSxHQUFHQTtvQkFDSkEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDbkVBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxHQUFHQSxDQUFDQTtnQkFDVEEsS0FBS0EsR0FBR0E7b0JBQ0pBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLHFCQUFxQkEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQzdEQSxLQUFLQSxDQUFDQTtnQkFDVkEsS0FBS0EsR0FBR0EsQ0FBQ0E7Z0JBQ1RBLEtBQUtBLEdBQUdBO29CQUNKQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO29CQUNuRUEsS0FBS0EsQ0FBQ0E7WUFDZEEsQ0FBQ0E7WUFFREEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDckNBLENBQUNBLENBQUFBO0lBdkNEQSxDQUFDQTtJQVJERCxhQUFhQTtJQUNDQSx1QkFBT0EsR0FBckJBLFVBQXNCQSxVQUErQkEsRUFBRUEsRUFBZUEsRUFBRUEsSUFBbUJBO1FBQ3ZGRSxNQUFNQSxDQUFDQSxJQUFJQSxlQUFlQSxDQUFDQSxVQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUE2Q0xGLHNCQUFDQTtBQUFEQSxDQUFDQSxBQWxERCxJQWtEQztBQUVEO2tCQUFlLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3R5cGVzLmQudHNcIiAvPlxuXG4vKipcbiAqIEhUVFAgSW50ZXJjZXB0b3IgZm9yIGdsb2JhbCBlcnJvciBoYW5kbGluZ1xuICovXG5cbmZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLmxlbmd0aCA+IDM1KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwzNCkrXCIuLi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKkBuZ0luamVjdCovXG5jbGFzcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIHB1YmxpYyBzdGF0aWMgZmFjdG9yeSgkcm9vdFNjb3BlOm5nLklSb290U2NvcGVTZXJ2aWNlLCAkcTpuZy5JUVNlcnZpY2UsICRsb2c6bmcuSUxvZ1NlcnZpY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSW50ZXJjZXB0b3IoJHJvb3RTY29wZSwgJHEsICRsb2cpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHJvb3RTY29wZTpuZy5JUm9vdFNjb3BlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRxOm5nLklRU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlICRsb2c6bmcuSUxvZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICByZXF1ZXN0ID0gKGNvbmZpZykgPT57XG4gICAgICAgIGlmIChjb25maWcuY29tbWFuZCkge1xuICAgICAgICAgICAgdGhpcy4kbG9nLmRlYnVnKGNvbmZpZy5tZXRob2QgKyBcIiBcIiArIGNvbmZpZy5jb21tYW5kICtcbiAgICAgICAgICAgICAgICBcIjogcGFyYW1zIFwiICsgSlNPTi5zdHJpbmdpZnkoY29uZmlnLnBhcmFtcywgcmVwbGFjZXIpICtcbiAgICAgICAgICAgICAgICBcIiwgaGVhZGVycyBcIiArIEpTT04uc3RyaW5naWZ5KGNvbmZpZy5oZWFkZXJzLCByZXBsYWNlcikgK1xuICAgICAgICAgICAgICAgIChjb25maWcuZGF0YSA/IFwiLCBib2R5OiBcIiArIEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhLCByZXBsYWNlcikgOiBcIlwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIHJlc3BvbnNlRXJyb3IgPSAocmVqZWN0aW9uKSA9PiB7XG5cbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdIVFRQIFJlc3BvbnNlIEVycm9yLCBzdGF0dXM6ICcgKyByZWplY3Rpb24uc3RhdHVzICsgJyBtZXNzYWdlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVqZWN0aW9uLmRhdGEsIHJlcGxhY2VyKSk7XG5cbiAgICAgICAgcmVqZWN0aW9uLm1lc3NhZ2UgPSByZWplY3Rpb24uZGF0YSAmJiByZWplY3Rpb24uZGF0YS5lcnJvcl9kZXNjcmlwdGlvbiA/IHJlamVjdGlvbi5kYXRhLmVycm9yX2Rlc2NyaXB0aW9uIDogJ1Vua25vd24gc2VydmVyIGVycm9yJztcbiAgICAgICAgcmVqZWN0aW9uLnVybCA9IHJlamVjdGlvbi5jb25maWcudXJsO1xuXG4gICAgICAgIHN3aXRjaCAocmVqZWN0aW9uLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCckcmVzdDplcnJvcjpjb21tdW5pY2F0aW9uJywgcmVqZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgY2FzZSA0MDU6XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJyRyZXN0OmVycm9yOnJlcXVlc3QnLCByZWplY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290U2NvcGUuJGJyb2FkY2FzdCgnJHJlc3Q6ZXJyb3I6YXV0aG9yaXphdGlvbicsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4kcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBJbnRlcmNlcHRvcjtcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/**
	 * Small utils
	 */
	/*@ngInject*/
	var UtilsService = (function () {
	    function UtilsService($filter, $translate, $dateFormat) {
	        this.$filter = $filter;
	        this.$translate = $translate;
	        this.$dateFormat = $dateFormat;
	    }
	    /*
	     Get form fields that changed, are part of model and convert them to form acceptable by server
	     */
	    UtilsService.prototype.formChanges = function (form, model) {
	        var changes = {};
	        if (!model) {
	            return changes;
	        }
	        angular.forEach(form, function (value, key) {
	            if (key[0] !== '$' && !value.$pristine) {
	                if (model[key] !== undefined) {
	                    changes[key] = model[key];
	                }
	            }
	        });
	        return changes;
	    };
	    /*
	     Manually check $dirty and $valid
	     when fields in sub-forms shouldn't be validated
	     */
	    UtilsService.prototype.isReadyToSave = function (form, exclusions) {
	        var valid = true;
	        var dirty = false;
	        exclusions = exclusions || [];
	        angular.forEach(form, function (value, key) {
	            if (key[0] !== '$' && exclusions.indexOf(key) < 0) {
	                if (value.$dirty) {
	                    dirty = true;
	                }
	                valid = valid && value.$valid;
	            }
	        });
	        return dirty && valid;
	    };
	    /*
	     Check if object has any own properties
	     */
	    UtilsService.prototype.isEmpty = function (obj) {
	        if (obj == null)
	            return true;
	        if (obj.length > 0)
	            return false;
	        if (obj.length === 0)
	            return true;
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key))
	                return false;
	        }
	        return true;
	    };
	    /*
	     Search in Array for first element (quicker than Array.prototype.filter)
	     */
	    UtilsService.prototype.arrayFilter = function (array, expression, flag) {
	        if (flag === void 0) { flag = true; }
	        var resultArray = this.$filter('filter')(array, expression, flag);
	        return resultArray;
	    };
	    UtilsService.prototype.arraySearch = function (array, expression, flag) {
	        if (flag === void 0) { flag = true; }
	        var resultArray = this.$filter('filter')(array, expression, flag);
	        return resultArray[0];
	    };
	    UtilsService.prototype.formatDate = function (date) {
	        return date ? moment.unix(date).format(this.$dateFormat) : '';
	    };
	    return UtilsService;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UtilsService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXRpbHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlV0aWxzU2VydmljZSIsIlV0aWxzU2VydmljZS5jb25zdHJ1Y3RvciIsIlV0aWxzU2VydmljZS5mb3JtQ2hhbmdlcyIsIlV0aWxzU2VydmljZS5pc1JlYWR5VG9TYXZlIiwiVXRpbHNTZXJ2aWNlLmlzRW1wdHkiLCJVdGlsc1NlcnZpY2UuYXJyYXlGaWx0ZXIiLCJVdGlsc1NlcnZpY2UuYXJyYXlTZWFyY2giLCJVdGlsc1NlcnZpY2UuZm9ybWF0RGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBRXBEOztHQUVHO0FBRUgsYUFBYTtBQUNiO0lBRUlBLHNCQUFvQkEsT0FBT0EsRUFDUEEsVUFBVUEsRUFDVkEsV0FBV0E7UUFGWEMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBQUE7UUFDUEEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBQUE7UUFDVkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQUFBO0lBQy9CQSxDQUFDQTtJQUVERDs7T0FFR0E7SUFDSEEsa0NBQVdBLEdBQVhBLFVBQVlBLElBQUlBLEVBQUVBLEtBQUtBO1FBQ25CRSxJQUFJQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRURBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLFVBQUNBLEtBQUtBLEVBQUVBLEdBQUdBO1lBQzdCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdB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QSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFFRE4saUNBQVVBLEdBQVZBLFVBQVdBLElBQUlBO1FBQ1hPLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ2xFQSxDQUFDQTtJQUNMUCxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFyRkQsSUFxRkM7QUFFRDtrQkFBZSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90eXBlcy5kLnRzXCIgLz5cblxuLyoqXG4gKiBTbWFsbCB1dGlsc1xuICovXG5cbi8qQG5nSW5qZWN0Ki9cbmNsYXNzIFV0aWxzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRmaWx0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkdHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgJGRhdGVGb3JtYXQpIHtcbiAgICB9XG5cbiAgICAvKlxuICAgICBHZXQgZm9ybSBmaWVsZHMgdGhhdCBjaGFuZ2VkLCBhcmUgcGFydCBvZiBtb2RlbCBhbmQgY29udmVydCB0aGVtIHRvIGZvcm0gYWNjZXB0YWJsZSBieSBzZXJ2ZXJcbiAgICAgKi9cbiAgICBmb3JtQ2hhbmdlcyhmb3JtLCBtb2RlbCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IHt9O1xuXG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGZvcm0sICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5WzBdICE9PSAnJCcgJiYgIXZhbHVlLiRwcmlzdGluZSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc1trZXldID0gbW9kZWxba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH1cblxuICAgIC8qXG4gICAgIE1hbnVhbGx5IGNoZWNrICRkaXJ0eSBhbmQgJHZhbGlkXG4gICAgIHdoZW4gZmllbGRzIGluIHN1Yi1mb3JtcyBzaG91bGRuJ3QgYmUgdmFsaWRhdGVkXG4gICAgICovXG4gICAgaXNSZWFkeVRvU2F2ZShmb3JtLCBleGNsdXNpb25zKSB7XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGV4Y2x1c2lvbnMgPSBleGNsdXNpb25zIHx8IFtdO1xuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChmb3JtLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleVswXSAhPT0gJyQnICYmIGV4Y2x1c2lvbnMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS4kZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWxpZCA9IHZhbGlkICYmIHZhbHVlLiR2YWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5ICYmIHZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgIENoZWNrIGlmIG9iamVjdCBoYXMgYW55IG93biBwcm9wZXJ0aWVzXG4gICAgICovXG5cbiAgICBpc0VtcHR5KG9iaikge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAob2JqLmxlbmd0aCA+IDApICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5sZW5ndGggPT09IDApICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgIFNlYXJjaCBpbiBBcnJheSBmb3IgZmlyc3QgZWxlbWVudCAocXVpY2tlciB0aGFuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIpXG4gICAgICovXG5cbiAgICBhcnJheUZpbHRlcihhcnJheSwgZXhwcmVzc2lvbiwgZmxhZyA9IHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdEFycmF5ID0gdGhpcy4kZmlsdGVyKCdmaWx0ZXInKShhcnJheSwgZXhwcmVzc2lvbiwgZmxhZyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdEFycmF5O1xuICAgIH1cblxuICAgIGFycmF5U2VhcmNoKGFycmF5LCBleHByZXNzaW9uLCBmbGFnID0gdHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0QXJyYXkgPSB0aGlzLiRmaWx0ZXIoJ2ZpbHRlcicpKGFycmF5LCBleHByZXNzaW9uLCBmbGFnKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0QXJyYXlbMF07XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlID8gbW9tZW50LnVuaXgoZGF0ZSkuZm9ybWF0KHRoaXMuJGRhdGVGb3JtYXQpIDogJyc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1NlcnZpY2U7XG4iXX0=

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	 * jsrsasign 4.9.2 (c) 2010-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	
	/*
	yahoo-min.js
	Copyright (c) 2011, Yahoo! Inc. All rights reserved.
	Code licensed under the BSD License:
	http://developer.yahoo.com/yui/license.html
	version: 2.9.0
	*/
	if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var b=arguments,g=null,e,c,f;for(e=0;e<b.length;e=e+1){f=(""+b[e]).split(".");g=YAHOO;for(c=(f[0]=="YAHOO")?1:0;c<f.length;c=c+1){g[f[c]]=g[f[c]]||{};g=g[f[c]];}}return g;};YAHOO.log=function(d,a,c){var b=YAHOO.widget.Logger;if(b&&b.log){return b.log(d,a,c);}else{return false;}};YAHOO.register=function(a,f,e){var k=YAHOO.env.modules,c,j,h,g,d;if(!k[a]){k[a]={versions:[],builds:[]};}c=k[a];j=e.version;h=e.build;g=YAHOO.env.listeners;c.name=a;c.version=j;c.build=h;c.versions.push(j);c.builds.push(h);c.mainClass=f;for(d=0;d<g.length;d=d+1){g[d](c);}if(f){f.VERSION=j;f.BUILD=h;}else{YAHOO.log("mainClass is undefined for module "+a,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null;};YAHOO.env.parseUA=function(d){var e=function(i){var j=0;return parseFloat(i.replace(/\./g,function(){return(j++==1)?"":".";}));},h=navigator,g={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:h&&h.cajaVersion,secure:false,os:null},c=d||(navigator&&navigator.userAgent),f=window&&window.location,b=f&&f.href,a;g.secure=b&&(b.toLowerCase().indexOf("https")===0);if(c){if((/windows|win32/i).test(c)){g.os="windows";}else{if((/macintosh/i).test(c)){g.os="macintosh";}else{if((/rhino/i).test(c)){g.os="rhino";}}}if((/KHTML/).test(c)){g.webkit=1;}a=c.match(/AppleWebKit\/([^\s]*)/);if(a&&a[1]){g.webkit=e(a[1]);if(/ Mobile\//.test(c)){g.mobile="Apple";a=c.match(/OS ([^\s]*)/);if(a&&a[1]){a=e(a[1].replace("_","."));}g.ios=a;g.ipad=g.ipod=g.iphone=0;a=c.match(/iPad|iPod|iPhone/);if(a&&a[0]){g[a[0].toLowerCase()]=g.ios;}}else{a=c.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);if(a){g.mobile=a[0];}if(/webOS/.test(c)){g.mobile="WebOS";a=c.match(/webOS\/([^\s]*);/);if(a&&a[1]){g.webos=e(a[1]);}}if(/ Android/.test(c)){g.mobile="Android";a=c.match(/Android ([^\s]*);/);if(a&&a[1]){g.android=e(a[1]);}}}a=c.match(/Chrome\/([^\s]*)/);if(a&&a[1]){g.chrome=e(a[1]);}else{a=c.match(/AdobeAIR\/([^\s]*)/);if(a){g.air=a[0];}}}if(!g.webkit){a=c.match(/Opera[\s\/]([^\s]*)/);if(a&&a[1]){g.opera=e(a[1]);a=c.match(/Version\/([^\s]*)/);if(a&&a[1]){g.opera=e(a[1]);}a=c.match(/Opera Mini[^;]*/);if(a){g.mobile=a[0];}}else{a=c.match(/MSIE\s([^;]*)/);if(a&&a[1]){g.ie=e(a[1]);}else{a=c.match(/Gecko\/([^\s]*)/);if(a){g.gecko=1;a=c.match(/rv:([^\s\)]*)/);if(a&&a[1]){g.gecko=e(a[1]);}}}}}}return g;};YAHOO.env.ua=YAHOO.env.parseUA();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var b=YAHOO_config.listener,a=YAHOO.env.listeners,d=true,c;if(b){for(c=0;c<a.length;c++){if(a[c]==b){d=false;break;}}if(d){a.push(b);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var f=YAHOO.lang,a=Object.prototype,c="[object Array]",h="[object Function]",i="[object Object]",b=[],g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#x60;"},d=["toString","valueOf"],e={isArray:function(j){return a.toString.apply(j)===c;},isBoolean:function(j){return typeof j==="boolean";},isFunction:function(j){return(typeof j==="function")||a.toString.apply(j)===h;},isNull:function(j){return j===null;},isNumber:function(j){return typeof j==="number"&&isFinite(j);},isObject:function(j){return(j&&(typeof j==="object"||f.isFunction(j)))||false;},isString:function(j){return typeof j==="string";},isUndefined:function(j){return typeof j==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(l,k){var j,n,m;for(j=0;j<d.length;j=j+1){n=d[j];m=k[n];if(f.isFunction(m)&&m!=a[n]){l[n]=m;}}}:function(){},escapeHTML:function(j){return j.replace(/[&<>"'\/`]/g,function(k){return g[k];});},extend:function(m,n,l){if(!n||!m){throw new Error("extend failed, please check that "+"all dependencies are included.");}var k=function(){},j;k.prototype=n.prototype;m.prototype=new k();m.prototype.constructor=m;m.superclass=n.prototype;if(n.prototype.constructor==a.constructor){n.prototype.constructor=n;}if(l){for(j in l){if(f.hasOwnProperty(l,j)){m.prototype[j]=l[j];}}f._IEEnumFix(m.prototype,l);}},augmentObject:function(n,m){if(!m||!n){throw new Error("Absorb failed, verify dependencies.");}var j=arguments,l,o,k=j[2];if(k&&k!==true){for(l=2;l<j.length;l=l+1){n[j[l]]=m[j[l]];}}else{for(o in m){if(k||!(o in n)){n[o]=m[o];}}f._IEEnumFix(n,m);}return n;},augmentProto:function(m,l){if(!l||!m){throw new Error("Augment failed, verify dependencies.");}var j=[m.prototype,l.prototype],k;for(k=2;k<arguments.length;k=k+1){j.push(arguments[k]);}f.augmentObject.apply(this,j);return m;},dump:function(j,p){var l,n,r=[],t="{...}",k="f(){...}",q=", ",m=" => ";if(!f.isObject(j)){return j+"";}else{if(j instanceof Date||("nodeType" in j&&"tagName" in j)){return j;}else{if(f.isFunction(j)){return k;}}}p=(f.isNumber(p))?p:3;if(f.isArray(j)){r.push("[");for(l=0,n=j.length;l<n;l=l+1){if(f.isObject(j[l])){r.push((p>0)?f.dump(j[l],p-1):t);}else{r.push(j[l]);}r.push(q);}if(r.length>1){r.pop();}r.push("]");}else{r.push("{");for(l in j){if(f.hasOwnProperty(j,l)){r.push(l+m);if(f.isObject(j[l])){r.push((p>0)?f.dump(j[l],p-1):t);}else{r.push(j[l]);}r.push(q);}}if(r.length>1){r.pop();}r.push("}");}return r.join("");},substitute:function(x,y,E,l){var D,C,B,G,t,u,F=[],p,z=x.length,A="dump",r=" ",q="{",m="}",n,w;for(;;){D=x.lastIndexOf(q,z);if(D<0){break;}C=x.indexOf(m,D);if(D+1>C){break;}p=x.substring(D+1,C);G=p;u=null;B=G.indexOf(r);if(B>-1){u=G.substring(B+1);G=G.substring(0,B);}t=y[G];if(E){t=E(G,t,u);}if(f.isObject(t)){if(f.isArray(t)){t=f.dump(t,parseInt(u,10));}else{u=u||"";n=u.indexOf(A);if(n>-1){u=u.substring(4);}w=t.toString();if(w===i||n>-1){t=f.dump(t,parseInt(u,10));}else{t=w;}}}else{if(!f.isString(t)&&!f.isNumber(t)){t="~-"+F.length+"-~";F[F.length]=p;}}x=x.substring(0,D)+t+x.substring(C+1);if(l===false){z=D-1;}}for(D=F.length-1;D>=0;D=D-1){x=x.replace(new RegExp("~-"+D+"-~"),"{"+F[D]+"}","g");}return x;},trim:function(j){try{return j.replace(/^\s+|\s+$/g,"");}catch(k){return j;
	}},merge:function(){var n={},k=arguments,j=k.length,m;for(m=0;m<j;m=m+1){f.augmentObject(n,k[m],true);}return n;},later:function(t,k,u,n,p){t=t||0;k=k||{};var l=u,s=n,q,j;if(f.isString(u)){l=k[u];}if(!l){throw new TypeError("method undefined");}if(!f.isUndefined(n)&&!f.isArray(s)){s=[n];}q=function(){l.apply(k,s||b);};j=(p)?setInterval(q,t):setTimeout(q,t);return{interval:p,cancel:function(){if(this.interval){clearInterval(j);}else{clearTimeout(j);}}};},isValue:function(j){return(f.isObject(j)||f.isString(j)||f.isNumber(j)||f.isBoolean(j));}};f.hasOwnProperty=(a.hasOwnProperty)?function(j,k){return j&&j.hasOwnProperty&&j.hasOwnProperty(k);}:function(j,k){return !f.isUndefined(j[k])&&j.constructor.prototype[k]!==j[k];};e.augmentObject(f,e,true);YAHOO.util.Lang=f;f.augment=f.augmentProto;YAHOO.augment=f.augmentProto;YAHOO.extend=f.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.9.0",build:"2800"});
	
	/*! CryptoJS v3.1.2 core-fix.js
	 * code.google.com/p/crypto-js
	 * (c) 2009-2013 by Jeff Mott. All rights reserved.
	 * code.google.com/p/crypto-js/wiki/License
	 * THIS IS FIX of 'core.js' to fix Hmac issue.
	 * https://code.google.com/p/crypto-js/issues/detail?id=84
	 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
	 */
	var CryptoJS=CryptoJS||(function(e,g){var a={};var b=a.lib={};var j=b.Base=(function(){function n(){}return{extend:function(p){n.prototype=this;var o=new n();if(p){o.mixIn(p)}if(!o.hasOwnProperty("init")){o.init=function(){o.$super.init.apply(this,arguments)}}o.init.prototype=o;o.$super=this;return o},create:function(){var o=this.extend();o.init.apply(o,arguments);return o},init:function(){},mixIn:function(p){for(var o in p){if(p.hasOwnProperty(o)){this[o]=p[o]}}if(p.hasOwnProperty("toString")){this.toString=p.toString}},clone:function(){return this.init.prototype.extend(this)}}}());var l=b.WordArray=j.extend({init:function(o,n){o=this.words=o||[];if(n!=g){this.sigBytes=n}else{this.sigBytes=o.length*4}},toString:function(n){return(n||h).stringify(this)},concat:function(t){var q=this.words;var p=t.words;var n=this.sigBytes;var s=t.sigBytes;this.clamp();if(n%4){for(var r=0;r<s;r++){var o=(p[r>>>2]>>>(24-(r%4)*8))&255;q[(n+r)>>>2]|=o<<(24-((n+r)%4)*8)}}else{for(var r=0;r<s;r+=4){q[(n+r)>>>2]=p[r>>>2]}}this.sigBytes+=s;return this},clamp:function(){var o=this.words;var n=this.sigBytes;o[n>>>2]&=4294967295<<(32-(n%4)*8);o.length=e.ceil(n/4)},clone:function(){var n=j.clone.call(this);n.words=this.words.slice(0);return n},random:function(p){var o=[];for(var n=0;n<p;n+=4){o.push((e.random()*4294967296)|0)}return new l.init(o,p)}});var m=a.enc={};var h=m.Hex={stringify:function(p){var r=p.words;var o=p.sigBytes;var q=[];for(var n=0;n<o;n++){var s=(r[n>>>2]>>>(24-(n%4)*8))&255;q.push((s>>>4).toString(16));q.push((s&15).toString(16))}return q.join("")},parse:function(p){var n=p.length;var q=[];for(var o=0;o<n;o+=2){q[o>>>3]|=parseInt(p.substr(o,2),16)<<(24-(o%8)*4)}return new l.init(q,n/2)}};var d=m.Latin1={stringify:function(q){var r=q.words;var p=q.sigBytes;var n=[];for(var o=0;o<p;o++){var s=(r[o>>>2]>>>(24-(o%4)*8))&255;n.push(String.fromCharCode(s))}return n.join("")},parse:function(p){var n=p.length;var q=[];for(var o=0;o<n;o++){q[o>>>2]|=(p.charCodeAt(o)&255)<<(24-(o%4)*8)}return new l.init(q,n)}};var c=m.Utf8={stringify:function(n){try{return decodeURIComponent(escape(d.stringify(n)))}catch(o){throw new Error("Malformed UTF-8 data")}},parse:function(n){return d.parse(unescape(encodeURIComponent(n)))}};var i=b.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new l.init();this._nDataBytes=0},_append:function(n){if(typeof n=="string"){n=c.parse(n)}this._data.concat(n);this._nDataBytes+=n.sigBytes},_process:function(w){var q=this._data;var x=q.words;var n=q.sigBytes;var t=this.blockSize;var v=t*4;var u=n/v;if(w){u=e.ceil(u)}else{u=e.max((u|0)-this._minBufferSize,0)}var s=u*t;var r=e.min(s*4,n);if(s){for(var p=0;p<s;p+=t){this._doProcessBlock(x,p)}var o=x.splice(0,s);q.sigBytes-=r}return new l.init(o,r)},clone:function(){var n=j.clone.call(this);n._data=this._data.clone();return n},_minBufferSize:0});var f=b.Hasher=i.extend({cfg:j.extend(),init:function(n){this.cfg=this.cfg.extend(n);this.reset()},reset:function(){i.reset.call(this);this._doReset()},update:function(n){this._append(n);this._process();return this},finalize:function(n){if(n){this._append(n)}var o=this._doFinalize();return o},blockSize:512/32,_createHelper:function(n){return function(p,o){return new n.init(o).finalize(p)}},_createHmacHelper:function(n){return function(p,o){return new k.HMAC.init(n,o).finalize(p)}}});var k=a.algo={};return a}(Math));
	/*
	CryptoJS v3.1.2 x64-core-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(g){var a=CryptoJS,f=a.lib,e=f.Base,h=f.WordArray,a=a.x64={};a.Word=e.extend({init:function(b,c){this.high=b;this.low=c}});a.WordArray=e.extend({init:function(b,c){b=this.words=b||[];this.sigBytes=c!=g?c:8*b.length},toX32:function(){for(var b=this.words,c=b.length,a=[],d=0;d<c;d++){var e=b[d];a.push(e.high);a.push(e.low)}return h.create(a,this.sigBytes)},clone:function(){for(var b=e.clone.call(this),c=b.words=this.words.slice(0),a=c.length,d=0;d<a;d++)c[d]=c[d].clone();return b}})})();
	
	/*
	CryptoJS v3.1.2 hmac-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var c=CryptoJS,k=c.enc.Utf8;c.algo.HMAC=c.lib.Base.extend({init:function(a,b){a=this._hasher=new a.init;"string"==typeof b&&(b=k.parse(b));var c=a.blockSize,e=4*c;b.sigBytes>e&&(b=a.finalize(b));b.clamp();for(var f=this._oKey=b.clone(),g=this._iKey=b.clone(),h=f.words,j=g.words,d=0;d<c;d++)h[d]^=1549556828,j[d]^=909522486;f.sigBytes=g.sigBytes=e;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=
	this._hasher;a=b.finalize(a);b.reset();return b.finalize(this._oKey.clone().concat(a))}})})();
	
	/*
	CryptoJS v3.1.2 sha256-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(k){for(var g=CryptoJS,h=g.lib,v=h.WordArray,j=h.Hasher,h=g.algo,s=[],t=[],u=function(q){return 4294967296*(q-(q|0))|0},l=2,b=0;64>b;){var d;a:{d=l;for(var w=k.sqrt(d),r=2;r<=w;r++)if(!(d%r)){d=!1;break a}d=!0}d&&(8>b&&(s[b]=u(k.pow(l,0.5))),t[b]=u(k.pow(l,1/3)),b++);l++}var n=[],h=h.SHA256=j.extend({_doReset:function(){this._hash=new v.init(s.slice(0))},_doProcessBlock:function(q,h){for(var a=this._hash.words,c=a[0],d=a[1],b=a[2],k=a[3],f=a[4],g=a[5],j=a[6],l=a[7],e=0;64>e;e++){if(16>e)n[e]=
	q[h+e]|0;else{var m=n[e-15],p=n[e-2];n[e]=((m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3)+n[e-7]+((p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10)+n[e-16]}m=l+((f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25))+(f&g^~f&j)+t[e]+n[e];p=((c<<30|c>>>2)^(c<<19|c>>>13)^(c<<10|c>>>22))+(c&d^c&b^d&b);l=j;j=g;g=f;f=k+m|0;k=b;b=d;d=c;c=m+p|0}a[0]=a[0]+c|0;a[1]=a[1]+d|0;a[2]=a[2]+b|0;a[3]=a[3]+k|0;a[4]=a[4]+f|0;a[5]=a[5]+g|0;a[6]=a[6]+j|0;a[7]=a[7]+l|0},_doFinalize:function(){var d=this._data,b=d.words,a=8*this._nDataBytes,c=8*d.sigBytes;
	b[c>>>5]|=128<<24-c%32;b[(c+64>>>9<<4)+14]=k.floor(a/4294967296);b[(c+64>>>9<<4)+15]=a;d.sigBytes=4*b.length;this._process();return this._hash},clone:function(){var b=j.clone.call(this);b._hash=this._hash.clone();return b}});g.SHA256=j._createHelper(h);g.HmacSHA256=j._createHmacHelper(h)})(Math);
	
	/*
	CryptoJS v3.1.2 sha224-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var b=CryptoJS,d=b.lib.WordArray,a=b.algo,c=a.SHA256,a=a.SHA224=c.extend({_doReset:function(){this._hash=new d.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);a.sigBytes-=4;return a}});b.SHA224=c._createHelper(a);b.HmacSHA224=c._createHmacHelper(a)})();
	
	/*
	CryptoJS v3.1.2 sha512-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){function a(){return d.create.apply(d,arguments)}for(var n=CryptoJS,r=n.lib.Hasher,e=n.x64,d=e.Word,T=e.WordArray,e=n.algo,ea=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
	a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
	2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
	a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
	3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],v=[],w=0;80>w;w++)v[w]=a();e=e.SHA512=r.extend({_doReset:function(){this._hash=new T.init([new d.init(1779033703,4089235720),new d.init(3144134277,2227873595),new d.init(1013904242,4271175723),new d.init(2773480762,1595750129),new d.init(1359893119,2917565137),new d.init(2600822924,725511199),new d.init(528734635,4215389547),new d.init(1541459225,327033209)])},_doProcessBlock:function(a,d){for(var f=this._hash.words,
	F=f[0],e=f[1],n=f[2],r=f[3],G=f[4],H=f[5],I=f[6],f=f[7],w=F.high,J=F.low,X=e.high,K=e.low,Y=n.high,L=n.low,Z=r.high,M=r.low,$=G.high,N=G.low,aa=H.high,O=H.low,ba=I.high,P=I.low,ca=f.high,Q=f.low,k=w,g=J,z=X,x=K,A=Y,y=L,U=Z,B=M,l=$,h=N,R=aa,C=O,S=ba,D=P,V=ca,E=Q,m=0;80>m;m++){var s=v[m];if(16>m)var j=s.high=a[d+2*m]|0,b=s.low=a[d+2*m+1]|0;else{var j=v[m-15],b=j.high,p=j.low,j=(b>>>1|p<<31)^(b>>>8|p<<24)^b>>>7,p=(p>>>1|b<<31)^(p>>>8|b<<24)^(p>>>7|b<<25),u=v[m-2],b=u.high,c=u.low,u=(b>>>19|c<<13)^(b<<
	3|c>>>29)^b>>>6,c=(c>>>19|b<<13)^(c<<3|b>>>29)^(c>>>6|b<<26),b=v[m-7],W=b.high,t=v[m-16],q=t.high,t=t.low,b=p+b.low,j=j+W+(b>>>0<p>>>0?1:0),b=b+c,j=j+u+(b>>>0<c>>>0?1:0),b=b+t,j=j+q+(b>>>0<t>>>0?1:0);s.high=j;s.low=b}var W=l&R^~l&S,t=h&C^~h&D,s=k&z^k&A^z&A,T=g&x^g&y^x&y,p=(k>>>28|g<<4)^(k<<30|g>>>2)^(k<<25|g>>>7),u=(g>>>28|k<<4)^(g<<30|k>>>2)^(g<<25|k>>>7),c=ea[m],fa=c.high,da=c.low,c=E+((h>>>14|l<<18)^(h>>>18|l<<14)^(h<<23|l>>>9)),q=V+((l>>>14|h<<18)^(l>>>18|h<<14)^(l<<23|h>>>9))+(c>>>0<E>>>0?1:
	0),c=c+t,q=q+W+(c>>>0<t>>>0?1:0),c=c+da,q=q+fa+(c>>>0<da>>>0?1:0),c=c+b,q=q+j+(c>>>0<b>>>0?1:0),b=u+T,s=p+s+(b>>>0<u>>>0?1:0),V=S,E=D,S=R,D=C,R=l,C=h,h=B+c|0,l=U+q+(h>>>0<B>>>0?1:0)|0,U=A,B=y,A=z,y=x,z=k,x=g,g=c+b|0,k=q+s+(g>>>0<c>>>0?1:0)|0}J=F.low=J+g;F.high=w+k+(J>>>0<g>>>0?1:0);K=e.low=K+x;e.high=X+z+(K>>>0<x>>>0?1:0);L=n.low=L+y;n.high=Y+A+(L>>>0<y>>>0?1:0);M=r.low=M+B;r.high=Z+U+(M>>>0<B>>>0?1:0);N=G.low=N+h;G.high=$+l+(N>>>0<h>>>0?1:0);O=H.low=O+C;H.high=aa+R+(O>>>0<C>>>0?1:0);P=I.low=P+D;
	I.high=ba+S+(P>>>0<D>>>0?1:0);Q=f.low=Q+E;f.high=ca+V+(Q>>>0<E>>>0?1:0)},_doFinalize:function(){var a=this._data,d=a.words,f=8*this._nDataBytes,e=8*a.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+128>>>10<<5)+30]=Math.floor(f/4294967296);d[(e+128>>>10<<5)+31]=f;a.sigBytes=4*d.length;this._process();return this._hash.toX32()},clone:function(){var a=r.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});n.SHA512=r._createHelper(e);n.HmacSHA512=r._createHmacHelper(e)})();
	
	/*
	CryptoJS v3.1.2 sha384-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var c=CryptoJS,a=c.x64,b=a.Word,e=a.WordArray,a=c.algo,d=a.SHA512,a=a.SHA384=d.extend({_doReset:function(){this._hash=new e.init([new b.init(3418070365,3238371032),new b.init(1654270250,914150663),new b.init(2438529370,812702999),new b.init(355462360,4144912697),new b.init(1731405415,4290775857),new b.init(2394180231,1750603025),new b.init(3675008525,1694076839),new b.init(1203062813,3204075428)])},_doFinalize:function(){var a=d._doFinalize.call(this);a.sigBytes-=16;return a}});c.SHA384=
	d._createHelper(a);c.HmacSHA384=d._createHmacHelper(a)})();
	
	/*
	CryptoJS v3.1.2 md5-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(E){function h(a,f,g,j,p,h,k){a=a+(f&g|~f&j)+p+k;return(a<<h|a>>>32-h)+f}function k(a,f,g,j,p,h,k){a=a+(f&j|g&~j)+p+k;return(a<<h|a>>>32-h)+f}function l(a,f,g,j,h,k,l){a=a+(f^g^j)+h+l;return(a<<k|a>>>32-k)+f}function n(a,f,g,j,h,k,l){a=a+(g^(f|~j))+h+l;return(a<<k|a>>>32-k)+f}for(var r=CryptoJS,q=r.lib,F=q.WordArray,s=q.Hasher,q=r.algo,a=[],t=0;64>t;t++)a[t]=4294967296*E.abs(E.sin(t+1))|0;q=q.MD5=s.extend({_doReset:function(){this._hash=new F.init([1732584193,4023233417,2562383102,271733878])},
	_doProcessBlock:function(m,f){for(var g=0;16>g;g++){var j=f+g,p=m[j];m[j]=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360}var g=this._hash.words,j=m[f+0],p=m[f+1],q=m[f+2],r=m[f+3],s=m[f+4],t=m[f+5],u=m[f+6],v=m[f+7],w=m[f+8],x=m[f+9],y=m[f+10],z=m[f+11],A=m[f+12],B=m[f+13],C=m[f+14],D=m[f+15],b=g[0],c=g[1],d=g[2],e=g[3],b=h(b,c,d,e,j,7,a[0]),e=h(e,b,c,d,p,12,a[1]),d=h(d,e,b,c,q,17,a[2]),c=h(c,d,e,b,r,22,a[3]),b=h(b,c,d,e,s,7,a[4]),e=h(e,b,c,d,t,12,a[5]),d=h(d,e,b,c,u,17,a[6]),c=h(c,d,e,b,v,22,a[7]),
	b=h(b,c,d,e,w,7,a[8]),e=h(e,b,c,d,x,12,a[9]),d=h(d,e,b,c,y,17,a[10]),c=h(c,d,e,b,z,22,a[11]),b=h(b,c,d,e,A,7,a[12]),e=h(e,b,c,d,B,12,a[13]),d=h(d,e,b,c,C,17,a[14]),c=h(c,d,e,b,D,22,a[15]),b=k(b,c,d,e,p,5,a[16]),e=k(e,b,c,d,u,9,a[17]),d=k(d,e,b,c,z,14,a[18]),c=k(c,d,e,b,j,20,a[19]),b=k(b,c,d,e,t,5,a[20]),e=k(e,b,c,d,y,9,a[21]),d=k(d,e,b,c,D,14,a[22]),c=k(c,d,e,b,s,20,a[23]),b=k(b,c,d,e,x,5,a[24]),e=k(e,b,c,d,C,9,a[25]),d=k(d,e,b,c,r,14,a[26]),c=k(c,d,e,b,w,20,a[27]),b=k(b,c,d,e,B,5,a[28]),e=k(e,b,
	c,d,q,9,a[29]),d=k(d,e,b,c,v,14,a[30]),c=k(c,d,e,b,A,20,a[31]),b=l(b,c,d,e,t,4,a[32]),e=l(e,b,c,d,w,11,a[33]),d=l(d,e,b,c,z,16,a[34]),c=l(c,d,e,b,C,23,a[35]),b=l(b,c,d,e,p,4,a[36]),e=l(e,b,c,d,s,11,a[37]),d=l(d,e,b,c,v,16,a[38]),c=l(c,d,e,b,y,23,a[39]),b=l(b,c,d,e,B,4,a[40]),e=l(e,b,c,d,j,11,a[41]),d=l(d,e,b,c,r,16,a[42]),c=l(c,d,e,b,u,23,a[43]),b=l(b,c,d,e,x,4,a[44]),e=l(e,b,c,d,A,11,a[45]),d=l(d,e,b,c,D,16,a[46]),c=l(c,d,e,b,q,23,a[47]),b=n(b,c,d,e,j,6,a[48]),e=n(e,b,c,d,v,10,a[49]),d=n(d,e,b,c,
	C,15,a[50]),c=n(c,d,e,b,t,21,a[51]),b=n(b,c,d,e,A,6,a[52]),e=n(e,b,c,d,r,10,a[53]),d=n(d,e,b,c,y,15,a[54]),c=n(c,d,e,b,p,21,a[55]),b=n(b,c,d,e,w,6,a[56]),e=n(e,b,c,d,D,10,a[57]),d=n(d,e,b,c,u,15,a[58]),c=n(c,d,e,b,B,21,a[59]),b=n(b,c,d,e,s,6,a[60]),e=n(e,b,c,d,z,10,a[61]),d=n(d,e,b,c,q,15,a[62]),c=n(c,d,e,b,x,21,a[63]);g[0]=g[0]+b|0;g[1]=g[1]+c|0;g[2]=g[2]+d|0;g[3]=g[3]+e|0},_doFinalize:function(){var a=this._data,f=a.words,g=8*this._nDataBytes,j=8*a.sigBytes;f[j>>>5]|=128<<24-j%32;var h=E.floor(g/
	4294967296);f[(j+64>>>9<<4)+15]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;f[(j+64>>>9<<4)+14]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360;a.sigBytes=4*(f.length+1);this._process();a=this._hash;f=a.words;for(g=0;4>g;g++)j=f[g],f[g]=(j<<8|j>>>24)&16711935|(j<<24|j>>>8)&4278255360;return a},clone:function(){var a=s.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=s._createHelper(q);r.HmacMD5=s._createHmacHelper(q)})(Math);
	
	/*
	CryptoJS v3.1.2 enc-base64-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
	e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
	
	/*
	CryptoJS v3.1.2 cipher-core-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	CryptoJS.lib.Cipher||function(u){var g=CryptoJS,f=g.lib,k=f.Base,l=f.WordArray,q=f.BufferedBlockAlgorithm,r=g.enc.Base64,v=g.algo.EvpKDF,n=f.Cipher=q.extend({cfg:k.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c);this._xformMode=a;this._key=b;this.reset()},reset:function(){q.reset.call(this);this._doReset()},process:function(a){this._append(a);
	return this._process()},finalize:function(a){a&&this._append(a);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(a){return{encrypt:function(b,c,d){return("string"==typeof c?s:j).encrypt(a,b,c,d)},decrypt:function(b,c,d){return("string"==typeof c?s:j).decrypt(a,b,c,d)}}}});f.StreamCipher=n.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var m=g.mode={},t=function(a,b,c){var d=this._iv;d?this._iv=u:d=this._prevBlock;for(var e=
	0;e<c;e++)a[b+e]^=d[e]},h=(f.BlockCipherMode=k.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a;this._iv=b}})).extend();h.Encryptor=h.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize;t.call(this,a,b,d);c.encryptBlock(a,b);this._prevBlock=a.slice(b,b+d)}});h.Decryptor=h.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=a.slice(b,b+d);c.decryptBlock(a,
	b);t.call(this,a,b,d);this._prevBlock=e}});m=m.CBC=h;h=(g.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,e=[],f=0;f<c;f+=4)e.push(d);c=l.create(e,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};f.BlockCipher=n.extend({cfg:n.cfg.extend({mode:m,padding:h}),reset:function(){n.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;
	this._mode=c.call(a,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var p=f.CipherParams=k.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),m=(g.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;
	return(a?l.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=l.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return p.create({ciphertext:a,salt:c})}},j=f.SerializableCipher=k.extend({cfg:k.extend({format:m}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d);b=e.finalize(b);e=e.cfg;return p.create({ciphertext:b,key:c,iv:e.iv,algorithm:a,mode:e.mode,padding:e.padding,
	blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),g=(g.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=l.random(8));a=v.create({keySize:b+c}).compute(a,d);c=l.create(a.words.slice(b),4*c);a.sigBytes=4*b;return p.create({key:a,iv:c,salt:d})}},s=f.PasswordBasedCipher=j.extend({cfg:j.cfg.extend({kdf:g}),encrypt:function(a,
	b,c,d){d=this.cfg.extend(d);c=d.kdf.execute(c,a.keySize,a.ivSize);d.iv=c.iv;a=j.encrypt.call(this,a,b,c.key,d);a.mixIn(c);return a},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);c=d.kdf.execute(c,a.keySize,a.ivSize,b.salt);d.iv=c.iv;return j.decrypt.call(this,a,b,c.key,d)}})}();
	
	/*
	CryptoJS v3.1.2 aes-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){for(var q=CryptoJS,x=q.lib.BlockCipher,r=q.algo,j=[],y=[],z=[],A=[],B=[],C=[],s=[],u=[],v=[],w=[],g=[],k=0;256>k;k++)g[k]=128>k?k<<1:k<<1^283;for(var n=0,l=0,k=0;256>k;k++){var f=l^l<<1^l<<2^l<<3^l<<4,f=f>>>8^f&255^99;j[n]=f;y[f]=n;var t=g[n],D=g[t],E=g[D],b=257*g[f]^16843008*f;z[n]=b<<24|b>>>8;A[n]=b<<16|b>>>16;B[n]=b<<8|b>>>24;C[n]=b;b=16843009*E^65537*D^257*t^16843008*n;s[f]=b<<24|b>>>8;u[f]=b<<16|b>>>16;v[f]=b<<8|b>>>24;w[f]=b;n?(n=t^g[g[g[E^t]]],l^=g[g[l]]):n=l=1}var F=[0,1,2,4,8,
	16,32,64,128,27,54],r=r.AES=x.extend({_doReset:function(){for(var c=this._key,e=c.words,a=c.sigBytes/4,c=4*((this._nRounds=a+6)+1),b=this._keySchedule=[],h=0;h<c;h++)if(h<a)b[h]=e[h];else{var d=b[h-1];h%a?6<a&&4==h%a&&(d=j[d>>>24]<<24|j[d>>>16&255]<<16|j[d>>>8&255]<<8|j[d&255]):(d=d<<8|d>>>24,d=j[d>>>24]<<24|j[d>>>16&255]<<16|j[d>>>8&255]<<8|j[d&255],d^=F[h/a|0]<<24);b[h]=b[h-a]^d}e=this._invKeySchedule=[];for(a=0;a<c;a++)h=c-a,d=a%4?b[h]:b[h-4],e[a]=4>a||4>=h?d:s[j[d>>>24]]^u[j[d>>>16&255]]^v[j[d>>>
	8&255]]^w[j[d&255]]},encryptBlock:function(c,e){this._doCryptBlock(c,e,this._keySchedule,z,A,B,C,j)},decryptBlock:function(c,e){var a=c[e+1];c[e+1]=c[e+3];c[e+3]=a;this._doCryptBlock(c,e,this._invKeySchedule,s,u,v,w,y);a=c[e+1];c[e+1]=c[e+3];c[e+3]=a},_doCryptBlock:function(c,e,a,b,h,d,j,m){for(var n=this._nRounds,f=c[e]^a[0],g=c[e+1]^a[1],k=c[e+2]^a[2],p=c[e+3]^a[3],l=4,t=1;t<n;t++)var q=b[f>>>24]^h[g>>>16&255]^d[k>>>8&255]^j[p&255]^a[l++],r=b[g>>>24]^h[k>>>16&255]^d[p>>>8&255]^j[f&255]^a[l++],s=
	b[k>>>24]^h[p>>>16&255]^d[f>>>8&255]^j[g&255]^a[l++],p=b[p>>>24]^h[f>>>16&255]^d[g>>>8&255]^j[k&255]^a[l++],f=q,g=r,k=s;q=(m[f>>>24]<<24|m[g>>>16&255]<<16|m[k>>>8&255]<<8|m[p&255])^a[l++];r=(m[g>>>24]<<24|m[k>>>16&255]<<16|m[p>>>8&255]<<8|m[f&255])^a[l++];s=(m[k>>>24]<<24|m[p>>>16&255]<<16|m[f>>>8&255]<<8|m[g&255])^a[l++];p=(m[p>>>24]<<24|m[f>>>16&255]<<16|m[g>>>8&255]<<8|m[k&255])^a[l++];c[e]=q;c[e+1]=r;c[e+2]=s;c[e+3]=p},keySize:8});q.AES=x._createHelper(r)})();
	
	/*
	CryptoJS v3.1.2 tripledes-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){function j(b,c){var a=(this._lBlock>>>b^this._rBlock)&c;this._rBlock^=a;this._lBlock^=a<<b}function l(b,c){var a=(this._rBlock>>>b^this._lBlock)&c;this._lBlock^=a;this._rBlock^=a<<b}var h=CryptoJS,e=h.lib,n=e.WordArray,e=e.BlockCipher,g=h.algo,q=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],p=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,
	55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],r=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],s=[{"0":8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,
	2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,
	1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{"0":1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,
	75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,
	276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{"0":260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,
	14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,
	17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{"0":2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,
	98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,
	1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{"0":128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,
	10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,
	83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{"0":268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,
	2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{"0":1048576,
	16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,
	496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{"0":134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,
	2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,
	2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],t=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],m=g.DES=e.extend({_doReset:function(){for(var b=this._key.words,c=[],a=0;56>a;a++){var f=q[a]-1;c[a]=b[f>>>5]>>>31-f%32&1}b=this._subKeys=[];for(f=0;16>f;f++){for(var d=b[f]=[],e=r[f],a=0;24>a;a++)d[a/6|0]|=c[(p[a]-1+e)%28]<<31-a%6,d[4+(a/6|0)]|=c[28+(p[a+24]-1+e)%28]<<31-a%6;d[0]=d[0]<<1|d[0]>>>31;for(a=1;7>a;a++)d[a]>>>=
	4*(a-1)+3;d[7]=d[7]<<5|d[7]>>>27}c=this._invSubKeys=[];for(a=0;16>a;a++)c[a]=b[15-a]},encryptBlock:function(b,c){this._doCryptBlock(b,c,this._subKeys)},decryptBlock:function(b,c){this._doCryptBlock(b,c,this._invSubKeys)},_doCryptBlock:function(b,c,a){this._lBlock=b[c];this._rBlock=b[c+1];j.call(this,4,252645135);j.call(this,16,65535);l.call(this,2,858993459);l.call(this,8,16711935);j.call(this,1,1431655765);for(var f=0;16>f;f++){for(var d=a[f],e=this._lBlock,h=this._rBlock,g=0,k=0;8>k;k++)g|=s[k][((h^
	d[k])&t[k])>>>0];this._lBlock=h;this._rBlock=e^g}a=this._lBlock;this._lBlock=this._rBlock;this._rBlock=a;j.call(this,1,1431655765);l.call(this,8,16711935);l.call(this,2,858993459);j.call(this,16,65535);j.call(this,4,252645135);b[c]=this._lBlock;b[c+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});h.DES=e._createHelper(m);g=g.TripleDES=e.extend({_doReset:function(){var b=this._key.words;this._des1=m.createEncryptor(n.create(b.slice(0,2)));this._des2=m.createEncryptor(n.create(b.slice(2,4)));this._des3=
	m.createEncryptor(n.create(b.slice(4,6)))},encryptBlock:function(b,c){this._des1.encryptBlock(b,c);this._des2.decryptBlock(b,c);this._des3.encryptBlock(b,c)},decryptBlock:function(b,c){this._des3.decryptBlock(b,c);this._des2.encryptBlock(b,c);this._des1.decryptBlock(b,c)},keySize:6,ivSize:2,blockSize:2});h.TripleDES=e._createHelper(g)})();
	
	/*
	CryptoJS v3.1.2 sha1-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var k=CryptoJS,b=k.lib,m=b.WordArray,l=b.Hasher,d=[],b=k.algo.SHA1=l.extend({_doReset:function(){this._hash=new m.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(n,p){for(var a=this._hash.words,e=a[0],f=a[1],h=a[2],j=a[3],b=a[4],c=0;80>c;c++){if(16>c)d[c]=n[p+c]|0;else{var g=d[c-3]^d[c-8]^d[c-14]^d[c-16];d[c]=g<<1|g>>>31}g=(e<<5|e>>>27)+b+d[c];g=20>c?g+((f&h|~f&j)+1518500249):40>c?g+((f^h^j)+1859775393):60>c?g+((f&h|f&j|h&j)-1894007588):g+((f^h^
	j)-899497514);b=j;j=h;h=f<<30|f>>>2;f=e;e=g}a[0]=a[0]+e|0;a[1]=a[1]+f|0;a[2]=a[2]+h|0;a[3]=a[3]+j|0;a[4]=a[4]+b|0},_doFinalize:function(){var b=this._data,d=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=Math.floor(a/4294967296);d[(e+64>>>9<<4)+15]=a;b.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var b=l.clone.call(this);b._hash=this._hash.clone();return b}});k.SHA1=l._createHelper(b);k.HmacSHA1=l._createHmacHelper(b)})();
	
	/*
	CryptoJS v3.1.2 ripemd160-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/*
	
	(c) 2012 by Cedric Mesnil. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	(function(){var q=CryptoJS,d=q.lib,n=d.WordArray,p=d.Hasher,d=q.algo,x=n.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),y=n.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),z=n.create([11,14,15,12,
	5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),A=n.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),B=n.create([0,1518500249,1859775393,2400959708,2840853838]),C=n.create([1352829926,1548603684,1836072691,
	2053994217,0]),d=d.RIPEMD160=p.extend({_doReset:function(){this._hash=n.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,v){for(var b=0;16>b;b++){var c=v+b,f=e[c];e[c]=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360}var c=this._hash.words,f=B.words,d=C.words,n=x.words,q=y.words,p=z.words,w=A.words,t,g,h,j,r,u,k,l,m,s;u=t=c[0];k=g=c[1];l=h=c[2];m=j=c[3];s=r=c[4];for(var a,b=0;80>b;b+=1)a=t+e[v+n[b]]|0,a=16>b?a+((g^h^j)+f[0]):32>b?a+((g&h|~g&j)+f[1]):48>b?
	a+(((g|~h)^j)+f[2]):64>b?a+((g&j|h&~j)+f[3]):a+((g^(h|~j))+f[4]),a|=0,a=a<<p[b]|a>>>32-p[b],a=a+r|0,t=r,r=j,j=h<<10|h>>>22,h=g,g=a,a=u+e[v+q[b]]|0,a=16>b?a+((k^(l|~m))+d[0]):32>b?a+((k&m|l&~m)+d[1]):48>b?a+(((k|~l)^m)+d[2]):64>b?a+((k&l|~k&m)+d[3]):a+((k^l^m)+d[4]),a|=0,a=a<<w[b]|a>>>32-w[b],a=a+s|0,u=s,s=m,m=l<<10|l>>>22,l=k,k=a;a=c[1]+h+m|0;c[1]=c[2]+j+s|0;c[2]=c[3]+r+u|0;c[3]=c[4]+t+k|0;c[4]=c[0]+g+l|0;c[0]=a},_doFinalize:function(){var e=this._data,d=e.words,b=8*this._nDataBytes,c=8*e.sigBytes;
	d[c>>>5]|=128<<24-c%32;d[(c+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;e.sigBytes=4*(d.length+1);this._process();e=this._hash;d=e.words;for(b=0;5>b;b++)c=d[b],d[b]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return e},clone:function(){var d=p.clone.call(this);d._hash=this._hash.clone();return d}});q.RIPEMD160=p._createHelper(d);q.HmacRIPEMD160=p._createHmacHelper(d)})(Math);
	
	/*
	CryptoJS v3.1.2 pbkdf2-min.js
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function(){var b=CryptoJS,a=b.lib,d=a.Base,m=a.WordArray,a=b.algo,q=a.HMAC,l=a.PBKDF2=d.extend({cfg:d.extend({keySize:4,hasher:a.SHA1,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var c=this.cfg,f=q.create(c.hasher,a),g=m.create(),d=m.create([1]),l=g.words,r=d.words,n=c.keySize,c=c.iterations;l.length<n;){var h=f.update(b).finalize(d);f.reset();for(var j=h.words,s=j.length,k=h,p=1;p<c;p++){k=f.finalize(k);f.reset();for(var t=k.words,e=0;e<s;e++)j[e]^=t[e]}g.concat(h);
	r[0]++}g.sigBytes=4*n;return g}});b.PBKDF2=function(a,b,c){return l.create(c).compute(a,b)}})();
	
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(d){var b;var e;var a="";for(b=0;b+3<=d.length;b+=3){e=parseInt(d.substring(b,b+3),16);a+=b64map.charAt(e>>6)+b64map.charAt(e&63)}if(b+1==d.length){e=parseInt(d.substring(b,b+1),16);a+=b64map.charAt(e<<2)}else{if(b+2==d.length){e=parseInt(d.substring(b,b+2),16);a+=b64map.charAt(e>>2)+b64map.charAt((e&3)<<4)}}if(b64pad){while((a.length&3)>0){a+=b64pad}}return a}function b64tohex(f){var d="";var e;var b=0;var c;var a;for(e=0;e<f.length;++e){if(f.charAt(e)==b64pad){break}a=b64map.indexOf(f.charAt(e));if(a<0){continue}if(b==0){d+=int2char(a>>2);c=a&3;b=1}else{if(b==1){d+=int2char((c<<2)|(a>>4));c=a&15;b=2}else{if(b==2){d+=int2char(c);d+=int2char(a>>2);c=a&3;b=3}else{d+=int2char((c<<2)|(a>>4));d+=int2char(a&15);b=0}}}}if(b==1){d+=int2char(c<<2)}return d}function b64toBA(e){var d=b64tohex(e);var c;var b=new Array();for(c=0;2*c<d.length;++c){b[c]=parseInt(d.substring(2*c,2*c+2),16)}return b};
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	var dbits;var canary=244837814094590;var j_lm=((canary&16777215)==15715070);function BigInteger(e,d,f){if(e!=null){if("number"==typeof e){this.fromNumber(e,d,f)}else{if(d==null&&"string"!=typeof e){this.fromString(e,256)}else{this.fromString(e,d)}}}}function nbi(){return new BigInteger(null)}function am1(f,a,b,e,h,g){while(--g>=0){var d=a*this[f++]+b[e]+h;h=Math.floor(d/67108864);b[e++]=d&67108863}return h}function am2(f,q,r,e,o,a){var k=q&32767,p=q>>15;while(--a>=0){var d=this[f]&32767;var g=this[f++]>>15;var b=p*d+g*k;d=k*d+((b&32767)<<15)+r[e]+(o&1073741823);o=(d>>>30)+(b>>>15)+p*g+(o>>>30);r[e++]=d&1073741823}return o}function am3(f,q,r,e,o,a){var k=q&16383,p=q>>14;while(--a>=0){var d=this[f]&16383;var g=this[f++]>>14;var b=p*d+g*k;d=k*d+((b&16383)<<14)+r[e]+o;o=(d>>28)+(b>>14)+p*g;r[e++]=d&268435455}return o}if(j_lm&&(navigator.appName=="Microsoft Internet Explorer")){BigInteger.prototype.am=am2;dbits=30}else{if(j_lm&&(navigator.appName!="Netscape")){BigInteger.prototype.am=am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=((1<<dbits)-1);BigInteger.prototype.DV=(1<<dbits);var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array();var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv){BI_RC[rr++]=vv}rr="a".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}rr="A".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}function int2char(a){return BI_RM.charAt(a)}function intAt(b,a){var d=BI_RC[b.charCodeAt(a)];return(d==null)?-1:d}function bnpCopyTo(b){for(var a=this.t-1;a>=0;--a){b[a]=this[a]}b.t=this.t;b.s=this.s}function bnpFromInt(a){this.t=1;this.s=(a<0)?-1:0;if(a>0){this[0]=a}else{if(a<-1){this[0]=a+this.DV}else{this.t=0}}}function nbv(a){var b=nbi();b.fromInt(a);return b}function bnpFromString(h,c){var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==256){e=8}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{this.fromRadix(h,c);return}}}}}}this.t=0;this.s=0;var g=h.length,d=false,f=0;while(--g>=0){var a=(e==8)?h[g]&255:intAt(h,g);if(a<0){if(h.charAt(g)=="-"){d=true}continue}d=false;if(f==0){this[this.t++]=a}else{if(f+e>this.DB){this[this.t-1]|=(a&((1<<(this.DB-f))-1))<<f;this[this.t++]=(a>>(this.DB-f))}else{this[this.t-1]|=a<<f}}f+=e;if(f>=this.DB){f-=this.DB}}if(e==8&&(h[0]&128)!=0){this.s=-1;if(f>0){this[this.t-1]|=((1<<(this.DB-f))-1)<<f}}this.clamp();if(d){BigInteger.ZERO.subTo(this,this)}}function bnpClamp(){var a=this.s&this.DM;while(this.t>0&&this[this.t-1]==a){--this.t}}function bnToString(c){if(this.s<0){return"-"+this.negate().toString(c)}var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{return this.toRadix(c)}}}}}var g=(1<<e)-1,l,a=false,h="",f=this.t;var j=this.DB-(f*this.DB)%e;if(f-->0){if(j<this.DB&&(l=this[f]>>j)>0){a=true;h=int2char(l)}while(f>=0){if(j<e){l=(this[f]&((1<<j)-1))<<(e-j);l|=this[--f]>>(j+=this.DB-e)}else{l=(this[f]>>(j-=e))&g;if(j<=0){j+=this.DB;--f}}if(l>0){a=true}if(a){h+=int2char(l)}}}return a?h:"0"}function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}function bnAbs(){return(this.s<0)?this.negate():this}function bnCompareTo(b){var d=this.s-b.s;if(d!=0){return d}var c=this.t;d=c-b.t;if(d!=0){return(this.s<0)?-d:d}while(--c>=0){if((d=this[c]-b[c])!=0){return d}}return 0}function nbits(a){var c=1,b;if((b=a>>>16)!=0){a=b;c+=16}if((b=a>>8)!=0){a=b;c+=8}if((b=a>>4)!=0){a=b;c+=4}if((b=a>>2)!=0){a=b;c+=2}if((b=a>>1)!=0){a=b;c+=1}return c}function bnBitLength(){if(this.t<=0){return 0}return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM))}function bnpDLShiftTo(c,b){var a;for(a=this.t-1;a>=0;--a){b[a+c]=this[a]}for(a=c-1;a>=0;--a){b[a]=0}b.t=this.t+c;b.s=this.s}function bnpDRShiftTo(c,b){for(var a=c;a<this.t;++a){b[a-c]=this[a]}b.t=Math.max(this.t-c,0);b.s=this.s}function bnpLShiftTo(j,e){var b=j%this.DB;var a=this.DB-b;var g=(1<<a)-1;var f=Math.floor(j/this.DB),h=(this.s<<b)&this.DM,d;for(d=this.t-1;d>=0;--d){e[d+f+1]=(this[d]>>a)|h;h=(this[d]&g)<<b}for(d=f-1;d>=0;--d){e[d]=0}e[f]=h;e.t=this.t+f+1;e.s=this.s;e.clamp()}function bnpRShiftTo(g,d){d.s=this.s;var e=Math.floor(g/this.DB);if(e>=this.t){d.t=0;return}var b=g%this.DB;var a=this.DB-b;var f=(1<<b)-1;d[0]=this[e]>>b;for(var c=e+1;c<this.t;++c){d[c-e-1]|=(this[c]&f)<<a;d[c-e]=this[c]>>b}if(b>0){d[this.t-e-1]|=(this.s&f)<<a}d.t=this.t-e;d.clamp()}function bnpSubTo(d,f){var e=0,g=0,b=Math.min(d.t,this.t);while(e<b){g+=this[e]-d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g-=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g-=d[e];f[e++]=g&this.DM;g>>=this.DB}g-=d.s}f.s=(g<0)?-1:0;if(g<-1){f[e++]=this.DV+g}else{if(g>0){f[e++]=g}}f.t=e;f.clamp()}function bnpMultiplyTo(c,e){var b=this.abs(),f=c.abs();var d=b.t;e.t=d+f.t;while(--d>=0){e[d]=0}for(d=0;d<f.t;++d){e[d+b.t]=b.am(0,f[d],e,d,0,b.t)}e.s=0;e.clamp();if(this.s!=c.s){BigInteger.ZERO.subTo(e,e)}}function bnpSquareTo(d){var a=this.abs();var b=d.t=2*a.t;while(--b>=0){d[b]=0}for(b=0;b<a.t-1;++b){var e=a.am(b,a[b],d,2*b,0,1);if((d[b+a.t]+=a.am(b+1,2*a[b],d,2*b+1,e,a.t-b-1))>=a.DV){d[b+a.t]-=a.DV;d[b+a.t+1]=1}}if(d.t>0){d[d.t-1]+=a.am(b,a[b],d,2*b,0,1)}d.s=0;d.clamp()}function bnpDivRemTo(n,h,g){var w=n.abs();if(w.t<=0){return}var k=this.abs();if(k.t<w.t){if(h!=null){h.fromInt(0)}if(g!=null){this.copyTo(g)}return}if(g==null){g=nbi()}var d=nbi(),a=this.s,l=n.s;var v=this.DB-nbits(w[w.t-1]);if(v>0){w.lShiftTo(v,d);k.lShiftTo(v,g)}else{w.copyTo(d);k.copyTo(g)}var p=d.t;var b=d[p-1];if(b==0){return}var o=b*(1<<this.F1)+((p>1)?d[p-2]>>this.F2:0);var A=this.FV/o,z=(1<<this.F1)/o,x=1<<this.F2;var u=g.t,s=u-p,f=(h==null)?nbi():h;d.dlShiftTo(s,f);if(g.compareTo(f)>=0){g[g.t++]=1;g.subTo(f,g)}BigInteger.ONE.dlShiftTo(p,f);f.subTo(d,d);while(d.t<p){d[d.t++]=0}while(--s>=0){var c=(g[--u]==b)?this.DM:Math.floor(g[u]*A+(g[u-1]+x)*z);if((g[u]+=d.am(0,c,g,s,0,p))<c){d.dlShiftTo(s,f);g.subTo(f,g);while(g[u]<--c){g.subTo(f,g)}}}if(h!=null){g.drShiftTo(p,h);if(a!=l){BigInteger.ZERO.subTo(h,h)}}g.t=p;g.clamp();if(v>0){g.rShiftTo(v,g)}if(a<0){BigInteger.ZERO.subTo(g,g)}}function bnMod(b){var c=nbi();this.abs().divRemTo(b,null,c);if(this.s<0&&c.compareTo(BigInteger.ZERO)>0){b.subTo(c,c)}return c}function Classic(a){this.m=a}function cConvert(a){if(a.s<0||a.compareTo(this.m)>=0){return a.mod(this.m)}else{return a}}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1){return 0}var a=this[0];if((a&1)==0){return 0}var b=a&3;b=(b*(2-(a&15)*b))&15;b=(b*(2-(a&255)*b))&255;b=(b*(2-(((a&65535)*b)&65535)))&65535;b=(b*(2-a*b%this.DV))%this.DV;return(b>0)?this.DV-b:-b}function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<(a.DB-15))-1;this.mt2=2*a.t}function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);if(a.s<0&&b.compareTo(BigInteger.ZERO)>0){this.m.subTo(b,b)}return b}function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}function montReduce(a){while(a.t<=this.mt2){a[a.t++]=0}for(var c=0;c<this.m.t;++c){var b=a[c]&32767;var d=(b*this.mpl+(((b*this.mph+(a[c]>>15)*this.mpl)&this.um)<<15))&a.DM;b=c+this.m.t;a[b]+=this.m.am(0,d,a,c,0,this.m.t);while(a[b]>=a.DV){a[b]-=a.DV;a[++b]++}}a.clamp();a.drShiftTo(this.m.t,a);if(a.compareTo(this.m)>=0){a.subTo(this.m,a)}}function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}function montMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return((this.t>0)?(this[0]&1):this.s)==0}function bnpExp(h,j){if(h>4294967295||h<1){return BigInteger.ONE}var f=nbi(),a=nbi(),d=j.convert(this),c=nbits(h)-1;d.copyTo(f);while(--c>=0){j.sqrTo(f,a);if((h&(1<<c))>0){j.mulTo(a,d,f)}else{var b=f;f=a;a=b}}return j.revert(f)}function bnModPowInt(b,a){var c;if(b<256||a.isEven()){c=new Classic(a)}else{c=new Montgomery(a)}return this.exp(b,c)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	function bnClone(){var a=nbi();this.copyTo(a);return a}function bnIntValue(){if(this.s<0){if(this.t==1){return this[0]-this.DV}else{if(this.t==0){return -1}}}else{if(this.t==1){return this[0]}else{if(this.t==0){return 0}}}return((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0]}function bnByteValue(){return(this.t==0)?this.s:(this[0]<<24)>>24}function bnShortValue(){return(this.t==0)?this.s:(this[0]<<16)>>16}function bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){if(this.s<0){return -1}else{if(this.t<=0||(this.t==1&&this[0]<=0)){return 0}else{return 1}}}function bnpToRadix(c){if(c==null){c=10}if(this.signum()==0||c<2||c>36){return"0"}var f=this.chunkSize(c);var e=Math.pow(c,f);var i=nbv(e),j=nbi(),h=nbi(),g="";this.divRemTo(i,j,h);while(j.signum()>0){g=(e+h.intValue()).toString(c).substr(1)+g;j.divRemTo(i,j,h)}return h.intValue().toString(c)+g}function bnpFromRadix(m,h){this.fromInt(0);if(h==null){h=10}var f=this.chunkSize(h);var g=Math.pow(h,f),e=false,a=0,l=0;for(var c=0;c<m.length;++c){var k=intAt(m,c);if(k<0){if(m.charAt(c)=="-"&&this.signum()==0){e=true}continue}l=h*l+k;if(++a>=f){this.dMultiply(g);this.dAddOffset(l,0);a=0;l=0}}if(a>0){this.dMultiply(Math.pow(h,a));this.dAddOffset(l,0)}if(e){BigInteger.ZERO.subTo(this,this)}}function bnpFromNumber(f,e,h){if("number"==typeof e){if(f<2){this.fromInt(1)}else{this.fromNumber(f,h);if(!this.testBit(f-1)){this.bitwiseTo(BigInteger.ONE.shiftLeft(f-1),op_or,this)}if(this.isEven()){this.dAddOffset(1,0)}while(!this.isProbablePrime(e)){this.dAddOffset(2,0);if(this.bitLength()>f){this.subTo(BigInteger.ONE.shiftLeft(f-1),this)}}}}else{var d=new Array(),g=f&7;d.length=(f>>3)+1;e.nextBytes(d);if(g>0){d[0]&=((1<<g)-1)}else{d[0]=0}this.fromString(d,256)}}function bnToByteArray(){var b=this.t,c=new Array();c[0]=this.s;var e=this.DB-(b*this.DB)%8,f,a=0;if(b-->0){if(e<this.DB&&(f=this[b]>>e)!=(this.s&this.DM)>>e){c[a++]=f|(this.s<<(this.DB-e))}while(b>=0){if(e<8){f=(this[b]&((1<<e)-1))<<(8-e);f|=this[--b]>>(e+=this.DB-8)}else{f=(this[b]>>(e-=8))&255;if(e<=0){e+=this.DB;--b}}if((f&128)!=0){f|=-256}if(a==0&&(this.s&128)!=(f&128)){++a}if(a>0||f!=this.s){c[a++]=f}}}return c}function bnEquals(b){return(this.compareTo(b)==0)}function bnMin(b){return(this.compareTo(b)<0)?this:b}function bnMax(b){return(this.compareTo(b)>0)?this:b}function bnpBitwiseTo(c,h,e){var d,g,b=Math.min(c.t,this.t);for(d=0;d<b;++d){e[d]=h(this[d],c[d])}if(c.t<this.t){g=c.s&this.DM;for(d=b;d<this.t;++d){e[d]=h(this[d],g)}e.t=this.t}else{g=this.s&this.DM;for(d=b;d<c.t;++d){e[d]=h(g,c[d])}e.t=c.t}e.s=h(this.s,c.s);e.clamp()}function op_and(a,b){return a&b}function bnAnd(b){var c=nbi();this.bitwiseTo(b,op_and,c);return c}function op_or(a,b){return a|b}function bnOr(b){var c=nbi();this.bitwiseTo(b,op_or,c);return c}function op_xor(a,b){return a^b}function bnXor(b){var c=nbi();this.bitwiseTo(b,op_xor,c);return c}function op_andnot(a,b){return a&~b}function bnAndNot(b){var c=nbi();this.bitwiseTo(b,op_andnot,c);return c}function bnNot(){var b=nbi();for(var a=0;a<this.t;++a){b[a]=this.DM&~this[a]}b.t=this.t;b.s=~this.s;return b}function bnShiftLeft(b){var a=nbi();if(b<0){this.rShiftTo(-b,a)}else{this.lShiftTo(b,a)}return a}function bnShiftRight(b){var a=nbi();if(b<0){this.lShiftTo(-b,a)}else{this.rShiftTo(b,a)}return a}function lbit(a){if(a==0){return -1}var b=0;if((a&65535)==0){a>>=16;b+=16}if((a&255)==0){a>>=8;b+=8}if((a&15)==0){a>>=4;b+=4}if((a&3)==0){a>>=2;b+=2}if((a&1)==0){++b}return b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a){if(this[a]!=0){return a*this.DB+lbit(this[a])}}if(this.s<0){return this.t*this.DB}return -1}function cbit(a){var b=0;while(a!=0){a&=a-1;++b}return b}function bnBitCount(){var c=0,a=this.s&this.DM;for(var b=0;b<this.t;++b){c+=cbit(this[b]^a)}return c}function bnTestBit(b){var a=Math.floor(b/this.DB);if(a>=this.t){return(this.s!=0)}return((this[a]&(1<<(b%this.DB)))!=0)}function bnpChangeBit(c,b){var a=BigInteger.ONE.shiftLeft(c);this.bitwiseTo(a,b,a);return a}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}function bnpAddTo(d,f){var e=0,g=0,b=Math.min(d.t,this.t);while(e<b){g+=this[e]+d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g+=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g+=d[e];f[e++]=g&this.DM;g>>=this.DB}g+=d.s}f.s=(g<0)?-1:0;if(g>0){f[e++]=g}else{if(g<-1){f[e++]=this.DV+g}}f.t=e;f.clamp()}function bnAdd(b){var c=nbi();this.addTo(b,c);return c}function bnSubtract(b){var c=nbi();this.subTo(b,c);return c}function bnMultiply(b){var c=nbi();this.multiplyTo(b,c);return c}function bnSquare(){var a=nbi();this.squareTo(a);return a}function bnDivide(b){var c=nbi();this.divRemTo(b,c,null);return c}function bnRemainder(b){var c=nbi();this.divRemTo(b,null,c);return c}function bnDivideAndRemainder(b){var d=nbi(),c=nbi();this.divRemTo(b,d,c);return new Array(d,c)}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(b,a){if(b==0){return}while(this.t<=a){this[this.t++]=0}this[a]+=b;while(this[a]>=this.DV){this[a]-=this.DV;if(++a>=this.t){this[this.t++]=0}++this[a]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,c,b){a.multiplyTo(c,b)}function nSqrTo(a,b){a.squareTo(b)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(a){return this.exp(a,new NullExp())}function bnpMultiplyLowerTo(b,f,e){var d=Math.min(this.t+b.t,f);e.s=0;e.t=d;while(d>0){e[--d]=0}var c;for(c=e.t-this.t;d<c;++d){e[d+this.t]=this.am(0,b[d],e,d,0,this.t)}for(c=Math.min(b.t,f);d<c;++d){this.am(0,b[d],e,d,0,f-d)}e.clamp()}function bnpMultiplyUpperTo(b,e,d){--e;var c=d.t=this.t+b.t-e;d.s=0;while(--c>=0){d[c]=0}for(c=Math.max(e-this.t,0);c<b.t;++c){d[this.t+c-e]=this.am(e-c,b[c],d,0,0,this.t+c-e)}d.clamp();d.drShiftTo(1,d)}function Barrett(a){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*a.t,this.r2);this.mu=this.r2.divide(a);this.m=a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t){return a.mod(this.m)}else{if(a.compareTo(this.m)<0){return a}else{var b=nbi();a.copyTo(b);this.reduce(b);return b}}}function barrettRevert(a){return a}function barrettReduce(a){a.drShiftTo(this.m.t-1,this.r2);if(a.t>this.m.t+1){a.t=this.m.t+1;a.clamp()}this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(a.compareTo(this.r2)<0){a.dAddOffset(1,this.m.t+1)}a.subTo(this.r2,a);while(a.compareTo(this.m)>=0){a.subTo(this.m,a)}}function barrettSqrTo(a,b){a.squareTo(b);this.reduce(b)}function barrettMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(q,f){var o=q.bitLength(),h,b=nbv(1),v;if(o<=0){return b}else{if(o<18){h=1}else{if(o<48){h=3}else{if(o<144){h=4}else{if(o<768){h=5}else{h=6}}}}}if(o<8){v=new Classic(f)}else{if(f.isEven()){v=new Barrett(f)}else{v=new Montgomery(f)}}var p=new Array(),d=3,s=h-1,a=(1<<h)-1;p[1]=v.convert(this);if(h>1){var A=nbi();v.sqrTo(p[1],A);while(d<=a){p[d]=nbi();v.mulTo(A,p[d-2],p[d]);d+=2}}var l=q.t-1,x,u=true,c=nbi(),y;o=nbits(q[l])-1;while(l>=0){if(o>=s){x=(q[l]>>(o-s))&a}else{x=(q[l]&((1<<(o+1))-1))<<(s-o);if(l>0){x|=q[l-1]>>(this.DB+o-s)}}d=h;while((x&1)==0){x>>=1;--d}if((o-=d)<0){o+=this.DB;--l}if(u){p[x].copyTo(b);u=false}else{while(d>1){v.sqrTo(b,c);v.sqrTo(c,b);d-=2}if(d>0){v.sqrTo(b,c)}else{y=b;b=c;c=y}v.mulTo(c,p[x],b)}while(l>=0&&(q[l]&(1<<o))==0){v.sqrTo(b,c);y=b;b=c;c=y;if(--o<0){o=this.DB-1;--l}}}return v.revert(b)}function bnGCD(c){var b=(this.s<0)?this.negate():this.clone();var h=(c.s<0)?c.negate():c.clone();if(b.compareTo(h)<0){var e=b;b=h;h=e}var d=b.getLowestSetBit(),f=h.getLowestSetBit();if(f<0){return b}if(d<f){f=d}if(f>0){b.rShiftTo(f,b);h.rShiftTo(f,h)}while(b.signum()>0){if((d=b.getLowestSetBit())>0){b.rShiftTo(d,b)}if((d=h.getLowestSetBit())>0){h.rShiftTo(d,h)}if(b.compareTo(h)>=0){b.subTo(h,b);b.rShiftTo(1,b)}else{h.subTo(b,h);h.rShiftTo(1,h)}}if(f>0){h.lShiftTo(f,h)}return h}function bnpModInt(e){if(e<=0){return 0}var c=this.DV%e,b=(this.s<0)?e-1:0;if(this.t>0){if(c==0){b=this[0]%e}else{for(var a=this.t-1;a>=0;--a){b=(c*b+this[a])%e}}}return b}function bnModInverse(f){var j=f.isEven();if((this.isEven()&&j)||f.signum()==0){return BigInteger.ZERO}var i=f.clone(),h=this.clone();var g=nbv(1),e=nbv(0),l=nbv(0),k=nbv(1);while(i.signum()!=0){while(i.isEven()){i.rShiftTo(1,i);if(j){if(!g.isEven()||!e.isEven()){g.addTo(this,g);e.subTo(f,e)}g.rShiftTo(1,g)}else{if(!e.isEven()){e.subTo(f,e)}}e.rShiftTo(1,e)}while(h.isEven()){h.rShiftTo(1,h);if(j){if(!l.isEven()||!k.isEven()){l.addTo(this,l);k.subTo(f,k)}l.rShiftTo(1,l)}else{if(!k.isEven()){k.subTo(f,k)}}k.rShiftTo(1,k)}if(i.compareTo(h)>=0){i.subTo(h,i);if(j){g.subTo(l,g)}e.subTo(k,e)}else{h.subTo(i,h);if(j){l.subTo(g,l)}k.subTo(e,k)}}if(h.compareTo(BigInteger.ONE)!=0){return BigInteger.ZERO}if(k.compareTo(f)>=0){return k.subtract(f)}if(k.signum()<0){k.addTo(f,k)}else{return k}if(k.signum()<0){return k.add(f)}else{return k}}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];var lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(e){var d,b=this.abs();if(b.t==1&&b[0]<=lowprimes[lowprimes.length-1]){for(d=0;d<lowprimes.length;++d){if(b[0]==lowprimes[d]){return true}}return false}if(b.isEven()){return false}d=1;while(d<lowprimes.length){var a=lowprimes[d],c=d+1;while(c<lowprimes.length&&a<lplim){a*=lowprimes[c++]}a=b.modInt(a);while(d<c){if(a%lowprimes[d++]==0){return false}}}return b.millerRabin(e)}function bnpMillerRabin(f){var g=this.subtract(BigInteger.ONE);var c=g.getLowestSetBit();if(c<=0){return false}var h=g.shiftRight(c);f=(f+1)>>1;if(f>lowprimes.length){f=lowprimes.length}var b=nbi();for(var e=0;e<f;++e){b.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var l=b.modPow(h,this);if(l.compareTo(BigInteger.ONE)!=0&&l.compareTo(g)!=0){var d=1;while(d++<c&&l.compareTo(g)!=0){l=l.modPowInt(2,this);if(l.compareTo(BigInteger.ONE)==0){return false}}if(l.compareTo(g)!=0){return false}}}return true}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	function Arcfour(){this.i=0;this.j=0;this.S=new Array()}function ARC4init(d){var c,a,b;for(c=0;c<256;++c){this.S[c]=c}a=0;for(c=0;c<256;++c){a=(a+this.S[c]+d[c%d.length])&255;b=this.S[c];this.S[c]=this.S[a];this.S[a]=b}this.i=0;this.j=0}function ARC4next(){var a;this.i=(this.i+1)&255;this.j=(this.j+this.S[this.i])&255;a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[(a+this.S[this.i])&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour()}var rng_psize=256;
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	var rng_state;var rng_pool;var rng_pptr;function rng_seed_int(a){rng_pool[rng_pptr++]^=a&255;rng_pool[rng_pptr++]^=(a>>8)&255;rng_pool[rng_pptr++]^=(a>>16)&255;rng_pool[rng_pptr++]^=(a>>24)&255;if(rng_pptr>=rng_psize){rng_pptr-=rng_psize}}function rng_seed_time(){rng_seed_int(new Date().getTime())}if(rng_pool==null){rng_pool=new Array();rng_pptr=0;var t;if(navigator.appName=="Netscape"&&navigator.appVersion<"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t){rng_pool[rng_pptr++]=z.charCodeAt(t)&255}}while(rng_pptr<rng_psize){t=Math.floor(65536*Math.random());rng_pool[rng_pptr++]=t>>>8;rng_pool[rng_pptr++]=t&255}rng_pptr=0;rng_seed_time()}function rng_get_byte(){if(rng_state==null){rng_seed_time();rng_state=prng_newstate();rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr){rng_pool[rng_pptr]=0}rng_pptr=0}return rng_state.next()}function rng_get_bytes(b){var a;for(a=0;a<b.length;++a){b[a]=rng_get_byte()}}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	function parseBigInt(b,a){return new BigInteger(b,a)}function linebrk(c,d){var a="";var b=0;while(b+d<c.length){a+=c.substring(b,b+d)+"\n";b+=d}return a+c.substring(b,c.length)}function byte2Hex(a){if(a<16){return"0"+a.toString(16)}else{return a.toString(16)}}function pkcs1pad2(e,h){if(h<e.length+11){alert("Message too long for RSA");return null}var g=new Array();var d=e.length-1;while(d>=0&&h>0){var f=e.charCodeAt(d--);if(f<128){g[--h]=f}else{if((f>127)&&(f<2048)){g[--h]=(f&63)|128;g[--h]=(f>>6)|192}else{g[--h]=(f&63)|128;g[--h]=((f>>6)&63)|128;g[--h]=(f>>12)|224}}}g[--h]=0;var b=new SecureRandom();var a=new Array();while(h>2){a[0]=0;while(a[0]==0){b.nextBytes(a)}g[--h]=a[0]}g[--h]=2;g[--h]=0;return new BigInteger(g)}function oaep_mgf1_arr(c,a,e){var b="",d=0;while(b.length<a){b+=e(String.fromCharCode.apply(String,c.concat([(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255])));d+=1}return b}var SHA1_SIZE=20;function oaep_pad(l,a,c){if(l.length+2*SHA1_SIZE+2>a){throw"Message too long for RSA"}var h="",d;for(d=0;d<a-l.length-2*SHA1_SIZE-2;d+=1){h+="\x00"}var e=rstr_sha1("")+h+"\x01"+l;var f=new Array(SHA1_SIZE);new SecureRandom().nextBytes(f);var g=oaep_mgf1_arr(f,e.length,c||rstr_sha1);var k=[];for(d=0;d<e.length;d+=1){k[d]=e.charCodeAt(d)^g.charCodeAt(d)}var j=oaep_mgf1_arr(k,f.length,rstr_sha1);var b=[0];for(d=0;d<f.length;d+=1){b[d+1]=f[d]^j.charCodeAt(d)}return new BigInteger(b.concat(k))}function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function RSASetPublic(b,a){this.isPublic=true;if(typeof b!=="string"){this.n=b;this.e=a}else{if(b!=null&&a!=null&&b.length>0&&a.length>0){this.n=parseBigInt(b,16);this.e=parseInt(a,16)}else{alert("Invalid RSA public key")}}}function RSADoPublic(a){return a.modPowInt(this.e,this.n)}function RSAEncrypt(d){var a=pkcs1pad2(d,(this.n.bitLength()+7)>>3);if(a==null){return null}var e=this.doPublic(a);if(e==null){return null}var b=e.toString(16);if((b.length&1)==0){return b}else{return"0"+b}}function RSAEncryptOAEP(e,d){var a=oaep_pad(e,(this.n.bitLength()+7)>>3,d);if(a==null){return null}var f=this.doPublic(a);if(f==null){return null}var b=f.toString(16);if((b.length&1)==0){return b}else{return"0"+b}}RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;RSAKey.prototype.encryptOAEP=RSAEncryptOAEP;RSAKey.prototype.type="RSA";
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	function pkcs1unpad2(g,j){var a=g.toByteArray();var f=0;while(f<a.length&&a[f]==0){++f}if(a.length-f!=j-1||a[f]!=2){return null}++f;while(a[f]!=0){if(++f>=a.length){return null}}var e="";while(++f<a.length){var h=a[f]&255;if(h<128){e+=String.fromCharCode(h)}else{if((h>191)&&(h<224)){e+=String.fromCharCode(((h&31)<<6)|(a[f+1]&63));++f}else{e+=String.fromCharCode(((h&15)<<12)|((a[f+1]&63)<<6)|(a[f+2]&63));f+=2}}}return e}function oaep_mgf1_str(c,a,e){var b="",d=0;while(b.length<a){b+=e(c+String.fromCharCode.apply(String,[(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255]));d+=1}return b}var SHA1_SIZE=20;function oaep_unpad(l,b,e){l=l.toByteArray();var f;for(f=0;f<l.length;f+=1){l[f]&=255}while(l.length<b){l.unshift(0)}l=String.fromCharCode.apply(String,l);if(l.length<2*SHA1_SIZE+2){throw"Cipher too short"}var c=l.substr(1,SHA1_SIZE);var o=l.substr(SHA1_SIZE+1);var m=oaep_mgf1_str(o,SHA1_SIZE,e||rstr_sha1);var h=[],f;for(f=0;f<c.length;f+=1){h[f]=c.charCodeAt(f)^m.charCodeAt(f)}var j=oaep_mgf1_str(String.fromCharCode.apply(String,h),l.length-SHA1_SIZE,rstr_sha1);var g=[];for(f=0;f<o.length;f+=1){g[f]=o.charCodeAt(f)^j.charCodeAt(f)}g=String.fromCharCode.apply(String,g);if(g.substr(0,SHA1_SIZE)!==rstr_sha1("")){throw"Hash mismatch"}g=g.substr(SHA1_SIZE);var a=g.indexOf("\x01");var k=(a!=-1)?g.substr(0,a).lastIndexOf("\x00"):-1;if(k+1!=a){throw"Malformed data"}return g.substr(a+1)}function RSASetPrivate(c,a,b){this.isPrivate=true;if(typeof c!=="string"){this.n=c;this.e=a;this.d=b}else{if(c!=null&&a!=null&&c.length>0&&a.length>0){this.n=parseBigInt(c,16);this.e=parseInt(a,16);this.d=parseBigInt(b,16)}else{alert("Invalid RSA private key")}}}function RSASetPrivateEx(g,d,e,c,b,a,h,f){this.isPrivate=true;if(g==null){throw"RSASetPrivateEx N == null"}if(d==null){throw"RSASetPrivateEx E == null"}if(g.length==0){throw"RSASetPrivateEx N.length == 0"}if(d.length==0){throw"RSASetPrivateEx E.length == 0"}if(g!=null&&d!=null&&g.length>0&&d.length>0){this.n=parseBigInt(g,16);this.e=parseInt(d,16);this.d=parseBigInt(e,16);this.p=parseBigInt(c,16);this.q=parseBigInt(b,16);this.dmp1=parseBigInt(a,16);this.dmq1=parseBigInt(h,16);this.coeff=parseBigInt(f,16)}else{alert("Invalid RSA private key in RSASetPrivateEx")}}function RSAGenerate(b,i){var a=new SecureRandom();var f=b>>1;this.e=parseInt(i,16);var c=new BigInteger(i,16);for(;;){for(;;){this.p=new BigInteger(b-f,1,a);if(this.p.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)==0&&this.p.isProbablePrime(10)){break}}for(;;){this.q=new BigInteger(f,1,a);if(this.q.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10)){break}}if(this.p.compareTo(this.q)<=0){var h=this.p;this.p=this.q;this.q=h}var g=this.p.subtract(BigInteger.ONE);var d=this.q.subtract(BigInteger.ONE);var e=g.multiply(d);if(e.gcd(c).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);this.d=c.modInverse(e);this.dmp1=this.d.mod(g);this.dmq1=this.d.mod(d);this.coeff=this.q.modInverse(this.p);break}}}function RSADoPrivate(a){if(this.p==null||this.q==null){return a.modPow(this.d,this.n)}var c=a.mod(this.p).modPow(this.dmp1,this.p);var b=a.mod(this.q).modPow(this.dmq1,this.q);while(c.compareTo(b)<0){c=c.add(this.p)}return c.subtract(b).multiply(this.coeff).mod(this.p).multiply(this.q).add(b)}function RSADecrypt(b){var d=parseBigInt(b,16);var a=this.doPrivate(d);if(a==null){return null}return pkcs1unpad2(a,(this.n.bitLength()+7)>>3)}function RSADecryptOAEP(d,b){var e=parseBigInt(d,16);var a=this.doPrivate(e);if(a==null){return null}return oaep_unpad(a,(this.n.bitLength()+7)>>3,b)}RSAKey.prototype.doPrivate=RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;RSAKey.prototype.decryptOAEP=RSADecryptOAEP;
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	function ECFieldElementFp(b,a){this.x=a;this.q=b}function feFpEquals(a){if(a==this){return true}return(this.q.equals(a.q)&&this.x.equals(a.x))}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(a){return new ECFieldElementFp(this.q,this.x.add(a.toBigInteger()).mod(this.q))}function feFpSubtract(a){return new ECFieldElementFp(this.q,this.x.subtract(a.toBigInteger()).mod(this.q))}function feFpMultiply(a){return new ECFieldElementFp(this.q,this.x.multiply(a.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(a){return new ECFieldElementFp(this.q,this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q))}ECFieldElementFp.prototype.equals=feFpEquals;ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger;ECFieldElementFp.prototype.negate=feFpNegate;ECFieldElementFp.prototype.add=feFpAdd;ECFieldElementFp.prototype.subtract=feFpSubtract;ECFieldElementFp.prototype.multiply=feFpMultiply;ECFieldElementFp.prototype.square=feFpSquare;ECFieldElementFp.prototype.divide=feFpDivide;function ECPointFp(c,a,d,b){this.curve=c;this.x=a;this.y=d;if(b==null){this.z=BigInteger.ONE}else{this.z=b}this.zinv=null}function pointFpGetX(){if(this.zinv==null){this.zinv=this.z.modInverse(this.curve.q)}return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){if(this.zinv==null){this.zinv=this.z.modInverse(this.curve.q)}return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(a){if(a==this){return true}if(this.isInfinity()){return a.isInfinity()}if(a.isInfinity()){return this.isInfinity()}var c,b;c=a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q);if(!c.equals(BigInteger.ZERO)){return false}b=a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);return b.equals(BigInteger.ZERO)}function pointFpIsInfinity(){if((this.x==null)&&(this.y==null)){return true}return this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(l){if(this.isInfinity()){return l}if(l.isInfinity()){return this}var p=l.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(l.z)).mod(this.curve.q);var o=l.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(l.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(o)){if(BigInteger.ZERO.equals(p)){return this.twice()}return this.curve.getInfinity()}var j=new BigInteger("3");var e=this.x.toBigInteger();var n=this.y.toBigInteger();var c=l.x.toBigInteger();var k=l.y.toBigInteger();var m=o.square();var i=m.multiply(o);var d=e.multiply(m);var g=p.square().multiply(this.z);var a=g.subtract(d.shiftLeft(1)).multiply(l.z).subtract(i).multiply(o).mod(this.curve.q);var h=d.multiply(j).multiply(p).subtract(n.multiply(i)).subtract(g.multiply(p)).multiply(l.z).add(p.multiply(i)).mod(this.curve.q);var f=i.multiply(this.z).multiply(l.z).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(a),this.curve.fromBigInteger(h),f)}function pointFpTwice(){if(this.isInfinity()){return this}if(this.y.toBigInteger().signum()==0){return this.curve.getInfinity()}var g=new BigInteger("3");var c=this.x.toBigInteger();var h=this.y.toBigInteger();var e=h.multiply(this.z);var j=e.multiply(h).mod(this.curve.q);var i=this.curve.a.toBigInteger();var k=c.square().multiply(g);if(!BigInteger.ZERO.equals(i)){k=k.add(this.z.square().multiply(i))}k=k.mod(this.curve.q);var b=k.square().subtract(c.shiftLeft(3).multiply(j)).shiftLeft(1).multiply(e).mod(this.curve.q);var f=k.multiply(g).multiply(c).subtract(j.shiftLeft(1)).shiftLeft(2).multiply(j).subtract(k.square().multiply(k)).mod(this.curve.q);var d=e.square().multiply(e).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(b),this.curve.fromBigInteger(f),d)}function pointFpMultiply(b){if(this.isInfinity()){return this}if(b.signum()==0){return this.curve.getInfinity()}var g=b;var f=g.multiply(new BigInteger("3"));var l=this.negate();var d=this;var c;for(c=f.bitLength()-2;c>0;--c){d=d.twice();var a=f.testBit(c);var j=g.testBit(c);if(a!=j){d=d.add(a?this:l)}}return d}function pointFpMultiplyTwo(c,a,b){var d;if(c.bitLength()>b.bitLength()){d=c.bitLength()-1}else{d=b.bitLength()-1}var f=this.curve.getInfinity();var e=this.add(a);while(d>=0){f=f.twice();if(c.testBit(d)){if(b.testBit(d)){f=f.add(e)}else{f=f.add(this)}}else{if(b.testBit(d)){f=f.add(a)}}--d}return f}ECPointFp.prototype.getX=pointFpGetX;ECPointFp.prototype.getY=pointFpGetY;ECPointFp.prototype.equals=pointFpEquals;ECPointFp.prototype.isInfinity=pointFpIsInfinity;ECPointFp.prototype.negate=pointFpNegate;ECPointFp.prototype.add=pointFpAdd;ECPointFp.prototype.twice=pointFpTwice;ECPointFp.prototype.multiply=pointFpMultiply;ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo;function ECCurveFp(e,d,c){this.q=e;this.a=this.fromBigInteger(d);this.b=this.fromBigInteger(c);this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(a){if(a==this){return true}return(this.q.equals(a.q)&&this.a.equals(a.a)&&this.b.equals(a.b))}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(a){return new ECFieldElementFp(this.q,a)}function curveFpDecodePointHex(d){switch(parseInt(d.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var a=(d.length-2)/2;var c=d.substr(2,a);var b=d.substr(a+2,a);return new ECPointFp(this,this.fromBigInteger(new BigInteger(c,16)),this.fromBigInteger(new BigInteger(b,16)));default:return null}}ECCurveFp.prototype.getQ=curveFpGetQ;ECCurveFp.prototype.getA=curveFpGetA;ECCurveFp.prototype.getB=curveFpGetB;ECCurveFp.prototype.equals=curveFpEquals;ECCurveFp.prototype.getInfinity=curveFpGetInfinity;ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger;ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex;
	/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
	 */
	ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)};ECPointFp.prototype.getEncoded=function(c){var d=function(h,f){var g=h.toByteArrayUnsigned();if(f<g.length){g=g.slice(g.length-f)}else{while(f>g.length){g.unshift(0)}}return g};var a=this.getX().toBigInteger();var e=this.getY().toBigInteger();var b=d(a,32);if(c){if(e.isEven()){b.unshift(2)}else{b.unshift(3)}}else{b.unshift(4);b=b.concat(d(e,32))}return b};ECPointFp.decodeFrom=function(g,c){var f=c[0];var e=c.length-1;var d=c.slice(1,1+e/2);var b=c.slice(1+e/2,1+e);d.unshift(0);b.unshift(0);var a=new BigInteger(d);var h=new BigInteger(b);return new ECPointFp(g,g.fromBigInteger(a),g.fromBigInteger(h))};ECPointFp.decodeFromHex=function(g,c){var f=c.substr(0,2);var e=c.length-2;var d=c.substr(2,e/2);var b=c.substr(2+e/2,e/2);var a=new BigInteger(d,16);var h=new BigInteger(b,16);return new ECPointFp(g,g.fromBigInteger(a),g.fromBigInteger(h))};ECPointFp.prototype.add2D=function(c){if(this.isInfinity()){return c}if(c.isInfinity()){return this}if(this.x.equals(c.x)){if(this.y.equals(c.y)){return this.twice()}return this.curve.getInfinity()}var g=c.x.subtract(this.x);var e=c.y.subtract(this.y);var a=e.divide(g);var d=a.square().subtract(this.x).subtract(c.x);var f=a.multiply(this.x.subtract(d)).subtract(this.y);return new ECPointFp(this.curve,d,f)};ECPointFp.prototype.twice2D=function(){if(this.isInfinity()){return this}if(this.y.toBigInteger().signum()==0){return this.curve.getInfinity()}var b=this.curve.fromBigInteger(BigInteger.valueOf(2));var e=this.curve.fromBigInteger(BigInteger.valueOf(3));var a=this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(b));var c=a.square().subtract(this.x.multiply(b));var d=a.multiply(this.x.subtract(c)).subtract(this.y);return new ECPointFp(this.curve,c,d)};ECPointFp.prototype.multiply2D=function(b){if(this.isInfinity()){return this}if(b.signum()==0){return this.curve.getInfinity()}var g=b;var f=g.multiply(new BigInteger("3"));var l=this.negate();var d=this;var c;for(c=f.bitLength()-2;c>0;--c){d=d.twice();var a=f.testBit(c);var j=g.testBit(c);if(a!=j){d=d.add2D(a?this:l)}}return d};ECPointFp.prototype.isOnCurve=function(){var d=this.getX().toBigInteger();var i=this.getY().toBigInteger();var f=this.curve.getA().toBigInteger();var c=this.curve.getB().toBigInteger();var h=this.curve.getQ();var e=i.multiply(i).mod(h);var g=d.multiply(d).multiply(d).add(f.multiply(d)).add(c).mod(h);return e.equals(g)};ECPointFp.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"};ECPointFp.prototype.validate=function(){var c=this.curve.getQ();if(this.isInfinity()){throw new Error("Point is at infinity.")}var a=this.getX().toBigInteger();var b=this.getY().toBigInteger();if(a.compareTo(BigInteger.ONE)<0||a.compareTo(c.subtract(BigInteger.ONE))>0){throw new Error("x coordinate out of bounds")}if(b.compareTo(BigInteger.ONE)<0||b.compareTo(c.subtract(BigInteger.ONE))>0){throw new Error("y coordinate out of bounds")}if(!this.isOnCurve()){throw new Error("Point is not on the curve.")}if(this.multiply(c).isInfinity()){throw new Error("Point is not a scalar multiple of G.")}return true};
	/*! asn1-1.0.8.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(a){var b=a.toString(16);if((b.length%2)==1){b="0"+b}return b};this.bigIntToMinTwosComplementsHex=function(j){var f=j.toString(16);if(f.substr(0,1)!="-"){if(f.length%2==1){f="0"+f}else{if(!f.match(/^[0-7]/)){f="00"+f}}}else{var a=f.substr(1);var e=a.length;if(e%2==1){e+=1}else{if(!f.match(/^[0-7]/)){e+=2}}var g="";for(var d=0;d<e;d++){g+="f"}var c=new BigInteger(g,16);var b=c.xor(j).add(BigInteger.ONE);f=b.toString(16).replace(/^-/,"")}return f};this.getPEMStringFromHex=function(a,b){var c=KJUR.asn1;var f=CryptoJS.enc.Hex.parse(a);var d=CryptoJS.enc.Base64.stringify(f);var e=d.replace(/(.{64})/g,"$1\r\n");e=e.replace(/\r\n$/,"");return"-----BEGIN "+b+"-----\r\n"+e+"\r\n-----END "+b+"-----\r\n"};this.newObject=function(b){var g=KJUR.asn1;var k=Object.keys(b);if(k.length!=1){throw"key of param shall be only one."}var j=k[0];if(":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+j+":")==-1){throw"undefined key: "+j}if(j=="bool"){return new g.DERBoolean(b[j])}if(j=="int"){return new g.DERInteger(b[j])}if(j=="bitstr"){return new g.DERBitString(b[j])}if(j=="octstr"){return new g.DEROctetString(b[j])}if(j=="null"){return new g.DERNull(b[j])}if(j=="oid"){return new g.DERObjectIdentifier(b[j])}if(j=="enum"){return new g.DEREnumerated(b[j])}if(j=="utf8str"){return new g.DERUTF8String(b[j])}if(j=="numstr"){return new g.DERNumericString(b[j])}if(j=="prnstr"){return new g.DERPrintableString(b[j])}if(j=="telstr"){return new g.DERTeletexString(b[j])}if(j=="ia5str"){return new g.DERIA5String(b[j])}if(j=="utctime"){return new g.DERUTCTime(b[j])}if(j=="gentime"){return new g.DERGeneralizedTime(b[j])}if(j=="seq"){var m=b[j];var h=[];for(var e=0;e<m.length;e++){var l=g.ASN1Util.newObject(m[e]);h.push(l)}return new g.DERSequence({array:h})}if(j=="set"){var m=b[j];var h=[];for(var e=0;e<m.length;e++){var l=g.ASN1Util.newObject(m[e]);h.push(l)}return new g.DERSet({array:h})}if(j=="tag"){var c=b[j];if(Object.prototype.toString.call(c)==="[object Array]"&&c.length==3){var d=g.ASN1Util.newObject(c[2]);return new g.DERTaggedObject({tag:c[0],explicit:c[1],obj:d})}else{var f={};if(c.explicit!==undefined){f.explicit=c.explicit}if(c.tag!==undefined){f.tag=c.tag}if(c.obj===undefined){throw"obj shall be specified for 'tag'."}f.obj=g.ASN1Util.newObject(c.obj);return new g.DERTaggedObject(f)}}};this.jsonToASN1HEX=function(b){var a=this.newObject(b);return a.getEncodedHex()}};KJUR.asn1.ASN1Util.oidHexToInt=function(a){var j="";var k=parseInt(a.substr(0,2),16);var d=Math.floor(k/40);var c=k%40;var j=d+"."+c;var e="";for(var f=2;f<a.length;f+=2){var g=parseInt(a.substr(f,2),16);var h=("00000000"+g.toString(2)).slice(-8);e=e+h.substr(1,7);if(h.substr(0,1)=="0"){var b=new BigInteger(e,2);j=j+"."+b.toString(10);e=""}}return j};KJUR.asn1.ASN1Util.oidIntToHex=function(f){var e=function(a){var k=a.toString(16);if(k.length==1){k="0"+k}return k};var d=function(o){var n="";var k=new BigInteger(o,10);var a=k.toString(2);var l=7-a.length%7;if(l==7){l=0}var q="";for(var m=0;m<l;m++){q+="0"}a=q+a;for(var m=0;m<a.length-1;m+=7){var p=a.substr(m,7);if(m!=a.length-7){p="1"+p}n+=e(parseInt(p,2))}return n};if(!f.match(/^[0-9.]+$/)){throw"malformed oid string: "+f}var g="";var b=f.split(".");var j=parseInt(b[0])*40+parseInt(b[1]);g+=e(j);b.splice(0,2);for(var c=0;c<b.length;c++){g+=d(b[c])}return g};KJUR.asn1.ASN1Object=function(){var c=true;var b=null;var d="00";var e="00";var a="";this.getLengthHexFromValue=function(){if(typeof this.hV=="undefined"||this.hV==null){throw"this.hV is null or undefined."}if(this.hV.length%2==1){throw"value hex must be even length: n="+a.length+",v="+this.hV}var i=this.hV.length/2;var h=i.toString(16);if(h.length%2==1){h="0"+h}if(i<128){return h}else{var g=h.length/2;if(g>15){throw"ASN.1 length too long to represent by 8x: n = "+i.toString(16)}var f=128+g;return f.toString(16)+h}};this.getEncodedHex=function(){if(this.hTLV==null||this.isModified){this.hV=this.getFreshValueHex();this.hL=this.getLengthHexFromValue();this.hTLV=this.hT+this.hL+this.hV;this.isModified=false}return this.hTLV};this.getValueHex=function(){this.getEncodedHex();return this.hV};this.getFreshValueHex=function(){return""}};KJUR.asn1.DERAbstractString=function(c){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var b=null;var a=null;this.getString=function(){return this.s};this.setString=function(d){this.hTLV=null;this.isModified=true;this.s=d;this.hV=stohex(this.s)};this.setStringHex=function(d){this.hTLV=null;this.isModified=true;this.s=null;this.hV=d};this.getFreshValueHex=function(){return this.hV};if(typeof c!="undefined"){if(typeof c=="string"){this.setString(c)}else{if(typeof c.str!="undefined"){this.setString(c.str)}else{if(typeof c.hex!="undefined"){this.setStringHex(c.hex)}}}}};YAHOO.lang.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractTime=function(c){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);var b=null;var a=null;this.localDateToUTC=function(f){utc=f.getTime()+(f.getTimezoneOffset()*60000);var e=new Date(utc);return e};this.formatDate=function(m,o,e){var g=this.zeroPadding;var n=this.localDateToUTC(m);var p=String(n.getFullYear());if(o=="utc"){p=p.substr(2,2)}var l=g(String(n.getMonth()+1),2);var q=g(String(n.getDate()),2);var h=g(String(n.getHours()),2);var i=g(String(n.getMinutes()),2);var j=g(String(n.getSeconds()),2);var r=p+l+q+h+i+j;if(e===true){var f=n.getMilliseconds();if(f!=0){var k=g(String(f),3);k=k.replace(/[0]+$/,"");r=r+"."+k}}return r+"Z"};this.zeroPadding=function(e,d){if(e.length>=d){return e}return new Array(d-e.length+1).join("0")+e};this.getString=function(){return this.s};this.setString=function(d){this.hTLV=null;this.isModified=true;this.s=d;this.hV=stohex(d)};this.setByDateValue=function(h,j,e,d,f,g){var i=new Date(Date.UTC(h,j-1,e,d,f,g,0));this.setByDate(i)};this.getFreshValueHex=function(){return this.hV}};YAHOO.lang.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractStructured=function(b){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var a=null;this.setByASN1ObjectArray=function(c){this.hTLV=null;this.isModified=true;this.asn1Array=c};this.appendASN1Object=function(c){this.hTLV=null;this.isModified=true;this.asn1Array.push(c)};this.asn1Array=new Array();if(typeof b!="undefined"){if(typeof b.array!="undefined"){this.asn1Array=b.array}}};YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object);KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this);this.hT="01";this.hTLV="0101ff"};YAHOO.lang.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object);KJUR.asn1.DERInteger=function(a){KJUR.asn1.DERInteger.superclass.constructor.call(this);this.hT="02";this.setByBigInteger=function(b){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b)};this.setByInteger=function(c){var b=new BigInteger(String(c),10);this.setByBigInteger(b)};this.setValueHex=function(b){this.hV=b};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a.bigint!="undefined"){this.setByBigInteger(a.bigint)}else{if(typeof a["int"]!="undefined"){this.setByInteger(a["int"])}else{if(typeof a=="number"){this.setByInteger(a)}else{if(typeof a.hex!="undefined"){this.setValueHex(a.hex)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object);KJUR.asn1.DERBitString=function(a){KJUR.asn1.DERBitString.superclass.constructor.call(this);this.hT="03";this.setHexValueIncludingUnusedBits=function(b){this.hTLV=null;this.isModified=true;this.hV=b};this.setUnusedBitsAndHexValue=function(b,d){if(b<0||7<b){throw"unused bits shall be from 0 to 7: u = "+b}var c="0"+b;this.hTLV=null;this.isModified=true;this.hV=c+d};this.setByBinaryString=function(e){e=e.replace(/0+$/,"");var f=8-e.length%8;if(f==8){f=0}for(var g=0;g<=f;g++){e+="0"}var j="";for(var g=0;g<e.length-1;g+=8){var d=e.substr(g,8);var c=parseInt(d,2).toString(16);if(c.length==1){c="0"+c}j+=c}this.hTLV=null;this.isModified=true;this.hV="0"+f+j};this.setByBooleanArray=function(d){var c="";for(var b=0;b<d.length;b++){if(d[b]==true){c+="1"}else{c+="0"}}this.setByBinaryString(c)};this.newFalseArray=function(d){var b=new Array(d);for(var c=0;c<d;c++){b[c]=false}return b};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a=="string"&&a.toLowerCase().match(/^[0-9a-f]+$/)){this.setHexValueIncludingUnusedBits(a)}else{if(typeof a.hex!="undefined"){this.setHexValueIncludingUnusedBits(a.hex)}else{if(typeof a.bin!="undefined"){this.setByBinaryString(a.bin)}else{if(typeof a.array!="undefined"){this.setByBooleanArray(a.array)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object);KJUR.asn1.DEROctetString=function(a){KJUR.asn1.DEROctetString.superclass.constructor.call(this,a);this.hT="04"};YAHOO.lang.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this);this.hT="05";this.hTLV="0500"};YAHOO.lang.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object);KJUR.asn1.DERObjectIdentifier=function(c){var b=function(d){var e=d.toString(16);if(e.length==1){e="0"+e}return e};var a=function(k){var j="";var e=new BigInteger(k,10);var d=e.toString(2);var f=7-d.length%7;if(f==7){f=0}var m="";for(var g=0;g<f;g++){m+="0"}d=m+d;for(var g=0;g<d.length-1;g+=7){var l=d.substr(g,7);if(g!=d.length-7){l="1"+l}j+=b(parseInt(l,2))}return j};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);this.hT="06";this.setValueHex=function(d){this.hTLV=null;this.isModified=true;this.s=null;this.hV=d};this.setValueOidString=function(f){if(!f.match(/^[0-9.]+$/)){throw"malformed oid string: "+f}var g="";var d=f.split(".");var j=parseInt(d[0])*40+parseInt(d[1]);g+=b(j);d.splice(0,2);for(var e=0;e<d.length;e++){g+=a(d[e])}this.hTLV=null;this.isModified=true;this.s=null;this.hV=g};this.setValueName=function(e){if(typeof KJUR.asn1.x509.OID.name2oidList[e]!="undefined"){var d=KJUR.asn1.x509.OID.name2oidList[e];this.setValueOidString(d)}else{throw"DERObjectIdentifier oidName undefined: "+e}};this.getFreshValueHex=function(){return this.hV};if(typeof c!="undefined"){if(typeof c=="string"&&c.match(/^[0-2].[0-9.]+$/)){this.setValueOidString(c)}else{if(KJUR.asn1.x509.OID.name2oidList[c]!==undefined){this.setValueOidString(KJUR.asn1.x509.OID.name2oidList[c])}else{if(typeof c.oid!="undefined"){this.setValueOidString(c.oid)}else{if(typeof c.hex!="undefined"){this.setValueHex(c.hex)}else{if(typeof c.name!="undefined"){this.setValueName(c.name)}}}}}}};YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.DEREnumerated=function(a){KJUR.asn1.DEREnumerated.superclass.constructor.call(this);this.hT="0a";this.setByBigInteger=function(b){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b)};this.setByInteger=function(c){var b=new BigInteger(String(c),10);this.setByBigInteger(b)};this.setValueHex=function(b){this.hV=b};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a["int"]!="undefined"){this.setByInteger(a["int"])}else{if(typeof a=="number"){this.setByInteger(a)}else{if(typeof a.hex!="undefined"){this.setValueHex(a.hex)}}}}};YAHOO.lang.extend(KJUR.asn1.DEREnumerated,KJUR.asn1.ASN1Object);KJUR.asn1.DERUTF8String=function(a){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,a);this.hT="0c"};YAHOO.lang.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNumericString=function(a){KJUR.asn1.DERNumericString.superclass.constructor.call(this,a);this.hT="12"};YAHOO.lang.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERPrintableString=function(a){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,a);this.hT="13"};YAHOO.lang.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERTeletexString=function(a){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,a);this.hT="14"};YAHOO.lang.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERIA5String=function(a){KJUR.asn1.DERIA5String.superclass.constructor.call(this,a);this.hT="16"};YAHOO.lang.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERUTCTime=function(a){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,a);this.hT="17";this.setByDate=function(b){this.hTLV=null;this.isModified=true;this.date=b;this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)};this.getFreshValueHex=function(){if(typeof this.date=="undefined"&&typeof this.s=="undefined"){this.date=new Date();this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)}return this.hV};if(typeof a!="undefined"){if(typeof a.str!="undefined"){this.setString(a.str)}else{if(typeof a=="string"&&a.match(/^[0-9]{12}Z$/)){this.setString(a)}else{if(typeof a.hex!="undefined"){this.setStringHex(a.hex)}else{if(typeof a.date!="undefined"){this.setByDate(a.date)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERGeneralizedTime=function(a){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,a);this.hT="18";this.withMillis=false;this.setByDate=function(b){this.hTLV=null;this.isModified=true;this.date=b;this.s=this.formatDate(this.date,"gen",this.withMillis);this.hV=stohex(this.s)};this.getFreshValueHex=function(){if(typeof this.date=="undefined"&&typeof this.s=="undefined"){this.date=new Date();this.s=this.formatDate(this.date,"gen",this.withMillis);this.hV=stohex(this.s)}return this.hV};if(typeof a!="undefined"){if(typeof a.str!="undefined"){this.setString(a.str)}else{if(typeof a=="string"&&a.match(/^[0-9]{14}Z$/)){this.setString(a)}else{if(typeof a.hex!="undefined"){this.setStringHex(a.hex)}else{if(typeof a.date!="undefined"){this.setByDate(a.date)}else{if(a.millis===true){this.withMillis=true}}}}}}};YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERSequence=function(a){KJUR.asn1.DERSequence.superclass.constructor.call(this,a);this.hT="30";this.getFreshValueHex=function(){var c="";for(var b=0;b<this.asn1Array.length;b++){var d=this.asn1Array[b];c+=d.getEncodedHex()}this.hV=c;return this.hV}};YAHOO.lang.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERSet=function(a){KJUR.asn1.DERSet.superclass.constructor.call(this,a);this.hT="31";this.sortFlag=true;this.getFreshValueHex=function(){var b=new Array();for(var c=0;c<this.asn1Array.length;c++){var d=this.asn1Array[c];b.push(d.getEncodedHex())}if(this.sortFlag==true){b.sort()}this.hV=b.join("");return this.hV};if(typeof a!="undefined"){if(typeof a.sortflag!="undefined"&&a.sortflag==false){this.sortFlag=false}}};YAHOO.lang.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERTaggedObject=function(a){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);this.hT="a0";this.hV="";this.isExplicit=true;this.asn1Object=null;this.setASN1Object=function(b,c,d){this.hT=c;this.isExplicit=b;this.asn1Object=d;if(this.isExplicit){this.hV=this.asn1Object.getEncodedHex();this.hTLV=null;this.isModified=true}else{this.hV=null;this.hTLV=d.getEncodedHex();this.hTLV=this.hTLV.replace(/^../,c);this.isModified=false}};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a.tag!="undefined"){this.hT=a.tag}if(typeof a.explicit!="undefined"){this.isExplicit=a.explicit}if(typeof a.obj!="undefined"){this.asn1Object=a.obj;this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)}}};YAHOO.lang.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);
	/*! asn1hex-1.1.6.js (c) 2012-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	var ASN1HEX=new function(){this.getByteLengthOfL_AtObj=function(b,c){if(b.substring(c+2,c+3)!="8"){return 1}var a=parseInt(b.substring(c+3,c+4));if(a==0){return -1}if(0<a&&a<10){return a+1}return -2};this.getHexOfL_AtObj=function(b,c){var a=this.getByteLengthOfL_AtObj(b,c);if(a<1){return""}return b.substring(c+2,c+2+a*2)};this.getIntOfL_AtObj=function(c,d){var b=this.getHexOfL_AtObj(c,d);if(b==""){return -1}var a;if(parseInt(b.substring(0,1))<8){a=new BigInteger(b,16)}else{a=new BigInteger(b.substring(2),16)}return a.intValue()};this.getStartPosOfV_AtObj=function(b,c){var a=this.getByteLengthOfL_AtObj(b,c);if(a<0){return a}return c+(a+1)*2};this.getHexOfV_AtObj=function(c,d){var b=this.getStartPosOfV_AtObj(c,d);var a=this.getIntOfL_AtObj(c,d);return c.substring(b,b+a*2)};this.getHexOfTLV_AtObj=function(c,e){var b=c.substr(e,2);var d=this.getHexOfL_AtObj(c,e);var a=this.getHexOfV_AtObj(c,e);return b+d+a};this.getPosOfNextSibling_AtObj=function(c,d){var b=this.getStartPosOfV_AtObj(c,d);var a=this.getIntOfL_AtObj(c,d);return b+a*2};this.getPosArrayOfChildren_AtObj=function(f,j){var c=new Array();var i=this.getStartPosOfV_AtObj(f,j);c.push(i);var b=this.getIntOfL_AtObj(f,j);var g=i;var d=0;while(1){var e=this.getPosOfNextSibling_AtObj(f,g);if(e==null||(e-i>=(b*2))){break}if(d>=200){break}c.push(e);g=e;d++}return c};this.getNthChildIndex_AtObj=function(d,b,e){var c=this.getPosArrayOfChildren_AtObj(d,b);return c[e]};this.getDecendantIndexByNthList=function(e,d,c){if(c.length==0){return d}var f=c.shift();var b=this.getPosArrayOfChildren_AtObj(e,d);return this.getDecendantIndexByNthList(e,b[f],c)};this.getDecendantHexTLVByNthList=function(d,c,b){var a=this.getDecendantIndexByNthList(d,c,b);return this.getHexOfTLV_AtObj(d,a)};this.getDecendantHexVByNthList=function(d,c,b){var a=this.getDecendantIndexByNthList(d,c,b);return this.getHexOfV_AtObj(d,a)}};ASN1HEX.getVbyList=function(d,c,b,e){var a=this.getDecendantIndexByNthList(d,c,b);if(a===undefined){throw"can't find nthList object"}if(e!==undefined){if(d.substr(a,2)!=e){throw"checking tag doesn't match: "+d.substr(a,2)+"!="+e}}return this.getHexOfV_AtObj(d,a)};ASN1HEX.hextooidstr=function(e){var h=function(b,a){if(b.length>=a){return b}return new Array(a-b.length+1).join("0")+b};var l=[];var o=e.substr(0,2);var f=parseInt(o,16);l[0]=new String(Math.floor(f/40));l[1]=new String(f%40);var m=e.substr(2);var k=[];for(var g=0;g<m.length/2;g++){k.push(parseInt(m.substr(g*2,2),16))}var j=[];var d="";for(var g=0;g<k.length;g++){if(k[g]&128){d=d+h((k[g]&127).toString(2),7)}else{d=d+h((k[g]&127).toString(2),7);j.push(new String(parseInt(d,2)));d=""}}var n=l.join(".");if(j.length>0){n=n+"."+j.join(".")}return n};ASN1HEX.dump=function(e,c,k,g){var o=function(w,i){if(w.length<=i*2){return w}else{var v=w.substr(0,i)+"..(total "+w.length/2+"bytes).."+w.substr(w.length-i,i);return v}};if(c===undefined){c={ommit_long_octet:32}}if(k===undefined){k=0}if(g===undefined){g=""}var r=c.ommit_long_octet;if(e.substr(k,2)=="01"){var h=ASN1HEX.getHexOfV_AtObj(e,k);if(h=="00"){return g+"BOOLEAN FALSE\n"}else{return g+"BOOLEAN TRUE\n"}}if(e.substr(k,2)=="02"){var h=ASN1HEX.getHexOfV_AtObj(e,k);return g+"INTEGER "+o(h,r)+"\n"}if(e.substr(k,2)=="03"){var h=ASN1HEX.getHexOfV_AtObj(e,k);return g+"BITSTRING "+o(h,r)+"\n"}if(e.substr(k,2)=="04"){var h=ASN1HEX.getHexOfV_AtObj(e,k);if(ASN1HEX.isASN1HEX(h)){var j=g+"OCTETSTRING, encapsulates\n";j=j+ASN1HEX.dump(h,c,0,g+"  ");return j}else{return g+"OCTETSTRING "+o(h,r)+"\n"}}if(e.substr(k,2)=="05"){return g+"NULL\n"}if(e.substr(k,2)=="06"){var l=ASN1HEX.getHexOfV_AtObj(e,k);var a=KJUR.asn1.ASN1Util.oidHexToInt(l);var n=KJUR.asn1.x509.OID.oid2name(a);var b=a.replace(/\./g," ");if(n!=""){return g+"ObjectIdentifier "+n+" ("+b+")\n"}else{return g+"ObjectIdentifier ("+b+")\n"}}if(e.substr(k,2)=="0c"){return g+"UTF8String '"+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"'\n"}if(e.substr(k,2)=="13"){return g+"PrintableString '"+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"'\n"}if(e.substr(k,2)=="14"){return g+"TeletexString '"+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"'\n"}if(e.substr(k,2)=="16"){return g+"IA5String '"+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"'\n"}if(e.substr(k,2)=="17"){return g+"UTCTime "+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"\n"}if(e.substr(k,2)=="18"){return g+"GeneralizedTime "+hextoutf8(ASN1HEX.getHexOfV_AtObj(e,k))+"\n"}if(e.substr(k,2)=="30"){if(e.substr(k,4)=="3000"){return g+"SEQUENCE {}\n"}var j=g+"SEQUENCE\n";var d=ASN1HEX.getPosArrayOfChildren_AtObj(e,k);var f=c;if((d.length==2||d.length==3)&&e.substr(d[0],2)=="06"&&e.substr(d[d.length-1],2)=="04"){var t=ASN1HEX.getHexOfV_AtObj(e,d[0]);var a=KJUR.asn1.ASN1Util.oidHexToInt(t);var n=KJUR.asn1.x509.OID.oid2name(a);var p=JSON.parse(JSON.stringify(c));p.x509ExtName=n;f=p}for(var q=0;q<d.length;q++){j=j+ASN1HEX.dump(e,f,d[q],g+"  ")}return j}if(e.substr(k,2)=="31"){var j=g+"SET\n";var d=ASN1HEX.getPosArrayOfChildren_AtObj(e,k);for(var q=0;q<d.length;q++){j=j+ASN1HEX.dump(e,c,d[q],g+"  ")}return j}var u=parseInt(e.substr(k,2),16);if((u&128)!=0){var m=u&31;if((u&32)!=0){var j=g+"["+m+"]\n";var d=ASN1HEX.getPosArrayOfChildren_AtObj(e,k);for(var q=0;q<d.length;q++){j=j+ASN1HEX.dump(e,c,d[q],g+"  ")}return j}else{var h=ASN1HEX.getHexOfV_AtObj(e,k);if(h.substr(0,8)=="68747470"){h=hextoutf8(h)}if(c.x509ExtName==="subjectAltName"&&m==2){h=hextoutf8(h)}var j=g+"["+m+"] "+h+"\n";return j}}return g+"UNKNOWN("+e.substr(k,2)+") "+ASN1HEX.getHexOfV_AtObj(e,k)+"\n"};ASN1HEX.isASN1HEX=function(d){if(d.length%2==1){return false}var c=ASN1HEX.getIntOfL_AtObj(d,0);var b=d.substr(0,2);var e=ASN1HEX.getHexOfL_AtObj(d,0);var a=d.length-b.length-e.length;if(a==c*2){return true}return false};
	/*! asn1x509-1.0.13.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.x509=="undefined"||!KJUR.asn1.x509){KJUR.asn1.x509={}}KJUR.asn1.x509.Certificate=function(g){KJUR.asn1.x509.Certificate.superclass.constructor.call(this);var b=null;var d=null;var f=null;var c=null;var a=null;var e=null;this.setRsaPrvKeyByPEMandPass=function(i,k){var h=PKCS5PKEY.getDecryptedKeyHex(i,k);var j=new RSAKey();j.readPrivateKeyFromASN1HexString(h);this.prvKey=j};this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg;sig=new KJUR.crypto.Signature({alg:"SHA1withRSA"});sig.init(this.prvKey);sig.updateHex(this.asn1TBSCert.getEncodedHex());this.hexSig=sig.sign();this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var h=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=h.getEncodedHex();this.isModified=false};this.setSignatureHex=function(h){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg;this.hexSig=h;this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var i=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=i.getEncodedHex();this.isModified=false};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};this.getPEMString=function(){var j=this.getEncodedHex();var h=CryptoJS.enc.Hex.parse(j);var i=CryptoJS.enc.Base64.stringify(h);var k=i.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN CERTIFICATE-----\r\n"+k+"\r\n-----END CERTIFICATE-----\r\n"};if(typeof g!="undefined"){if(typeof g.tbscertobj!="undefined"){this.asn1TBSCert=g.tbscertobj}if(typeof g.prvkeyobj!="undefined"){this.prvKey=g.prvkeyobj}else{if(typeof g.rsaprvkey!="undefined"){this.prvKey=g.rsaprvkey}else{if((typeof g.rsaprvpem!="undefined")&&(typeof g.rsaprvpas!="undefined")){this.setRsaPrvKeyByPEMandPass(g.rsaprvpem,g.rsaprvpas)}}}}};YAHOO.lang.extend(KJUR.asn1.x509.Certificate,KJUR.asn1.ASN1Object);KJUR.asn1.x509.TBSCertificate=function(a){KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this);this._initialize=function(){this.asn1Array=new Array();this.asn1Version=new KJUR.asn1.DERTaggedObject({obj:new KJUR.asn1.DERInteger({"int":2})});this.asn1SerialNumber=null;this.asn1SignatureAlg=null;this.asn1Issuer=null;this.asn1NotBefore=null;this.asn1NotAfter=null;this.asn1Subject=null;this.asn1SubjPKey=null;this.extensionsArray=new Array()};this.setSerialNumberByParam=function(b){this.asn1SerialNumber=new KJUR.asn1.DERInteger(b)};this.setSignatureAlgByParam=function(b){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(b)};this.setIssuerByParam=function(b){this.asn1Issuer=new KJUR.asn1.x509.X500Name(b)};this.setNotBeforeByParam=function(b){this.asn1NotBefore=new KJUR.asn1.x509.Time(b)};this.setNotAfterByParam=function(b){this.asn1NotAfter=new KJUR.asn1.x509.Time(b)};this.setSubjectByParam=function(b){this.asn1Subject=new KJUR.asn1.x509.X500Name(b)};this.setSubjectPublicKeyByParam=function(b){this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(b)};this.setSubjectPublicKeyByGetKey=function(c){var b=KEYUTIL.getKey(c);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(b)};this.appendExtension=function(b){this.extensionsArray.push(b)};this.appendExtensionByName=function(d,b){if(d.toLowerCase()=="basicconstraints"){var c=new KJUR.asn1.x509.BasicConstraints(b);this.appendExtension(c)}else{if(d.toLowerCase()=="keyusage"){var c=new KJUR.asn1.x509.KeyUsage(b);this.appendExtension(c)}else{if(d.toLowerCase()=="crldistributionpoints"){var c=new KJUR.asn1.x509.CRLDistributionPoints(b);this.appendExtension(c)}else{if(d.toLowerCase()=="extkeyusage"){var c=new KJUR.asn1.x509.ExtKeyUsage(b);this.appendExtension(c)}else{if(d.toLowerCase()=="authoritykeyidentifier"){var c=new KJUR.asn1.x509.AuthorityKeyIdentifier(b);this.appendExtension(c)}else{throw"unsupported extension name: "+d}}}}}};this.getEncodedHex=function(){if(this.asn1NotBefore==null||this.asn1NotAfter==null){throw"notBefore and/or notAfter not set"}var c=new KJUR.asn1.DERSequence({array:[this.asn1NotBefore,this.asn1NotAfter]});this.asn1Array=new Array();this.asn1Array.push(this.asn1Version);this.asn1Array.push(this.asn1SerialNumber);this.asn1Array.push(this.asn1SignatureAlg);this.asn1Array.push(this.asn1Issuer);this.asn1Array.push(c);this.asn1Array.push(this.asn1Subject);this.asn1Array.push(this.asn1SubjPKey);if(this.extensionsArray.length>0){var d=new KJUR.asn1.DERSequence({array:this.extensionsArray});var b=new KJUR.asn1.DERTaggedObject({explicit:true,tag:"a3",obj:d});this.asn1Array.push(b)}var e=new KJUR.asn1.DERSequence({array:this.asn1Array});this.hTLV=e.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize()};YAHOO.lang.extend(KJUR.asn1.x509.TBSCertificate,KJUR.asn1.ASN1Object);KJUR.asn1.x509.Extension=function(b){KJUR.asn1.x509.Extension.superclass.constructor.call(this);var a=null;this.getEncodedHex=function(){var f=new KJUR.asn1.DERObjectIdentifier({oid:this.oid});var e=new KJUR.asn1.DEROctetString({hex:this.getExtnValueHex()});var d=new Array();d.push(f);if(this.critical){d.push(new KJUR.asn1.DERBoolean())}d.push(e);var c=new KJUR.asn1.DERSequence({array:d});return c.getEncodedHex()};this.critical=false;if(typeof b!="undefined"){if(typeof b.critical!="undefined"){this.critical=b.critical}}};YAHOO.lang.extend(KJUR.asn1.x509.Extension,KJUR.asn1.ASN1Object);KJUR.asn1.x509.KeyUsage=function(a){KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this,a);this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.15";if(typeof a!="undefined"){if(typeof a.bin!="undefined"){this.asn1ExtnValue=new KJUR.asn1.DERBitString(a)}}};YAHOO.lang.extend(KJUR.asn1.x509.KeyUsage,KJUR.asn1.x509.Extension);KJUR.asn1.x509.BasicConstraints=function(c){KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this,c);var a=false;var b=-1;this.getExtnValueHex=function(){var e=new Array();if(this.cA){e.push(new KJUR.asn1.DERBoolean())}if(this.pathLen>-1){e.push(new KJUR.asn1.DERInteger({"int":this.pathLen}))}var d=new KJUR.asn1.DERSequence({array:e});this.asn1ExtnValue=d;return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.19";this.cA=false;this.pathLen=-1;if(typeof c!="undefined"){if(typeof c.cA!="undefined"){this.cA=c.cA}if(typeof c.pathLen!="undefined"){this.pathLen=c.pathLen}}};YAHOO.lang.extend(KJUR.asn1.x509.BasicConstraints,KJUR.asn1.x509.Extension);KJUR.asn1.x509.CRLDistributionPoints=function(a){KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this,a);this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.setByDPArray=function(b){this.asn1ExtnValue=new KJUR.asn1.DERSequence({array:b})};this.setByOneURI=function(e){var b=new KJUR.asn1.x509.GeneralNames([{uri:e}]);var d=new KJUR.asn1.x509.DistributionPointName(b);var c=new KJUR.asn1.x509.DistributionPoint({dpobj:d});this.setByDPArray([c])};this.oid="2.5.29.31";if(typeof a!="undefined"){if(typeof a.array!="undefined"){this.setByDPArray(a.array)}else{if(typeof a.uri!="undefined"){this.setByOneURI(a.uri)}}}};YAHOO.lang.extend(KJUR.asn1.x509.CRLDistributionPoints,KJUR.asn1.x509.Extension);KJUR.asn1.x509.ExtKeyUsage=function(a){KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this,a);this.setPurposeArray=function(b){this.asn1ExtnValue=new KJUR.asn1.DERSequence();for(var c=0;c<b.length;c++){var d=new KJUR.asn1.DERObjectIdentifier(b[c]);this.asn1ExtnValue.appendASN1Object(d)}};this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.37";if(typeof a!="undefined"){if(typeof a.array!="undefined"){this.setPurposeArray(a.array)}}};YAHOO.lang.extend(KJUR.asn1.x509.ExtKeyUsage,KJUR.asn1.x509.Extension);KJUR.asn1.x509.AuthorityKeyIdentifier=function(a){KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this,a);this.asn1KID=null;this.asn1CertIssuer=null;this.asn1CertSN=null;this.getExtnValueHex=function(){var c=new Array();if(this.asn1KID){c.push(new KJUR.asn1.DERTaggedObject({explicit:false,tag:"80",obj:this.asn1KID}))}if(this.asn1CertIssuer){c.push(new KJUR.asn1.DERTaggedObject({explicit:false,tag:"a1",obj:this.asn1CertIssuer}))}if(this.asn1CertSN){c.push(new KJUR.asn1.DERTaggedObject({explicit:false,tag:"82",obj:this.asn1CertSN}))}var b=new KJUR.asn1.DERSequence({array:c});this.asn1ExtnValue=b;return this.asn1ExtnValue.getEncodedHex()};this.setKIDByParam=function(b){this.asn1KID=new KJUR.asn1.DEROctetString(b)};this.setCertIssuerByParam=function(b){this.asn1CertIssuer=new KJUR.asn1.x509.X500Name(b)};this.setCertSNByParam=function(b){this.asn1CertSN=new KJUR.asn1.DERInteger(b)};this.oid="2.5.29.35";if(typeof a!="undefined"){if(typeof a.kid!="undefined"){this.setKIDByParam(a.kid)}if(typeof a.issuer!="undefined"){this.setCertIssuerByParam(a.issuer)}if(typeof a.sn!="undefined"){this.setCertSNByParam(a.sn)}}};YAHOO.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier,KJUR.asn1.x509.Extension);KJUR.asn1.x509.CRL=function(f){KJUR.asn1.x509.CRL.superclass.constructor.call(this);var a=null;var c=null;var e=null;var b=null;var d=null;this.setRsaPrvKeyByPEMandPass=function(h,j){var g=PKCS5PKEY.getDecryptedKeyHex(h,j);var i=new RSAKey();i.readPrivateKeyFromASN1HexString(g);this.rsaPrvKey=i};this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCertList.asn1SignatureAlg;sig=new KJUR.crypto.Signature({alg:"SHA1withRSA",prov:"cryptojs/jsrsa"});sig.initSign(this.rsaPrvKey);sig.updateHex(this.asn1TBSCertList.getEncodedHex());this.hexSig=sig.sign();this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var g=new KJUR.asn1.DERSequence({array:[this.asn1TBSCertList,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=g.getEncodedHex();this.isModified=false};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};this.getPEMString=function(){var i=this.getEncodedHex();var g=CryptoJS.enc.Hex.parse(i);var h=CryptoJS.enc.Base64.stringify(g);var j=h.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN X509 CRL-----\r\n"+j+"\r\n-----END X509 CRL-----\r\n"};if(typeof f!="undefined"){if(typeof f.tbsobj!="undefined"){this.asn1TBSCertList=f.tbsobj}if(typeof f.rsaprvkey!="undefined"){this.rsaPrvKey=f.rsaprvkey}if((typeof f.rsaprvpem!="undefined")&&(typeof f.rsaprvpas!="undefined")){this.setRsaPrvKeyByPEMandPass(f.rsaprvpem,f.rsaprvpas)}}};YAHOO.lang.extend(KJUR.asn1.x509.CRL,KJUR.asn1.ASN1Object);KJUR.asn1.x509.TBSCertList=function(b){KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this);var a=null;this.setSignatureAlgByParam=function(c){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(c)};this.setIssuerByParam=function(c){this.asn1Issuer=new KJUR.asn1.x509.X500Name(c)};this.setThisUpdateByParam=function(c){this.asn1ThisUpdate=new KJUR.asn1.x509.Time(c)};this.setNextUpdateByParam=function(c){this.asn1NextUpdate=new KJUR.asn1.x509.Time(c)};this.addRevokedCert=function(c,d){var f={};if(c!=undefined&&c!=null){f.sn=c}if(d!=undefined&&d!=null){f.time=d}var e=new KJUR.asn1.x509.CRLEntry(f);this.aRevokedCert.push(e)};this.getEncodedHex=function(){this.asn1Array=new Array();if(this.asn1Version!=null){this.asn1Array.push(this.asn1Version)}this.asn1Array.push(this.asn1SignatureAlg);this.asn1Array.push(this.asn1Issuer);this.asn1Array.push(this.asn1ThisUpdate);if(this.asn1NextUpdate!=null){this.asn1Array.push(this.asn1NextUpdate)}if(this.aRevokedCert.length>0){var c=new KJUR.asn1.DERSequence({array:this.aRevokedCert});this.asn1Array.push(c)}var d=new KJUR.asn1.DERSequence({array:this.asn1Array});this.hTLV=d.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize=function(){this.asn1Version=null;this.asn1SignatureAlg=null;this.asn1Issuer=null;this.asn1ThisUpdate=null;this.asn1NextUpdate=null;this.aRevokedCert=new Array()};this._initialize()};YAHOO.lang.extend(KJUR.asn1.x509.TBSCertList,KJUR.asn1.ASN1Object);KJUR.asn1.x509.CRLEntry=function(c){KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this);var b=null;var a=null;this.setCertSerial=function(d){this.sn=new KJUR.asn1.DERInteger(d)};this.setRevocationDate=function(d){this.time=new KJUR.asn1.x509.Time(d)};this.getEncodedHex=function(){var d=new KJUR.asn1.DERSequence({array:[this.sn,this.time]});this.TLV=d.getEncodedHex();return this.TLV};if(typeof c!="undefined"){if(typeof c.time!="undefined"){this.setRevocationDate(c.time)}if(typeof c.sn!="undefined"){this.setCertSerial(c.sn)}}};YAHOO.lang.extend(KJUR.asn1.x509.CRLEntry,KJUR.asn1.ASN1Object);KJUR.asn1.x509.X500Name=function(b){KJUR.asn1.x509.X500Name.superclass.constructor.call(this);this.asn1Array=new Array();this.setByString=function(c){var d=c.split("/");d.shift();for(var e=0;e<d.length;e++){this.asn1Array.push(new KJUR.asn1.x509.RDN({str:d[e]}))}};this.setByObject=function(e){for(var c in e){if(e.hasOwnProperty(c)){var d=new KJUR.asn1.x509.RDN({str:c+"="+e[c]});this.asn1Array?this.asn1Array.push(d):this.asn1Array=[d]}}};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var c=new KJUR.asn1.DERSequence({array:this.asn1Array});this.hTLV=c.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(typeof b.str!="undefined"){this.setByString(b.str)}else{if(typeof b==="object"){this.setByObject(b)}}if(typeof b.certissuer!="undefined"){var a=new X509();a.hex=X509.pemToHex(b.certissuer);this.hTLV=a.getIssuerHex()}if(typeof b.certsubject!="undefined"){var a=new X509();a.hex=X509.pemToHex(b.certsubject);this.hTLV=a.getSubjectHex()}}};YAHOO.lang.extend(KJUR.asn1.x509.X500Name,KJUR.asn1.ASN1Object);KJUR.asn1.x509.RDN=function(a){KJUR.asn1.x509.RDN.superclass.constructor.call(this);this.asn1Array=new Array();this.addByString=function(b){this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({str:b}))};this.getEncodedHex=function(){var b=new KJUR.asn1.DERSet({array:this.asn1Array});this.TLV=b.getEncodedHex();return this.TLV};if(typeof a!="undefined"){if(typeof a.str!="undefined"){this.addByString(a.str)}}};YAHOO.lang.extend(KJUR.asn1.x509.RDN,KJUR.asn1.ASN1Object);KJUR.asn1.x509.AttributeTypeAndValue=function(b){KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);var d=null;var c=null;var a="utf8";this.setByString=function(e){if(e.match(/^([^=]+)=(.+)$/)){this.setByAttrTypeAndValueStr(RegExp.$1,RegExp.$2)}else{throw"malformed attrTypeAndValueStr: "+e}};this.setByAttrTypeAndValueStr=function(g,f){this.typeObj=KJUR.asn1.x509.OID.atype2obj(g);var e=a;if(g=="C"){e="prn"}this.valueObj=this.getValueObj(e,f)};this.getValueObj=function(f,e){if(f=="utf8"){return new KJUR.asn1.DERUTF8String({str:e})}if(f=="prn"){return new KJUR.asn1.DERPrintableString({str:e})}if(f=="tel"){return new KJUR.asn1.DERTeletexString({str:e})}if(f=="ia5"){return new KJUR.asn1.DERIA5String({str:e})}throw"unsupported directory string type: type="+f+" value="+e};this.getEncodedHex=function(){var e=new KJUR.asn1.DERSequence({array:[this.typeObj,this.valueObj]});this.TLV=e.getEncodedHex();return this.TLV};if(typeof b!="undefined"){if(typeof b.str!="undefined"){this.setByString(b.str)}}};YAHOO.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue,KJUR.asn1.ASN1Object);KJUR.asn1.x509.SubjectPublicKeyInfo=function(d){KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);var b=null;var c=null;var a=null;this.setRSAKey=function(e){if(!RSAKey.prototype.isPrototypeOf(e)){throw"argument is not RSAKey instance"}this.rsaKey=e;var g=new KJUR.asn1.DERInteger({bigint:e.n});var f=new KJUR.asn1.DERInteger({"int":e.e});var i=new KJUR.asn1.DERSequence({array:[g,f]});var h=i.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+h})};this.setRSAPEM=function(g){if(g.match(/-----BEGIN PUBLIC KEY-----/)){var n=g;n=n.replace(/^-----[^-]+-----/,"");n=n.replace(/-----[^-]+-----\s*$/,"");var m=n.replace(/\s+/g,"");var f=CryptoJS.enc.Base64.parse(m);var i=CryptoJS.enc.Hex.stringify(f);var k=_rsapem_getHexValueArrayOfChildrenFromHex(i);var h=k[1];var l=h.substr(2);var e=_rsapem_getHexValueArrayOfChildrenFromHex(l);var j=new RSAKey();j.setPublic(e[0],e[1]);this.setRSAKey(j)}else{throw"key not supported"}};this.getASN1Object=function(){if(this.asn1AlgId==null||this.asn1SubjPKey==null){throw"algId and/or subjPubKey not set"}var e=new KJUR.asn1.DERSequence({array:[this.asn1AlgId,this.asn1SubjPKey]});return e};this.getEncodedHex=function(){var e=this.getASN1Object();this.hTLV=e.getEncodedHex();return this.hTLV};this._setRSAKey=function(e){var g=KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:e.n}},{"int":{"int":e.e}}]});var f=g.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+f})};this._setEC=function(e){var f=new KJUR.asn1.DERObjectIdentifier({name:e.curveName});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"ecPublicKey",asn1params:f});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+e.pubKeyHex})};this._setDSA=function(e){var f=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:e.p}},{"int":{bigint:e.q}},{"int":{bigint:e.g}}]});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"dsa",asn1params:f});var g=new KJUR.asn1.DERInteger({bigint:e.y});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+g.getEncodedHex()})};if(typeof d!="undefined"){if(typeof RSAKey!="undefined"&&d instanceof RSAKey){this._setRSAKey(d)}else{if(typeof KJUR.crypto.ECDSA!="undefined"&&d instanceof KJUR.crypto.ECDSA){this._setEC(d)}else{if(typeof KJUR.crypto.DSA!="undefined"&&d instanceof KJUR.crypto.DSA){this._setDSA(d)}else{if(typeof d.rsakey!="undefined"){this.setRSAKey(d.rsakey)}else{if(typeof d.rsapem!="undefined"){this.setRSAPEM(d.rsapem)}}}}}}};YAHOO.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo,KJUR.asn1.ASN1Object);KJUR.asn1.x509.Time=function(c){KJUR.asn1.x509.Time.superclass.constructor.call(this);var b=null;var a=null;this.setTimeParams=function(d){this.timeParams=d};this.getEncodedHex=function(){var d=null;if(this.timeParams!=null){if(this.type=="utc"){d=new KJUR.asn1.DERUTCTime(this.timeParams)}else{d=new KJUR.asn1.DERGeneralizedTime(this.timeParams)}}else{if(this.type=="utc"){d=new KJUR.asn1.DERUTCTime()}else{d=new KJUR.asn1.DERGeneralizedTime()}}this.TLV=d.getEncodedHex();return this.TLV};this.type="utc";if(typeof c!="undefined"){if(typeof c.type!="undefined"){this.type=c.type}else{if(typeof c.str!="undefined"){if(c.str.match(/^[0-9]{12}Z$/)){this.type="utc"}if(c.str.match(/^[0-9]{14}Z$/)){this.type="gen"}}}this.timeParams=c}};YAHOO.lang.extend(KJUR.asn1.x509.Time,KJUR.asn1.ASN1Object);KJUR.asn1.x509.AlgorithmIdentifier=function(e){KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);var a=null;var d=null;var b=null;var c=false;this.getEncodedHex=function(){if(this.nameAlg==null&&this.asn1Alg==null){throw"algorithm not specified"}if(this.nameAlg!=null&&this.asn1Alg==null){this.asn1Alg=KJUR.asn1.x509.OID.name2obj(this.nameAlg)}var f=[this.asn1Alg];if(!this.paramEmpty){f.push(this.asn1Params)}var g=new KJUR.asn1.DERSequence({array:f});this.hTLV=g.getEncodedHex();return this.hTLV};if(typeof e!="undefined"){if(typeof e.name!="undefined"){this.nameAlg=e.name}if(typeof e.asn1params!="undefined"){this.asn1Params=e.asn1params}if(typeof e.paramempty!="undefined"){this.paramEmpty=e.paramempty}}if(this.asn1Params==null){this.asn1Params=new KJUR.asn1.DERNull()}};YAHOO.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.x509.GeneralName=function(d){KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);var c=null;var b=null;var a={rfc822:"81",dns:"82",dn:"a4",uri:"86"};this.explicit=false;this.setByParam=function(k){var j=null;var g=null;if(typeof k=="undefined"){return}if(typeof k.rfc822!="undefined"){this.type="rfc822";g=new KJUR.asn1.DERIA5String({str:k[this.type]})}if(typeof k.dns!="undefined"){this.type="dns";g=new KJUR.asn1.DERIA5String({str:k[this.type]})}if(typeof k.uri!="undefined"){this.type="uri";g=new KJUR.asn1.DERIA5String({str:k[this.type]})}if(typeof k.certissuer!="undefined"){this.type="dn";this.explicit=true;var h=k.certissuer;var f=null;if(h.match(/^[0-9A-Fa-f]+$/)){f==h}if(h.indexOf("-----BEGIN ")!=-1){f=X509.pemToHex(h)}if(f==null){throw"certissuer param not cert"}var e=new X509();e.hex=f;var i=e.getIssuerHex();g=new KJUR.asn1.ASN1Object();g.hTLV=i}if(typeof k.certsubj!="undefined"){this.type="dn";this.explicit=true;var h=k.certsubj;var f=null;if(h.match(/^[0-9A-Fa-f]+$/)){f==h}if(h.indexOf("-----BEGIN ")!=-1){f=X509.pemToHex(h)}if(f==null){throw"certsubj param not cert"}var e=new X509();e.hex=f;var i=e.getSubjectHex();g=new KJUR.asn1.ASN1Object();g.hTLV=i}if(this.type==null){throw"unsupported type in params="+k}this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:this.explicit,tag:a[this.type],obj:g})};this.getEncodedHex=function(){return this.asn1Obj.getEncodedHex()};if(typeof d!="undefined"){this.setByParam(d)}};YAHOO.lang.extend(KJUR.asn1.x509.GeneralName,KJUR.asn1.ASN1Object);KJUR.asn1.x509.GeneralNames=function(b){KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this);var a=null;this.setByParamArray=function(e){for(var c=0;c<e.length;c++){var d=new KJUR.asn1.x509.GeneralName(e[c]);this.asn1Array.push(d)}};this.getEncodedHex=function(){var c=new KJUR.asn1.DERSequence({array:this.asn1Array});return c.getEncodedHex()};this.asn1Array=new Array();if(typeof b!="undefined"){this.setByParamArray(b)}};YAHOO.lang.extend(KJUR.asn1.x509.GeneralNames,KJUR.asn1.ASN1Object);KJUR.asn1.x509.DistributionPointName=function(b){KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this);var e=null;var c=null;var a=null;var d=null;this.getEncodedHex=function(){if(this.type!="full"){throw"currently type shall be 'full': "+this.type}this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:false,tag:this.tag,obj:this.asn1V});this.hTLV=this.asn1Obj.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(KJUR.asn1.x509.GeneralNames.prototype.isPrototypeOf(b)){this.type="full";this.tag="a0";this.asn1V=b}else{throw"This class supports GeneralNames only as argument"}}};YAHOO.lang.extend(KJUR.asn1.x509.DistributionPointName,KJUR.asn1.ASN1Object);KJUR.asn1.x509.DistributionPoint=function(b){KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this);var a=null;this.getEncodedHex=function(){var c=new KJUR.asn1.DERSequence();if(this.asn1DP!=null){var d=new KJUR.asn1.DERTaggedObject({explicit:true,tag:"a0",obj:this.asn1DP});c.appendASN1Object(d)}this.hTLV=c.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(typeof b.dpobj!="undefined"){this.asn1DP=b.dpobj}}};YAHOO.lang.extend(KJUR.asn1.x509.DistributionPoint,KJUR.asn1.ASN1Object);KJUR.asn1.x509.OID=new function(a){this.atype2oidList={C:"2.5.4.6",O:"2.5.4.10",OU:"2.5.4.11",ST:"2.5.4.8",L:"2.5.4.7",CN:"2.5.4.3",DN:"2.5.4.49",DC:"0.9.2342.19200300.100.1.25",};this.name2oidList={sha1:"1.3.14.3.2.26",sha256:"2.16.840.1.101.3.4.2.1",sha384:"2.16.840.1.101.3.4.2.2",sha512:"2.16.840.1.101.3.4.2.3",sha224:"2.16.840.1.101.3.4.2.4",md5:"1.2.840.113549.2.5",md2:"1.3.14.7.2.2.1",ripemd160:"1.3.36.3.2.1",MD2withRSA:"1.2.840.113549.1.1.2",MD4withRSA:"1.2.840.113549.1.1.3",MD5withRSA:"1.2.840.113549.1.1.4",SHA1withRSA:"1.2.840.113549.1.1.5",SHA224withRSA:"1.2.840.113549.1.1.14",SHA256withRSA:"1.2.840.113549.1.1.11",SHA384withRSA:"1.2.840.113549.1.1.12",SHA512withRSA:"1.2.840.113549.1.1.13",SHA1withECDSA:"1.2.840.10045.4.1",SHA224withECDSA:"1.2.840.10045.4.3.1",SHA256withECDSA:"1.2.840.10045.4.3.2",SHA384withECDSA:"1.2.840.10045.4.3.3",SHA512withECDSA:"1.2.840.10045.4.3.4",dsa:"1.2.840.10040.4.1",SHA1withDSA:"1.2.840.10040.4.3",SHA224withDSA:"2.16.840.1.101.3.4.3.1",SHA256withDSA:"2.16.840.1.101.3.4.3.2",rsaEncryption:"1.2.840.113549.1.1.1",countryName:"2.5.4.6",organization:"2.5.4.10",organizationalUnit:"2.5.4.11",stateOrProvinceName:"2.5.4.8",locality:"2.5.4.7",commonName:"2.5.4.3",subjectKeyIdentifier:"2.5.29.14",keyUsage:"2.5.29.15",subjectAltName:"2.5.29.17",basicConstraints:"2.5.29.19",nameConstraints:"2.5.29.30",cRLDistributionPoints:"2.5.29.31",certificatePolicies:"2.5.29.32",authorityKeyIdentifier:"2.5.29.35",policyConstraints:"2.5.29.36",extKeyUsage:"2.5.29.37",authorityInfoAccess:"1.3.6.1.5.5.7.1.1",anyExtendedKeyUsage:"2.5.29.37.0",serverAuth:"1.3.6.1.5.5.7.3.1",clientAuth:"1.3.6.1.5.5.7.3.2",codeSigning:"1.3.6.1.5.5.7.3.3",emailProtection:"1.3.6.1.5.5.7.3.4",timeStamping:"1.3.6.1.5.5.7.3.8",ocspSigning:"1.3.6.1.5.5.7.3.9",ecPublicKey:"1.2.840.10045.2.1",secp256r1:"1.2.840.10045.3.1.7",secp256k1:"1.3.132.0.10",secp384r1:"1.3.132.0.34",pkcs5PBES2:"1.2.840.113549.1.5.13",pkcs5PBKDF2:"1.2.840.113549.1.5.12","des-EDE3-CBC":"1.2.840.113549.3.7",data:"1.2.840.113549.1.7.1","signed-data":"1.2.840.113549.1.7.2","enveloped-data":"1.2.840.113549.1.7.3","digested-data":"1.2.840.113549.1.7.5","encrypted-data":"1.2.840.113549.1.7.6","authenticated-data":"1.2.840.113549.1.9.16.1.2",tstinfo:"1.2.840.113549.1.9.16.1.4",};this.objCache={};this.name2obj=function(b){if(typeof this.objCache[b]!="undefined"){return this.objCache[b]}if(typeof this.name2oidList[b]=="undefined"){throw"Name of ObjectIdentifier not defined: "+b}var c=this.name2oidList[b];var d=new KJUR.asn1.DERObjectIdentifier({oid:c});this.objCache[b]=d;return d};this.atype2obj=function(b){if(typeof this.objCache[b]!="undefined"){return this.objCache[b]}if(typeof this.atype2oidList[b]=="undefined"){throw"AttributeType name undefined: "+b}var c=this.atype2oidList[b];var d=new KJUR.asn1.DERObjectIdentifier({oid:c});this.objCache[b]=d;return d}};KJUR.asn1.x509.OID.oid2name=function(b){var c=KJUR.asn1.x509.OID.name2oidList;for(var a in c){if(c[a]==b){return a}}return""};KJUR.asn1.x509.OID.name2oid=function(a){var b=KJUR.asn1.x509.OID.name2oidList;if(b[a]===undefined){return""}return b[a]};KJUR.asn1.x509.X509Util=new function(){this.getPKCS8PubKeyPEMfromRSAKey=function(i){var h=null;var f=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(i.n);var j=KJUR.asn1.ASN1Util.integerToByteHex(i.e);var a=new KJUR.asn1.DERInteger({hex:f});var g=new KJUR.asn1.DERInteger({hex:j});var l=new KJUR.asn1.DERSequence({array:[a,g]});var c=l.getEncodedHex();var d=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"});var b=new KJUR.asn1.DERBitString({hex:"00"+c});var k=new KJUR.asn1.DERSequence({array:[d,b]});var e=k.getEncodedHex();var h=KJUR.asn1.ASN1Util.getPEMStringFromHex(e,"PUBLIC KEY");return h}};KJUR.asn1.x509.X509Util.newCertPEM=function(f){var c=KJUR.asn1.x509;var e=new c.TBSCertificate();if(f.serial!==undefined){e.setSerialNumberByParam(f.serial)}else{throw"serial number undefined."}if(typeof f.sigalg.name=="string"){e.setSignatureAlgByParam(f.sigalg)}else{throw"unproper signature algorithm name"}if(f.issuer!==undefined){e.setIssuerByParam(f.issuer)}else{throw"issuer name undefined."}if(f.notbefore!==undefined){e.setNotBeforeByParam(f.notbefore)}else{throw"notbefore undefined."}if(f.notafter!==undefined){e.setNotAfterByParam(f.notafter)}else{throw"notafter undefined."}if(f.subject!==undefined){e.setSubjectByParam(f.subject)}else{throw"subject name undefined."}if(f.sbjpubkey!==undefined){e.setSubjectPublicKeyByGetKey(f.sbjpubkey)}else{throw"subject public key undefined."}if(f.ext!==undefined&&f.ext.length!==undefined){for(var b=0;b<f.ext.length;b++){for(key in f.ext[b]){e.appendExtensionByName(key,f.ext[b][key])}}}if(f.cakey===undefined&&f.sighex===undefined){throw"param cakey and sighex undefined."}var d=null;var a=null;if(f.cakey){d=KEYUTIL.getKey.apply(null,f.cakey);a=new c.Certificate({tbscertobj:e,prvkeyobj:d});a.sign()}if(f.sighex){a=new c.Certificate({tbscertobj:e});a.setSignatureHex(f.sighex)}return a.getPEMString()};
	/*! asn1cms-1.0.2.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.cms=="undefined"||!KJUR.asn1.cms){KJUR.asn1.cms={}}KJUR.asn1.cms.Attribute=function(b){KJUR.asn1.cms.Attribute.superclass.constructor.call(this);var a=[];this.getEncodedHex=function(){var f,e,c;f=new KJUR.asn1.DERObjectIdentifier({oid:this.attrTypeOid});e=new KJUR.asn1.DERSet({array:this.valueList});try{e.getEncodedHex()}catch(d){throw"fail valueSet.getEncodedHex in Attribute(1)/"+d}c=new KJUR.asn1.DERSequence({array:[f,e]});try{this.hTLV=c.getEncodedHex()}catch(d){throw"failed seq.getEncodedHex in Attribute(2)/"+d}return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.Attribute,KJUR.asn1.ASN1Object);KJUR.asn1.cms.ContentType=function(b){KJUR.asn1.cms.ContentType.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.3";var a=null;if(typeof b!="undefined"){var a=new KJUR.asn1.DERObjectIdentifier(b);this.valueList=[a]}};YAHOO.lang.extend(KJUR.asn1.cms.ContentType,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.MessageDigest=function(e){KJUR.asn1.cms.MessageDigest.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.4";if(typeof e!="undefined"){if(e.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo&&typeof e.hashAlg=="string"){var b=e.eciObj.eContentValueHex;var a=e.hashAlg;var c=KJUR.crypto.Util.hashHex(b,a);var d=new KJUR.asn1.DEROctetString({hex:c});d.getEncodedHex();this.valueList=[d]}else{var d=new KJUR.asn1.DEROctetString(e);d.getEncodedHex();this.valueList=[d]}}};YAHOO.lang.extend(KJUR.asn1.cms.MessageDigest,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningTime=function(c){KJUR.asn1.cms.SigningTime.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.5";if(typeof c!="undefined"){var a=new KJUR.asn1.x509.Time(c);try{a.getEncodedHex()}catch(b){throw"SigningTime.getEncodedHex() failed/"+b}this.valueList=[a]}};YAHOO.lang.extend(KJUR.asn1.cms.SigningTime,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningCertificate=function(d){KJUR.asn1.cms.SigningCertificate.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.12";var a=KJUR.asn1;var c=KJUR.asn1.cms;var b=KJUR.crypto;this.setCerts=function(l){var j=[];for(var h=0;h<l.length;h++){var f=KEYUTIL.getHexFromPEM(l[h]);var e=b.Util.hashHex(f,"sha1");var m=new a.DEROctetString({hex:e});m.getEncodedHex();var k=new c.IssuerAndSerialNumber({cert:l[h]});k.getEncodedHex();var n=new a.DERSequence({array:[m,k]});n.getEncodedHex();j.push(n)}var g=new a.DERSequence({array:j});g.getEncodedHex();this.valueList=[g]};if(typeof d!="undefined"){if(typeof d.array=="object"){this.setCerts(d.array)}}};YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificate,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningCertificateV2=function(e){KJUR.asn1.cms.SigningCertificateV2.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.47";var b=KJUR.asn1;var f=KJUR.asn1.x509;var d=KJUR.asn1.cms;var c=KJUR.crypto;this.setCerts=function(p,h){var n=[];for(var l=0;l<p.length;l++){var j=KEYUTIL.getHexFromPEM(p[l]);var r=[];if(h!="sha256"){r.push(new f.AlgorithmIdentifier({name:h}))}var g=c.Util.hashHex(j,h);var q=new b.DEROctetString({hex:g});q.getEncodedHex();r.push(q);var m=new d.IssuerAndSerialNumber({cert:p[l]});m.getEncodedHex();r.push(m);var o=new b.DERSequence({array:r});o.getEncodedHex();n.push(o)}var k=new b.DERSequence({array:n});k.getEncodedHex();this.valueList=[k]};if(typeof e!="undefined"){if(typeof e.array=="object"){var a="sha256";if(typeof e.hashAlg=="string"){a=e.hashAlg}this.setCerts(e.array,a)}}};YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificateV2,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.IssuerAndSerialNumber=function(c){KJUR.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);var e=null;var b=null;var a=KJUR.asn1;var d=a.x509;this.setByCertPEM=function(i){var g=KEYUTIL.getHexFromPEM(i);var f=new X509();f.hex=g;var j=f.getIssuerHex();this.dIssuer=new d.X500Name();this.dIssuer.hTLV=j;var h=f.getSerialNumberHex();this.dSerial=new a.DERInteger({hex:h})};this.getEncodedHex=function(){var f=new KJUR.asn1.DERSequence({array:[this.dIssuer,this.dSerial]});this.hTLV=f.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(typeof c=="string"&&c.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(c)}if(c.issuer&&c.serial){if(c.issuer instanceof KJUR.asn1.x509.X500Name){this.dIssuer=c.issuer}else{this.dIssuer=new KJUR.asn1.x509.X500Name(c.issuer)}if(c.serial instanceof KJUR.asn1.DERInteger){this.dSerial=c.serial}else{this.dSerial=new KJUR.asn1.DERInteger(c.serial)}}if(typeof c.cert=="string"){this.setByCertPEM(c.cert)}}};YAHOO.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber,KJUR.asn1.ASN1Object);KJUR.asn1.cms.AttributeList=function(a){KJUR.asn1.cms.AttributeList.superclass.constructor.call(this);this.list=new Array();this.sortFlag=true;this.add=function(b){if(b instanceof KJUR.asn1.cms.Attribute){this.list.push(b)}};this.length=function(){return this.list.length};this.clear=function(){this.list=new Array();this.hTLV=null;this.hV=null};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var b=new KJUR.asn1.DERSet({array:this.list,sortflag:this.sortFlag});this.hTLV=b.getEncodedHex();return this.hTLV};if(typeof a!="undefined"){if(typeof a.sortflag!="undefined"&&a.sortflag==false){this.sortFlag=false}}};YAHOO.lang.extend(KJUR.asn1.cms.AttributeList,KJUR.asn1.ASN1Object);KJUR.asn1.cms.SignerInfo=function(c){KJUR.asn1.cms.SignerInfo.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.cms;var d=KJUR.asn1.x509;this.dCMSVersion=new a.DERInteger({"int":1});this.dSignerIdentifier=null;this.dDigestAlgorithm=null;this.dSignedAttrs=new b.AttributeList();this.dSigAlg=null;this.dSig=null;this.dUnsignedAttrs=new b.AttributeList();this.setSignerIdentifier=function(f){if(typeof f=="string"&&f.indexOf("CERTIFICATE")!=-1&&f.indexOf("BEGIN")!=-1&&f.indexOf("END")!=-1){var e=f;this.dSignerIdentifier=new b.IssuerAndSerialNumber({cert:f})}};this.setForContentAndHash=function(e){if(typeof e!="undefined"){if(e.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo){this.dSignedAttrs.add(new b.ContentType({oid:"1.2.840.113549.1.7.1"}));this.dSignedAttrs.add(new b.MessageDigest({eciObj:e.eciObj,hashAlg:e.hashAlg}))}if(typeof e.sdObj!="undefined"&&e.sdObj instanceof KJUR.asn1.cms.SignedData){if(e.sdObj.digestAlgNameList.join(":").indexOf(e.hashAlg)==-1){e.sdObj.digestAlgNameList.push(e.hashAlg)}}if(typeof e.hashAlg=="string"){this.dDigestAlgorithm=new d.AlgorithmIdentifier({name:e.hashAlg})}}};this.sign=function(j,f){this.dSigAlg=new d.AlgorithmIdentifier({name:f});var g=this.dSignedAttrs.getEncodedHex();var e=KEYUTIL.getKey(j);var i=new KJUR.crypto.Signature({alg:f});i.init(e);i.updateHex(g);var h=i.sign();this.dSig=new a.DEROctetString({hex:h})};this.addUnsigned=function(e){this.hTLV=null;this.dUnsignedAttrs.hTLV=null;this.dUnsignedAttrs.add(e)};this.getEncodedHex=function(){if(this.dSignedAttrs instanceof KJUR.asn1.cms.AttributeList&&this.dSignedAttrs.length()==0){throw"SignedAttrs length = 0 (empty)"}var e=new a.DERTaggedObject({obj:this.dSignedAttrs,tag:"a0",explicit:false});var h=null;if(this.dUnsignedAttrs.length()>0){h=new a.DERTaggedObject({obj:this.dUnsignedAttrs,tag:"a1",explicit:false})}var g=[this.dCMSVersion,this.dSignerIdentifier,this.dDigestAlgorithm,e,this.dSigAlg,this.dSig,];if(h!=null){g.push(h)}var f=new a.DERSequence({array:g});this.hTLV=f.getEncodedHex();return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.SignerInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.EncapsulatedContentInfo=function(c){KJUR.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.cms;var d=KJUR.asn1.x509;this.dEContentType=new a.DERObjectIdentifier({name:"data"});this.dEContent=null;this.isDetached=false;this.eContentValueHex=null;this.setContentType=function(e){if(e.match(/^[0-2][.][0-9.]+$/)){this.dEContentType=new a.DERObjectIdentifier({oid:e})}else{this.dEContentType=new a.DERObjectIdentifier({name:e})}};this.setContentValue=function(e){if(typeof e!="undefined"){if(typeof e.hex=="string"){this.eContentValueHex=e.hex}else{if(typeof e.str=="string"){this.eContentValueHex=utf8tohex(e.str)}}}};this.setContentValueHex=function(e){this.eContentValueHex=e};this.setContentValueStr=function(e){this.eContentValueHex=utf8tohex(e)};this.getEncodedHex=function(){if(typeof this.eContentValueHex!="string"){throw"eContentValue not yet set"}var g=new a.DEROctetString({hex:this.eContentValueHex});this.dEContent=new a.DERTaggedObject({obj:g,tag:"a0",explicit:true});var e=[this.dEContentType];if(!this.isDetached){e.push(this.dEContent)}var f=new a.DERSequence({array:e});this.hTLV=f.getEncodedHex();return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.ContentInfo=function(c){KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.cms;var d=KJUR.asn1.x509;this.dContentType=null;this.dContent=null;this.setContentType=function(e){if(typeof e=="string"){this.dContentType=d.OID.name2obj(e)}};this.getEncodedHex=function(){var f=new a.DERTaggedObject({obj:this.dContent,tag:"a0",explicit:true});var e=new a.DERSequence({array:[this.dContentType,f]});this.hTLV=e.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(c.type){this.setContentType(c.type)}if(c.obj&&c.obj instanceof a.ASN1Object){this.dContent=c.obj}}};YAHOO.lang.extend(KJUR.asn1.cms.ContentInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.SignedData=function(c){KJUR.asn1.cms.SignedData.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.cms;var d=KJUR.asn1.x509;this.dCMSVersion=new a.DERInteger({"int":1});this.dDigestAlgs=null;this.digestAlgNameList=[];this.dEncapContentInfo=new b.EncapsulatedContentInfo();this.dCerts=null;this.certificateList=[];this.crlList=[];this.signerInfoList=[new b.SignerInfo()];this.addCertificatesByPEM=function(e){var f=KEYUTIL.getHexFromPEM(e);var g=new a.ASN1Object();g.hTLV=f;this.certificateList.push(g)};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}if(this.dDigestAlgs==null){var k=[];for(var j=0;j<this.digestAlgNameList.length;j++){var h=this.digestAlgNameList[j];var m=new d.AlgorithmIdentifier({name:h});k.push(m)}this.dDigestAlgs=new a.DERSet({array:k})}var e=[this.dCMSVersion,this.dDigestAlgs,this.dEncapContentInfo];if(this.dCerts==null){if(this.certificateList.length>0){var l=new a.DERSet({array:this.certificateList});this.dCerts=new a.DERTaggedObject({obj:l,tag:"a0",explicit:false})}}if(this.dCerts!=null){e.push(this.dCerts)}var g=new a.DERSet({array:this.signerInfoList});e.push(g);var f=new a.DERSequence({array:e});this.hTLV=f.getEncodedHex();return this.hTLV};this.getContentInfo=function(){this.getEncodedHex();var e=new b.ContentInfo({type:"signed-data",obj:this});return e};this.getContentInfoEncodedHex=function(){var e=this.getContentInfo();var f=e.getEncodedHex();return f};this.getPEM=function(){var e=this.getContentInfoEncodedHex();var f=a.ASN1Util.getPEMStringFromHex(e,"CMS");return f}};YAHOO.lang.extend(KJUR.asn1.cms.SignedData,KJUR.asn1.ASN1Object);KJUR.asn1.cms.CMSUtil=new function(){};KJUR.asn1.cms.CMSUtil.newSignedData=function(a){var h=KJUR.asn1.cms;var g=KJUR.asn1.cades;var f=new h.SignedData();f.dEncapContentInfo.setContentValue(a.content);if(typeof a.certs=="object"){for(var b=0;b<a.certs.length;b++){f.addCertificatesByPEM(a.certs[b])}}f.signerInfoList=[];for(var b=0;b<a.signerInfos.length;b++){var d=a.signerInfos[b];var c=new h.SignerInfo();c.setSignerIdentifier(d.signerCert);c.setForContentAndHash({sdObj:f,eciObj:f.dEncapContentInfo,hashAlg:d.hashAlg});for(attrName in d.sAttr){var j=d.sAttr[attrName];if(attrName=="SigningTime"){var e=new h.SigningTime(j);c.dSignedAttrs.add(e)}if(attrName=="SigningCertificate"){var e=new h.SigningCertificate(j);c.dSignedAttrs.add(e)}if(attrName=="SigningCertificateV2"){var e=new h.SigningCertificateV2(j);c.dSignedAttrs.add(e)}if(attrName=="SignaturePolicyIdentifier"){var e=new g.SignaturePolicyIdentifier(j);c.dSignedAttrs.add(e)}}c.sign(d.signerPrvKey,d.sigAlg);f.signerInfoList.push(c)}return f};
	/*! asn1tsp-1.0.1.js (c) 2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.tsp=="undefined"||!KJUR.asn1.tsp){KJUR.asn1.tsp={}}KJUR.asn1.tsp.Accuracy=function(b){KJUR.asn1.tsp.Accuracy.superclass.constructor.call(this);var a=KJUR.asn1;this.seconds=null;this.millis=null;this.micros=null;this.getEncodedHex=function(){var e=null;var g=null;var i=null;var c=[];if(this.seconds!=null){e=new a.DERInteger({"int":this.seconds});c.push(e)}if(this.millis!=null){var h=new a.DERInteger({"int":this.millis});g=new a.DERTaggedObject({obj:h,tag:"80",explicit:false});c.push(g)}if(this.micros!=null){var f=new a.DERInteger({"int":this.micros});i=new a.DERTaggedObject({obj:f,tag:"81",explicit:false});c.push(i)}var d=new a.DERSequence({array:c});this.hTLV=d.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(typeof b.seconds=="number"){this.seconds=b.seconds}if(typeof b.millis=="number"){this.millis=b.millis}if(typeof b.micros=="number"){this.micros=b.micros}}};YAHOO.lang.extend(KJUR.asn1.tsp.Accuracy,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.MessageImprint=function(b){KJUR.asn1.tsp.MessageImprint.superclass.constructor.call(this);var a=KJUR.asn1;var c=KJUR.asn1.x509;this.dHashAlg=null;this.dHashValue=null;this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var d=new a.DERSequence({array:[this.dHashAlg,this.dHashValue]});return d.getEncodedHex()};if(typeof b!="undefined"){if(typeof b.hashAlg=="string"){this.dHashAlg=new c.AlgorithmIdentifier({name:b.hashAlg})}if(typeof b.hashValue=="string"){this.dHashValue=new a.DEROctetString({hex:b.hashValue})}}};YAHOO.lang.extend(KJUR.asn1.tsp.MessageImprint,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TimeStampReq=function(c){KJUR.asn1.tsp.TimeStampReq.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.tsp;this.dVersion=new a.DERInteger({"int":1});this.dMessageImprint=null;this.dPolicy=null;this.dNonce=null;this.certReq=true;this.setMessageImprint=function(d){if(d instanceof KJUR.asn1.tsp.MessageImprint){this.dMessageImprint=d;return}if(typeof d=="object"){this.dMessageImprint=new b.MessageImprint(d)}};this.getEncodedHex=function(){if(this.dMessageImprint==null){throw"messageImprint shall be specified"}var d=[this.dVersion,this.dMessageImprint];if(this.dPolicy!=null){d.push(this.dPolicy)}if(this.dNonce!=null){d.push(this.dNonce)}if(this.certReq){d.push(new a.DERBoolean())}var e=new a.DERSequence({array:d});this.hTLV=e.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(typeof c.mi=="object"){this.setMessageImprint(c.mi)}if(typeof c.policy=="object"){this.dPolicy=new a.DERObjectIdentifier(c.policy)}if(typeof c.nonce=="object"){this.dNonce=new a.DERInteger(c.nonce)}if(typeof c.certreq=="boolean"){this.certReq=c.certreq}}};YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampReq,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TSTInfo=function(c){KJUR.asn1.tsp.TSTInfo.superclass.constructor.call(this);var a=KJUR.asn1;var d=KJUR.asn1.x509;var b=KJUR.asn1.tsp;this.dVersion=new a.DERInteger({"int":1});this.dPolicy=null;this.dMessageImprint=null;this.dSerialNumber=null;this.dGenTime=null;this.dAccuracy=null;this.dOrdering=null;this.dNonce=null;this.dTsa=null;this.getEncodedHex=function(){var e=[this.dVersion];if(this.dPolicy==null){throw"policy shall be specified."}e.push(this.dPolicy);if(this.dMessageImprint==null){throw"messageImprint shall be specified."}e.push(this.dMessageImprint);if(this.dSerialNumber==null){throw"serialNumber shall be specified."}e.push(this.dSerialNumber);if(this.dGenTime==null){throw"genTime shall be specified."}e.push(this.dGenTime);if(this.dAccuracy!=null){e.push(this.dAccuracy)}if(this.dOrdering!=null){e.push(this.dOrdering)}if(this.dNonce!=null){e.push(this.dNonce)}if(this.dTsa!=null){e.push(this.dTsa)}var f=new a.DERSequence({array:e});this.hTLV=f.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(typeof c.policy=="string"){if(!c.policy.match(/^[0-9.]+$/)){throw"policy shall be oid like 0.1.4.134"}this.dPolicy=new a.DERObjectIdentifier({oid:c.policy})}if(typeof c.messageImprint!="undefined"){this.dMessageImprint=new b.MessageImprint(c.messageImprint)}if(typeof c.serialNumber!="undefined"){this.dSerialNumber=new a.DERInteger(c.serialNumber)}if(typeof c.genTime!="undefined"){this.dGenTime=new a.DERGeneralizedTime(c.genTime)}if(typeof c.accuracy!="undefind"){this.dAccuracy=new b.Accuracy(c.accuracy)}if(typeof c.ordering!="undefined"&&c.ordering==true){this.dOrdering=new a.DERBoolean()}if(typeof c.nonce!="undefined"){this.dNonce=new a.DERInteger(c.nonce)}if(typeof c.tsa!="undefined"){this.dTsa=new d.X500Name(c.tsa)}}};YAHOO.lang.extend(KJUR.asn1.tsp.TSTInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TimeStampResp=function(c){KJUR.asn1.tsp.TimeStampResp.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.tsp;this.dStatus=null;this.dTST=null;this.getEncodedHex=function(){if(this.dStatus==null){throw"status shall be specified"}var d=[this.dStatus];if(this.dTST!=null){d.push(this.dTST)}var e=new a.DERSequence({array:d});this.hTLV=e.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(typeof c.status=="object"){this.dStatus=new b.PKIStatusInfo(c.status)}if(typeof c.tst!="undefined"&&c.tst instanceof KJUR.asn1.ASN1Object){this.dTST=c.tst.getContentInfo()}}};YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampResp,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatusInfo=function(c){KJUR.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.tsp;this.dStatus=null;this.dStatusString=null;this.dFailureInfo=null;this.getEncodedHex=function(){if(this.dStatus==null){throw"status shall be specified"}var d=[this.dStatus];if(this.dStatusString!=null){d.push(this.dStatusString)}if(this.dFailureInfo!=null){d.push(this.dFailureInfo)}var e=new a.DERSequence({array:d});this.hTLV=e.getEncodedHex();return this.hTLV};if(typeof c!="undefined"){if(typeof c.status=="object"){this.dStatus=new b.PKIStatus(c.status)}if(typeof c.statstr=="object"){this.dStatusString=new b.PKIFreeText({array:c.statstr})}if(typeof c.failinfo=="object"){this.dFailureInfo=new b.PKIFailureInfo(c.failinfo)}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatusInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatus=function(e){KJUR.asn1.tsp.PKIStatus.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.tsp;var d=null;this.getEncodedHex=function(){this.hTLV=this.dStatus.getEncodedHex();return this.hTLV};if(typeof e!="undefined"){if(typeof e.name!="undefined"){var c=b.PKIStatus.valueList;if(typeof c[e.name]=="undefined"){throw"name undefined: "+e.name}this.dStatus=new a.DERInteger({"int":c[e.name]})}else{this.dStatus=new a.DERInteger(e)}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatus,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatus.valueList={granted:0,grantedWithMods:1,rejection:2,waiting:3,revocationWarning:4,revocationNotification:5};KJUR.asn1.tsp.PKIFreeText=function(b){KJUR.asn1.tsp.PKIFreeText.superclass.constructor.call(this);var a=KJUR.asn1;this.textList=[];this.getEncodedHex=function(){var c=[];for(var e=0;e<this.textList.length;e++){c.push(new a.DERUTF8String({str:this.textList[e]}))}var d=new a.DERSequence({array:c});this.hTLV=d.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(typeof b.array=="object"){this.textList=b.array}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIFreeText,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIFailureInfo=function(d){KJUR.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.tsp;this.value=null;this.getEncodedHex=function(){if(this.value==null){throw"value shall be specified"}var e=new Number(this.value).toString(2);var f=new a.DERBitString();f.setByBinaryString(e);this.hTLV=f.getEncodedHex();return this.hTLV};if(typeof d!="undefined"){if(typeof d.name=="string"){var c=b.PKIFailureInfo.valueList;if(typeof c[d.name]=="undefined"){throw"name undefined: "+d.name}this.value=c[d.name]}else{if(typeof d["int"]=="number"){this.value=d["int"]}}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIFailureInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIFailureInfo.valueList={badAlg:0,badRequest:2,badDataFormat:5,timeNotAvailable:14,unacceptedPolicy:15,unacceptedExtension:16,addInfoNotAvailable:17,systemFailure:25};KJUR.asn1.tsp.AbstractTSAAdapter=function(a){this.getTSTHex=function(c,b){throw"not implemented yet"}};KJUR.asn1.tsp.SimpleTSAAdapter=function(a){KJUR.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this);this.params=null;this.serial=0;this.getTSTHex=function(c,b){var e=KJUR.crypto.Util.hashHex(c,b);this.params.tstInfo.messageImprint={hashAlg:b,hashValue:e};this.params.tstInfo.serialNumber={"int":this.serial++};var d=Math.floor(Math.random()*1000000000);this.params.tstInfo.nonce={"int":d};var f=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return f.getContentInfoEncodedHex()};if(typeof a!="undefined"){this.params=a}};YAHOO.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter);KJUR.asn1.tsp.FixedTSAAdapter=function(a){KJUR.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this);this.params=null;this.getTSTHex=function(c,b){var d=KJUR.crypto.Util.hashHex(c,b);this.params.tstInfo.messageImprint={hashAlg:b,hashValue:d};var e=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return e.getContentInfoEncodedHex()};if(typeof a!="undefined"){this.params=a}};YAHOO.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter);KJUR.asn1.tsp.TSPUtil=new function(){};KJUR.asn1.tsp.TSPUtil.newTimeStampToken=function(b){var j=KJUR.asn1.cms;var a=KJUR.asn1.tsp;var g=new j.SignedData();var e=new a.TSTInfo(b.tstInfo);var f=e.getEncodedHex();g.dEncapContentInfo.setContentValue({hex:f});g.dEncapContentInfo.setContentType("tstinfo");if(typeof b.certs=="object"){for(var c=0;c<b.certs.length;c++){g.addCertificatesByPEM(b.certs[c])}}var d=g.signerInfoList[0];d.setSignerIdentifier(b.signerCert);d.setForContentAndHash({sdObj:g,eciObj:g.dEncapContentInfo,hashAlg:b.hashAlg});var h=new j.SigningCertificate({array:[b.signerCert]});d.dSignedAttrs.add(h);d.sign(b.signerPrvKey,b.sigAlg);return g};KJUR.asn1.tsp.TSPUtil.parseTimeStampReq=function(d){var f={};f.certreq=false;var h=ASN1HEX.getPosArrayOfChildren_AtObj(d,0);if(h.length<2){throw"TimeStampReq must have at least 2 items"}var c=ASN1HEX.getHexOfTLV_AtObj(d,h[1]);f.mi=KJUR.asn1.tsp.TSPUtil.parseMessageImprint(c);for(var e=2;e<h.length;e++){var b=h[e];var a=d.substr(b,2);if(a=="06"){var g=ASN1HEX.getHexOfV_AtObj(d,b);f.policy=ASN1HEX.hextooidstr(g)}if(a=="02"){f.nonce=ASN1HEX.getHexOfV_AtObj(d,b)}if(a=="01"){f.certreq=true}}return f};KJUR.asn1.tsp.TSPUtil.parseMessageImprint=function(c){var h={};if(c.substr(0,2)!="30"){throw"head of messageImprint hex shall be '30'"}var a=ASN1HEX.getPosArrayOfChildren_AtObj(c,0);var i=ASN1HEX.getDecendantIndexByNthList(c,0,[0,0]);var d=ASN1HEX.getHexOfV_AtObj(c,i);var e=ASN1HEX.hextooidstr(d);var g=KJUR.asn1.x509.OID.oid2name(e);if(g==""){throw"hashAlg name undefined: "+e}var b=g;var f=ASN1HEX.getDecendantIndexByNthList(c,0,[1]);h.hashAlg=b;h.hashValue=ASN1HEX.getHexOfV_AtObj(c,f);return h};
	/*! asn1cades-1.0.0.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.cades=="undefined"||!KJUR.asn1.cades){KJUR.asn1.cades={}}KJUR.asn1.cades.SignaturePolicyIdentifier=function(e){KJUR.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.15";var b=KJUR.asn1;var d=KJUR.asn1.cades;if(typeof e!="undefined"){if(typeof e.oid=="string"&&typeof e.hash=="object"){var f=new b.DERObjectIdentifier({oid:e.oid});var a=new d.OtherHashAlgAndValue(e.hash);var c=new b.DERSequence({array:[f,a]});this.valueList=[c]}}};YAHOO.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.OtherHashAlgAndValue=function(b){KJUR.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);var a=KJUR.asn1;var c=KJUR.asn1.x509;this.dAlg=null;this.dHash=null;this.getEncodedHex=function(){var d=new a.DERSequence({array:[this.dAlg,this.dHash]});this.hTLV=d.getEncodedHex();return this.hTLV};if(typeof b!="undefined"){if(typeof b.alg=="string"&&typeof b.hash=="string"){this.dAlg=new c.AlgorithmIdentifier({name:b.alg});this.dHash=new a.DEROctetString({hex:b.hash})}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue,KJUR.asn1.ASN1Object);KJUR.asn1.cades.SignatureTimeStamp=function(c){KJUR.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.14";this.tstHex=null;var a=KJUR.asn1;if(typeof c!="undefined"){if(typeof c.res!="undefined"){if(typeof c.res=="string"&&c.res.match(/^[0-9A-Fa-f]+$/)){}else{if(c.res instanceof KJUR.asn1.ASN1Object){}else{throw"res param shall be ASN1Object or hex string"}}}if(typeof c.tst!="undefined"){if(typeof c.tst=="string"&&c.tst.match(/^[0-9A-Fa-f]+$/)){var b=new a.ASN1Object();this.tstHex=c.tst;b.hTLV=this.tstHex;b.getEncodedHex();this.valueList=[b]}else{if(c.tst instanceof KJUR.asn1.ASN1Object){}else{throw"tst param shall be ASN1Object or hex string"}}}}};YAHOO.lang.extend(KJUR.asn1.cades.SignatureTimeStamp,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.CompleteCertificateRefs=function(c){KJUR.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.21";var a=KJUR.asn1;var b=KJUR.asn1.cades;this.setByArray=function(d){this.valueList=[];for(var e=0;e<d.length;e++){var f=new b.OtherCertID(d[e]);this.valueList.push(f)}};if(typeof c!="undefined"){if(typeof c=="object"&&typeof c.length=="number"){this.setByArray(c)}}};YAHOO.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.OtherCertID=function(d){KJUR.asn1.cades.OtherCertID.superclass.constructor.call(this);var a=KJUR.asn1;var c=KJUR.asn1.cms;var b=KJUR.asn1.cades;this.hasIssuerSerial=true;this.dOtherCertHash=null;this.dIssuerSerial=null;this.setByCertPEM=function(e){this.dOtherCertHash=new b.OtherHash(e);if(this.hasIssuerSerial){this.dIssuerSerial=new c.IssuerAndSerialNumber(e)}};this.getEncodedHex=function(){if(this.hTLV!=null){return this.hTLV}if(this.dOtherCertHash==null){throw"otherCertHash not set"}var e=[this.dOtherCertHash];if(this.dIssuerSerial!=null){e.push(this.dIssuerSerial)}var f=new a.DERSequence({array:e});this.hTLV=f.getEncodedHex();return this.hTLV};if(typeof d!="undefined"){if(typeof d=="string"&&d.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(d)}if(typeof d=="object"){if(d.hasis===false){this.hasIssuerSerial=false}if(typeof d.cert=="string"){this.setByCertPEM(d.cert)}}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherCertID,KJUR.asn1.ASN1Object);KJUR.asn1.cades.OtherHash=function(c){KJUR.asn1.cades.OtherHash.superclass.constructor.call(this);var a=KJUR.asn1;var b=KJUR.asn1.cades;this.alg="sha256";this.dOtherHash=null;this.setByCertPEM=function(d){if(d.indexOf("-----BEGIN ")==-1){throw"certPEM not to seem PEM format"}var e=X509.pemToHex(d);var f=KJUR.crypto.Util.hashHex(e,this.alg);this.dOtherHash=new b.OtherHashAlgAndValue({alg:this.alg,hash:f})};this.getEncodedHex=function(){if(this.dOtherHash==null){throw"OtherHash not set"}return this.dOtherHash.getEncodedHex()};if(typeof c!="undefined"){if(typeof c=="string"){if(c.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(c)}else{if(c.match(/^[0-9A-Fa-f]+$/)){this.dOtherHash=new a.DEROctetString({hex:c})}else{throw"unsupported string value for params"}}}else{if(typeof c=="object"){if(typeof c.cert=="string"){if(typeof c.alg=="string"){this.alg=c.alg}this.setByCertPEM(c.cert)}else{this.dOtherHash=new b.OtherHashAlgAndValue(c)}}}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherHash,KJUR.asn1.ASN1Object);KJUR.asn1.cades.CAdESUtil=new function(){};KJUR.asn1.cades.CAdESUtil.addSigTS=function(c,b,a){};KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned=function(d){var q=KJUR.asn1;var p=KJUR.asn1.cms;var c=KJUR.asn1.cades.CAdESUtil;var a={};if(ASN1HEX.getDecendantHexTLVByNthList(d,0,[0])!="06092a864886f70d010702"){throw"hex is not CMS SignedData"}var s=ASN1HEX.getDecendantIndexByNthList(d,0,[1,0]);var b=ASN1HEX.getPosArrayOfChildren_AtObj(d,s);if(b.length<4){throw"num of SignedData elem shall be 4 at least"}var f=b.shift();a.version=ASN1HEX.getHexOfTLV_AtObj(d,f);var l=b.shift();a.algs=ASN1HEX.getHexOfTLV_AtObj(d,l);var m=b.shift();a.encapcontent=ASN1HEX.getHexOfTLV_AtObj(d,m);a.certs=null;a.revs=null;a.si=[];var n=b.shift();if(d.substr(n,2)=="a0"){a.certs=ASN1HEX.getHexOfTLV_AtObj(d,n);n=b.shift()}if(d.substr(n,2)=="a1"){a.revs=ASN1HEX.getHexOfTLV_AtObj(d,n);n=b.shift()}var k=n;if(d.substr(k,2)!="31"){throw"Can't find signerInfos"}var j=ASN1HEX.getPosArrayOfChildren_AtObj(d,k);for(var h=0;h<j.length;h++){var o=j[h];var e=c.parseSignerInfoForAddingUnsigned(d,o,h);a.si[h]=e}var g=null;a.obj=new p.SignedData();g=new q.ASN1Object();g.hTLV=a.version;a.obj.dCMSVersion=g;g=new q.ASN1Object();g.hTLV=a.algs;a.obj.dDigestAlgs=g;g=new q.ASN1Object();g.hTLV=a.encapcontent;a.obj.dEncapContentInfo=g;g=new q.ASN1Object();g.hTLV=a.certs;a.obj.dCerts=g;a.obj.signerInfoList=[];for(var h=0;h<a.si.length;h++){a.obj.signerInfoList.push(a.si[h].obj)}return a};KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned=function(d,k,a){var m=KJUR.asn1;var l=KJUR.asn1.cms;var b={};var e=ASN1HEX.getPosArrayOfChildren_AtObj(d,k);if(e.length!=6){throw"not supported items for SignerInfo (!=6)"}var f=e.shift();b.version=ASN1HEX.getHexOfTLV_AtObj(d,f);var n=e.shift();b.si=ASN1HEX.getHexOfTLV_AtObj(d,n);var h=e.shift();b.digalg=ASN1HEX.getHexOfTLV_AtObj(d,h);var c=e.shift();b.sattrs=ASN1HEX.getHexOfTLV_AtObj(d,c);var i=e.shift();b.sigalg=ASN1HEX.getHexOfTLV_AtObj(d,i);var j=e.shift();b.sig=ASN1HEX.getHexOfTLV_AtObj(d,j);b.sigval=ASN1HEX.getHexOfV_AtObj(d,j);var g=null;b.obj=new l.SignerInfo();g=new m.ASN1Object();g.hTLV=b.version;b.obj.dCMSVersion=g;g=new m.ASN1Object();g.hTLV=b.si;b.obj.dSignerIdentifier=g;g=new m.ASN1Object();g.hTLV=b.digalg;b.obj.dDigestAlgorithm=g;g=new m.ASN1Object();g.hTLV=b.sattrs;b.obj.dSignedAttrs=g;g=new m.ASN1Object();g.hTLV=b.sigalg;b.obj.dSigAlg=g;g=new m.ASN1Object();g.hTLV=b.sig;b.obj.dSig=g;b.obj.dUnsignedAttrs=new l.AttributeList();return b};
	/*! asn1csr-1.0.0.js (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR.asn1.csr=="undefined"||!KJUR.asn1.csr){KJUR.asn1.csr={}}KJUR.asn1.csr.CertificationRequest=function(f){KJUR.asn1.csr.CertificationRequest.superclass.constructor.call(this);var b=null;var d=null;var e=null;var c=null;var a=null;this.sign=function(i,h){if(this.prvKey==null){this.prvKey=h}this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier({name:i});sig=new KJUR.crypto.Signature({alg:i});sig.initSign(this.prvKey);sig.updateHex(this.asn1CSRInfo.getEncodedHex());this.hexSig=sig.sign();this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var g=new KJUR.asn1.DERSequence({array:[this.asn1CSRInfo,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=g.getEncodedHex();this.isModified=false};this.getPEMString=function(){var g=KJUR.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(),"CERTIFICATE REQUEST");return g};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};if(typeof f!="undefined"){if(typeof f.csrinfo!="undefined"){this.asn1CSRInfo=f.csrinfo}}};YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequest,KJUR.asn1.ASN1Object);KJUR.asn1.csr.CertificationRequestInfo=function(a){KJUR.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this);this._initialize=function(){this.asn1Array=new Array();this.asn1Version=new KJUR.asn1.DERInteger({"int":0});this.asn1Subject=null;this.asn1SubjPKey=null;this.extensionsArray=new Array()};this.setSubjectByParam=function(b){this.asn1Subject=new KJUR.asn1.x509.X500Name(b)};this.setSubjectPublicKeyByGetKey=function(c){var b=KEYUTIL.getKey(c);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(b)};this.getEncodedHex=function(){this.asn1Array=new Array();this.asn1Array.push(this.asn1Version);this.asn1Array.push(this.asn1Subject);this.asn1Array.push(this.asn1SubjPKey);var c=new KJUR.asn1.DERSequence({array:this.extensionsArray});var b=new KJUR.asn1.DERTaggedObject({explicit:false,tag:"a0",obj:c});this.asn1Array.push(b);var d=new KJUR.asn1.DERSequence({array:this.asn1Array});this.hTLV=d.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize()};YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequestInfo,KJUR.asn1.ASN1Object);KJUR.asn1.csr.CSRUtil=new function(){};KJUR.asn1.csr.CSRUtil.newCSRPEM=function(f){var c=KJUR.asn1.csr;if(f.subject===undefined){throw"parameter subject undefined"}if(f.sbjpubkey===undefined){throw"parameter sbjpubkey undefined"}if(f.sigalg===undefined){throw"parameter sigalg undefined"}if(f.sbjprvkey===undefined){throw"parameter sbjpubkey undefined"}var b=new c.CertificationRequestInfo();b.setSubjectByParam(f.subject);b.setSubjectPublicKeyByGetKey(f.sbjpubkey);var d=new c.CertificationRequest({csrinfo:b});var a=KEYUTIL.getKey(f.sbjprvkey);d.sign(f.sigalg,a);var e=d.getPEMString();return e};
	/*! base64x-1.1.5 (c) 2012-2015 Kenji Urushima | kjur.github.com/jsjws/license
	 */
	function Base64x(){}function stoBA(d){var b=new Array();for(var c=0;c<d.length;c++){b[c]=d.charCodeAt(c)}return b}function BAtos(b){var d="";for(var c=0;c<b.length;c++){d=d+String.fromCharCode(b[c])}return d}function BAtohex(b){var e="";for(var d=0;d<b.length;d++){var c=b[d].toString(16);if(c.length==1){c="0"+c}e=e+c}return e}function stohex(a){return BAtohex(stoBA(a))}function stob64(a){return hex2b64(stohex(a))}function stob64u(a){return b64tob64u(hex2b64(stohex(a)))}function b64utos(a){return BAtos(b64toBA(b64utob64(a)))}function b64tob64u(a){a=a.replace(/\=/g,"");a=a.replace(/\+/g,"-");a=a.replace(/\//g,"_");return a}function b64utob64(a){if(a.length%4==2){a=a+"=="}else{if(a.length%4==3){a=a+"="}}a=a.replace(/-/g,"+");a=a.replace(/_/g,"/");return a}function hextob64u(a){if(a.length%2==1){a="0"+a}return b64tob64u(hex2b64(a))}function b64utohex(a){return b64tohex(b64utob64(a))}var utf8tob64u,b64utoutf8;if(typeof Buffer==="function"){utf8tob64u=function(a){return b64tob64u(new Buffer(a,"utf8").toString("base64"))};b64utoutf8=function(a){return new Buffer(b64utob64(a),"base64").toString("utf8")}}else{utf8tob64u=function(a){return hextob64u(uricmptohex(encodeURIComponentAll(a)))};b64utoutf8=function(a){return decodeURIComponent(hextouricmp(b64utohex(a)))}}function utf8tob64(a){return hex2b64(uricmptohex(encodeURIComponentAll(a)))}function b64toutf8(a){return decodeURIComponent(hextouricmp(b64tohex(a)))}function utf8tohex(a){return uricmptohex(encodeURIComponentAll(a))}function hextoutf8(a){return decodeURIComponent(hextouricmp(a))}function hextorstr(c){var b="";for(var a=0;a<c.length-1;a+=2){b+=String.fromCharCode(parseInt(c.substr(a,2),16))}return b}function rstrtohex(c){var a="";for(var b=0;b<c.length;b++){a+=("0"+c.charCodeAt(b).toString(16)).slice(-2)}return a}function hextob64(a){return hex2b64(a)}function hextob64nl(b){var a=hextob64(b);var c=a.replace(/(.{64})/g,"$1\r\n");c=c.replace(/\r\n$/,"");return c}function b64nltohex(b){var a=b.replace(/[^0-9A-Za-z\/+=]*/g,"");var c=b64tohex(a);return c}function uricmptohex(a){return a.replace(/%/g,"")}function hextouricmp(a){return a.replace(/(..)/g,"%$1")}function encodeURIComponentAll(a){var d=encodeURIComponent(a);var b="";for(var c=0;c<d.length;c++){if(d[c]=="%"){b=b+d.substr(c,3);c=c+2}else{b=b+"%"+stohex(d[c])}}return b}function newline_toUnix(a){a=a.replace(/\r\n/mg,"\n");return a}function newline_toDos(a){a=a.replace(/\r\n/mg,"\n");a=a.replace(/\n/mg,"\r\n");return a}var strdiffidx=function(c,a){var d=c.length;if(c.length>a.length){d=a.length}for(var b=0;b<d;b++){if(c.charCodeAt(b)!=a.charCodeAt(b)){return b}}if(c.length!=a.length){return d}return -1};
	/*! crypto-1.1.6.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414",};this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa",};this.CRYPTOJSMESSAGEDIGESTNAME={md5:"CryptoJS.algo.MD5",sha1:"CryptoJS.algo.SHA1",sha224:"CryptoJS.algo.SHA224",sha256:"CryptoJS.algo.SHA256",sha384:"CryptoJS.algo.SHA384",sha512:"CryptoJS.algo.SHA512",ripemd160:"CryptoJS.algo.RIPEMD160"};this.getDigestInfoHex=function(a,b){if(typeof this.DIGESTINFOHEAD[b]=="undefined"){throw"alg not supported in Util.DIGESTINFOHEAD: "+b}return this.DIGESTINFOHEAD[b]+a};this.getPaddedDigestInfoHex=function(h,a,j){var c=this.getDigestInfoHex(h,a);var d=j/4;if(c.length+22>d){throw"key is too short for SigAlg: keylen="+j+","+a}var b="0001";var k="00"+c;var g="";var l=d-b.length-k.length;for(var f=0;f<l;f+=2){g+="ff"}var e=b+g+k;return e};this.hashString=function(a,c){var b=new KJUR.crypto.MessageDigest({alg:c});return b.digestString(a)};this.hashHex=function(b,c){var a=new KJUR.crypto.MessageDigest({alg:c});return a.digestHex(b)};this.sha1=function(a){var b=new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"});return b.digestString(a)};this.sha256=function(a){var b=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return b.digestString(a)};this.sha256Hex=function(a){var b=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return b.digestHex(a)};this.sha512=function(a){var b=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return b.digestString(a)};this.sha512Hex=function(a){var b=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return b.digestHex(a)};this.md5=function(a){var b=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return b.digestString(a)};this.ripemd160=function(a){var b=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return b.digestString(a)};this.getCryptoJSMDByName=function(a){}};KJUR.crypto.MessageDigest=function(params){var md=null;var algName=null;var provName=null;this.setAlgAndProvider=function(alg,prov){if(alg!=null&&prov===undefined){prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]}if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(alg)!=-1&&prov=="cryptojs"){try{this.md=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg]).create()}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex}this.updateString=function(str){this.md.update(str)};this.updateHex=function(hex){var wHex=CryptoJS.enc.Hex.parse(hex);this.md.update(wHex)};this.digest=function(){var hash=this.md.finalize();return hash.toString(CryptoJS.enc.Hex)};this.digestString=function(str){this.updateString(str);return this.digest()};this.digestHex=function(hex){this.updateHex(hex);return this.digest()}}if(":sha256:".indexOf(alg)!=-1&&prov=="sjcl"){try{this.md=new sjcl.hash.sha256()}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex}this.updateString=function(str){this.md.update(str)};this.updateHex=function(hex){var baHex=sjcl.codec.hex.toBits(hex);this.md.update(baHex)};this.digest=function(){var hash=this.md.finalize();return sjcl.codec.hex.fromBits(hash)};this.digestString=function(str){this.updateString(str);return this.digest()};this.digestHex=function(hex){this.updateHex(hex);return this.digest()}}};this.updateString=function(str){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.updateHex=function(hex){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digestString=function(str){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digestHex=function(hex){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName};if(params!==undefined){if(params.alg!==undefined){this.algName=params.alg;if(params.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}this.setAlgAndProvider(this.algName,this.provName)}}};KJUR.crypto.Mac=function(params){var mac=null;var pass=null;var algName=null;var provName=null;var algProv=null;this.setAlgAndProvider=function(alg,prov){if(alg==null){alg="hmacsha1"}alg=alg.toLowerCase();if(alg.substr(0,4)!="hmac"){throw"setAlgAndProvider unsupported HMAC alg: "+alg}if(prov===undefined){prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]}this.algProv=alg+"/"+prov;var hashAlg=alg.substr(4);if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(hashAlg)!=-1&&prov=="cryptojs"){try{var mdObj=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg]);this.mac=CryptoJS.algo.HMAC.create(mdObj,this.pass)}catch(ex){throw"setAlgAndProvider hash alg set fail hashAlg="+hashAlg+"/"+ex}this.updateString=function(str){this.mac.update(str)};this.updateHex=function(hex){var wHex=CryptoJS.enc.Hex.parse(hex);this.mac.update(wHex)};this.doFinal=function(){var hash=this.mac.finalize();return hash.toString(CryptoJS.enc.Hex)};this.doFinalString=function(str){this.updateString(str);return this.doFinal()};this.doFinalHex=function(hex){this.updateHex(hex);return this.doFinal()}}};this.updateString=function(str){throw"updateString(str) not supported for this alg/prov: "+this.algProv};this.updateHex=function(hex){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv};this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv};this.doFinalString=function(str){throw"digestString(str) not supported for this alg/prov: "+this.algProv};this.doFinalHex=function(hex){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv};if(params!==undefined){if(params.pass!==undefined){this.pass=params.pass}if(params.alg!==undefined){this.algName=params.alg;if(params.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}this.setAlgAndProvider(this.algName,this.provName)}}};KJUR.crypto.Signature=function(o){var q=null;var n=null;var r=null;var c=null;var l=null;var d=null;var k=null;var h=null;var p=null;var e=null;var b=-1;var g=null;var j=null;var a=null;var i=null;var f=null;this._setAlgNames=function(){if(this.algName.match(/^(.+)with(.+)$/)){this.mdAlgName=RegExp.$1.toLowerCase();this.pubkeyAlgName=RegExp.$2.toLowerCase()}};this._zeroPaddingOfSignature=function(x,w){var v="";var t=w/4-x.length;for(var u=0;u<t;u++){v=v+"0"}return v+x};this.setAlgAndProvider=function(u,t){this._setAlgNames();if(t!="cryptojs/jsrsa"){throw"provider not supported: "+t}if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)!=-1){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(s){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+s}this.init=function(w,x){var y=null;try{if(x===undefined){y=KEYUTIL.getKey(w)}else{y=KEYUTIL.getKey(w,x)}}catch(v){throw"init failed:"+v}if(y.isPrivate===true){this.prvKey=y;this.state="SIGN"}else{if(y.isPublic===true){this.pubKey=y;this.state="VERIFY"}else{throw"init failed.:"+y}}};this.initSign=function(v){if(typeof v.ecprvhex=="string"&&typeof v.eccurvename=="string"){this.ecprvhex=v.ecprvhex;this.eccurvename=v.eccurvename}else{this.prvKey=v}this.state="SIGN"};this.initVerifyByPublicKey=function(v){if(typeof v.ecpubhex=="string"&&typeof v.eccurvename=="string"){this.ecpubhex=v.ecpubhex;this.eccurvename=v.eccurvename}else{if(v instanceof KJUR.crypto.ECDSA){this.pubKey=v}else{if(v instanceof RSAKey){this.pubKey=v}}}this.state="VERIFY"};this.initVerifyByCertificatePEM=function(v){var w=new X509();w.readCertPEM(v);this.pubKey=w.subjectPublicKeyRSA;this.state="VERIFY"};this.updateString=function(v){this.md.updateString(v)};this.updateHex=function(v){this.md.updateHex(v)};this.sign=function(){this.sHashHex=this.md.digest();if(typeof this.ecprvhex!="undefined"&&typeof this.eccurvename!="undefined"){var v=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=v.signHex(this.sHashHex,this.ecprvhex)}else{if(this.prvKey instanceof RSAKey&&this.pubkeyAlgName=="rsaandmgf1"){this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen)}else{if(this.prvKey instanceof RSAKey&&this.pubkeyAlgName=="rsa"){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName)}else{if(this.prvKey instanceof KJUR.crypto.ECDSA){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}else{if(this.prvKey instanceof KJUR.crypto.DSA){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}else{throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}}}}return this.hSign};this.signString=function(v){this.updateString(v);return this.sign()};this.signHex=function(v){this.updateHex(v);return this.sign()};this.verify=function(v){this.sHashHex=this.md.digest();if(typeof this.ecpubhex!="undefined"&&typeof this.eccurvename!="undefined"){var w=new KJUR.crypto.ECDSA({curve:this.eccurvename});return w.verifyHex(this.sHashHex,v,this.ecpubhex)}else{if(this.pubKey instanceof RSAKey&&this.pubkeyAlgName=="rsaandmgf1"){return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,v,this.mdAlgName,this.pssSaltLen)}else{if(this.pubKey instanceof RSAKey&&this.pubkeyAlgName=="rsa"){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{if(this.pubKey instanceof KJUR.crypto.ECDSA){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{if(this.pubKey instanceof KJUR.crypto.DSA){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}}}}}}};this.init=function(s,t){throw"init(key, pass) not supported for this alg:prov="+this.algProvName};this.initVerifyByPublicKey=function(s){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName};this.initVerifyByCertificatePEM=function(s){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName};this.initSign=function(s){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName};this.updateString=function(s){throw"updateString(str) not supported for this alg:prov="+this.algProvName};this.updateHex=function(s){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName};this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName};this.signString=function(s){throw"digestString(str) not supported for this alg:prov="+this.algProvName};this.signHex=function(s){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName};this.verify=function(s){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName};this.initParams=o;if(o!==undefined){if(o.alg!==undefined){this.algName=o.alg;if(o.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}else{this.provName=o.prov}this.algProvName=this.algName+":"+this.provName;this.setAlgAndProvider(this.algName,this.provName);this._setAlgNames()}if(o.psssaltlen!==undefined){this.pssSaltLen=o.psssaltlen}if(o.prvkeypem!==undefined){if(o.prvkeypas!==undefined){throw"both prvkeypem and prvkeypas parameters not supported"}else{try{var q=new RSAKey();q.readPrivateKeyFromPEMString(o.prvkeypem);this.initSign(q)}catch(m){throw"fatal error to load pem private key: "+m}}}}};KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA",}};
	/*! ecdsa-modified-1.0.4.js (c) Stephan Thomas, Kenji Urushima | github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.ECDSA=function(h){var e="secp256r1";var g=null;var b=null;var f=null;var a=new SecureRandom();var d=null;this.type="EC";function c(s,o,r,n){var j=Math.max(o.bitLength(),n.bitLength());var t=s.add2D(r);var q=s.curve.getInfinity();for(var p=j-1;p>=0;--p){q=q.twice2D();q.z=BigInteger.ONE;if(o.testBit(p)){if(n.testBit(p)){q=q.add2D(t)}else{q=q.add2D(s)}}else{if(n.testBit(p)){q=q.add2D(r)}}}return q}this.getBigRandom=function(i){return new BigInteger(i.bitLength(),a).mod(i.subtract(BigInteger.ONE)).add(BigInteger.ONE)};this.setNamedCurve=function(i){this.ecparams=KJUR.crypto.ECParameterDB.getByName(i);this.prvKeyHex=null;this.pubKeyHex=null;this.curveName=i};this.setPrivateKeyHex=function(i){this.isPrivate=true;this.prvKeyHex=i};this.setPublicKeyHex=function(i){this.isPublic=true;this.pubKeyHex=i};this.generateKeyPairHex=function(){var k=this.ecparams.n;var n=this.getBigRandom(k);var l=this.ecparams.G.multiply(n);var q=l.getX().toBigInteger();var o=l.getY().toBigInteger();var i=this.ecparams.keylen/4;var m=("0000000000"+n.toString(16)).slice(-i);var r=("0000000000"+q.toString(16)).slice(-i);var p=("0000000000"+o.toString(16)).slice(-i);var j="04"+r+p;this.setPrivateKeyHex(m);this.setPublicKeyHex(j);return{ecprvhex:m,ecpubhex:j}};this.signWithMessageHash=function(i){return this.signHex(i,this.prvKeyHex)};this.signHex=function(o,j){var t=new BigInteger(j,16);var l=this.ecparams.n;var q=new BigInteger(o,16);do{var m=this.getBigRandom(l);var u=this.ecparams.G;var p=u.multiply(m);var i=p.getX().toBigInteger().mod(l)}while(i.compareTo(BigInteger.ZERO)<=0);var v=m.modInverse(l).multiply(q.add(t.multiply(i))).mod(l);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(i,v)};this.sign=function(m,u){var q=u;var j=this.ecparams.n;var p=BigInteger.fromByteArrayUnsigned(m);do{var l=this.getBigRandom(j);var t=this.ecparams.G;var o=t.multiply(l);var i=o.getX().toBigInteger().mod(j)}while(i.compareTo(BigInteger.ZERO)<=0);var v=l.modInverse(j).multiply(p.add(q.multiply(i))).mod(j);return this.serializeSig(i,v)};this.verifyWithMessageHash=function(j,i){return this.verifyHex(j,i,this.pubKeyHex)};this.verifyHex=function(m,i,p){var l,j;var o=KJUR.crypto.ECDSA.parseSigHex(i);l=o.r;j=o.s;var k;k=ECPointFp.decodeFromHex(this.ecparams.curve,p);var n=new BigInteger(m,16);return this.verifyRaw(n,l,j,k)};this.verify=function(o,p,j){var l,i;if(Bitcoin.Util.isArray(p)){var n=this.parseSig(p);l=n.r;i=n.s}else{if("object"===typeof p&&p.r&&p.s){l=p.r;i=p.s}else{throw"Invalid value for signature"}}var k;if(j instanceof ECPointFp){k=j}else{if(Bitcoin.Util.isArray(j)){k=ECPointFp.decodeFrom(this.ecparams.curve,j)}else{throw"Invalid format for pubkey value, must be byte array or ECPointFp"}}var m=BigInteger.fromByteArrayUnsigned(o);return this.verifyRaw(m,l,i,k)};this.verifyRaw=function(o,i,w,m){var l=this.ecparams.n;var u=this.ecparams.G;if(i.compareTo(BigInteger.ONE)<0||i.compareTo(l)>=0){return false}if(w.compareTo(BigInteger.ONE)<0||w.compareTo(l)>=0){return false}var p=w.modInverse(l);var k=o.multiply(p).mod(l);var j=i.multiply(p).mod(l);var q=u.multiply(k).add(m.multiply(j));var t=q.getX().toBigInteger().mod(l);return t.equals(i)};this.serializeSig=function(k,j){var l=k.toByteArraySigned();var i=j.toByteArraySigned();var m=[];m.push(2);m.push(l.length);m=m.concat(l);m.push(2);m.push(i.length);m=m.concat(i);m.unshift(m.length);m.unshift(48);return m};this.parseSig=function(n){var m;if(n[0]!=48){throw new Error("Signature not a valid DERSequence")}m=2;if(n[m]!=2){throw new Error("First element in signature must be a DERInteger")}var l=n.slice(m+2,m+2+n[m+1]);m+=2+n[m+1];if(n[m]!=2){throw new Error("Second element in signature must be a DERInteger")}var i=n.slice(m+2,m+2+n[m+1]);m+=2+n[m+1];var k=BigInteger.fromByteArrayUnsigned(l);var j=BigInteger.fromByteArrayUnsigned(i);return{r:k,s:j}};this.parseSigCompact=function(m){if(m.length!==65){throw"Signature has the wrong length"}var j=m[0]-27;if(j<0||j>7){throw"Invalid signature type"}var o=this.ecparams.n;var l=BigInteger.fromByteArrayUnsigned(m.slice(1,33)).mod(o);var k=BigInteger.fromByteArrayUnsigned(m.slice(33,65)).mod(o);return{r:l,s:k,i:j}};if(h!==undefined){if(h.curve!==undefined){this.curveName=h.curve}}if(this.curveName===undefined){this.curveName=e}this.setNamedCurve(this.curveName);if(h!==undefined){if(h.prv!==undefined){this.setPrivateKeyHex(h.prv)}if(h.pub!==undefined){this.setPublicKeyHex(h.pub)}}};KJUR.crypto.ECDSA.parseSigHex=function(a){var b=KJUR.crypto.ECDSA.parseSigHexInHexRS(a);var d=new BigInteger(b.r,16);var c=new BigInteger(b.s,16);return{r:d,s:c}};KJUR.crypto.ECDSA.parseSigHexInHexRS=function(c){if(c.substr(0,2)!="30"){throw"signature is not a ASN.1 sequence"}var b=ASN1HEX.getPosArrayOfChildren_AtObj(c,0);if(b.length!=2){throw"number of signature ASN.1 sequence elements seem wrong"}var g=b[0];var f=b[1];if(c.substr(g,2)!="02"){throw"1st item of sequene of signature is not ASN.1 integer"}if(c.substr(f,2)!="02"){throw"2nd item of sequene of signature is not ASN.1 integer"}var e=ASN1HEX.getHexOfV_AtObj(c,g);var d=ASN1HEX.getHexOfV_AtObj(c,f);return{r:e,s:d}};KJUR.crypto.ECDSA.asn1SigToConcatSig=function(c){var d=KJUR.crypto.ECDSA.parseSigHexInHexRS(c);var b=d.r;var a=d.s;if(b.substr(0,2)=="00"&&(((b.length/2)*8)%(16*8))==8){b=b.substr(2)}if(a.substr(0,2)=="00"&&(((a.length/2)*8)%(16*8))==8){a=a.substr(2)}if((((b.length/2)*8)%(16*8))!=0){throw"unknown ECDSA sig r length error"}if((((a.length/2)*8)%(16*8))!=0){throw"unknown ECDSA sig s length error"}return b+a};KJUR.crypto.ECDSA.concatSigToASN1Sig=function(a){if((((a.length/2)*8)%(16*8))!=0){throw"unknown ECDSA concatinated r-s sig  length error"}var c=a.substr(0,a.length/2);var b=a.substr(a.length/2);return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(c,b)};KJUR.crypto.ECDSA.hexRSSigToASN1Sig=function(b,a){var d=new BigInteger(b,16);var c=new BigInteger(a,16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(d,c)};KJUR.crypto.ECDSA.biRSSigToASN1Sig=function(e,c){var b=new KJUR.asn1.DERInteger({bigint:e});var a=new KJUR.asn1.DERInteger({bigint:c});var d=new KJUR.asn1.DERSequence({array:[b,a]});return d.getEncodedHex()};
	/*! ecparam-1.0.0.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.ECParameterDB=new function(){var b={};var c={};function a(d){return new BigInteger(d,16)}this.getByName=function(e){var d=e;if(typeof c[d]!="undefined"){d=c[e]}if(typeof b[d]!="undefined"){return b[d]}throw"unregistered EC curve name: "+d};this.regist=function(A,l,o,g,m,e,j,f,k,u,d,x){b[A]={};var s=a(o);var z=a(g);var y=a(m);var t=a(e);var w=a(j);var r=new ECCurveFp(s,z,y);var q=r.decodePointHex("04"+f+k);b[A]["name"]=A;b[A]["keylen"]=l;b[A]["curve"]=r;b[A]["G"]=q;b[A]["n"]=t;b[A]["h"]=w;b[A]["oid"]=d;b[A]["info"]=x;for(var v=0;v<u.length;v++){c[u[v]]=A}}};KJUR.crypto.ECParameterDB.regist("secp128r1",128,"FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC","E87579C11079F43DD824993C2CEE5ED3","FFFFFFFE0000000075A30D1B9038A115","1","161FF7528B899B2D0C28607CA52C5B86","CF5AC8395BAFEB13C02DA292DDED7A83",[],"","secp128r1 : SECG curve over a 128 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160k1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73","0","7","0100000000000000000001B8FA16DFAB9ACA16B6B3","1","3B4C382CE37AA192A4019E763036F4F5DD4D7EBB","938CF935318FDCED6BC28286531733C3F03C4FEE",[],"","secp160k1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160r1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC","1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45","0100000000000000000001F4C8F927AED3CA752257","1","4A96B5688EF573284664698968C38BB913CBFC82","23A628553168947D59DCC912042351377AC5FB32",[],"","secp160r1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp192k1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37","0","3","FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D","1","DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D","9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",[]);KJUR.crypto.ECParameterDB.regist("secp192r1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC","64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1","FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831","1","188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012","07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",[]);KJUR.crypto.ECParameterDB.regist("secp224r1",224,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE","B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4","FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D","1","B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21","BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",[]);KJUR.crypto.ECParameterDB.regist("secp256k1",256,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F","0","7","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141","1","79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798","483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",[]);KJUR.crypto.ECParameterDB.regist("secp256r1",256,"FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC","5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B","FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551","1","6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296","4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",["NIST P-256","P-256","prime256v1"]);KJUR.crypto.ECParameterDB.regist("secp384r1",384,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC","B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973","1","AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7","3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",["NIST P-384","P-384"]);KJUR.crypto.ECParameterDB.regist("secp521r1",521,"1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC","051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409","1","C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66","011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",["NIST P-521","P-521"]);
	/*! dsa-modified-1.0.1.js (c) Recurity Labs GmbH, Kenji Urushimma | github.com/openpgpjs/openpgpjs/blob/master/LICENSE
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.DSA=function(){this.p=null;this.q=null;this.g=null;this.y=null;this.x=null;this.type="DSA";this.setPrivate=function(z,w,v,A,u){this.isPrivate=true;this.p=z;this.q=w;this.g=v;this.y=A;this.x=u};this.setPublic=function(w,v,u,z){this.isPublic=true;this.p=w;this.q=v;this.g=u;this.y=z;this.x=null};this.signWithMessageHash=function(z){var v=this.p;var u=this.q;var C=this.g;var D=this.y;var E=this.x;var A=z.substr(0,u.bitLength()/4);var B=new BigInteger(z,16);var w=n(BigInteger.ONE.add(BigInteger.ONE),u.subtract(BigInteger.ONE));var G=(C.modPow(w,v)).mod(u);var F=(w.modInverse(u).multiply(B.add(E.multiply(G)))).mod(u);var H=KJUR.asn1.ASN1Util.jsonToASN1HEX({seq:[{"int":{bigint:G}},{"int":{bigint:F}}]});return H};this.verifyWithMessageHash=function(C,B){var z=this.p;var u=this.q;var G=this.g;var H=this.y;var E=this.parseASN1Signature(B);var K=E[0];var J=E[1];var C=C.substr(0,u.bitLength()/4);var D=new BigInteger(C,16);if(BigInteger.ZERO.compareTo(K)>0||K.compareTo(u)>0||BigInteger.ZERO.compareTo(J)>0||J.compareTo(u)>0){throw"invalid DSA signature"}var I=J.modInverse(u);var A=D.multiply(I).mod(u);var v=K.multiply(I).mod(u);var F=G.modPow(A,z).multiply(H.modPow(v,z)).mod(z).mod(u);return F.compareTo(K)==0};this.parseASN1Signature=function(u){try{var y=new BigInteger(ASN1HEX.getVbyList(u,0,[0],"02"),16);var v=new BigInteger(ASN1HEX.getVbyList(u,0,[1],"02"),16);return[y,v]}catch(w){throw"malformed DSA signature"}};function d(E,w,B,v,u,C){var z=KJUR.crypto.Util.hashString(w,E.toLowerCase());var z=z.substr(0,u.bitLength()/4);var A=new BigInteger(z,16);var y=n(BigInteger.ONE.add(BigInteger.ONE),u.subtract(BigInteger.ONE));var F=(B.modPow(y,v)).mod(u);var D=(y.modInverse(u).multiply(A.add(C.multiply(F)))).mod(u);var G=new Array();G[0]=F;G[1]=D;return G}function r(v){var u=openpgp.config.config.prefer_hash_algorithm;switch(Math.round(v.bitLength()/8)){case 20:if(u!=2&&u>11&&u!=10&&u<8){return 2}return u;case 28:if(u>11&&u<8){return 11}return u;case 32:if(u>10&&u<8){return 8}return u;default:util.print_debug("DSA select hash algorithm: returning null for an unknown length of q");return null}}this.select_hash_algorithm=r;function m(I,K,J,B,z,u,F,G){var C=KJUR.crypto.Util.hashString(B,I.toLowerCase());var C=C.substr(0,u.bitLength()/4);var D=new BigInteger(C,16);if(BigInteger.ZERO.compareTo(K)>0||K.compareTo(u)>0||BigInteger.ZERO.compareTo(J)>0||J.compareTo(u)>0){util.print_error("invalid DSA Signature");return null}var H=J.modInverse(u);var A=D.multiply(H).mod(u);var v=K.multiply(H).mod(u);var E=F.modPow(A,z).multiply(G.modPow(v,z)).mod(z).mod(u);return E.compareTo(K)==0}function a(z){var A=new BigInteger(z,primeCenterie);var y=j(q,512);var u=t(p,q,z);var v;do{v=new BigInteger(q.bitCount(),rand)}while(x.compareTo(BigInteger.ZERO)!=1&&x.compareTo(q)!=-1);var w=g.modPow(x,p);return{x:v,q:A,p:y,g:u,y:w}}function j(y,z,w){if(z%64!=0){return false}var u;var v;do{u=w(bitcount,true);v=u.subtract(BigInteger.ONE);u=u.subtract(v.remainder(y))}while(!u.isProbablePrime(primeCenterie)||u.bitLength()!=l);return u}function t(B,z,A,w){var u=B.subtract(BigInteger.ONE);var y=u.divide(z);var v;do{v=w(A)}while(v.compareTo(u)!=-1&&v.compareTo(BigInteger.ONE)!=1);return v.modPow(y,B)}function o(w,y,u){var v;do{v=u(y,false)}while(v.compareTo(w)!=-1&&v.compareTo(BigInteger.ZERO)!=1);return v}function i(v,w){k=o(v);var u=g.modPow(k,w).mod(v);return u}function h(B,w,y,v,z,u){var A=B(v);s=(w.modInverse(z).multiply(A.add(u.multiply(y)))).mod(z);return s}this.sign=d;this.verify=m;function n(w,u){if(u.compareTo(w)<=0){return}var v=u.subtract(w);var y=e(v.bitLength());while(y>v){y=e(v.bitLength())}return w.add(y)}function e(w){if(w<0){return null}var u=Math.floor((w+7)/8);var v=c(u);if(w%8>0){v=String.fromCharCode((Math.pow(2,w%8)-1)&v.charCodeAt(0))+v.substring(1)}return new BigInteger(f(v),16)}function c(w){var u="";for(var v=0;v<w;v++){u+=String.fromCharCode(b())}return u}function b(){var u=new Uint32Array(1);window.crypto.getRandomValues(u);return u[0]&255}function f(y){if(y==null){return""}var v=[];var w=y.length;var z=0;var u;while(z<w){u=y[z++].charCodeAt().toString(16);while(u.length<2){u="0"+u}v.push(""+u)}return v.join("")}this.getRandomBigIntegerInRange=n;this.getRandomBigInteger=e;this.getRandomBytes=c};
	/*! pkcs5pkey-1.0.6.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	var PKCS5PKEY=function(){var c=function(n,p,o){return i(CryptoJS.AES,n,p,o)};var d=function(n,p,o){return i(CryptoJS.TripleDES,n,p,o)};var i=function(q,v,s,o){var p=CryptoJS.enc.Hex.parse(v);var u=CryptoJS.enc.Hex.parse(s);var n=CryptoJS.enc.Hex.parse(o);var r={};r.key=u;r.iv=n;r.ciphertext=p;var t=q.decrypt(r,u,{iv:n});return CryptoJS.enc.Hex.stringify(t)};var j=function(n,p,o){return e(CryptoJS.AES,n,p,o)};var m=function(n,p,o){return e(CryptoJS.TripleDES,n,p,o)};var e=function(s,x,v,p){var r=CryptoJS.enc.Hex.parse(x);var w=CryptoJS.enc.Hex.parse(v);var o=CryptoJS.enc.Hex.parse(p);var n={};var u=s.encrypt(r,w,{iv:o});var q=CryptoJS.enc.Hex.parse(u.toString());var t=CryptoJS.enc.Base64.stringify(q);return t};var g={"AES-256-CBC":{proc:c,eproc:j,keylen:32,ivlen:16},"AES-192-CBC":{proc:c,eproc:j,keylen:24,ivlen:16},"AES-128-CBC":{proc:c,eproc:j,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:d,eproc:m,keylen:24,ivlen:8}};var b=function(n){return g[n]["proc"]};var k=function(n){var p=CryptoJS.lib.WordArray.random(n);var o=CryptoJS.enc.Hex.stringify(p);return o};var l=function(q){var r={};if(q.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))){r.cipher=RegExp.$1;r.ivsalt=RegExp.$2}if(q.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))){r.type=RegExp.$1}var p=-1;var t=0;if(q.indexOf("\r\n\r\n")!=-1){p=q.indexOf("\r\n\r\n");t=2}if(q.indexOf("\n\n")!=-1){p=q.indexOf("\n\n");t=1}var o=q.indexOf("-----END");if(p!=-1&&o!=-1){var n=q.substring(p+t*2,o-t);n=n.replace(/\s+/g,"");r.data=n}return r};var h=function(o,w,n){var t=n.substring(0,16);var r=CryptoJS.enc.Hex.parse(t);var p=CryptoJS.enc.Utf8.parse(w);var s=g[o]["keylen"]+g[o]["ivlen"];var v="";var u=null;for(;;){var q=CryptoJS.algo.MD5.create();if(u!=null){q.update(u)}q.update(p);q.update(r);u=q.finalize();v=v+CryptoJS.enc.Hex.stringify(u);if(v.length>=s*2){break}}var x={};x.keyhex=v.substr(0,g[o]["keylen"]*2);x.ivhex=v.substr(g[o]["keylen"]*2,g[o]["ivlen"]*2);return x};var a=function(n,t,p,u){var q=CryptoJS.enc.Base64.parse(n);var o=CryptoJS.enc.Hex.stringify(q);var s=g[t]["proc"];var r=s(o,p,u);return r};var f=function(n,q,o,s){var p=g[q]["eproc"];var r=p(n,o,s);return r};return{version:"1.0.5",getHexFromPEM:function(o,r){var p=o;if(p.indexOf("BEGIN "+r)==-1){throw"can't find PEM header: "+r}p=p.replace("-----BEGIN "+r+"-----","");p=p.replace("-----END "+r+"-----","");var q=p.replace(/\s+/g,"");var n=b64tohex(q);return n},getDecryptedKeyHexByKeyIV:function(o,r,q,p){var n=b(r);return n(o,q,p)},parsePKCS5PEM:function(n){return l(n)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(o,n,p){return h(o,n,p)},decryptKeyB64:function(n,p,o,q){return a(n,p,o,q)},getDecryptedKeyHex:function(w,v){var o=l(w);var r=o.type;var p=o.cipher;var n=o.ivsalt;var q=o.data;var u=h(p,v,n);var t=u.keyhex;var s=a(q,p,t,n);return s},getRSAKeyFromEncryptedPKCS5PEM:function(p,o){var q=this.getDecryptedKeyHex(p,o);var n=new RSAKey();n.readPrivateKeyFromASN1HexString(q);return n},getEryptedPKCS5PEMFromPrvKeyHex:function(q,x,r,p){var n="";if(typeof r=="undefined"||r==null){r="AES-256-CBC"}if(typeof g[r]=="undefined"){throw"PKCS5PKEY unsupported algorithm: "+r}if(typeof p=="undefined"||p==null){var t=g[r]["ivlen"];var s=k(t);p=s.toUpperCase()}var w=h(r,x,p);var v=w.keyhex;var u=f(q,r,v,p);var o=u.replace(/(.{64})/g,"$1\r\n");var n="-----BEGIN RSA PRIVATE KEY-----\r\n";n+="Proc-Type: 4,ENCRYPTED\r\n";n+="DEK-Info: "+r+","+p+"\r\n";n+="\r\n";n+=o;n+="\r\n-----END RSA PRIVATE KEY-----\r\n";return n},getEryptedPKCS5PEMFromRSAKey:function(C,D,o,s){var A=new KJUR.asn1.DERInteger({"int":0});var v=new KJUR.asn1.DERInteger({bigint:C.n});var z=new KJUR.asn1.DERInteger({"int":C.e});var B=new KJUR.asn1.DERInteger({bigint:C.d});var t=new KJUR.asn1.DERInteger({bigint:C.p});var r=new KJUR.asn1.DERInteger({bigint:C.q});var y=new KJUR.asn1.DERInteger({bigint:C.dmp1});var u=new KJUR.asn1.DERInteger({bigint:C.dmq1});var x=new KJUR.asn1.DERInteger({bigint:C.coeff});var E=new KJUR.asn1.DERSequence({array:[A,v,z,B,t,r,y,u,x]});var w=E.getEncodedHex();return this.getEryptedPKCS5PEMFromPrvKeyHex(w,D,o,s)},newEncryptedPKCS5PEM:function(n,o,r,s){if(typeof o=="undefined"||o==null){o=1024}if(typeof r=="undefined"||r==null){r="10001"}var p=new RSAKey();p.generate(o,r);var q=null;if(typeof s=="undefined"||s==null){q=this.getEncryptedPKCS5PEMFromRSAKey(pkey,n)}else{q=this.getEncryptedPKCS5PEMFromRSAKey(pkey,n,s)}return q},getRSAKeyFromPlainPKCS8PEM:function(p){if(p.match(/ENCRYPTED/)){throw"pem shall be not ENCRYPTED"}var o=this.getHexFromPEM(p,"PRIVATE KEY");var n=this.getRSAKeyFromPlainPKCS8Hex(o);return n},getRSAKeyFromPlainPKCS8Hex:function(q){var p=ASN1HEX.getPosArrayOfChildren_AtObj(q,0);if(p.length!=3){throw"outer DERSequence shall have 3 elements: "+p.length}var o=ASN1HEX.getHexOfTLV_AtObj(q,p[1]);if(o!="300d06092a864886f70d0101010500"){throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+o}var o=ASN1HEX.getHexOfTLV_AtObj(q,p[1]);var r=ASN1HEX.getHexOfTLV_AtObj(q,p[2]);var s=ASN1HEX.getHexOfV_AtObj(r,0);var n=new RSAKey();n.readPrivateKeyFromASN1HexString(s);return n},parseHexOfEncryptedPKCS8:function(u){var q={};var p=ASN1HEX.getPosArrayOfChildren_AtObj(u,0);if(p.length!=2){throw"malformed format: SEQUENCE(0).items != 2: "+p.length}q.ciphertext=ASN1HEX.getHexOfV_AtObj(u,p[1]);var w=ASN1HEX.getPosArrayOfChildren_AtObj(u,p[0]);if(w.length!=2){throw"malformed format: SEQUENCE(0.0).items != 2: "+w.length}if(ASN1HEX.getHexOfV_AtObj(u,w[0])!="2a864886f70d01050d"){throw"this only supports pkcs5PBES2"}var n=ASN1HEX.getPosArrayOfChildren_AtObj(u,w[1]);if(w.length!=2){throw"malformed format: SEQUENCE(0.0.1).items != 2: "+n.length}var o=ASN1HEX.getPosArrayOfChildren_AtObj(u,n[1]);if(o.length!=2){throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+o.length}if(ASN1HEX.getHexOfV_AtObj(u,o[0])!="2a864886f70d0307"){throw"this only supports TripleDES"}q.encryptionSchemeAlg="TripleDES";q.encryptionSchemeIV=ASN1HEX.getHexOfV_AtObj(u,o[1]);var r=ASN1HEX.getPosArrayOfChildren_AtObj(u,n[0]);if(r.length!=2){throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+r.length}if(ASN1HEX.getHexOfV_AtObj(u,r[0])!="2a864886f70d01050c"){throw"this only supports pkcs5PBKDF2"}var v=ASN1HEX.getPosArrayOfChildren_AtObj(u,r[1]);if(v.length<2){throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+v.length}q.pbkdf2Salt=ASN1HEX.getHexOfV_AtObj(u,v[0]);var s=ASN1HEX.getHexOfV_AtObj(u,v[1]);try{q.pbkdf2Iter=parseInt(s,16)}catch(t){throw"malformed format pbkdf2Iter: "+s}return q},getPBKDF2KeyHexFromParam:function(s,n){var r=CryptoJS.enc.Hex.parse(s.pbkdf2Salt);var o=s.pbkdf2Iter;var q=CryptoJS.PBKDF2(n,r,{keySize:192/32,iterations:o});var p=CryptoJS.enc.Hex.stringify(q);return p},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(v,w){var p=this.getHexFromPEM(v,"ENCRYPTED PRIVATE KEY");var n=this.parseHexOfEncryptedPKCS8(p);var s=PKCS5PKEY.getPBKDF2KeyHexFromParam(n,w);var t={};t.ciphertext=CryptoJS.enc.Hex.parse(n.ciphertext);var r=CryptoJS.enc.Hex.parse(s);var q=CryptoJS.enc.Hex.parse(n.encryptionSchemeIV);var u=CryptoJS.TripleDES.decrypt(t,r,{iv:q});var o=CryptoJS.enc.Hex.stringify(u);return o},getRSAKeyFromEncryptedPKCS8PEM:function(q,p){var o=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(q,p);var n=this.getRSAKeyFromPlainPKCS8Hex(o);return n},getKeyFromEncryptedPKCS8PEM:function(q,o){var n=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(q,o);var p=this.getKeyFromPlainPrivatePKCS8Hex(n);return p},parsePlainPrivatePKCS8Hex:function(q){var o={};o.algparam=null;if(q.substr(0,2)!="30"){throw"malformed plain PKCS8 private key(code:001)"}var p=ASN1HEX.getPosArrayOfChildren_AtObj(q,0);if(p.length!=3){throw"malformed plain PKCS8 private key(code:002)"}if(q.substr(p[1],2)!="30"){throw"malformed PKCS8 private key(code:003)"}var n=ASN1HEX.getPosArrayOfChildren_AtObj(q,p[1]);if(n.length!=2){throw"malformed PKCS8 private key(code:004)"}if(q.substr(n[0],2)!="06"){throw"malformed PKCS8 private key(code:005)"}o.algoid=ASN1HEX.getHexOfV_AtObj(q,n[0]);if(q.substr(n[1],2)=="06"){o.algparam=ASN1HEX.getHexOfV_AtObj(q,n[1])}if(q.substr(p[2],2)!="04"){throw"malformed PKCS8 private key(code:006)"}o.keyidx=ASN1HEX.getStartPosOfV_AtObj(q,p[2]);return o},getKeyFromPlainPrivatePKCS8PEM:function(o){var n=this.getHexFromPEM(o,"PRIVATE KEY");var p=this.getKeyFromPlainPrivatePKCS8Hex(n);return p},getKeyFromPlainPrivatePKCS8Hex:function(n){var p=this.parsePlainPrivatePKCS8Hex(n);if(p.algoid=="2a864886f70d010101"){this.parsePrivateRawRSAKeyHexAtObj(n,p);var o=p.key;var q=new RSAKey();q.setPrivateEx(o.n,o.e,o.d,o.p,o.q,o.dp,o.dq,o.co);return q}else{if(p.algoid=="2a8648ce3d0201"){this.parsePrivateRawECKeyHexAtObj(n,p);if(KJUR.crypto.OID.oidhex2name[p.algparam]===undefined){throw"KJUR.crypto.OID.oidhex2name undefined: "+p.algparam}var r=KJUR.crypto.OID.oidhex2name[p.algparam];var q=new KJUR.crypto.ECDSA({curve:r,prv:p.key});return q}else{throw"unsupported private key algorithm"}}},getRSAKeyFromPublicPKCS8PEM:function(o){var p=this.getHexFromPEM(o,"PUBLIC KEY");var n=this.getRSAKeyFromPublicPKCS8Hex(p);return n},getKeyFromPublicPKCS8PEM:function(o){var p=this.getHexFromPEM(o,"PUBLIC KEY");var n=this.getKeyFromPublicPKCS8Hex(p);return n},getKeyFromPublicPKCS8Hex:function(o){var n=this.parsePublicPKCS8Hex(o);if(n.algoid=="2a864886f70d010101"){var r=this.parsePublicRawRSAKeyHex(n.key);var p=new RSAKey();p.setPublic(r.n,r.e);return p}else{if(n.algoid=="2a8648ce3d0201"){if(KJUR.crypto.OID.oidhex2name[n.algparam]===undefined){throw"KJUR.crypto.OID.oidhex2name undefined: "+n.algparam}var q=KJUR.crypto.OID.oidhex2name[n.algparam];var p=new KJUR.crypto.ECDSA({curve:q,pub:n.key});return p}else{throw"unsupported public key algorithm"}}},parsePublicRawRSAKeyHex:function(p){var n={};if(p.substr(0,2)!="30"){throw"malformed RSA key(code:001)"}var o=ASN1HEX.getPosArrayOfChildren_AtObj(p,0);if(o.length!=2){throw"malformed RSA key(code:002)"}if(p.substr(o[0],2)!="02"){throw"malformed RSA key(code:003)"}n.n=ASN1HEX.getHexOfV_AtObj(p,o[0]);if(p.substr(o[1],2)!="02"){throw"malformed RSA key(code:004)"}n.e=ASN1HEX.getHexOfV_AtObj(p,o[1]);return n},parsePrivateRawRSAKeyHexAtObj:function(o,q){var p=q.keyidx;if(o.substr(p,2)!="30"){throw"malformed RSA private key(code:001)"}var n=ASN1HEX.getPosArrayOfChildren_AtObj(o,p);if(n.length!=9){throw"malformed RSA private key(code:002)"}q.key={};q.key.n=ASN1HEX.getHexOfV_AtObj(o,n[1]);q.key.e=ASN1HEX.getHexOfV_AtObj(o,n[2]);q.key.d=ASN1HEX.getHexOfV_AtObj(o,n[3]);q.key.p=ASN1HEX.getHexOfV_AtObj(o,n[4]);q.key.q=ASN1HEX.getHexOfV_AtObj(o,n[5]);q.key.dp=ASN1HEX.getHexOfV_AtObj(o,n[6]);q.key.dq=ASN1HEX.getHexOfV_AtObj(o,n[7]);q.key.co=ASN1HEX.getHexOfV_AtObj(o,n[8])},parsePrivateRawECKeyHexAtObj:function(o,q){var p=q.keyidx;if(o.substr(p,2)!="30"){throw"malformed ECC private key(code:001)"}var n=ASN1HEX.getPosArrayOfChildren_AtObj(o,p);if(n.length!=3){throw"malformed ECC private key(code:002)"}if(o.substr(n[1],2)!="04"){throw"malformed ECC private key(code:003)"}q.key=ASN1HEX.getHexOfV_AtObj(o,n[1])},parsePublicPKCS8Hex:function(q){var o={};o.algparam=null;var p=ASN1HEX.getPosArrayOfChildren_AtObj(q,0);if(p.length!=2){throw"outer DERSequence shall have 2 elements: "+p.length}var r=p[0];if(q.substr(r,2)!="30"){throw"malformed PKCS8 public key(code:001)"}var n=ASN1HEX.getPosArrayOfChildren_AtObj(q,r);if(n.length!=2){throw"malformed PKCS8 public key(code:002)"}if(q.substr(n[0],2)!="06"){throw"malformed PKCS8 public key(code:003)"}o.algoid=ASN1HEX.getHexOfV_AtObj(q,n[0]);if(q.substr(n[1],2)=="06"){o.algparam=ASN1HEX.getHexOfV_AtObj(q,n[1])}if(q.substr(p[1],2)!="03"){throw"malformed PKCS8 public key(code:004)"}o.key=ASN1HEX.getHexOfV_AtObj(q,p[1]).substr(2);return o},getRSAKeyFromPublicPKCS8Hex:function(r){var q=ASN1HEX.getPosArrayOfChildren_AtObj(r,0);if(q.length!=2){throw"outer DERSequence shall have 2 elements: "+q.length}var p=ASN1HEX.getHexOfTLV_AtObj(r,q[0]);if(p!="300d06092a864886f70d0101010500"){throw"PKCS8 AlgorithmId is not rsaEncryption"}if(r.substr(q[1],2)!="03"){throw"PKCS8 Public Key is not BITSTRING encapslated."}var t=ASN1HEX.getStartPosOfV_AtObj(r,q[1])+2;if(r.substr(t,2)!="30"){throw"PKCS8 Public Key is not SEQUENCE."}var n=ASN1HEX.getPosArrayOfChildren_AtObj(r,t);if(n.length!=2){throw"inner DERSequence shall have 2 elements: "+n.length}if(r.substr(n[0],2)!="02"){throw"N is not ASN.1 INTEGER"}if(r.substr(n[1],2)!="02"){throw"E is not ASN.1 INTEGER"}var u=ASN1HEX.getHexOfV_AtObj(r,n[0]);var s=ASN1HEX.getHexOfV_AtObj(r,n[1]);var o=new RSAKey();o.setPublic(u,s);return o},}}();
	/*! keyutil-1.0.10.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	var KEYUTIL=function(){var d=function(p,r,q){return k(CryptoJS.AES,p,r,q)};var e=function(p,r,q){return k(CryptoJS.TripleDES,p,r,q)};var a=function(p,r,q){return k(CryptoJS.DES,p,r,q)};var k=function(s,x,u,q){var r=CryptoJS.enc.Hex.parse(x);var w=CryptoJS.enc.Hex.parse(u);var p=CryptoJS.enc.Hex.parse(q);var t={};t.key=w;t.iv=p;t.ciphertext=r;var v=s.decrypt(t,w,{iv:p});return CryptoJS.enc.Hex.stringify(v)};var l=function(p,r,q){return g(CryptoJS.AES,p,r,q)};var o=function(p,r,q){return g(CryptoJS.TripleDES,p,r,q)};var f=function(p,r,q){return g(CryptoJS.DES,p,r,q)};var g=function(t,y,v,q){var s=CryptoJS.enc.Hex.parse(y);var x=CryptoJS.enc.Hex.parse(v);var p=CryptoJS.enc.Hex.parse(q);var w=t.encrypt(s,x,{iv:p});var r=CryptoJS.enc.Hex.parse(w.toString());var u=CryptoJS.enc.Base64.stringify(r);return u};var i={"AES-256-CBC":{proc:d,eproc:l,keylen:32,ivlen:16},"AES-192-CBC":{proc:d,eproc:l,keylen:24,ivlen:16},"AES-128-CBC":{proc:d,eproc:l,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:o,keylen:24,ivlen:8},"DES-CBC":{proc:a,eproc:f,keylen:8,ivlen:8}};var c=function(p){return i[p]["proc"]};var m=function(p){var r=CryptoJS.lib.WordArray.random(p);var q=CryptoJS.enc.Hex.stringify(r);return q};var n=function(t){var u={};if(t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))){u.cipher=RegExp.$1;u.ivsalt=RegExp.$2}if(t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))){u.type=RegExp.$1}var r=-1;var v=0;if(t.indexOf("\r\n\r\n")!=-1){r=t.indexOf("\r\n\r\n");v=2}if(t.indexOf("\n\n")!=-1){r=t.indexOf("\n\n");v=1}var q=t.indexOf("-----END");if(r!=-1&&q!=-1){var p=t.substring(r+v*2,q-v);p=p.replace(/\s+/g,"");u.data=p}return u};var j=function(q,y,p){var v=p.substring(0,16);var t=CryptoJS.enc.Hex.parse(v);var r=CryptoJS.enc.Utf8.parse(y);var u=i[q]["keylen"]+i[q]["ivlen"];var x="";var w=null;for(;;){var s=CryptoJS.algo.MD5.create();if(w!=null){s.update(w)}s.update(r);s.update(t);w=s.finalize();x=x+CryptoJS.enc.Hex.stringify(w);if(x.length>=u*2){break}}var z={};z.keyhex=x.substr(0,i[q]["keylen"]*2);z.ivhex=x.substr(i[q]["keylen"]*2,i[q]["ivlen"]*2);return z};var b=function(p,v,r,w){var s=CryptoJS.enc.Base64.parse(p);var q=CryptoJS.enc.Hex.stringify(s);var u=i[v]["proc"];var t=u(q,r,w);return t};var h=function(p,s,q,u){var r=i[s]["eproc"];var t=r(p,q,u);return t};return{version:"1.0.0",getHexFromPEM:function(q,u){var r=q;if(r.indexOf("-----BEGIN ")==-1){throw"can't find PEM header: "+u}if(typeof u=="string"&&u!=""){r=r.replace("-----BEGIN "+u+"-----","");r=r.replace("-----END "+u+"-----","")}else{r=r.replace(/-----BEGIN [^-]+-----/,"");r=r.replace(/-----END [^-]+-----/,"")}var t=r.replace(/\s+/g,"");var p=b64tohex(t);return p},getDecryptedKeyHexByKeyIV:function(q,t,s,r){var p=c(t);return p(q,s,r)},parsePKCS5PEM:function(p){return n(p)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(q,p,r){return j(q,p,r)},decryptKeyB64:function(p,r,q,s){return b(p,r,q,s)},getDecryptedKeyHex:function(y,x){var q=n(y);var t=q.type;var r=q.cipher;var p=q.ivsalt;var s=q.data;var w=j(r,x,p);var v=w.keyhex;var u=b(s,r,v,p);return u},getRSAKeyFromEncryptedPKCS5PEM:function(r,q){var s=this.getDecryptedKeyHex(r,q);var p=new RSAKey();p.readPrivateKeyFromASN1HexString(s);return p},getEncryptedPKCS5PEMFromPrvKeyHex:function(x,s,A,t,r){var p="";if(typeof t=="undefined"||t==null){t="AES-256-CBC"}if(typeof i[t]=="undefined"){throw"KEYUTIL unsupported algorithm: "+t}if(typeof r=="undefined"||r==null){var v=i[t]["ivlen"];var u=m(v);r=u.toUpperCase()}var z=j(t,A,r);var y=z.keyhex;var w=h(s,t,y,r);var q=w.replace(/(.{64})/g,"$1\r\n");var p="-----BEGIN "+x+" PRIVATE KEY-----\r\n";p+="Proc-Type: 4,ENCRYPTED\r\n";p+="DEK-Info: "+t+","+r+"\r\n";p+="\r\n";p+=q;p+="\r\n-----END "+x+" PRIVATE KEY-----\r\n";return p},getEncryptedPKCS5PEMFromRSAKey:function(D,E,r,t){var B=new KJUR.asn1.DERInteger({"int":0});var w=new KJUR.asn1.DERInteger({bigint:D.n});var A=new KJUR.asn1.DERInteger({"int":D.e});var C=new KJUR.asn1.DERInteger({bigint:D.d});var u=new KJUR.asn1.DERInteger({bigint:D.p});var s=new KJUR.asn1.DERInteger({bigint:D.q});var z=new KJUR.asn1.DERInteger({bigint:D.dmp1});var v=new KJUR.asn1.DERInteger({bigint:D.dmq1});var y=new KJUR.asn1.DERInteger({bigint:D.coeff});var F=new KJUR.asn1.DERSequence({array:[B,w,A,C,u,s,z,v,y]});var x=F.getEncodedHex();return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",x,E,r,t)},newEncryptedPKCS5PEM:function(p,q,t,u){if(typeof q=="undefined"||q==null){q=1024}if(typeof t=="undefined"||t==null){t="10001"}var r=new RSAKey();r.generate(q,t);var s=null;if(typeof u=="undefined"||u==null){s=this.getEncryptedPKCS5PEMFromRSAKey(r,p)}else{s=this.getEncryptedPKCS5PEMFromRSAKey(r,p,u)}return s},getRSAKeyFromPlainPKCS8PEM:function(r){if(r.match(/ENCRYPTED/)){throw"pem shall be not ENCRYPTED"}var q=this.getHexFromPEM(r,"PRIVATE KEY");var p=this.getRSAKeyFromPlainPKCS8Hex(q);return p},getRSAKeyFromPlainPKCS8Hex:function(s){var r=ASN1HEX.getPosArrayOfChildren_AtObj(s,0);if(r.length!=3){throw"outer DERSequence shall have 3 elements: "+r.length}var q=ASN1HEX.getHexOfTLV_AtObj(s,r[1]);if(q!="300d06092a864886f70d0101010500"){throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+q}var q=ASN1HEX.getHexOfTLV_AtObj(s,r[1]);var t=ASN1HEX.getHexOfTLV_AtObj(s,r[2]);var u=ASN1HEX.getHexOfV_AtObj(t,0);var p=new RSAKey();p.readPrivateKeyFromASN1HexString(u);return p},parseHexOfEncryptedPKCS8:function(w){var s={};var r=ASN1HEX.getPosArrayOfChildren_AtObj(w,0);if(r.length!=2){throw"malformed format: SEQUENCE(0).items != 2: "+r.length}s.ciphertext=ASN1HEX.getHexOfV_AtObj(w,r[1]);var y=ASN1HEX.getPosArrayOfChildren_AtObj(w,r[0]);if(y.length!=2){throw"malformed format: SEQUENCE(0.0).items != 2: "+y.length}if(ASN1HEX.getHexOfV_AtObj(w,y[0])!="2a864886f70d01050d"){throw"this only supports pkcs5PBES2"}var p=ASN1HEX.getPosArrayOfChildren_AtObj(w,y[1]);if(y.length!=2){throw"malformed format: SEQUENCE(0.0.1).items != 2: "+p.length}var q=ASN1HEX.getPosArrayOfChildren_AtObj(w,p[1]);if(q.length!=2){throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+q.length}if(ASN1HEX.getHexOfV_AtObj(w,q[0])!="2a864886f70d0307"){throw"this only supports TripleDES"}s.encryptionSchemeAlg="TripleDES";s.encryptionSchemeIV=ASN1HEX.getHexOfV_AtObj(w,q[1]);var t=ASN1HEX.getPosArrayOfChildren_AtObj(w,p[0]);if(t.length!=2){throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+t.length}if(ASN1HEX.getHexOfV_AtObj(w,t[0])!="2a864886f70d01050c"){throw"this only supports pkcs5PBKDF2"}var x=ASN1HEX.getPosArrayOfChildren_AtObj(w,t[1]);if(x.length<2){throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+x.length}s.pbkdf2Salt=ASN1HEX.getHexOfV_AtObj(w,x[0]);var u=ASN1HEX.getHexOfV_AtObj(w,x[1]);try{s.pbkdf2Iter=parseInt(u,16)}catch(v){throw"malformed format pbkdf2Iter: "+u}return s},getPBKDF2KeyHexFromParam:function(u,p){var t=CryptoJS.enc.Hex.parse(u.pbkdf2Salt);var q=u.pbkdf2Iter;var s=CryptoJS.PBKDF2(p,t,{keySize:192/32,iterations:q});var r=CryptoJS.enc.Hex.stringify(s);return r},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(x,y){var r=this.getHexFromPEM(x,"ENCRYPTED PRIVATE KEY");var p=this.parseHexOfEncryptedPKCS8(r);var u=KEYUTIL.getPBKDF2KeyHexFromParam(p,y);var v={};v.ciphertext=CryptoJS.enc.Hex.parse(p.ciphertext);var t=CryptoJS.enc.Hex.parse(u);var s=CryptoJS.enc.Hex.parse(p.encryptionSchemeIV);var w=CryptoJS.TripleDES.decrypt(v,t,{iv:s});var q=CryptoJS.enc.Hex.stringify(w);return q},getRSAKeyFromEncryptedPKCS8PEM:function(s,r){var q=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(s,r);var p=this.getRSAKeyFromPlainPKCS8Hex(q);return p},getKeyFromEncryptedPKCS8PEM:function(s,q){var p=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(s,q);var r=this.getKeyFromPlainPrivatePKCS8Hex(p);return r},parsePlainPrivatePKCS8Hex:function(s){var q={};q.algparam=null;if(s.substr(0,2)!="30"){throw"malformed plain PKCS8 private key(code:001)"}var r=ASN1HEX.getPosArrayOfChildren_AtObj(s,0);if(r.length!=3){throw"malformed plain PKCS8 private key(code:002)"}if(s.substr(r[1],2)!="30"){throw"malformed PKCS8 private key(code:003)"}var p=ASN1HEX.getPosArrayOfChildren_AtObj(s,r[1]);if(p.length!=2){throw"malformed PKCS8 private key(code:004)"}if(s.substr(p[0],2)!="06"){throw"malformed PKCS8 private key(code:005)"}q.algoid=ASN1HEX.getHexOfV_AtObj(s,p[0]);if(s.substr(p[1],2)=="06"){q.algparam=ASN1HEX.getHexOfV_AtObj(s,p[1])}if(s.substr(r[2],2)!="04"){throw"malformed PKCS8 private key(code:006)"}q.keyidx=ASN1HEX.getStartPosOfV_AtObj(s,r[2]);return q},getKeyFromPlainPrivatePKCS8PEM:function(q){var p=this.getHexFromPEM(q,"PRIVATE KEY");var r=this.getKeyFromPlainPrivatePKCS8Hex(p);return r},getKeyFromPlainPrivatePKCS8Hex:function(p){var w=this.parsePlainPrivatePKCS8Hex(p);if(w.algoid=="2a864886f70d010101"){this.parsePrivateRawRSAKeyHexAtObj(p,w);var u=w.key;var z=new RSAKey();z.setPrivateEx(u.n,u.e,u.d,u.p,u.q,u.dp,u.dq,u.co);return z}else{if(w.algoid=="2a8648ce3d0201"){this.parsePrivateRawECKeyHexAtObj(p,w);if(KJUR.crypto.OID.oidhex2name[w.algparam]===undefined){throw"KJUR.crypto.OID.oidhex2name undefined: "+w.algparam}var v=KJUR.crypto.OID.oidhex2name[w.algparam];var z=new KJUR.crypto.ECDSA({curve:v});z.setPublicKeyHex(w.pubkey);z.setPrivateKeyHex(w.key);z.isPublic=false;return z}else{if(w.algoid=="2a8648ce380401"){var t=ASN1HEX.getVbyList(p,0,[1,1,0],"02");var s=ASN1HEX.getVbyList(p,0,[1,1,1],"02");var y=ASN1HEX.getVbyList(p,0,[1,1,2],"02");var B=ASN1HEX.getVbyList(p,0,[2,0],"02");var r=new BigInteger(t,16);var q=new BigInteger(s,16);var x=new BigInteger(y,16);var A=new BigInteger(B,16);var z=new KJUR.crypto.DSA();z.setPrivate(r,q,x,null,A);return z}else{throw"unsupported private key algorithm"}}}},getRSAKeyFromPublicPKCS8PEM:function(q){var r=this.getHexFromPEM(q,"PUBLIC KEY");var p=this.getRSAKeyFromPublicPKCS8Hex(r);return p},getKeyFromPublicPKCS8PEM:function(q){var r=this.getHexFromPEM(q,"PUBLIC KEY");var p=this.getKeyFromPublicPKCS8Hex(r);return p},getKeyFromPublicPKCS8Hex:function(q){var p=this.parsePublicPKCS8Hex(q);if(p.algoid=="2a864886f70d010101"){var u=this.parsePublicRawRSAKeyHex(p.key);var r=new RSAKey();r.setPublic(u.n,u.e);return r}else{if(p.algoid=="2a8648ce3d0201"){if(KJUR.crypto.OID.oidhex2name[p.algparam]===undefined){throw"KJUR.crypto.OID.oidhex2name undefined: "+p.algparam}var s=KJUR.crypto.OID.oidhex2name[p.algparam];var r=new KJUR.crypto.ECDSA({curve:s,pub:p.key});return r}else{if(p.algoid=="2a8648ce380401"){var t=p.algparam;var v=ASN1HEX.getHexOfV_AtObj(p.key,0);var r=new KJUR.crypto.DSA();r.setPublic(new BigInteger(t.p,16),new BigInteger(t.q,16),new BigInteger(t.g,16),new BigInteger(v,16));return r}else{throw"unsupported public key algorithm"}}}},parsePublicRawRSAKeyHex:function(r){var p={};if(r.substr(0,2)!="30"){throw"malformed RSA key(code:001)"}var q=ASN1HEX.getPosArrayOfChildren_AtObj(r,0);if(q.length!=2){throw"malformed RSA key(code:002)"}if(r.substr(q[0],2)!="02"){throw"malformed RSA key(code:003)"}p.n=ASN1HEX.getHexOfV_AtObj(r,q[0]);if(r.substr(q[1],2)!="02"){throw"malformed RSA key(code:004)"}p.e=ASN1HEX.getHexOfV_AtObj(r,q[1]);return p},parsePrivateRawRSAKeyHexAtObj:function(q,s){var r=s.keyidx;if(q.substr(r,2)!="30"){throw"malformed RSA private key(code:001)"}var p=ASN1HEX.getPosArrayOfChildren_AtObj(q,r);if(p.length!=9){throw"malformed RSA private key(code:002)"}s.key={};s.key.n=ASN1HEX.getHexOfV_AtObj(q,p[1]);s.key.e=ASN1HEX.getHexOfV_AtObj(q,p[2]);s.key.d=ASN1HEX.getHexOfV_AtObj(q,p[3]);s.key.p=ASN1HEX.getHexOfV_AtObj(q,p[4]);s.key.q=ASN1HEX.getHexOfV_AtObj(q,p[5]);s.key.dp=ASN1HEX.getHexOfV_AtObj(q,p[6]);s.key.dq=ASN1HEX.getHexOfV_AtObj(q,p[7]);s.key.co=ASN1HEX.getHexOfV_AtObj(q,p[8])},parsePrivateRawECKeyHexAtObj:function(p,t){var q=t.keyidx;var r=ASN1HEX.getVbyList(p,q,[1],"04");var s=ASN1HEX.getVbyList(p,q,[2,0],"03").substr(2);t.key=r;t.pubkey=s},parsePublicPKCS8Hex:function(s){var q={};q.algparam=null;var r=ASN1HEX.getPosArrayOfChildren_AtObj(s,0);if(r.length!=2){throw"outer DERSequence shall have 2 elements: "+r.length}var t=r[0];if(s.substr(t,2)!="30"){throw"malformed PKCS8 public key(code:001)"}var p=ASN1HEX.getPosArrayOfChildren_AtObj(s,t);if(p.length!=2){throw"malformed PKCS8 public key(code:002)"}if(s.substr(p[0],2)!="06"){throw"malformed PKCS8 public key(code:003)"}q.algoid=ASN1HEX.getHexOfV_AtObj(s,p[0]);if(s.substr(p[1],2)=="06"){q.algparam=ASN1HEX.getHexOfV_AtObj(s,p[1])}else{if(s.substr(p[1],2)=="30"){q.algparam={};q.algparam.p=ASN1HEX.getVbyList(s,p[1],[0],"02");q.algparam.q=ASN1HEX.getVbyList(s,p[1],[1],"02");q.algparam.g=ASN1HEX.getVbyList(s,p[1],[2],"02")}}if(s.substr(r[1],2)!="03"){throw"malformed PKCS8 public key(code:004)"}q.key=ASN1HEX.getHexOfV_AtObj(s,r[1]).substr(2);return q},getRSAKeyFromPublicPKCS8Hex:function(t){var s=ASN1HEX.getPosArrayOfChildren_AtObj(t,0);if(s.length!=2){throw"outer DERSequence shall have 2 elements: "+s.length}var r=ASN1HEX.getHexOfTLV_AtObj(t,s[0]);if(r!="300d06092a864886f70d0101010500"){throw"PKCS8 AlgorithmId is not rsaEncryption"}if(t.substr(s[1],2)!="03"){throw"PKCS8 Public Key is not BITSTRING encapslated."}var v=ASN1HEX.getStartPosOfV_AtObj(t,s[1])+2;if(t.substr(v,2)!="30"){throw"PKCS8 Public Key is not SEQUENCE."}var p=ASN1HEX.getPosArrayOfChildren_AtObj(t,v);if(p.length!=2){throw"inner DERSequence shall have 2 elements: "+p.length}if(t.substr(p[0],2)!="02"){throw"N is not ASN.1 INTEGER"}if(t.substr(p[1],2)!="02"){throw"E is not ASN.1 INTEGER"}var w=ASN1HEX.getHexOfV_AtObj(t,p[0]);var u=ASN1HEX.getHexOfV_AtObj(t,p[1]);var q=new RSAKey();q.setPublic(w,u);return q},}}();KEYUTIL.getKey=function(f,e,h){if(typeof RSAKey!="undefined"&&f instanceof RSAKey){return f}if(typeof KJUR.crypto.ECDSA!="undefined"&&f instanceof KJUR.crypto.ECDSA){return f}if(typeof KJUR.crypto.DSA!="undefined"&&f instanceof KJUR.crypto.DSA){return f}if(f.d!==undefined&&f.curve!==undefined){return new KJUR.crypto.ECDSA({prv:f.d,curve:f.curve})}if(f.n!==undefined&&f.e!==undefined&&f.d!==undefined&&f.p!==undefined&&f.q!==undefined&&f.dp!==undefined&&f.dq!==undefined&&f.co!==undefined&&f.qi===undefined){var w=new RSAKey();w.setPrivateEx(f.n,f.e,f.d,f.p,f.q,f.dp,f.dq,f.co);return w}if(f.p!==undefined&&f.q!==undefined&&f.g!==undefined&&f.y!==undefined&&f.x!==undefined){var w=new KJUR.crypto.DSA();w.setPrivate(f.p,f.q,f.g,f.y,f.x);return w}if(f.xy!==undefined&&f.d===undefined&&f.curve!==undefined){return new KJUR.crypto.ECDSA({pub:f.xy,curve:f.curve})}if(f.kty===undefined&&f.n!==undefined&&f.e){var w=new RSAKey();w.setPublic(f.n,f.e);return w}if(f.p!==undefined&&f.q!==undefined&&f.g!==undefined&&f.y!==undefined&&f.x===undefined){var w=new KJUR.crypto.DSA();w.setPublic(f.p,f.q,f.g,f.y);return w}if(f.kty==="RSA"&&f.n!==undefined&&f.e!==undefined&&f.d===undefined){var w=new RSAKey();w.setPublic(b64utohex(f.n),b64utohex(f.e));return w}if(f.kty==="RSA"&&f.n!==undefined&&f.e!==undefined&&f.d!==undefined&&f.p!==undefined&&f.q!==undefined&&f.dp!==undefined&&f.dq!==undefined&&f.qi!==undefined){var w=new RSAKey();w.setPrivateEx(b64utohex(f.n),b64utohex(f.e),b64utohex(f.d),b64utohex(f.p),b64utohex(f.q),b64utohex(f.dp),b64utohex(f.dq),b64utohex(f.qi));return w}if(f.kty==="EC"&&f.crv!==undefined&&f.x!==undefined&&f.y!==undefined&&f.d===undefined){var d=new KJUR.crypto.ECDSA({curve:f.crv});var l=d.ecparams.keylen/4;var r=("0000000000"+b64utohex(f.x)).slice(-l);var n=("0000000000"+b64utohex(f.y)).slice(-l);var m="04"+r+n;d.setPublicKeyHex(m);return d}if(f.kty==="EC"&&f.crv!==undefined&&f.x!==undefined&&f.y!==undefined&&f.d!==undefined){var d=new KJUR.crypto.ECDSA({curve:f.crv});var l=d.ecparams.keylen/4;var a=("0000000000"+b64utohex(f.d)).slice(-l);d.setPrivateKeyHex(a);return d}if(f.indexOf("-END CERTIFICATE-",0)!=-1||f.indexOf("-END X509 CERTIFICATE-",0)!=-1||f.indexOf("-END TRUSTED CERTIFICATE-",0)!=-1){return X509.getPublicKeyFromCertPEM(f)}if(h==="pkcs8pub"){return KEYUTIL.getKeyFromPublicPKCS8Hex(f)}if(f.indexOf("-END PUBLIC KEY-")!=-1){return KEYUTIL.getKeyFromPublicPKCS8PEM(f)}if(h==="pkcs5prv"){var w=new RSAKey();w.readPrivateKeyFromASN1HexString(f);return w}if(h==="pkcs5prv"){var w=new RSAKey();w.readPrivateKeyFromASN1HexString(f);return w}if(f.indexOf("-END RSA PRIVATE KEY-")!=-1&&f.indexOf("4,ENCRYPTED")==-1){var i=KEYUTIL.getHexFromPEM(f,"RSA PRIVATE KEY");return KEYUTIL.getKey(i,null,"pkcs5prv")}if(f.indexOf("-END DSA PRIVATE KEY-")!=-1&&f.indexOf("4,ENCRYPTED")==-1){var u=this.getHexFromPEM(f,"DSA PRIVATE KEY");var t=ASN1HEX.getVbyList(u,0,[1],"02");var s=ASN1HEX.getVbyList(u,0,[2],"02");var v=ASN1HEX.getVbyList(u,0,[3],"02");var j=ASN1HEX.getVbyList(u,0,[4],"02");var k=ASN1HEX.getVbyList(u,0,[5],"02");var w=new KJUR.crypto.DSA();w.setPrivate(new BigInteger(t,16),new BigInteger(s,16),new BigInteger(v,16),new BigInteger(j,16),new BigInteger(k,16));return w}if(f.indexOf("-END PRIVATE KEY-")!=-1){return KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(f)}if(f.indexOf("-END RSA PRIVATE KEY-")!=-1&&f.indexOf("4,ENCRYPTED")!=-1){return KEYUTIL.getRSAKeyFromEncryptedPKCS5PEM(f,e)}if(f.indexOf("-END EC PRIVATE KEY-")!=-1&&f.indexOf("4,ENCRYPTED")!=-1){var u=KEYUTIL.getDecryptedKeyHex(f,e);var w=ASN1HEX.getVbyList(u,0,[1],"04");var c=ASN1HEX.getVbyList(u,0,[2,0],"06");var o=ASN1HEX.getVbyList(u,0,[3,0],"03").substr(2);var b="";if(KJUR.crypto.OID.oidhex2name[c]!==undefined){b=KJUR.crypto.OID.oidhex2name[c]}else{throw"undefined OID(hex) in KJUR.crypto.OID: "+c}var d=new KJUR.crypto.ECDSA({name:b});d.setPublicKeyHex(o);d.setPrivateKeyHex(w);d.isPublic=false;return d}if(f.indexOf("-END DSA PRIVATE KEY-")!=-1&&f.indexOf("4,ENCRYPTED")!=-1){var u=KEYUTIL.getDecryptedKeyHex(f,e);var t=ASN1HEX.getVbyList(u,0,[1],"02");var s=ASN1HEX.getVbyList(u,0,[2],"02");var v=ASN1HEX.getVbyList(u,0,[3],"02");var j=ASN1HEX.getVbyList(u,0,[4],"02");var k=ASN1HEX.getVbyList(u,0,[5],"02");var w=new KJUR.crypto.DSA();w.setPrivate(new BigInteger(t,16),new BigInteger(s,16),new BigInteger(v,16),new BigInteger(j,16),new BigInteger(k,16));return w}if(f.indexOf("-END ENCRYPTED PRIVATE KEY-")!=-1){return KEYUTIL.getKeyFromEncryptedPKCS8PEM(f,e)}throw"not supported argument"};KEYUTIL.generateKeypair=function(a,c){if(a=="RSA"){var b=c;var h=new RSAKey();h.generate(b,"10001");h.isPrivate=true;h.isPublic=true;var f=new RSAKey();var e=h.n.toString(16);var i=h.e.toString(16);f.setPublic(e,i);f.isPrivate=false;f.isPublic=true;var k={};k.prvKeyObj=h;k.pubKeyObj=f;return k}else{if(a=="EC"){var d=c;var g=new KJUR.crypto.ECDSA({curve:d});var j=g.generateKeyPairHex();var h=new KJUR.crypto.ECDSA({curve:d});h.setPrivateKeyHex(j.ecprvhex);h.isPrivate=true;h.isPublic=false;var f=new KJUR.crypto.ECDSA({curve:d});f.setPublicKeyHex(j.ecpubhex);f.isPrivate=false;f.isPublic=true;var k={};k.prvKeyObj=h;k.pubKeyObj=f;return k}else{throw"unknown algorithm: "+a}}};KEYUTIL.getPEM=function(a,r,o,g,j){var v=KJUR.asn1;var u=KJUR.crypto;function p(s){var w=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:s.n}},{"int":s.e},{"int":{bigint:s.d}},{"int":{bigint:s.p}},{"int":{bigint:s.q}},{"int":{bigint:s.dmp1}},{"int":{bigint:s.dmq1}},{"int":{bigint:s.coeff}}]});return w}function q(w){var s=KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:w.prvKeyHex}},{tag:["a0",true,{oid:{name:w.curveName}}]},{tag:["a1",true,{bitstr:{hex:"00"+w.pubKeyHex}}]}]});return s}function n(s){var w=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:s.p}},{"int":{bigint:s.q}},{"int":{bigint:s.g}},{"int":{bigint:s.y}},{"int":{bigint:s.x}}]});return w}if(((typeof RSAKey!="undefined"&&a instanceof RSAKey)||(typeof u.DSA!="undefined"&&a instanceof u.DSA)||(typeof u.ECDSA!="undefined"&&a instanceof u.ECDSA))&&a.isPublic==true&&(r===undefined||r=="PKCS8PUB")){var t=new KJUR.asn1.x509.SubjectPublicKeyInfo(a);var m=t.getEncodedHex();return v.ASN1Util.getPEMStringFromHex(m,"PUBLIC KEY")}if(r=="PKCS1PRV"&&typeof RSAKey!="undefined"&&a instanceof RSAKey&&(o===undefined||o==null)&&a.isPrivate==true){var t=p(a);var m=t.getEncodedHex();return v.ASN1Util.getPEMStringFromHex(m,"RSA PRIVATE KEY")}if(r=="PKCS1PRV"&&typeof RSAKey!="undefined"&&a instanceof KJUR.crypto.ECDSA&&(o===undefined||o==null)&&a.isPrivate==true){var f=new KJUR.asn1.DERObjectIdentifier({name:a.curveName});var l=f.getEncodedHex();var e=q(a);var k=e.getEncodedHex();var i="";i+=v.ASN1Util.getPEMStringFromHex(l,"EC PARAMETERS");i+=v.ASN1Util.getPEMStringFromHex(k,"EC PRIVATE KEY");return i}if(r=="PKCS1PRV"&&typeof KJUR.crypto.DSA!="undefined"&&a instanceof KJUR.crypto.DSA&&(o===undefined||o==null)&&a.isPrivate==true){var t=n(a);var m=t.getEncodedHex();return v.ASN1Util.getPEMStringFromHex(m,"DSA PRIVATE KEY")}if(r=="PKCS5PRV"&&typeof RSAKey!="undefined"&&a instanceof RSAKey&&(o!==undefined&&o!=null)&&a.isPrivate==true){var t=p(a);var m=t.getEncodedHex();if(g===undefined){g="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",m,o,g)}if(r=="PKCS5PRV"&&typeof KJUR.crypto.ECDSA!="undefined"&&a instanceof KJUR.crypto.ECDSA&&(o!==undefined&&o!=null)&&a.isPrivate==true){var t=q(a);var m=t.getEncodedHex();if(g===undefined){g="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("EC",m,o,g)}if(r=="PKCS5PRV"&&typeof KJUR.crypto.DSA!="undefined"&&a instanceof KJUR.crypto.DSA&&(o!==undefined&&o!=null)&&a.isPrivate==true){var t=n(a);var m=t.getEncodedHex();if(g===undefined){g="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA",m,o,g)}var h=function(w,s){var y=b(w,s);var x=new KJUR.asn1.ASN1Util.newObject({seq:[{seq:[{oid:{name:"pkcs5PBES2"}},{seq:[{seq:[{oid:{name:"pkcs5PBKDF2"}},{seq:[{octstr:{hex:y.pbkdf2Salt}},{"int":y.pbkdf2Iter}]}]},{seq:[{oid:{name:"des-EDE3-CBC"}},{octstr:{hex:y.encryptionSchemeIV}}]}]}]},{octstr:{hex:y.ciphertext}}]});return x.getEncodedHex()};var b=function(D,E){var x=100;var C=CryptoJS.lib.WordArray.random(8);var B="DES-EDE3-CBC";var s=CryptoJS.lib.WordArray.random(8);var y=CryptoJS.PBKDF2(E,C,{keySize:192/32,iterations:x});var z=CryptoJS.enc.Hex.parse(D);var A=CryptoJS.TripleDES.encrypt(z,y,{iv:s})+"";var w={};w.ciphertext=A;w.pbkdf2Salt=CryptoJS.enc.Hex.stringify(C);w.pbkdf2Iter=x;w.encryptionSchemeAlg=B;w.encryptionSchemeIV=CryptoJS.enc.Hex.stringify(s);return w};if(r=="PKCS8PRV"&&typeof RSAKey!="undefined"&&a instanceof RSAKey&&a.isPrivate==true){var d=p(a);var c=d.getEncodedHex();var t=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"rsaEncryption"}},{"null":true}]},{octstr:{hex:c}}]});var m=t.getEncodedHex();if(o===undefined||o==null){return v.ASN1Util.getPEMStringFromHex(m,"PRIVATE KEY")}else{var k=h(m,o);return v.ASN1Util.getPEMStringFromHex(k,"ENCRYPTED PRIVATE KEY")}}if(r=="PKCS8PRV"&&typeof KJUR.crypto.ECDSA!="undefined"&&a instanceof KJUR.crypto.ECDSA&&a.isPrivate==true){var d=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:a.prvKeyHex}},{tag:["a1",true,{bitstr:{hex:"00"+a.pubKeyHex}}]}]});var c=d.getEncodedHex();var t=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"ecPublicKey"}},{oid:{name:a.curveName}}]},{octstr:{hex:c}}]});var m=t.getEncodedHex();if(o===undefined||o==null){return v.ASN1Util.getPEMStringFromHex(m,"PRIVATE KEY")}else{var k=h(m,o);return v.ASN1Util.getPEMStringFromHex(k,"ENCRYPTED PRIVATE KEY")}}if(r=="PKCS8PRV"&&typeof KJUR.crypto.DSA!="undefined"&&a instanceof KJUR.crypto.DSA&&a.isPrivate==true){var d=new KJUR.asn1.DERInteger({bigint:a.x});var c=d.getEncodedHex();var t=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"dsa"}},{seq:[{"int":{bigint:a.p}},{"int":{bigint:a.q}},{"int":{bigint:a.g}}]}]},{octstr:{hex:c}}]});var m=t.getEncodedHex();if(o===undefined||o==null){return v.ASN1Util.getPEMStringFromHex(m,"PRIVATE KEY")}else{var k=h(m,o);return v.ASN1Util.getPEMStringFromHex(k,"ENCRYPTED PRIVATE KEY")}}throw"unsupported object nor format"};KEYUTIL.getKeyFromCSRPEM=function(b){var a=KEYUTIL.getHexFromPEM(b,"CERTIFICATE REQUEST");var c=KEYUTIL.getKeyFromCSRHex(a);return c};KEYUTIL.getKeyFromCSRHex=function(a){var c=KEYUTIL.parseCSRHex(a);var b=KEYUTIL.getKey(c.p8pubkeyhex,null,"pkcs8pub");return b};KEYUTIL.parseCSRHex=function(c){var b={};var e=c;if(e.substr(0,2)!="30"){throw"malformed CSR(code:001)"}var d=ASN1HEX.getPosArrayOfChildren_AtObj(e,0);if(d.length<1){throw"malformed CSR(code:002)"}if(e.substr(d[0],2)!="30"){throw"malformed CSR(code:003)"}var a=ASN1HEX.getPosArrayOfChildren_AtObj(e,d[0]);if(a.length<3){throw"malformed CSR(code:004)"}b.p8pubkeyhex=ASN1HEX.getHexOfTLV_AtObj(e,a[2]);return b};
	/*! rsapem-1.1.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	function _rsapem_pemToBase64(b){var a=b;a=a.replace("-----BEGIN RSA PRIVATE KEY-----","");a=a.replace("-----END RSA PRIVATE KEY-----","");a=a.replace(/[ \n]+/g,"");return a}function _rsapem_getPosArrayOfChildrenFromHex(d){var j=new Array();var k=ASN1HEX.getStartPosOfV_AtObj(d,0);var f=ASN1HEX.getPosOfNextSibling_AtObj(d,k);var h=ASN1HEX.getPosOfNextSibling_AtObj(d,f);var b=ASN1HEX.getPosOfNextSibling_AtObj(d,h);var l=ASN1HEX.getPosOfNextSibling_AtObj(d,b);var e=ASN1HEX.getPosOfNextSibling_AtObj(d,l);var g=ASN1HEX.getPosOfNextSibling_AtObj(d,e);var c=ASN1HEX.getPosOfNextSibling_AtObj(d,g);var i=ASN1HEX.getPosOfNextSibling_AtObj(d,c);j.push(k,f,h,b,l,e,g,c,i);return j}function _rsapem_getHexValueArrayOfChildrenFromHex(i){var o=_rsapem_getPosArrayOfChildrenFromHex(i);var r=ASN1HEX.getHexOfV_AtObj(i,o[0]);var f=ASN1HEX.getHexOfV_AtObj(i,o[1]);var j=ASN1HEX.getHexOfV_AtObj(i,o[2]);var k=ASN1HEX.getHexOfV_AtObj(i,o[3]);var c=ASN1HEX.getHexOfV_AtObj(i,o[4]);var b=ASN1HEX.getHexOfV_AtObj(i,o[5]);var h=ASN1HEX.getHexOfV_AtObj(i,o[6]);var g=ASN1HEX.getHexOfV_AtObj(i,o[7]);var l=ASN1HEX.getHexOfV_AtObj(i,o[8]);var m=new Array();m.push(r,f,j,k,c,b,h,g,l);return m}function _rsapem_readPrivateKeyFromASN1HexString(c){var b=_rsapem_getHexValueArrayOfChildrenFromHex(c);this.setPrivateEx(b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])}function _rsapem_readPrivateKeyFromPEMString(e){var c=_rsapem_pemToBase64(e);var d=b64tohex(c);var b=_rsapem_getHexValueArrayOfChildrenFromHex(d);this.setPrivateEx(b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])}RSAKey.prototype.readPrivateKeyFromPEMString=_rsapem_readPrivateKeyFromPEMString;RSAKey.prototype.readPrivateKeyFromASN1HexString=_rsapem_readPrivateKeyFromASN1HexString;
	/*! rsasign-1.2.7.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	var _RE_HEXDECONLY=new RegExp("");_RE_HEXDECONLY.compile("[^0-9a-f]","gi");function _rsasign_getHexPaddedDigestInfoForString(d,e,a){var b=function(f){return KJUR.crypto.Util.hashString(f,a)};var c=b(d);return KJUR.crypto.Util.getPaddedDigestInfoHex(c,a,e)}function _zeroPaddingOfSignature(e,d){var c="";var a=d/4-e.length;for(var b=0;b<a;b++){c=c+"0"}return c+e}function _rsasign_signString(d,a){var b=function(e){return KJUR.crypto.Util.hashString(e,a)};var c=b(d);return this.signWithMessageHash(c,a)}function _rsasign_signWithMessageHash(e,c){var f=KJUR.crypto.Util.getPaddedDigestInfoHex(e,c,this.n.bitLength());var b=parseBigInt(f,16);var d=this.doPrivate(b);var a=d.toString(16);return _zeroPaddingOfSignature(a,this.n.bitLength())}function _rsasign_signStringWithSHA1(a){return _rsasign_signString.call(this,a,"sha1")}function _rsasign_signStringWithSHA256(a){return _rsasign_signString.call(this,a,"sha256")}function pss_mgf1_str(c,a,e){var b="",d=0;while(b.length<a){b+=hextorstr(e(rstrtohex(c+String.fromCharCode.apply(String,[(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255]))));d+=1}return b}function _rsasign_signStringPSS(e,a,d){var c=function(f){return KJUR.crypto.Util.hashHex(f,a)};var b=c(rstrtohex(e));if(d===undefined){d=-1}return this.signWithMessageHashPSS(b,a,d)}function _rsasign_signWithMessageHashPSS(l,a,k){var b=hextorstr(l);var g=b.length;var m=this.n.bitLength()-1;var c=Math.ceil(m/8);var d;var o=function(i){return KJUR.crypto.Util.hashHex(i,a)};if(k===-1||k===undefined){k=g}else{if(k===-2){k=c-g-2}else{if(k<-2){throw"invalid salt length"}}}if(c<(g+k+2)){throw"data too long"}var f="";if(k>0){f=new Array(k);new SecureRandom().nextBytes(f);f=String.fromCharCode.apply(String,f)}var n=hextorstr(o(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+b+f)));var j=[];for(d=0;d<c-k-g-2;d+=1){j[d]=0}var e=String.fromCharCode.apply(String,j)+"\x01"+f;var h=pss_mgf1_str(n,e.length,o);var q=[];for(d=0;d<e.length;d+=1){q[d]=e.charCodeAt(d)^h.charCodeAt(d)}var p=(65280>>(8*c-m))&255;q[0]&=~p;for(d=0;d<g;d++){q.push(n.charCodeAt(d))}q.push(188);return _zeroPaddingOfSignature(this.doPrivate(new BigInteger(q)).toString(16),this.n.bitLength())}function _rsasign_getDecryptSignatureBI(a,d,c){var b=new RSAKey();b.setPublic(d,c);var e=b.doPublic(a);return e}function _rsasign_getHexDigestInfoFromSig(a,c,b){var e=_rsasign_getDecryptSignatureBI(a,c,b);var d=e.toString(16).replace(/^1f+00/,"");return d}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(f){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var d=KJUR.crypto.Util.DIGESTINFOHEAD[e];var b=d.length;if(f.substring(0,b)==d){var c=[e,f.substring(b)];return c}}return[]}function _rsasign_verifySignatureWithArgs(f,b,g,j){var e=_rsasign_getHexDigestInfoFromSig(b,g,j);var h=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if(h.length==0){return false}var d=h[0];var i=h[1];var a=function(k){return KJUR.crypto.Util.hashString(k,d)};var c=a(f);return(i==c)}function _rsasign_verifyHexSignatureForMessage(c,b){var d=parseBigInt(c,16);var a=_rsasign_verifySignatureWithArgs(b,d,this.n.toString(16),this.e.toString(16));return a}function _rsasign_verifyString(f,j){j=j.replace(_RE_HEXDECONLY,"");j=j.replace(/[ \n]+/g,"");var b=parseBigInt(j,16);if(b.bitLength()>this.n.bitLength()){return 0}var i=this.doPublic(b);var e=i.toString(16).replace(/^1f+00/,"");var g=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if(g.length==0){return false}var d=g[0];var h=g[1];var a=function(k){return KJUR.crypto.Util.hashString(k,d)};var c=a(f);return(h==c)}function _rsasign_verifyWithMessageHash(e,a){a=a.replace(_RE_HEXDECONLY,"");a=a.replace(/[ \n]+/g,"");var b=parseBigInt(a,16);if(b.bitLength()>this.n.bitLength()){return 0}var h=this.doPublic(b);var g=h.toString(16).replace(/^1f+00/,"");var c=_rsasign_getAlgNameAndHashFromHexDisgestInfo(g);if(c.length==0){return false}var d=c[0];var f=c[1];return(f==e)}function _rsasign_verifyStringPSS(c,b,a,f){var e=function(g){return KJUR.crypto.Util.hashHex(g,a)};var d=e(rstrtohex(c));if(f===undefined){f=-1}return this.verifyWithMessageHashPSS(d,b,a,f)}function _rsasign_verifyWithMessageHashPSS(f,s,l,c){var k=new BigInteger(s,16);if(k.bitLength()>this.n.bitLength()){return false}var r=function(i){return KJUR.crypto.Util.hashHex(i,l)};var j=hextorstr(f);var h=j.length;var g=this.n.bitLength()-1;var m=Math.ceil(g/8);var q;if(c===-1||c===undefined){c=h}else{if(c===-2){c=m-h-2}else{if(c<-2){throw"invalid salt length"}}}if(m<(h+c+2)){throw"data too long"}var a=this.doPublic(k).toByteArray();for(q=0;q<a.length;q+=1){a[q]&=255}while(a.length<m){a.unshift(0)}if(a[m-1]!==188){throw"encoded message does not end in 0xbc"}a=String.fromCharCode.apply(String,a);var d=a.substr(0,m-h-1);var e=a.substr(d.length,h);var p=(65280>>(8*m-g))&255;if((d.charCodeAt(0)&p)!==0){throw"bits beyond keysize not zero"}var n=pss_mgf1_str(e,d.length,r);var o=[];for(q=0;q<d.length;q+=1){o[q]=d.charCodeAt(q)^n.charCodeAt(q)}o[0]&=~p;var b=m-h-c-2;for(q=0;q<b;q+=1){if(o[q]!==0){throw"leftmost octets not zero"}}if(o[b]!==1){throw"0x01 marker not found"}return e===hextorstr(r(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+j+String.fromCharCode.apply(String,o.slice(-c)))))}RSAKey.prototype.signWithMessageHash=_rsasign_signWithMessageHash;RSAKey.prototype.signString=_rsasign_signString;RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.sign=_rsasign_signString;RSAKey.prototype.signWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.signWithMessageHashPSS=_rsasign_signWithMessageHashPSS;RSAKey.prototype.signStringPSS=_rsasign_signStringPSS;RSAKey.prototype.signPSS=_rsasign_signStringPSS;RSAKey.SALT_LEN_HLEN=-1;RSAKey.SALT_LEN_MAX=-2;RSAKey.prototype.verifyWithMessageHash=_rsasign_verifyWithMessageHash;RSAKey.prototype.verifyString=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verify=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForByteArrayMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verifyWithMessageHashPSS=_rsasign_verifyWithMessageHashPSS;RSAKey.prototype.verifyStringPSS=_rsasign_verifyStringPSS;RSAKey.prototype.verifyPSS=_rsasign_verifyStringPSS;RSAKey.SALT_LEN_RECOVER=-2;
	/*! x509-1.1.6.js (c) 2012-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	function X509(){this.subjectPublicKeyRSA=null;this.subjectPublicKeyRSA_hN=null;this.subjectPublicKeyRSA_hE=null;this.hex=null;this.getSerialNumberHex=function(){return ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,1])};this.getIssuerHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3])};this.getIssuerString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3]))};this.getSubjectHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5])};this.getSubjectString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5]))};this.getNotBefore=function(){var a=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,0]);a=a.replace(/(..)/g,"%$1");a=decodeURIComponent(a);return a};this.getNotAfter=function(){var a=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,1]);a=a.replace(/(..)/g,"%$1");a=decodeURIComponent(a);return a};this.readCertPEM=function(c){var e=X509.pemToHex(c);var b=X509.getPublicKeyHexArrayFromCertHex(e);var d=new RSAKey();d.setPublic(b[0],b[1]);this.subjectPublicKeyRSA=d;this.subjectPublicKeyRSA_hN=b[0];this.subjectPublicKeyRSA_hE=b[1];this.hex=e};this.readCertPEMWithoutRSAInit=function(c){var d=X509.pemToHex(c);var b=X509.getPublicKeyHexArrayFromCertHex(d);this.subjectPublicKeyRSA.setPublic(b[0],b[1]);this.subjectPublicKeyRSA_hN=b[0];this.subjectPublicKeyRSA_hE=b[1];this.hex=d}}X509.pemToBase64=function(a){var b=a;b=b.replace("-----BEGIN CERTIFICATE-----","");b=b.replace("-----END CERTIFICATE-----","");b=b.replace(/[ \n]+/g,"");return b};X509.pemToHex=function(a){var c=X509.pemToBase64(a);var b=b64tohex(c);return b};X509.getSubjectPublicKeyPosFromCertHex=function(f){var e=X509.getSubjectPublicKeyInfoPosFromCertHex(f);if(e==-1){return -1}var b=ASN1HEX.getPosArrayOfChildren_AtObj(f,e);if(b.length!=2){return -1}var d=b[1];if(f.substring(d,d+2)!="03"){return -1}var c=ASN1HEX.getStartPosOfV_AtObj(f,d);if(f.substring(c,c+2)!="00"){return -1}return c+2};X509.getSubjectPublicKeyInfoPosFromCertHex=function(d){var c=ASN1HEX.getStartPosOfV_AtObj(d,0);var b=ASN1HEX.getPosArrayOfChildren_AtObj(d,c);if(b.length<1){return -1}if(d.substring(b[0],b[0]+10)=="a003020102"){if(b.length<6){return -1}return b[6]}else{if(b.length<5){return -1}return b[5]}};X509.getPublicKeyHexArrayFromCertHex=function(f){var e=X509.getSubjectPublicKeyPosFromCertHex(f);var b=ASN1HEX.getPosArrayOfChildren_AtObj(f,e);if(b.length!=2){return[]}var d=ASN1HEX.getHexOfV_AtObj(f,b[0]);var c=ASN1HEX.getHexOfV_AtObj(f,b[1]);if(d!=null&&c!=null){return[d,c]}else{return[]}};X509.getHexTbsCertificateFromCert=function(b){var a=ASN1HEX.getStartPosOfV_AtObj(b,0);return a};X509.getPublicKeyHexArrayFromCertPEM=function(c){var d=X509.pemToHex(c);var b=X509.getPublicKeyHexArrayFromCertHex(d);return b};X509.hex2dn=function(e){var f="";var c=ASN1HEX.getPosArrayOfChildren_AtObj(e,0);for(var d=0;d<c.length;d++){var b=ASN1HEX.getHexOfTLV_AtObj(e,c[d]);f=f+"/"+X509.hex2rdn(b)}return f};X509.hex2rdn=function(a){var f=ASN1HEX.getDecendantHexTLVByNthList(a,0,[0,0]);var e=ASN1HEX.getDecendantHexVByNthList(a,0,[0,1]);var c="";try{c=X509.DN_ATTRHEX[f]}catch(b){c=f}e=e.replace(/(..)/g,"%$1");var d=decodeURIComponent(e);return c+"="+d};X509.DN_ATTRHEX={"0603550406":"C","060355040a":"O","060355040b":"OU","0603550403":"CN","0603550405":"SN","0603550408":"ST","0603550407":"L",};X509.getPublicKeyFromCertPEM=function(f){var c=X509.getPublicKeyInfoPropOfCertPEM(f);if(c.algoid=="2a864886f70d010101"){var i=KEYUTIL.parsePublicRawRSAKeyHex(c.keyhex);var j=new RSAKey();j.setPublic(i.n,i.e);return j}else{if(c.algoid=="2a8648ce3d0201"){var e=KJUR.crypto.OID.oidhex2name[c.algparam];var j=new KJUR.crypto.ECDSA({curve:e,info:c.keyhex});j.setPublicKeyHex(c.keyhex);return j}else{if(c.algoid=="2a8648ce380401"){var b=ASN1HEX.getVbyList(c.algparam,0,[0],"02");var a=ASN1HEX.getVbyList(c.algparam,0,[1],"02");var d=ASN1HEX.getVbyList(c.algparam,0,[2],"02");var h=ASN1HEX.getHexOfV_AtObj(c.keyhex,0);h=h.substr(2);var j=new KJUR.crypto.DSA();j.setPublic(new BigInteger(b,16),new BigInteger(a,16),new BigInteger(d,16),new BigInteger(h,16));return j}else{throw"unsupported key"}}}};X509.getPublicKeyInfoPropOfCertPEM=function(e){var c={};c.algparam=null;var g=X509.pemToHex(e);var d=ASN1HEX.getPosArrayOfChildren_AtObj(g,0);if(d.length!=3){throw"malformed X.509 certificate PEM (code:001)"}if(g.substr(d[0],2)!="30"){throw"malformed X.509 certificate PEM (code:002)"}var b=ASN1HEX.getPosArrayOfChildren_AtObj(g,d[0]);if(b.length<7){throw"malformed X.509 certificate PEM (code:003)"}var h=ASN1HEX.getPosArrayOfChildren_AtObj(g,b[6]);if(h.length!=2){throw"malformed X.509 certificate PEM (code:004)"}var f=ASN1HEX.getPosArrayOfChildren_AtObj(g,h[0]);if(f.length!=2){throw"malformed X.509 certificate PEM (code:005)"}c.algoid=ASN1HEX.getHexOfV_AtObj(g,f[0]);if(g.substr(f[1],2)=="06"){c.algparam=ASN1HEX.getHexOfV_AtObj(g,f[1])}else{if(g.substr(f[1],2)=="30"){c.algparam=ASN1HEX.getHexOfTLV_AtObj(g,f[1])}}if(g.substr(h[1],2)!="03"){throw"malformed X.509 certificate PEM (code:006)"}var a=ASN1HEX.getHexOfV_AtObj(g,h[1]);c.keyhex=a.substr(2);return c};X509.getPublicKeyInfoPosOfCertHEX=function(c){var b=ASN1HEX.getPosArrayOfChildren_AtObj(c,0);if(b.length!=3){throw"malformed X.509 certificate PEM (code:001)"}if(c.substr(b[0],2)!="30"){throw"malformed X.509 certificate PEM (code:002)"}var a=ASN1HEX.getPosArrayOfChildren_AtObj(c,b[0]);if(a.length<7){throw"malformed X.509 certificate PEM (code:003)"}return a[6]};X509.getV3ExtInfoListOfCertHex=function(g){var b=ASN1HEX.getPosArrayOfChildren_AtObj(g,0);if(b.length!=3){throw"malformed X.509 certificate PEM (code:001)"}if(g.substr(b[0],2)!="30"){throw"malformed X.509 certificate PEM (code:002)"}var a=ASN1HEX.getPosArrayOfChildren_AtObj(g,b[0]);if(a.length<8){throw"malformed X.509 certificate PEM (code:003)"}if(g.substr(a[7],2)!="a3"){throw"malformed X.509 certificate PEM (code:004)"}var h=ASN1HEX.getPosArrayOfChildren_AtObj(g,a[7]);if(h.length!=1){throw"malformed X.509 certificate PEM (code:005)"}if(g.substr(h[0],2)!="30"){throw"malformed X.509 certificate PEM (code:006)"}var f=ASN1HEX.getPosArrayOfChildren_AtObj(g,h[0]);var e=f.length;var d=new Array(e);for(var c=0;c<e;c++){d[c]=X509.getV3ExtItemInfo_AtObj(g,f[c])}return d};X509.getV3ExtItemInfo_AtObj=function(f,g){var e={};e.posTLV=g;var b=ASN1HEX.getPosArrayOfChildren_AtObj(f,g);if(b.length!=2&&b.length!=3){throw"malformed X.509v3 Ext (code:001)"}if(f.substr(b[0],2)!="06"){throw"malformed X.509v3 Ext (code:002)"}var d=ASN1HEX.getHexOfV_AtObj(f,b[0]);e.oid=ASN1HEX.hextooidstr(d);e.critical=false;if(b.length==3){e.critical=true}var c=b[b.length-1];if(f.substr(c,2)!="04"){throw"malformed X.509v3 Ext (code:003)"}e.posV=ASN1HEX.getStartPosOfV_AtObj(f,c);return e};X509.getHexOfTLV_V3ExtValue=function(b,a){var c=X509.getPosOfTLV_V3ExtValue(b,a);if(c==-1){return""}return ASN1HEX.getHexOfTLV_AtObj(b,c)};X509.getHexOfV_V3ExtValue=function(b,a){var c=X509.getPosOfTLV_V3ExtValue(b,a);if(c==-1){return""}return ASN1HEX.getHexOfV_AtObj(b,c)};X509.getPosOfTLV_V3ExtValue=function(f,b){var d=b;if(!b.match(/^[0-9.]+$/)){d=KJUR.asn1.x509.OID.name2oid(b)}if(d==""){return -1}var c=X509.getV3ExtInfoListOfCertHex(f);for(var a=0;a<c.length;a++){var e=c[a];if(e.oid==d){return e.posV}}return -1};X509.KEYUSAGE_NAME=["digitalSignature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly","decipherOnly"];X509.getExtKeyUsageBin=function(d){var b=X509.getHexOfV_V3ExtValue(d,"keyUsage");if(b==""){return""}if(b.length%2!=0||b.length<=2){throw"malformed key usage value"}var a=parseInt(b.substr(0,2));var c=parseInt(b.substr(2),16).toString(2);return c.substr(0,c.length-a)};X509.getExtKeyUsageString=function(e){var d=X509.getExtKeyUsageBin(e);var b=new Array();for(var c=0;c<d.length;c++){if(d.substr(c,1)=="1"){b.push(X509.KEYUSAGE_NAME[c])}}return b.join(",")};X509.getExtAIAInfo=function(g){var j={};j.ocsp=[];j.caissuer=[];var h=X509.getPosOfTLV_V3ExtValue(g,"authorityInfoAccess");if(h==-1){return null}if(g.substr(h,2)!="30"){throw"malformed AIA Extn Value"}var d=ASN1HEX.getPosArrayOfChildren_AtObj(g,h);for(var c=0;c<d.length;c++){var a=d[c];var b=ASN1HEX.getPosArrayOfChildren_AtObj(g,a);if(b.length!=2){throw"malformed AccessDescription of AIA Extn"}var e=b[0];var f=b[1];if(ASN1HEX.getHexOfV_AtObj(g,e)=="2b06010505073001"){if(g.substr(f,2)=="86"){j.ocsp.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(g,f)))}}if(ASN1HEX.getHexOfV_AtObj(g,e)=="2b06010505073002"){if(g.substr(f,2)=="86"){j.caissuer.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(g,f)))}}}return j};
	/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
	 */
	var jsonParse=(function(){var e="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";var j='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';var i='(?:"'+j+'*")';var d=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+e+"|"+i+")","g");var k=new RegExp("\\\\(?:([^u])|u(.{4}))","g");var g={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};function h(l,m,n){return m?g[m]:String.fromCharCode(parseInt(n,16))}var c=new String("");var a="\\";var f={"{":Object,"[":Array};var b=Object.hasOwnProperty;return function(u,q){var p=u.match(d);var x;var v=p[0];var l=false;if("{"===v){x={}}else{if("["===v){x=[]}else{x=[];l=true}}var t;var r=[x];for(var o=1-l,m=p.length;o<m;++o){v=p[o];var w;switch(v.charCodeAt(0)){default:w=r[0];w[t||w.length]=+(v);t=void 0;break;case 34:v=v.substring(1,v.length-1);if(v.indexOf(a)!==-1){v=v.replace(k,h)}w=r[0];if(!t){if(w instanceof Array){t=w.length}else{t=v||c;break}}w[t]=v;t=void 0;break;case 91:w=r[0];r.unshift(w[t||w.length]=[]);t=void 0;break;case 93:r.shift();break;case 102:w=r[0];w[t||w.length]=false;t=void 0;break;case 110:w=r[0];w[t||w.length]=null;t=void 0;break;case 116:w=r[0];w[t||w.length]=true;t=void 0;break;case 123:w=r[0];r.unshift(w[t||w.length]={});t=void 0;break;case 125:r.shift();break}}if(l){if(r.length!==1){throw new Error()}x=x[0]}else{if(r.length){throw new Error()}}if(q){var s=function(C,B){var D=C[B];if(D&&typeof D==="object"){var n=null;for(var z in D){if(b.call(D,z)&&D!==C){var y=s(D,z);if(y!==void 0){D[z]=y}else{if(!n){n=[]}n.push(z)}}}if(n){for(var A=n.length;--A>=0;){delete D[n[A]]}}}return q.call(C,B,D)};x=s({"":x},"")}return x}})();
	/*! jws-3.2.4 (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.jws=="undefined"||!KJUR.jws){KJUR.jws={}}KJUR.jws.JWS=function(){var i=KJUR.jws.JWS;this.parseJWS=function(o,q){if((this.parsedJWS!==undefined)&&(q||(this.parsedJWS.sigvalH!==undefined))){return}if(o.match(/^([^.]+)\.([^.]+)\.([^.]+)$/)==null){throw"JWS signature is not a form of 'Head.Payload.SigValue'."}var r=RegExp.$1;var m=RegExp.$2;var s=RegExp.$3;var u=r+"."+m;this.parsedJWS={};this.parsedJWS.headB64U=r;this.parsedJWS.payloadB64U=m;this.parsedJWS.sigvalB64U=s;this.parsedJWS.si=u;if(!q){var p=b64utohex(s);var n=parseBigInt(p,16);this.parsedJWS.sigvalH=p;this.parsedJWS.sigvalBI=n}var l=b64utoutf8(r);var t=b64utoutf8(m);this.parsedJWS.headS=l;this.parsedJWS.payloadS=t;if(!i.isSafeJSONString(l,this.parsedJWS,"headP")){throw"malformed JSON string for JWS Head: "+l}};function b(m,l){return utf8tob64u(m)+"."+utf8tob64u(l)}function f(n,m){var l=function(o){return KJUR.crypto.Util.hashString(o,m)};if(l==null){throw"hash function not defined in jsrsasign: "+m}return l(n)}function h(r,o,l,p,n){var q=b(r,o);var m=parseBigInt(l,16);return _rsasign_verifySignatureWithArgs(q,m,p,n)}this.verifyJWSByNE=function(n,m,l){this.parseJWS(n);return _rsasign_verifySignatureWithArgs(this.parsedJWS.si,this.parsedJWS.sigvalBI,m,l)};this.verifyJWSByKey=function(o,n){this.parseJWS(o);var l=c(this.parsedJWS.headP);var m=this.parsedJWS.headP.alg.substr(0,2)=="PS";if(n.hashAndVerify){return n.hashAndVerify(l,new Buffer(this.parsedJWS.si,"utf8").toString("base64"),b64utob64(this.parsedJWS.sigvalB64U),"base64",m)}else{if(m){return n.verifyStringPSS(this.parsedJWS.si,this.parsedJWS.sigvalH,l)}else{return n.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)}}};this.verifyJWSByPemX509Cert=function(n,l){this.parseJWS(n);var m=new X509();m.readCertPEM(l);return m.subjectPublicKeyRSA.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)};function c(m){var n=m.alg;var l="";if(n!="RS256"&&n!="RS512"&&n!="PS256"&&n!="PS512"){throw"JWS signature algorithm not supported: "+n}if(n.substr(2)=="256"){l="sha256"}if(n.substr(2)=="512"){l="sha512"}return l}function e(l){return c(jsonParse(l))}function k(l,q,t,n,r,s){var o=new RSAKey();o.setPrivate(n,r,s);var m=e(l);var p=o.signString(t,m);return p}function j(r,q,p,o,n){var l=null;if(typeof n=="undefined"){l=e(r)}else{l=c(n)}var m=n.alg.substr(0,2)=="PS";if(o.hashAndSign){return b64tob64u(o.hashAndSign(l,p,"binary","base64",m))}else{if(m){return hextob64u(o.signStringPSS(p,l))}else{return hextob64u(o.signString(p,l))}}}function g(q,n,p,m,o){var l=b(q,n);return k(q,n,l,p,m,o)}this.generateJWSByNED=function(s,o,r,n,q){if(!i.isSafeJSONString(s)){throw"JWS Head is not safe JSON string: "+s}var m=b(s,o);var p=k(s,o,m,r,n,q);var l=hextob64u(p);this.parsedJWS={};this.parsedJWS.headB64U=m.split(".")[0];this.parsedJWS.payloadB64U=m.split(".")[1];this.parsedJWS.sigvalB64U=l;return m+"."+l};this.generateJWSByKey=function(q,o,l){var p={};if(!i.isSafeJSONString(q,p,"headP")){throw"JWS Head is not safe JSON string: "+q}var n=b(q,o);var m=j(q,o,n,l,p.headP);this.parsedJWS={};this.parsedJWS.headB64U=n.split(".")[0];this.parsedJWS.payloadB64U=n.split(".")[1];this.parsedJWS.sigvalB64U=m;return n+"."+m};function d(r,q,p,m){var o=new RSAKey();o.readPrivateKeyFromPEMString(m);var l=e(r);var n=o.signString(p,l);return n}this.generateJWSByP1PrvKey=function(q,o,l){if(!i.isSafeJSONString(q)){throw"JWS Head is not safe JSON string: "+q}var n=b(q,o);var p=d(q,o,n,l);var m=hextob64u(p);this.parsedJWS={};this.parsedJWS.headB64U=n.split(".")[0];this.parsedJWS.payloadB64U=n.split(".")[1];this.parsedJWS.sigvalB64U=m;return n+"."+m}};KJUR.jws.JWS.sign=function(b,p,i,l,k){var j=KJUR.jws.JWS;if(!j.isSafeJSONString(p)){throw"JWS Head is not safe JSON string: "+p}var e=j.readSafeJSONString(p);if((b==""||b==null)&&e.alg!==undefined){b=e.alg}if((b!=""&&b!=null)&&e.alg===undefined){e.alg=b;p=JSON.stringify(e)}var d=null;if(j.jwsalg2sigalg[b]===undefined){throw"unsupported alg name: "+b}else{d=j.jwsalg2sigalg[b]}var c=utf8tob64u(p);var g=utf8tob64u(i);var n=c+"."+g;var m="";if(d.substr(0,4)=="Hmac"){if(l===undefined){throw"hexadecimal key shall be specified for HMAC"}var h=new KJUR.crypto.Mac({alg:d,pass:hextorstr(l)});h.updateString(n);m=h.doFinal()}else{if(d.indexOf("withECDSA")!=-1){var o=new KJUR.crypto.Signature({alg:d});o.init(l,k);o.updateString(n);hASN1Sig=o.sign();m=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)}else{if(d!="none"){var o=new KJUR.crypto.Signature({alg:d});o.init(l,k);o.updateString(n);m=o.sign()}}}var f=hextob64u(m);return n+"."+f};KJUR.jws.JWS.verify=function(o,s,j){var l=KJUR.jws.JWS;var p=o.split(".");var d=p[0];var k=p[1];var b=d+"."+k;var q=b64utohex(p[2]);var i=l.readSafeJSONString(b64utoutf8(p[0]));var h=null;var r=null;if(i.alg===undefined){throw"algorithm not specified in header"}else{h=i.alg;r=h.substr(0,2)}if(j!=null&&Object.prototype.toString.call(j)==="[object Array]"&&j.length>0){var c=":"+j.join(":")+":";if(c.indexOf(":"+h+":")==-1){throw"algorithm '"+h+"' not accepted in the list"}}if(h!="none"&&s===null){throw"key shall be specified to verify."}if(r=="HS"){if(typeof s!="string"&&s.length!=0&&s.length%2!=0&&!s.match(/^[0-9A-Fa-f]+/)){throw"key shall be a hexadecimal str for HS* algs"}}if(typeof s=="string"&&s.indexOf("-----BEGIN ")!=-1){s=KEYUTIL.getKey(s)}if(r=="RS"||r=="PS"){if(!(s instanceof RSAKey)){throw"key shall be a RSAKey obj for RS* and PS* algs"}}if(r=="ES"){if(!(s instanceof KJUR.crypto.ECDSA)){throw"key shall be a ECDSA obj for ES* algs"}}if(h=="none"){}var m=null;if(l.jwsalg2sigalg[i.alg]===undefined){throw"unsupported alg name: "+h}else{m=l.jwsalg2sigalg[h]}if(m=="none"){throw"not supported"}else{if(m.substr(0,4)=="Hmac"){if(s===undefined){throw"hexadecimal key shall be specified for HMAC"}var g=new KJUR.crypto.Mac({alg:m,pass:hextorstr(s)});g.updateString(b);hSig2=g.doFinal();return q==hSig2}else{if(m.indexOf("withECDSA")!=-1){var f=null;try{f=KJUR.crypto.ECDSA.concatSigToASN1Sig(q)}catch(n){return false}var e=new KJUR.crypto.Signature({alg:m});e.init(s);e.updateString(b);return e.verify(f)}else{var e=new KJUR.crypto.Signature({alg:m});e.init(s);e.updateString(b);return e.verify(q)}}}};KJUR.jws.JWS.verifyJWT=function(d,j,l){var h=KJUR.jws.JWS;var i=d.split(".");var c=i[0];var g=i[1];var m=c+"."+g;var k=b64utohex(i[2]);var f=h.readSafeJSONString(b64utoutf8(c));var e=h.readSafeJSONString(b64utoutf8(g));if(f.alg===undefined){return false}if(l.alg===undefined){throw"acceptField.alg shall be specified"}if(!h.inArray(f.alg,l.alg)){return false}if(e.iss!==undefined&&typeof l.iss==="object"){if(!h.inArray(e.iss,l.iss)){return false}}if(e.sub!==undefined&&typeof l.sub==="object"){if(!h.inArray(e.sub,l.sub)){return false}}if(e.aud!==undefined&&typeof l.aud==="object"){if(typeof e.aud=="string"){if(!h.inArray(e.aud,l.aud)){return false}}else{if(typeof e.aud=="object"){if(!h.includedArray(e.aud,l.aud)){return false}}}}var b=KJUR.jws.IntDate.getNow();if(l.verifyAt!==undefined&&typeof l.verifyAt=="number"){b=l.verifyAt}if(e.exp!==undefined&&typeof e.exp=="number"){if(e.exp<b){return false}}if(e.nbf!==undefined&&typeof e.nbf=="number"){if(b<e.nbf){return false}}if(e.iat!==undefined&&typeof e.iat=="number"){if(b<e.iat){return false}}if(e.jti!==undefined&&l.jti!==undefined){if(e.jti!==l.jti){return false}}if(!KJUR.jws.JWS.verify(d,j,l.alg)){return false}return true};KJUR.jws.JWS.includedArray=function(c,b){var e=KJUR.jws.JWS.inArray;if(c===null){return false}if(typeof c!=="object"){return false}if(typeof c.length!=="number"){return false}for(var d=0;d<c.length;d++){if(!e(c[d],b)){return false}}return true};KJUR.jws.JWS.inArray=function(d,b){if(b===null){return false}if(typeof b!=="object"){return false}if(typeof b.length!=="number"){return false}for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false};KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS384:"HmacSHA384",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none",};KJUR.jws.JWS.isSafeJSONString=function(d,c,e){var f=null;try{f=jsonParse(d);if(typeof f!="object"){return 0}if(f.constructor===Array){return 0}if(c){c[e]=f}return 1}catch(b){return 0}};KJUR.jws.JWS.readSafeJSONString=function(c){var d=null;try{d=jsonParse(c);if(typeof d!="object"){return null}if(d.constructor===Array){return null}return d}catch(b){return null}};KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(b){if(b.match(/^[^.]+\.[^.]+\.([^.]+)$/)==null){throw"JWS signature is not a form of 'Head.Payload.SigValue'."}return RegExp.$1};KJUR.jws.IntDate=function(){};KJUR.jws.IntDate.get=function(b){if(b=="now"){return KJUR.jws.IntDate.getNow()}else{if(b=="now + 1hour"){return KJUR.jws.IntDate.getNow()+60*60}else{if(b=="now + 1day"){return KJUR.jws.IntDate.getNow()+60*60*24}else{if(b=="now + 1month"){return KJUR.jws.IntDate.getNow()+60*60*24*30}else{if(b=="now + 1year"){return KJUR.jws.IntDate.getNow()+60*60*24*365}else{if(b.match(/Z$/)){return KJUR.jws.IntDate.getZulu(b)}else{if(b.match(/^[0-9]+$/)){return parseInt(b)}}}}}}}throw"unsupported format: "+b};KJUR.jws.IntDate.getZulu=function(h){if(a=h.match(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var g=parseInt(RegExp.$1);var i=parseInt(RegExp.$2)-1;var c=parseInt(RegExp.$3);var b=parseInt(RegExp.$4);var e=parseInt(RegExp.$5);var f=parseInt(RegExp.$6);var j=new Date(Date.UTC(g,i,c,b,e,f));return ~~(j/1000)}throw"unsupported format: "+h};KJUR.jws.IntDate.getNow=function(){var b=~~(new Date()/1000);return b};KJUR.jws.IntDate.intDate2UTCString=function(b){var c=new Date(b*1000);return c.toUTCString()};KJUR.jws.IntDate.intDate2Zulu=function(f){var j=new Date(f*1000);var i=("0000"+j.getUTCFullYear()).slice(-4);var h=("00"+(j.getUTCMonth()+1)).slice(-2);var c=("00"+j.getUTCDate()).slice(-2);var b=("00"+j.getUTCHours()).slice(-2);var e=("00"+j.getUTCMinutes()).slice(-2);var g=("00"+j.getUTCSeconds()).slice(-2);return i+h+c+b+e+g+"Z"};
	/*! jwsjs-2.0.1 (c) 2010-2015 Kenji Urushima | kjur.github.com/jsjws/license
	 */
	if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.jws=="undefined"||!KJUR.jws){KJUR.jws={}}KJUR.jws.JWSJS=function(){var a=KJUR.jws.JWS;this.aHeader=[];this.sPayload="";this.aSignature=[];this.init=function(){this.aHeader=[];this.sPayload="";this.aSignature=[]};this.initWithJWS=function(c){this.init();var b=new KJUR.jws.JWS();b.parseJWS(c);this.aHeader.push(b.parsedJWS.headB64U);this.sPayload=b.parsedJWS.payloadB64U;this.aSignature.push(b.parsedJWS.sigvalB64U)};this.addSignatureByHeaderKey=function(e,b){var d=b64utoutf8(this.sPayload);var c=new KJUR.jws.JWS();var f=c.generateJWSByP1PrvKey(e,d,b);this.aHeader.push(c.parsedJWS.headB64U);this.aSignature.push(c.parsedJWS.sigvalB64U)};this.addSignatureByHeaderPayloadKey=function(e,d,b){var c=new KJUR.jws.JWS();var f=c.generateJWSByP1PrvKey(e,d,b);this.aHeader.push(c.parsedJWS.headB64U);this.sPayload=c.parsedJWS.payloadB64U;this.aSignature.push(c.parsedJWS.sigvalB64U)};this.verifyWithCerts=function(c){if(this.aHeader.length!=c.length){throw"num headers does not match with num certs"}if(this.aSignature.length!=c.length){throw"num signatures does not match with num certs"}var k=this.sPayload;var g="";for(var d=0;d<c.length;d++){var e=c[d];var f=this.aHeader[d];var m=this.aSignature[d];var b=f+"."+k+"."+m;var j=new KJUR.jws.JWS();try{var l=j.verifyJWSByPemX509Cert(b,e);if(l!=1){g+=(d+1)+"th signature unmatch. "}}catch(h){g+=(d+1)+"th signature fail("+h+"). "}}if(g==""){return 1}else{throw g}};this.readJWSJS=function(b){var c=a.readSafeJSONString(b);if(c==null){throw"argument is not JSON string: "+b}this.aHeader=c.headers;this.sPayload=c.payload;this.aSignature=c.signatures};this.getJSON=function(){return{headers:this.aHeader,payload:this.sPayload,signatures:this.aSignature}};this.isEmpty=function(){if(this.aHeader.length==0){return 1}return 0}};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).Buffer))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	var base64 = __webpack_require__(15)
	var ieee754 = __webpack_require__(16)
	var isArray = __webpack_require__(17)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  this.length = 0
	  this.parent = undefined
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).Buffer, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 16 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	
	/**
	 * isArray
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * toString
	 */
	
	var str = Object.prototype.toString;
	
	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */
	
	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ }
/******/ ]);
//# sourceMappingURL=core.js.map