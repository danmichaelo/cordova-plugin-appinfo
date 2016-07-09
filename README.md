# cordova-plugin-appinfo

[![npm version](https://badge.fury.io/js/cordova-plugin-appinfo.svg)](http://badge.fury.io/js/cordova-plugin-appinfo)

Cordova plugin that provides access to the following app info:

* `identifier`: Bundle Identifier on iOS, PackageName on Android. Example: `'org.scriptotek.testapp'`.
* `version`: CFBundleVersion on iOS, versionName on Android, Version from WMAppManifest.xml on WP8. Example: `'1.0.2'`.
* `build`: 
	* iOS: field is `build`. Example: `'1.0.2.1'`.
	* Android: field is `versionCode`. Example: `'18'`.
	* Windows Phone 8: empty string (not supported).
	* Windows universal apps: `version` + `revision`. Example: `'1.0.2.1'`. (Windows 8.1, Windows Phone 8.1, Windows 8.0)

### Installation

The plugin is [on npm](https://www.npmjs.com/package/cordova-plugin-appinfo), you can install it using:

    cordova plugin add cordova-plugin-appinfo

### Supported Platforms

- Android
- iPhone
- Windows
- WP8 (except build number)

### Usage

The plugin provides a `navigator.appInfo` object:

```js
console.log('identifier: %s', navigator.appInfo.identifier);
console.log('version: %s', navigator.appInfo.version);
console.log('build: %s', navigator.appInfo.build);
```

Before version 2.1, the information had to be accessed through
asynchronously. This is no longer needed, but the old method
shown below will be kept for backwards compatibility:

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
* @jcesarmobile added synchronous implementation

