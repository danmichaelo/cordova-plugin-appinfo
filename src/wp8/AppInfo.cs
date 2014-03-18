using System;
using System.Xml.Linq;

using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

namespace Cordova.Extension.Commands
{
    public class AppInfo : BaseCommand
    {
        public void getVersion(string options)
        {
            string version = "unknown";
            XElement manifestAppElement = XDocument.Load("WMAppManifest.xml").Root.Element("App");

            if (manifestAppElement != null && manifestAppElement.Attribute("Version") != null)
            {
                version = manifestAppElement.Attribute("Version").Value;
            }

            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, version));
        }
    }
}