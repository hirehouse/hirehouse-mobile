import { IUserResult } from "../typings/interfaces";
import api from "./api";

export default async (tags: string[]): Promise<IUserResult[]> => {
    try {
        const response: Response = await api(`/search?tags=${tags.join(",")}`);

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();
    } catch (error: any) {
        alert(error.error);
        return [];
    }
};
