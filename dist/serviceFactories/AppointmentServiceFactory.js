"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentServiceFactory = void 0;
const AppointmentService_1 = require("../services/AppointmentService");
const AppointmentServiceFactory = () => {
    return {
        getInstance: (version) => {
            return (0, AppointmentService_1.getAppointmentService)();
        }
    };
};
exports.AppointmentServiceFactory = AppointmentServiceFactory;
