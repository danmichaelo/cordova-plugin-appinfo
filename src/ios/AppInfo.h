#import <Cordova/CDVPlugin.h>

@interface AppInfo : CDVPlugin {}

- (void)getVersion:(CDVInvokedUrlCommand*)command;

@end