# cordova-plugin-appinfo

forked from https://github.com/danmichaelo/cordova-plugin-appinfo

Access to Application informations, currently provided as follow:

* identifier: Bundle Identifier for iOS, PackageName for Android
* version: Version for iOS, versionName for Android
* build: Build for iOS, versionCode for Android

This Plugin Can be installed using the [Cordova CLI](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html):

	cordova plugin add https://github.com/yezhiming/cordova-plugin-appinfo.git

If you are not using the Cordova Command-line Interface, you might try [Using Plugman to Manage Plugins](http://cordova.apache.org/docs/en/edge/guide_plugin_ref_plugman.md.html).

The plugin has only been tested with Cordova 3.0.0, and might require modifications to work with older versions of Cordova.

### Supported Platforms

- Android
- iPhone

### Example

```js
navigator.appInfo.getAppInfo(function(appInfo) {
  console.log('identifier: %s', appInfo.identifier);
  console.log('version: %s', appInfo.version);
  console.log('build: %s', appInfo.build);
}, function(err){
	alert(err);
});
```

