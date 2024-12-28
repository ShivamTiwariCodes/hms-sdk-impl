"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceFactory = void 0;
const UserService_1 = require("../services/UserService");
const UserServiceFactory = () => {
    return {
        getInstance: () => {
            return (0, UserService_1.getUserService)();
        }
    };
};
exports.UserServiceFactory = UserServiceFactory;
