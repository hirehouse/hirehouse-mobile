import { NativeBaseProvider } from "native-base";
import React, { useReducer } from "react";
import { NativeRouter } from "react-router-native";
import Context, { context, reducer } from "./context";
import TranslationProvider from "./i18n";
import AppRoutes from "./routes";

function AppContainer() {
    const [appContext, dispatch] = useReducer(reducer, context);

    return (
        <NativeBaseProvider>
            <Context.Provider value={{ ...appContext, dispatch }}>
                <TranslationProvider>
                    <NativeRouter>
                        <AppRoutes />
                    </NativeRouter>
                </TranslationProvider>
            </Context.Provider>
        </NativeBaseProvider>
    );
}

export default AppContainer;
