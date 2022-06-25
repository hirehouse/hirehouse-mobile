import { Box } from "native-base";
import React from "react";
import { Route, Routes } from "react-router-native";
import Header from "../components/Header";
import { AppRoute } from "../typings/enums";
import Home from "./Home";
import Login from "./Login";

interface RoutesProps {}

function AppRoutes(props: RoutesProps) {
    return (
        <Box safeArea flex={1} bg="white">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path={AppRoute.LOGIN} element={<Login />} />
            </Routes>
        </Box>
    );
}

export default AppRoutes;
