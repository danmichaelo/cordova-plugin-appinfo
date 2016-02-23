using System;
using System.Collections.Generic;
using System.Xml.Linq;

using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

namespace Cordova.Extension.Commands
{
    public class AppInfo : BaseCommand
    {

        public void getAppInfo(string options)
        {
            Dictionary<string, string> appInfo = new Dictionary<string, string>()
            {
                {"identifier", ""},
                {"version", ""},
                {"build", ""}
            };

            XElement manifestAppElement = XDocument.Load("WMAppManifest.xml").Root.Element("App");

            if (manifestAppElement != null && manifestAppElement.Attribute("ProductID") != null)
            {
                appInfo["identifier"] = manifestAppElement.Attribute("ProductID").Value;
            }

            if (manifestAppElement != null && manifestAppElement.Attribute("Version") != null)
            {
                appInfo["version"] = manifestAppElement.Attribute("Version").Value;
            }


            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{\"identifier\": \"" + appInfo["identifier"] + "\", \"version\":\"" + appInfo["version"] + "\"}"));
        }

        public void getVersion(string options)
        {
            string version = "";
            XElement manifestAppElement = XDocument.Load("WMAppManifest.xml").Root.Element("App");

            if (manifestAppElement != null && manifestAppElement.Attribute("Version") != null)
            {
                version = manifestAppElement.Attribute("Version").Value;
            }

            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, version));
        }

        public void getIdentifier(string options)
        {
            string productID = "";
            XElement manifestAppElement = XDocument.Load("WMAppManifest.xml").Root.Element("App");

            if (manifestAppElement != null && manifestAppElement.Attribute("ProductID") != null)
            {
                productID = manifestAppElement.Attribute("ProductID").Value;
            }

            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, productID));
        }
    }
}
