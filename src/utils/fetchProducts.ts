import { IProduct } from "../typings/interfaces";
import api from "./api";

export default async (): Promise<IProduct[]> => {
    try {
        const response: Response = await api("/products");

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();
    } catch (error: any) {
        return [];
    }
};
