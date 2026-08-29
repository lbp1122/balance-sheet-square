# Balance Sheet Square Android app

This is a minimal native Android shell containing a bundled copy of the Balance Sheet Square calculator. The public website remains available separately at https://lbp1122.github.io/balance-sheet-square/.

## Features

- Android package: `com.lbp.balancesheetsquare`
- Minimum Android 7.0 (API 24)
- Targets Android 16 (API 36)
- Local browser storage for calculator figures
- Fully offline calculation from the first launch
- Native Android PDF save picker and share sheet
- No ads, analytics, sign-in, network permission, or sensitive permissions

## Open in Android Studio

1. Install Android Studio with JDK 17 and Android SDK 36.
2. Choose **Open** and select the `android-app` folder.
3. Allow Gradle to sync.
4. Run the `app` configuration on an emulator or Android device.

## Build locally

With Gradle 8.11.1 installed:

```bash
gradle assembleDebug
gradle bundleRelease
```

The release bundle produced by this project is unsigned. Configure Play App Signing before creating the final bundle for Google Play. Do not commit a keystore, `keystore.properties`, or any signing password.
