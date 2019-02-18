import colors from './colors';
import font from './font';
import spacing from './spacing';
import breakpoints from './breakpoints';
import { isTiny, isSmall, isMedium, isLarge } from './breakpoints-helpers';

export default {
    colors,
    spacing,
    font,
    breakpoints,
    isTiny, 
    isSmall, 
    isMedium, 
    isLarge
};

export { default as reactJssFontFaceHelper } from './jss-font-face-helper';
