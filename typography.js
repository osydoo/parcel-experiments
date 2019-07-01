import Typography from "typography"

const typography = new Typography({
    baseFontSoize:"18px",
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: "Monserrant",
            styles: ["700"]
        },
        {
            name: "Open Sans",
            styles: ["400"]
        }
    ],
    headerFontFamily: ["Monserrant", "Helvetice Neue", "sans-serif"],
    bodyFontFamily: ["Open Open", "sans-serif"]
});

typography.injectStyles()

export default typography;