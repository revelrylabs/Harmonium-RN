# Harmonium-RN

React Native Harmonium UI Toolkit

## Development

- New components should be added to the `components` directory at the root of the project
- Each component should get its own directory with one `index.js` and one `styles.js` file
- Component styles should use variables from the `variables` directory as much as possible
- Please add stories to the example app storybook whenever adding new components

## Running the Example App

- Run `npm run install:example` from root directory
- Navigate to `example`, and then `npm run ios` or `npm run android`
- If you make updates to the harmonium package itself, you will need to regenerate the package and re-install it in the example app. To do this, run `npm run repack` in the root of the project. That will generate a new `.tgz` file and install it in the example app as a dependency. New stories can be made in `example/src/stories` with name in format `*.story.js`.
