"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserService = void 0;
const IUser_1 = require("hms-core-sdk/dist/interfaces/IUser");
const getUserService = () => {
    return {
        createUser: (user) => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                resolve(user);
            });
        },
        getUserById: (id) => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                const user = {
                    id: id,
                    name: "",
                    email: "",
                    phoneNumber: "",
                    role: IUser_1.UserRole.Patient,
                    password: ""
                };
                resolve(user);
            });
        },
        updatePhone: (user, phone) => {
            return new Promise((resolve, reject) => {
                user.phoneNumber = phone;
                resolve(user);
            });
        },
        updateAddress: (user, address) => {
            return new Promise((resolve, reject) => {
                user.address = address;
                resolve(user);
            });
        }
    };
};
exports.getUserService = getUserService;
