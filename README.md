# cordova-plugin-appinfo

Provides a single function `navigator.appInfo.getVersion()` to get the app version number
across platforms, using `android:versionName` on Android, `CFBundleVersion` on iOS and the `WMAppManifest.xml` on Windows Phone 8. Thanks to [@thomas-mullaly](//github.com/thomas-mullaly)) for the WP8 implementation.

The plugin is [on npm](https://www.npmjs.com/package/cordova-plugin-appinfo), you can install it using:

    cordova plugin add cordova-plugin-appinfo

### Supported Platforms

- Android
- iPhone
- Windows Phone 8

### Example

    navigator.appInfo.getVersion(function(args) {
        alert('Me is at v. ' + args);
    });

