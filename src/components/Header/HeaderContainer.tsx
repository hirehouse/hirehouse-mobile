import React from "react";
import { useNavigate } from "react-router-native";
import { AppRoute } from "../../typings/enums";
import Header from "./Header";

interface HeaderContainerProps {}

function HeaderContainer(props: HeaderContainerProps) {
    const navigate = useNavigate();

    const onHomePress = () => {
        navigate(AppRoute.HOME);
    };

    const onProfilePress = () => {
        navigate(AppRoute.LOGIN);
    };

    return <Header onHomePress={onHomePress} onProfilePress={onProfilePress} />;
}
export default HeaderContainer;
