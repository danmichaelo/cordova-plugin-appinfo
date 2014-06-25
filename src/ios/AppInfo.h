#import <Cordova/CDVPlugin.h>

@interface AppInfo : CDVPlugin {}

- (void)getVersion:(CDVInvokedUrlCommand*)command;

- (void)getIdentifier:(CDVInvokedUrlCommand*)command;

@end