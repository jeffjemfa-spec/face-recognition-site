# 人臉資料卡

Static deployment package for the EMBA face card site.

## Deploy

GitHub Actions builds the project and publishes the `dist/` folder to GitHub Pages on every push to `main`.

## Mobile App

This project also includes a Capacitor wrapper app. It packages the same static `dist/index.html` face-card page into local iOS and Android projects, so the app can run outside Telegram or Google Drive in-app browsers.

App id: `com.haoge.facerecognition`

Useful commands:

- `npm run app:sync` - rebuild the web page and copy it into iOS/Android app assets.
- `npm run app:ios` - sync and open the iOS project in Xcode.
- `npm run app:android` - sync and open the Android project in Android Studio.
- `npm run app:android:debug` - sync and build a debug APK.

Local build notes:

- iOS device install needs full Xcode and Apple signing.
- Android APK build needs a Java Runtime/JDK.
