import { IUserProfile } from "../typings/interfaces";
import api from "./api";

export default async (): Promise<IUserProfile | null> => {
    try {
        const response: Response = await api("/user/session");

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();
    } catch (error: any) {
        return null;
    }
};
