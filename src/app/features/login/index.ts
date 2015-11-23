export = function (ngModule) {
    let ctrl = <Function>require('./login.ctrl');
    ctrl(ngModule);

    ngModule
        .config(loginModule);

    loginModule.$inject = ['$stateProvider'];

    function loginModule($stateProvider) {

        const loginState:angular.ui.IState = {
            name: 'login',
            url: '/login',
            template: <string>require('./login.tpl.html'),
            controller: 'LoginController as vm'
        };
        
        $stateProvider.state(loginState);
    }
}