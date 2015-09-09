
var exec = require('cordova/exec');

module.exports = {

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
