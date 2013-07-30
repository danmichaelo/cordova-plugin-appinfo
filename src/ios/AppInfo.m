#import "AppInfo.h"

@implementation AppInfo

- (void)getVersion:(CDVInvokedUrlCommand*)command
{
    NSString* versionName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];

    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:versionName];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end