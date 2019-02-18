export default ({ sanchezMedium, sanchezMediumItalic, sanchezSemiBold, sanchezBold }) => ({
    '@font-face': [
        {
            fontFamily: 'Sanchez',
            src: `url("${sanchezMedium}") format("woff")`
        },
        {
            fontFamily: 'Sanchez-semibold',
            src: `url("${sanchezSemiBold}") format("woff")`
        },
        {
            fontFamily: 'Sanchez-bold',
            src: `url("${sanchezBold}") format("woff")`
        },
        {
            fontFamily: 'Sanchez-italic',
            src: `url("${sanchezMediumItalic}") format("woff")`
        }
    ]
});
