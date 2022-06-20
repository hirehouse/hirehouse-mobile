import api from "./api";

export default async (orderId: string): Promise<string[] | null> => {
    try {
        const response: Response = await api(
            "/connections",
            "post",
            JSON.stringify({
                order: orderId,
            })
        );

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
