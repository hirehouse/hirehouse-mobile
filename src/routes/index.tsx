import { Center } from "native-base";
import React from "react";
import { Route, Routes } from "react-router-native";
import Header from "../components/Header";
import Home from "./Home";

interface RoutesProps {}

function AppRoutes(props: RoutesProps) {
    return (
        <Center safeArea flex={1}>
            <Header />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </Center>
    );
}

export default AppRoutes;
