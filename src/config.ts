//@ts-ignore
import Constants from "expo-constants";
import { IAppConfig } from "./typings/interfaces";

const { manifest } = Constants;

const appConfig: IAppConfig = {
    apiURL: manifest?.extra?.apiURL,
    uploadURL: manifest?.extra?.uploadURL,
    videoCallURL: "https://shemp.ca/video.html",
    cardTokenURL: manifest?.extra?.cardTokenURL,
    cardTokenKey: manifest?.extra?.cardTokenKey,
    sessionCookieName: "x-auth-session",
    registerCookieName: "__2irc",
    resetCookieName: "__2irpc",
    currency: {
        symbol: "$",
        label: "CAD",
    },
    version: String(manifest?.version),
};

export default appConfig;
