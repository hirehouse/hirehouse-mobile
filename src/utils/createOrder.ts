import { ProductCode } from "../typings/enums";
import { IProduct, IUserResult } from "../typings/interfaces";
import api from "./api";

export default async (
    products: IProduct[],
    cardToken: string
): Promise<string | null> => {
    try {
        const response: Response = await api(
            "/orders",
            "post",
            JSON.stringify({
                products: products.map((product: IProduct) => ({
                    ...product,
                    metadata: {
                        ...product.metadata,
                        connections:
                            product.code === ProductCode.CONNECTION
                                ? product.metadata.connections.map(
                                      (connection: IUserResult) => ({
                                          _id: connection._id,
                                          video: connection.video,
                                      })
                                  )
                                : product.metadata.connections,
                    },
                })),
                cardToken,
            })
        );

        if (!response.ok) {
            throw await response.json();
        }

        const { orderId } = await response.json();

        return orderId;
    } catch (error) {
        console.log(error);
        alert(error);
        return null;
    }
};
