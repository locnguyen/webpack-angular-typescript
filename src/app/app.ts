require('angular');
require('angular-ui-router');
require('angular-material');
require('angular-material/angular-material.scss');

const appModule = angular.module('materialSample', ['ui.router', 'ngMaterial']);
const serviceModules = <Function>require('./common/services');
const featureModules = <Function>require('./features');

featureModules(appModule);
serviceModules(appModule);


appModule
    .config(setupDefaultRoute);

setupDefaultRoute.$inject = ['$urlRouterProvider'];

function setupDefaultRoute ($urlRouterProvider:ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
}