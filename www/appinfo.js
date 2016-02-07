
var exec = require('cordova/exec');

var appinfo = {

    /**
     * Get an object with the keys 'version', 'build' and 'identifier'.
     *
     * @param {Function} success    Callback method called on success.
     * @param {Function} fail       Callback method called on failure.
     */
    getAppInfo: function(success, fail){
        exec(success, fail, 'AppInfo', 'getAppInfo', []);
    },

    /**
     * Get the version name.
     *
     * @param {Function} success    Callback method called on success.
     * @param {Function} fail       Callback method called on failure.
     */
    getVersion: function(success, fail) {
        exec(success, fail, 'AppInfo', 'getVersion', []);
    },

    /**
     * Get the app identifier.
     *
     * @param {Function} success    Callback method called on success.
     * @param {Function} fail       Callback method called on failure.
     */
    getIdentifier: function(success, fail){
        exec(success, fail, 'AppInfo', 'getIdentifier', []);
    }
};

module.exports = appinfo;


/**
 * If Angular is available, register `AppInfo` as an Angular module.
 */
if (typeof angular !== 'undefined') {
    angular.module('AppInfo', []).factory('AppInfo', ['$q', function($q) {

        function makePromise(fn) {
            var deferred = $q.defer();
            fn(function success(response) {
                deferred.resolve(response);
            }, function fail(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        var factory = {
            getAppInfo: function() {
                return makePromise(appinfo.getAppInfo);
            },
            getVersion: function() {
                return makePromise(appinfo.getVersion);
            },
            getIdentifier: function() {
                return makePromise(appinfo.getIdentifier);
            }
        };
        return factory;
    }]);
}
