import session = require('../../common/services/session');
import geo = require('../../common/services/geolocation');

export = function (ngModule) {
    ngModule
        .service('SessionService', session.SessionService)
        .service('GeoLocationService', geo.GeoLocationService);
}