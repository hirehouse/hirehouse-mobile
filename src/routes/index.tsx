import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RoutesProps {}

function Routes(props: RoutesProps) {
    return (
        <View style={styles.container}>
            <Text>Routes</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1 },
});
export default Routes;
