import { IUserService } from "hms-core-sdk/dist/services/IUserService";
import { IHmsSdkFactory } from "./IHmsSdkFactory";
import { getUserService } from "../services/UserService";


export const UserServiceFactory = (): IHmsSdkFactory<IUserService> => {
    return {
        getInstance: (): IUserService => {
            return getUserService();
        }
    }
}