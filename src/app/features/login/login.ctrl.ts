import session = require('../../common/services/session');
import geo = require('../../common/services/geolocation');

interface LoginScope {
    user:session.User;
    logos:any;

    doLogin(user:session.User):void;
}

class LoginController implements LoginScope {
    user:session.User;
    logos:any;
    position:any;

    static $inject = ['$log', 'SessionService', 'GeoLocationService'];

    constructor(private $log:ng.ILogService,
                private SessionService:session.ISession,
                private GeoLocationService:geo.IGeoLocation) {

        this.user = <session.User>{};

        this.logos = {
            webpack: require('./webpack.png'),
            angular: require('./angular.png'),
            typescript: require('./typescript.png')
        };
    }

    doLogin(user:session.User):void {
        this.SessionService.create(user);

        this.GeoLocationService.getCurrentPosition()
            .then((position) => {
                this.position = {latitude: position.coords.latitude, longitude: position.coords.longitude};
            });


    }
}


export = function (ngModule) {
    ngModule.controller('LoginController', LoginController);
}
