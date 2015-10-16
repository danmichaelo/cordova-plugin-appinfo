
var versionString = function(version, rev) {
	if (rev)
		return "" + version.major + "." + version.minor + "." + version.build + "." + version.revision;
	else
		return "" + version.major + "." + version.minor + "." + version.build;
}

module.exports = {

	getAppInfo: function getAppInfo( success, fail ){
		if ( !Windows || !Windows.ApplicationModel || !Windows.ApplicationModel.Package || !Windows.ApplicationModel.Package.current || !Windows.ApplicationModel.Package.current.id )
			return fail( new Error("Windows component not found") );

		var packageId = Windows.ApplicationModel.Package.current.id;
		var appInfo = {
			"identifier": packageId.name,
			"version": versionString( packageId.version ),
			"build": versionString( packageId.version, true )
		};
		return success(appInfo);
	},

	getVersion: function getVersion( success, fail ){
		if ( !Windows || !Windows.ApplicationModel || !Windows.ApplicationModel.Package || !Windows.ApplicationModel.Package.current || !Windows.ApplicationModel.Package.current.id )
			return fail( new Error("Windows component not found") );
		var packageId = Windows.ApplicationModel.Package.current.id;
		return success( versionString(packageId.version) );
	},

	getIdentifier: function getIdentifier( success, fail ){
	    if ( !Windows || !Windows.ApplicationModel || !Windows.ApplicationModel.Package || !Windows.ApplicationModel.Package.current || !Windows.ApplicationModel.Package.current.id )
			return fail( new Error("Windows component not found") );
		var packageId = Windows.ApplicationModel.Package.current.id;
		return success( versionString(packageId.name) );
	}

};

require("cordova/exec/proxy").add("AppInfo", module.exports);