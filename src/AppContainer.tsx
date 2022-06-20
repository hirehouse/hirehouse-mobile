import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";
import Context, { context, reducer } from "./context";
import TranslationProvider from "./i18n";
import AppRoutes from "./routes";

function AppContainer() {
    const [appContext, dispatch] = useReducer(reducer, context);

    return (
        <Context.Provider value={{ ...appContext, dispatch }}>
            <TranslationProvider>
                <NativeRouter>
                    <SafeAreaView style={{ flex: 1 }}>
                        <KeyboardAvoidingView
                            style={styles.container}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <TouchableWithoutFeedback
                                onPress={Keyboard.dismiss}
                            >
                                <AppRoutes />
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                    </SafeAreaView>
                    <StatusBar style="auto" />
                </NativeRouter>
            </TranslationProvider>
        </Context.Provider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignSelf: "stretch" },
});

export default AppContainer;
