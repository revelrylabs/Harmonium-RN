module.exports = {
  dependencies: {
    'harmonium-rn': {
      root: __dirname
    }
  },
  project: {
    android: {
      sourceDir: './playground/android'
    },
    ios: {
      project: './playground/ios/playground.xcodeproj'
    }
  }
}
