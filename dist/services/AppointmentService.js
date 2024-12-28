"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentService = void 0;
const IAppointment_1 = require("hms-core-sdk/dist/interfaces/IAppointment");
const getAppointmentService = () => {
    return {
        createAppointment: (appointment) => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                const appointment = {
                    id: "",
                    patientId: "",
                    doctorId: "",
                    appointmentDateTime: "",
                    status: IAppointment_1.AppointmentStatus.Scheduled,
                    reasonForVisit: "",
                    createdAt: "",
                    updatedAt: ""
                };
                resolve(appointment);
            });
        },
        getAppointmentsByUser: (userId) => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                const appointments = [];
                resolve(appointments);
            });
        },
        updateAppointmentStatus: (appointment, status) => {
            return new Promise((resolve, reject) => {
                appointment.status = status;
                resolve(appointment);
            });
        },
        updateConsultationType: (appointment, consultationType) => {
            return new Promise((resolve, reject) => {
                appointment.consultationType = consultationType;
                resolve(appointment);
            });
        }
    };
};
exports.getAppointmentService = getAppointmentService;
