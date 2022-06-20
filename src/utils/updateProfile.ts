import { ImagePickerResult } from "expo-image-picker";
import { IAppConfig, IUserProfile } from "../typings/interfaces";
import api from "./api";

export default {
    async save(userProfile: IUserProfile): Promise<void> {
        try {
            const response: Response = await api(
                "/user",
                "post",
                JSON.stringify({
                    status: userProfile.status,
                    fullName: userProfile.fullName,
                    tags: userProfile.tags,
                    description: userProfile.description,
                })
            );

            if (!response.ok) {
                throw await response.json();
            }
        } catch (error) {
            alert(error);
        }
    },
    async uploadAvatar(
        config: IAppConfig,
        result: ImagePickerResult
    ): Promise<string> {
        if (result.cancelled) {
            return "";
        }

        try {
            const { apiURL } = config;

            const localUri: string = result.uri;
            const filename: string = localUri.split("/").pop() || "";
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : "image";

            const formData = new FormData();

            //@ts-ignore
            formData.append("file", { uri: localUri, name: filename, type });

            const response: Response = await fetch(`${apiURL}/user/avatar`, {
                method: "post",
                body: formData,
                headers: {
                    channel: "mobile",
                    "Content-Type": "multipart/form-data",
                },
            });

            if (!response.ok) {
                throw await response.json();
            }

            const { avatar } = await response.json();

            return avatar;
        } catch (error) {
            alert(error);
            return "";
        }
    },
};
