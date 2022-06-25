import { Entypo, Feather } from "@expo/vector-icons";
import { Box, Button, Heading, Icon } from "native-base";
import React from "react";
import { FormattedMessage } from "react-intl";

interface HomeProps {}

function Home(props: HomeProps) {
    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <Icon as={Entypo} name="home" size="6xl" color="red.900" />
            <Heading size="2xl" color="red.900">
                <FormattedMessage id="HOME_TITLE" />
            </Heading>
            <Heading size="md" color="black" fontWeight={300}>
                <FormattedMessage id="HOME_SUBTITLE" />
            </Heading>
            <FormattedMessage id="HOME_SEARCH_CTA">
                {(txt) => (
                    <Button
                        bg="red.900"
                        size="lg"
                        mt="5"
                        leftIcon={<Icon as={Feather} name="search" />}
                    >
                        {txt}
                    </Button>
                )}
            </FormattedMessage>
        </Box>
    );
}
export default Home;
