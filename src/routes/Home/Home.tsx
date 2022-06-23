import { Box, Text, VStack } from "native-base";
import React from "react";

interface HomeProps {}

function Home(props: HomeProps) {
    return (
        <Box>
            <VStack bg="amber.100">
                <Text>Home home</Text>
            </VStack>
        </Box>
    );
}
export default Home;
