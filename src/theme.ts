import { extendTheme } from "native-base";

const theme = extendTheme({
    colors: {
        header: {
            bg: "white",
            color: "red.900",
        },
        home: {
            bg: "white",
            titleColor: "red.900",
            subTitleColor: "black",
            iconColor: "red.900",
        },
        link: {
            color: "red.900",
            weight: 500,
        },
    },
});

type MyThemeType = typeof theme;
declare module "native-base" {
    interface ICustomTheme extends MyThemeType {}
}

export default theme;
