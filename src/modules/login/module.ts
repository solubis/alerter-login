/// <reference path="../../typings/types.d.ts" />

import LoginController from './class/LoginController';

var module = angular.module('modules.login', [])
    .controller('LoginController', LoginController);

export default module;
