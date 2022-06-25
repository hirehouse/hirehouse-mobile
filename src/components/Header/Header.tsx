import { Feather } from "@expo/vector-icons";
import { Box, Heading, HStack, Icon, IconButton, StatusBar } from "native-base";
import React from "react";
import { GestureResponderEvent } from "react-native";

interface HeaderProps {
    onHomePress: (e: GestureResponderEvent) => void;
    onProfilePress: (e: GestureResponderEvent) => void;
}

function Header(props: HeaderProps) {
    const { onHomePress, onProfilePress } = props;

    return (
        <Box bg="blueGray.100">
            <StatusBar barStyle="default" backgroundColor="blueGrat.100" />
            <HStack alignItems="center">
                <IconButton
                    onPress={onHomePress}
                    icon={
                        <Icon
                            size="lg"
                            as={Feather}
                            name="home"
                            color="red.900"
                        />
                    }
                />
                <Heading
                    flex={1}
                    justifyContent="center"
                    textAlign="center"
                    color="red.900"
                >
                    HireHouse
                </Heading>
                <IconButton
                    onPress={onProfilePress}
                    icon={
                        <Icon
                            size="lg"
                            as={Feather}
                            name="user"
                            color="red.900"
                        />
                    }
                />
            </HStack>
        </Box>
    );
}
export default Header;
