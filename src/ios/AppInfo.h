#import <Cordova/CDVPlugin.h>

@interface AppInfo : CDVPlugin {}

- (void)getAppInfo:(CDVInvokedUrlCommand*)command;

- (void)getVersion:(CDVInvokedUrlCommand*)command;

- (void)getIdentifier:(CDVInvokedUrlCommand*)command;

@end