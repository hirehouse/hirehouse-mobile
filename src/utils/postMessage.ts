import api from "./api";

export default async (connection: string, message: string) => {
    try {
        const response: Response = await api(
            `/connections/${connection}/messages`,
            "post",
            JSON.stringify({
                message,
            })
        );

        if (!response.ok) {
            throw await response.json();
        }
    } catch (error) {
        alert(error);
    }
};
