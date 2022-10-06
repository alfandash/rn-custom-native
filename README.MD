# React Native Template

This project aims to be a simple portfolio of experiences in using react-native with typescript

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods 1.11.2](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- Android Virtual Device / Android Emulator

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [native-base](https://nativebase.io/) for library component.


## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through app (such as a generic button)
  - `controllers`: Folder to store all network logic (you should have one controller per resource).
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all application screens/features.
  - `services`: Folder that contains all all network logic.
  - `store`: Folder to put all global state middlewares and the store.
  - `types`: Folder to put all global types and interfaces.
  - `App.tsx`: Main component that starts whole app.

## Feature

This project have simple feature:

- `detect device id`: This feature is to read your unique device id using [Native Module](https://reactnative.dev/docs/native-modules-intro).
- `cart component`: This simple cart feature using react hooks useContext, useReduce, useMemo.
- `loading bar with hold`: This simple progress bar will stop it you tap and hold and will continue if you not hold it. 

## How To Run Locally

### Node Installation

1. Install Node or Yarn

    - Install **Node > 12** https://nodejs.org/en/download/
    - Install **yarn** using https://yarnpkg.com/en/docs/install
    - Install (optional) **nvm** using https://github.com/nvm-sh/nvm

2. verify NVM (OPTIONAL)

    - nvm -v

3. Install node version (OPTIONAL)

    - nvm ls-remote / to list node version can install
    - nvm install 14

4. Choose node version

    - nvm use node 14

5. Checking node version

    - node -v / v14.*.*

### Install Package

1. Go to root folder

2. Install dependencies

    - yarn install

3. Run react

    - yarn android (for android)
    - yarn ios (for android)


## Other Available Scripts

In the project directory, you can run:

1. yarn test

Launches the test runner in the interactive watch mode.
