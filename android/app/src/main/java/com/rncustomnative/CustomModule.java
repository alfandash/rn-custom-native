package com.rncustomnative;



import android.provider.Settings;
import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import static android.provider.Settings.Secure.getString;

public class CustomModule extends ReactContextBaseJavaModule {
    CustomModule(ReactApplicationContext context) {
        super(context);
    }

    private static Context context;

    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getDeviceIdSync() { return getString(getReactApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID); }
    @ReactMethod
    public void getDeviceId(Promise p) {
        p.resolve(getDeviceIdSync());
    }
    private Context getContext() {

        return context;
    }
}