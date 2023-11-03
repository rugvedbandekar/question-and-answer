
package com.questionanswer.sementanalytics;


import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.segment.analytics.Analytics;
import com.segment.analytics.Properties;
import com.segment.analytics.Traits;

public class SegmentAnalyticsModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "SegmentAnalytics";
    private static final String YOUR_WRITE_KEY = "test-write-key";
    private final ReactApplicationContext reactContext;

    public SegmentAnalyticsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void initializeSegmentClient() {
        // Create an analytics client with the given context and Segment write key.
        Analytics analytics = new Analytics.Builder(getReactApplicationContext(), YOUR_WRITE_KEY)
                .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!
                .recordScreenViews() // Enable this to record screen views automatically!
                .build();

        // Set the initialized instance as a globally accessible instance.
        Analytics.setSingletonInstance(analytics);
    }

    @ReactMethod
    public void identifySegmentCall() {
        Log.d("SEGMENT", "identifySegmentCall called" );
        Analytics.with(getReactApplicationContext()).identify("a user's id", new Traits().putName("John Doe"), null);
    }

    @ReactMethod
    public void trackSegmentCall() {
        Log.d("SEGMENT", "trackSegmentCall called" );
        Analytics.with(getReactApplicationContext()).track("Product Viewed", new Properties().putValue("name", "Moto 360"));
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }
}
