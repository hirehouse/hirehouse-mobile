import moment from "moment";
import { createContext } from "react";
import appConfig from "./config";
import {
    initialConnectionState,
    initialCreditCardState,
    initialTagChooserState,
} from "./typings/data";
import { ContextAction, LANGUAGE, SupportedCountry } from "./typings/enums";
import { IContext } from "./typings/interfaces";

export const reducer = (context: IContext, payload: any): IContext => {
    if (payload.action) {
        switch (payload.action) {
            case ContextAction.CONNECTION_MESSAGE:
                return {
                    ...context,
                    messages: [...context.messages, payload.message],
                };
            default:
                return {
                    ...context,
                    ...payload,
                };
        }
    }

    return {
        ...context,
        ...payload,
    };
};

export const context: IContext = {
    dispatch: () => {},
    networkStatus: true,
    config: appConfig,
    loading: false,
    userProfile: null,
    language: LANGUAGE.EN,
    tags: [],
    products: [],
    results: [],
    tagChooser: initialTagChooserState,
    creditCard: initialCreditCardState,
    nextRoute: null,
    connections: [],
    messages: [],
    connection: initialConnectionState,
    message: "",
    orders: [],
    fromToFilter: [
        moment().subtract(30, "days").toDate(),
        moment().add(2, "days").toDate(),
    ],
    transactions: [],
    notifications: [],
    socket: null,
    locations: {
        country: SupportedCountry.CANADA,
        city: "",
        [SupportedCountry.CANADA]: [],
        [SupportedCountry.USA]: [],
    },
    inVideoSession: false,
    videoSession: {
        fullscreen: true,
        video: true,
        audio: true,
        // rtcPeerConnection,
        //localStream: null,
        //remoteStream: null,
    },
};

const Context = createContext<IContext>(context);

export default Context;
