
var exec = require('cordova/exec');

module.exports = {

    getAppInfo: function(success, fail){
        exec(success, fail, 'AppInfo', 'getAppInfo', []);
    },

    /**
     * Returns the version name (or "unknown" if it fails)
     *
     * @param {Function} callback       The message to accept the version name.
     */
    getVersion: function(callback) {
        exec(callback, function(err) {
        	callback('Unknown');
    	}, 'AppInfo', 'getVersion', []);
    },

    getIdentifier: function(callback){
        exec(callback, function(err){
            callback('Unknown');
        }, 'AppInfo', 'getIdentifier', []);
    }
};
