# cordova-plugin-appinfo

forked from https://github.com/danmichaelo/cordova-plugin-appinfo

The plugin is [on npm](https://www.npmjs.com/package/cordova-plugin-appinfo), you can install it using:

    cordova plugin add cordova-plugin-appinfo

It provides access to the following app info:

* identifier: Bundle Identifier for iOS, PackageName for Android
* version: Version for iOS and WP8, versionName for Android
* build: Build for iOS, versionCode for Android, no value for WP8

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

