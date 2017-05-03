
var exec = require('cordova/exec');
var channel = require('cordova/channel');

channel.createSticky('onAppInfoReady');
channel.waitForInitialization('onAppInfoReady');

function appInfo() {

    this.version = null;
    this.identifier = null;
    this.build = null;

    var me = this;

    channel.onCordovaReady.subscribe(function() {
        me.getAppInfo(function(info) {
            me.version = info.version;
            me.identifier = info.identifier;
            me.build = info.build || 'unknown';
            channel.onAppInfoReady.fire();
        },function(e) {           
            console.log("[ERROR] Error initializing Cordova: " + e);
        });
    });
}

/**
 * Get an object with the keys 'version', 'build' and 'identifier'.
 *
 * @param {Function} success    Callback method called on success.
 * @param {Function} fail       Callback method called on failure.
 */
appInfo.prototype.getAppInfo = function(success, fail){
    exec(success, fail, 'AppInfo', 'getAppInfo', []);
};

/**
 * Get the version name.
 *
 * @param {Function} success    Callback method called on success.
 * @param {Function} fail       Callback method called on failure.
 */
appInfo.prototype.getVersion = function(success, fail) {
    exec(success, fail, 'AppInfo', 'getVersion', []);
}

/**
 * Get the app identifier.
 *
 * @param {Function} success    Callback method called on success.
 * @param {Function} fail       Callback method called on failure.
 */
appInfo.prototype.getIdentifier = function(success, fail){
    exec(success, fail, 'AppInfo', 'getIdentifier', []);
}

module.exports = new appInfo();