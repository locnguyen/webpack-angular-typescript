import 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.scss';

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