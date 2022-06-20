import * as Notifications from "expo-notifications";
import api from "./api";

export default {
    async subscribe(): Promise<string> {
        try {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync();

            let finalStatus = existingStatus;
            if (existingStatus !== "granted") {
                const { status } = await Notifications.requestPermissionsAsync({
                    ios: {
                        allowBadge: true,
                    },
                });
                finalStatus = status;
            }

            if (finalStatus !== "granted") {
                throw null;
            }

            const { data } = await Notifications.getExpoPushTokenAsync();

            const response: Response = await api(
                "/notifications/token",
                "put",
                JSON.stringify({
                    token: data,
                })
            );

            if (!response.ok) {
                throw null;
            }

            return data;
        } catch (error) {
            console.error(error);
            return "";
        }
    },
    async unsubscribe(): Promise<void> {
        try {
            const response: Response = await api(
                "/notifications/token",
                "put",
                JSON.stringify({
                    token: "",
                })
            );

            if (!response.ok) {
                throw null;
            }
        } catch (error) {
            console.error(error);
        }
    },
};
