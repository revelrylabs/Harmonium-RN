# Harmonium-RN

Reactive Native Harmonium UI Toolkit

## Development

You can develop against Harmonium-RN by running the example app that lives in the `example` directory. All that is necessary is to navigate to `example`, run `npm install`, and then `react-native run-ios` or `react-native run-android`. If you make updates to the harmonium package itself, you will need to regenerate the harmonium package and re install it in the example app. To generate a new package for the example app, run `npm pack` in the root of the project. That will generate a new `.tgz` file that can be installed to the example app as a dependency. Once the `.tgz` file is generated, navigate to `example` and run `npm i ../harmonium-rn-0.0.0.tgz` (NOTE: make sure the file name matches the generated file).
