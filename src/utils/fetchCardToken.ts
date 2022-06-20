import config from "../config";
import {
    ICardTokenErrorResponse,
    ICardTokenResponse,
    ICreditCard,
} from "../typings/interfaces";

export default async (card: ICreditCard): Promise<string | null> => {
    try {
        const { cardTokenURL, cardTokenKey } = config;
        const { number, expiration, cvc } = card;

        const expMonth = expiration.substring(0, 2);
        const expYear = expiration.substring(2);

        const response: Response = await fetch(cardTokenURL, {
            method: "POST",
            body: `card[number]=${number}&card[exp_year]=${Number(
                expYear
            )}&card[exp_month]=${Number(expMonth)}&card[cvc]=${cvc}`,
            headers: {
                Authorization: `Bearer ${cardTokenKey}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!response.ok) {
            throw await response.json();
        }

        const token: ICardTokenResponse = await response.json();
        return token.id;
    } catch (err: any) {
        const { error } = err as ICardTokenErrorResponse;
        alert(error.message);
        return null;
    }
};
