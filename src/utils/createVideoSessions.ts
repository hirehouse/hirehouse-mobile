import api from "./api";

export default async (
    orderId: string,
    quantity: number
): Promise<void | null> => {
    try {
        const response: Response = await api(
            "/video-sessions",
            "post",
            JSON.stringify({
                order: orderId,
                quantity,
            })
        );

        if (!response.ok) {
            throw await response.json();
        }
    } catch (error) {
        console.log(error);
        alert(error);
        return null;
    }
};
