# Hacker News

**Description**: This application provides hacker news feed with three different categories: news, top, best. We can click on the article to see more information

## Prerequisites:

**NodeJS**: your device have been installed nodejs before. If not: go to [Node.js](https://nodejs.org/) and install. For checking: type `node -v` and `npm -v`.

---

**Xcode**: For building IOS application. If you already have iphone, skip this step.

**CocoaPods**: For managing the dependencies of IOS. If your device has not been installed type `sudo gem install cocoapods` or go to [CocoaPods](https://cocoapods.org/) for more information.

---

**Android Studio**: For building Android application. If you already have android, skip this step

**Android SDK**: Will be installed once install Android Studio. Just ensure that `ANDROID_HOME` environment variable is set to point to the SDK directory.

---

**Task**: For running the tasks defined in the project. If you have not installed, go to [TaskFile](https://taskfile.dev/) and install. For checking: type `task --version`

## How to run:

**Install dependencies:**:

```bash
# using npm
npm install

# using yarn
yarn install
```

**Install IOS dependencies:**

```bash
cd ios
pod install
```

**Run commands:**

```bash
# run ios
task run:ios

# run android
task run:android
```

**Run test:**

```bash
task run:test
```

---

### Documentations:

Go to `docs` folder for more information
