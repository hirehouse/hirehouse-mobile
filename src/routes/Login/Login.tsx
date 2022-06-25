import { Box, Button, FormControl, Heading, Input } from "native-base";
import React from "react";
import { FormattedMessage } from "react-intl";

interface LoginProps {}

function Login(props: LoginProps) {
    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <Box alignSelf="stretch" px="5">
                <Heading size="lg">
                    <FormattedMessage id="LOGIN_TITLE" />
                </Heading>
                <FormControl isRequired mt="5">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="email" size="2xl" />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label textTransform="uppercase">
                        Password
                    </FormControl.Label>
                    <Input type="email" size="2xl" />
                    <FormControl.ErrorMessage>
                        Enter your email
                    </FormControl.ErrorMessage>
                </FormControl>
                <Button mt="5" size="lg">
                    Sign in
                </Button>
            </Box>
        </Box>
    );
}
