// RCTCustomModule.m
#import "RCTCustomModule.h"

@implementation RCTCustomModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[[UIDevice currentDevice] identifierForVendor] UUIDString];
}

@end
