import io from "socket.io-client";
import { IAppConfig } from "../typings/interfaces";

export default (config: IAppConfig): SocketIOClient.Socket => {
    const { apiURL } = config;

    const endpoint: string = apiURL
        .replace(`https://`, `wss://`)
        .replace(`http://`, `ws://`);

    const options: SocketIOClient.ConnectOpts = {
        secure: apiURL.includes("https://"),
        path: "/socket",
        autoConnect: true,
        transports: ["websocket", "polling"],
        auth: {
            channel: "mobile",
        },
        //@ts-ignore
        withCredentials: true,
    };

    const socket: SocketIOClient.Socket = io(endpoint, options);

    return socket;
};
