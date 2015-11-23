module geo {
    export interface IGeoLocation {
        getCurrentPosition():angular.IPromise<any>;
    }

    export class GeoLocationService implements IGeoLocation {

        static $inject = ['$window', '$q', '$log'];

        constructor(private $window:ng.IWindowService, private $q:ng.IQService, private $log:ng.ILogService) {

        }

        getCurrentPosition():ng.IPromise<any> {
            var deferred = this.$q.defer();

            if ('geolocation' in this.$window.navigator) {
                this.$window.navigator.geolocation.getCurrentPosition((position) => {
                    this.$log.debug(position);
                    return deferred.resolve(position);
                }, (errorPosition) => {
                    this.$log.error('Could not get position');
                    return deferred.reject(errorPosition);
                });
            } else {
                return this.$q.reject('Geolocation services not available on this browser');
            }

            return deferred.promise;
        }
    }
}

export = geo;