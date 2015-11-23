export = function (ngModule) {
    const login = <Function>require('./login');

    login(ngModule);
}