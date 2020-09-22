# Harmonium-RN

React Native Harmonium UI Toolkit

## Getting Started

```
npm install harmonium-rn
```

## Usage

Wrap your app in a `ThemeContext.Provider` to propagate your custom theme to all of your components. You can override the default theme by passing overrides into `getTheme` as the `value` for `ThemeContext.Provider`.

```
import React, { Component } from 'react';

import { COLOR, ThemeContext, getTheme } from 'harmonium-rn';

// You override the default theme's color palette, individual component styles, and more
const themeOverrides = {
  palette: {
    primaryColor: COLOR.green500,
  },
  button: {
    container: {
      height: 30,
    }
  },
};

class Main extends Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(themeOverrides)}>
        <App />
      </ThemeContext.Provider>
    );
  }
}
```

You can access `theme` in props from anywhere:

```
import { withTheme } from 'harmonium-rn'

class CustomButton extends Component {
  render() {
    const { primaryColor } = this.props.theme.palette;

    return ...
  }
}

export default withTheme(MyButton)

```

You can also pass style overrides to specific components instead of overriding elements for the entire theme:

```
<Button style={{container: {height: 30, backgroundColor: 'red'}}}>
```

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
