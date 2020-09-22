# Harmonium-RN

React Native Harmonium UI Toolkit

## Development

- New components should be added to the `src` directory at the root of the project
- Each component should get its own directory with one `index.js` file
- Each component should have a `getStyles` function which takes both theme and style override props into account
  - See the [Button](https://github.com/revelrylabs/Harmonium-RN/blob/master/src/Button/index.js#L7) component for a good example
- Please add stories to the example app storybook whenever adding new components

## Running the Example App

- Run `npm run install:example` to install everything on the example app
- Run `npm run start:example` to start the example app
  - NOTE: you will need to restart the example app if you make any changes to the harmonium package
