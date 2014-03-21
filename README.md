# cordova-plugin-appinfo

Provides a single function `navigator.appInfo.getVersion()` to get the app version number
across platforms, using `android:versionName` on Android, `CFBundleVersion` on iOS and the `WMAppManifest.xml` on Windows Phone 8. Thanks to [@thomas-mullaly](//github.com/thomas-mullaly)) for the WP8 implementation.

Can be installed using the [Cordova CLI](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html):

	cordova plugin add https://github.com/danmichaelo/cordova-plugin-appinfo.git

If you are not using the Cordova Command-line Interface, you might try [Using Plugman to Manage Plugins](http://cordova.apache.org/docs/en/edge/guide_plugin_ref_plugman.md.html).

The plugin has only been tested with Cordova 3.0.0, and might require modifications to work with older versions of Cordova.

### Supported Platforms

- Android
- iPhone
- Windows Phone 8

### Example

    navigator.appInfo.getVersion(function(args) {
        alert('Me is at v. ' + args);
    });

