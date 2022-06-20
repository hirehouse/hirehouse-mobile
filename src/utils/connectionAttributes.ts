import { initialConnectionState } from "../typings/data";
import {
    IConnection,
    IConnectionUser,
    IUserProfile,
} from "../typings/interfaces";

export default {
    oppositeName(userProfile: IUserProfile, connection: IConnection): string {
        if (connection._id === "") return "";
        if (userProfile._id === connection.employee._id)
            return connection.employer.fullName;
        else if (userProfile._id === connection.employer._id)
            return connection.employee.fullName;
        else return connection.employer.fullName;
    },
    isExpired(connection: IConnection): boolean {
        if (connection._id === "") return false;
        return new Date(connection.expiresAt).valueOf() < new Date().valueOf();
    },
    oppositeConnection(
        userProfile: IUserProfile,
        connection: IConnection
    ): IConnectionUser {
        if (connection._id === "") return initialConnectionState.employee;
        if (userProfile._id === connection.employee._id)
            return connection.employer;
        else if (userProfile._id === connection.employer._id)
            return connection.employee;
        else return connection.employer;
    },
};
