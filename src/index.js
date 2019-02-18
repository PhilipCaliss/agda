import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import theme from "./ui-core";
import { ThemeProvider, jss } from "react-jss";
// Import font files (will need webpack or similar)
import sanchezMedium from './font/SanchezFolksamMedium.woff';
import sanchezMediumItalic from './font/SanchezFolksamMedium-Italic.woff';
import sanchezSemiBold from './font/SanchezFolksamSemiBold.woff';
import sanchezBold from './font/SanchezFolksamBold.woff';

// Optionally, set global font
jss.createStyleSheet({
    '@global html, body': {
        fontFamily: 'Sanchez'
    }
}).attach();
jss.createStyleSheet({
    '@font-face': {
        fontFamily: 'Sanchez',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${sanchezMedium}) format("woff")`,
    },
}).attach();
jss.createStyleSheet({
    '@font-face': {
        fontFamily: 'Sanchez',
        fontWeight: 'bold',
        fontStyle: 'normal',
        src: `url(${sanchezBold}) format("woff")`,
    },
}).attach();
jss.createStyleSheet({
    '@font-face': {
        fontFamily: 'Sanchez',
        fontWeight: 'normal',
        fontStyle: 'italic',
        src: `url(${sanchezMediumItalic}) format("woff")`,
    },
}).attach();
jss.createStyleSheet({
    '@font-face': {
        fontFamily: 'Sanchez',
        fontWeight: '600',
        fontStyle: 'normal',
        src: `url(${sanchezSemiBold}) format("woff")`,
    },
}).attach();

const theme = {
    color: 'black'
}


ReactDOM.render(
    <ThemeProvider theme={{theme}}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
