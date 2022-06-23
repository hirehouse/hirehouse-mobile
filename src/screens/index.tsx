import { createDrawerNavigator } from "@react-navigation/drawer";
import { Box } from "native-base";
import React from "react";

interface ScreenProps {}

const Drawer = createDrawerNavigator();

function AppScreens(props: ScreenProps) {
    return (
        <Drawer.Navigator drawerContent={() => <Box>Options</Box>}>
            <Drawer.Screen name="Home" component={() => <Box>Home</Box>} />
            <Drawer.Screen name="Login" component={() => <Box>Login</Box>} />
        </Drawer.Navigator>
    );
}

export default AppScreens;
