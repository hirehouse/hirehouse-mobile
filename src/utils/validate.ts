import { isEmpty } from "lodash";
import validator from "validator";
export default {
    email(email: string): boolean {
        return !isEmpty(email) && validator.isEmail(email);
    },
    pin(pin: string): boolean {
        return pin.length === 6 && !isNaN(parseInt(pin, 10));
    },
};
