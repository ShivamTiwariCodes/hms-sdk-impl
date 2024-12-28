import { IUserService } from 'hms-core-sdk/dist/services/IUserService';
import { IUser, UserRole } from 'hms-core-sdk/dist/interfaces/IUser';

export const getUserService = (): IUserService => {

    return {
        createUser: (user: IUser) : Promise<IUser> => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                resolve(user);
            });
        },

        getUserById: (id: string) : Promise<IUser> => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                const user : IUser = {
                    id: id,
                    name: "",
                    email: "",
                    phoneNumber: "",
                    role: UserRole.Patient,
                    password: ""
                };
                resolve(user);
            });
        },

        updatePhone : (user: IUser, phone: string) : Promise<IUser> => {
            return new Promise((resolve, reject) => {
                user.phoneNumber = phone;
                resolve(user);
            });
        },

        updateAddress : (user: IUser, address: string) : Promise<IUser> => {
            return new Promise((resolve, reject) => {
                user.address = address;
                resolve(user);
            })
        }
    }
}