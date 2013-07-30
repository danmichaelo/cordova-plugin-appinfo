package org.scriptotek.appinfo;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class returns the version number
 */
public class AppInfo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("getVersion")) {
            this.getVersion(callbackContext);
            return true;
        }
        return false;
    }

    private void getVersion(CallbackContext callbackContext) {

        String versionName;
        String packageName = this.cordova.getActivity().getPackageName();
        PackageManager pm = this.cordova.getActivity().getPackageManager();
        try {
            PackageInfo packageInfo = pm.getPackageInfo(packageName, 0);
            versionName = packageInfo.versionName;
        } catch (NameNotFoundException nnfe) {
            versionName = "unknown";
        }
        callbackContext.success(versionName);

    }

}