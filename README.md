# cordova-plugin-appinfo

[![npm version](https://badge.fury.io/js/cordova-plugin-appinfo.svg)](http://badge.fury.io/js/cordova-plugin-appinfo)

Cordova plugin that provides access to the following app info:

* `identifier`: Bundle Identifier on iOS, PackageName on Android. Example: `'org.scriptotek.testapp'`.
* `version`: CFBundleVersion on iOS, versionName on Android, Version from WMAppManifest.xml on WP8. Example: `'1.0.2'`.
* `build`: Build on iOS (Example: `'1.0.2.1'`), versionCode on Android (Example: `'18'`), empty string on WP8 (not supported).

### Installation

The plugin is [on npm](https://www.npmjs.com/package/cordova-plugin-appinfo), you can install it using:

    cordova plugin add cordova-plugin-appinfo

### Supported Platforms

- Android
- iPhone
- WP8 (except build number)

### Example

```js
navigator.appInfo.getAppInfo(function(appInfo) {
  console.log('identifier: %s', appInfo.identifier);
  console.log('version: %s', appInfo.version);
  console.log('build: %s', appInfo.build);
}, function(err) {
	alert(err);
});
```

### Contributing

Pull requests are welcome.

* @thomas-mullaly added the WP8 implementation
* @yezhiming added functionality to get identifier and build.

