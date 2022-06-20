import config from "../config";

interface IRequestState {
    registerCookieValue: string | null;
    resetCookieValue: string | null;
}

export default async (
    path: string,
    method: string = "get",
    body: string = ""
): Promise<Response> => {
    const requestConfig: RequestInit = {
        method,
        body,
        credentials: "include",
        headers: new Headers({
            "content-type": "application/json",
            channel: "mobile",
        }),
    };

    const response: Response = await fetch(
        `${config.apiURL}${path}`,
        requestConfig
    );

    return response;
};
