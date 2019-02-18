# folksam-ui-core

## What is this
A basic theme with colors, font-sizes, breakpoints and the Folksam Sanchez Font

## Usage

### Installation
`npm install --save @folksam/ui-core`

### Example usage in application using `react-jss`
```js
import { ThemeProvider, jss } from 'react-jss'

// Import theme and font helper from folksam-ui-core
import theme, { reactJssFontFaceHelper } from '@folksam/ui-core';

// Import font files (will need webpack or similar)
import sanchezMedium from '@folksam/ui-core/font/SanchezFolksamMedium.woff';
import sanchezMediumItalic from '@folksam/ui-core/font/SanchezFolksamMedium-Italic.woff';
import sanchezSemiBold from '@folksam/ui-core/font/SanchezFolksamSemiBold.woff';
import sanchezBold from '@folksam/ui-core/font/SanchezFolksamBold.woff';

// call reactJssFontFaceHelper with resolved font urls to get a font-face inclusion
jss.createStyleSheet(reactJssFontFaceHelper({
    sanchezMedium,
    sanchezMediumItalic,
    sanchezSemiBold,
    sanchezBold
})).attach();

// Optionally, set global font
jss.createStyleSheet({
    '@global html, body': {
        fontFamily: 'Sanchez"',
        color: 'red'
    }
}).attach();

// Wrap your app in ThemeProvider and include the imported theme
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
```


### Breakpoints
breakpoints in breakpoints.js : 
`  sm: 600, md: 769, lg: 1024 `

### Breakpoints helper
choose between 4 possible helper functions: `isTiny, isSmall, isMedium and isLarge ` see example for react-sizeme: 

```js

import React from 'react';
import { isTiny } from '@folksam/ui-core';


export const tinyComponent = () => {
    return (<h1>Im tiny </h1>)
};

export const largeComponent = () => {
    return (<h1>Im large </h1>)
};

const RenderMyComponent = ({ size }) => {

    const appereance = isTiny(size) ? <tinyComponent /> : <largeComponent /> ;
    
    return (
        <React.Fragment>
            { appereance }
        </React.Fragment>
    )
};

export default RenderMyComponent;



```
