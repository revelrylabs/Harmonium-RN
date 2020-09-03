# Harmonium-RN

Reactive Native Harmonium UI Toolkit

## Development

You can develop against Harmonium-RN by running the example app that lives in the `example` directory. All that is necessary is to run `npm run install:playground`, navigate to `example`, and then `npm run ios` or `npm run android`. If you make updates to the harmonium package itself, you will need to regenerate the harmonium package and re install it in the example app. To generate a new package for the example app, run `npm run repack` in the root of the project. That will generate a new `.tgz` file and install it in the example app as a dependency. New stories can be made in `example/src/stories` with name in format `*.story.js`. To live reload any new stories, simply run `npm run loadstories` in the example directory (this script is run automatically with the `ios` and `android` scripts).