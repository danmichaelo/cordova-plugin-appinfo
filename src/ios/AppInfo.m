#import "AppInfo.h"

@implementation AppInfo

- (void)getAppInfo:(CDVInvokedUrlCommand*)command
{
    NSDictionary *appInfoDict = NSBundle.mainBundle.infoDictionary;

    NSString *identifier = appInfoDict[@"CFBundleIdentifier"];
    NSString *version = appInfoDict[@"CFBundleShortVersionString"];
    NSString *build = appInfoDict[@"CFBundleVersion"];

    NSDictionary *appInfo = @{@"identifier": identifier,
                              @"version": version,
                              @"build": build};

    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:appInfo];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getVersion:(CDVInvokedUrlCommand*)command
{
    NSString* versionName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];

    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:versionName];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (void)getBuild:(CDVInvokedUrlCommand*)command
{
    NSString* build = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];

    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:build];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getIdentifier:(CDVInvokedUrlCommand*)command
{
    NSString* identifier = NSBundle.mainBundle.infoDictionary[@"CFBundleIdentifier"];
    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:identifier];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end