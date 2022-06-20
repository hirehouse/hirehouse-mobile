import { ITag } from "../typings/interfaces";
import api from "./api";

export default async (): Promise<ITag[]> => {
    try {
        const response: Response = await api("/tags");

        if (!response.ok) {
            throw await response.json();
        }

        const tags: ITag[] = await response.json();

        return tags;
    } catch (error: any) {
        return [];
    }
};
