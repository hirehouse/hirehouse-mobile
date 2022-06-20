import { IAppConfig, ISetting } from "../typings/interfaces";

export default async (config: IAppConfig): Promise<ISetting[]> => {
    try {
        const response: Response = await fetch(`${config.apiURL}/settings`, {
            method: "get",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status > 201) {
            throw await response.json();
        }

        return await response.json();
    } catch (error: any) {
        return [];
    }
};
