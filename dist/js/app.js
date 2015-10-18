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
	var module_1 = __webpack_require__(1);
	angular.module('login', ['alerter.ui', 'alerter.core', module_1.default.name])
	    .config(["$urlRouterProvider", "$configProvider", "$securityProvider", function ($urlRouterProvider, $configProvider, $securityProvider) {
	    var config = $configProvider.$get();
	    $securityProvider.configure(config);
	}]);
	/**
	 * Bootstrap application
	 */
	angular.element(document).ready(function () {
	    angular.bootstrap(document, ['login'], {});
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/types.d.ts" />
	var LoginController_1 = __webpack_require__(2);
	var module = angular.module('modules.login', [])
	    .controller('LoginController', LoginController_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = module;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/// <reference path="../../../typings/types.d.ts" />
	/*@ngInject*/
	var LoginController = (function () {
	    function LoginController($scope, $oauthToken, $security) {
	        this.$scope = $scope;
	        this.$oauthToken = $oauthToken;
	        this.$security = $security;
	        $oauthToken.removeToken();
	    }
	    LoginController.$inject = ["$scope", "$oauthToken", "$security"];
	    LoginController.prototype.login = function (username, password) {
	        var _this = this;
	        this.$security.login(username, password)
	            .catch(function (error) {
	            _this.loginError = (error.data && error.data.error_description) ? error.data.error_description : 'Authentication error';
	        });
	    };
	    return LoginController;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LoginController;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map