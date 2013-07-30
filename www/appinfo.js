
var exec = require('cordova/exec');

module.exports = {

    /**
     * Returns the version name (or "unknown" if it fails)
     *
     * @param {Function} callback       The message to accept the version name.
     */
    getVersion: function(callback) {
        exec(callback, function(err) {
        	callback('Unknown');
    	}, 'AppInfo', 'getVersion', []);
    }

};
