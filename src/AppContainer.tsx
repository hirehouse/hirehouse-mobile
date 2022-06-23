import { NativeBaseProvider } from "native-base";
import React, { useReducer } from "react";
import Context, { context, reducer } from "./context";
import TranslationProvider from "./i18n";
import AppScreens from "./screens";

function AppContainer() {
    const [appContext, dispatch] = useReducer(reducer, context);

    return (
        <NativeBaseProvider>
            <Context.Provider value={{ ...appContext, dispatch }}>
                <TranslationProvider>
                    <AppScreens />
                </TranslationProvider>
            </Context.Provider>
        </NativeBaseProvider>
    );
}

export default AppContainer;
