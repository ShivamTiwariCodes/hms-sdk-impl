import { IAppointmentService } from 'hms-core-sdk/dist/services/IAppointmentService';
import {IAppointment, AppointmentStatus, ConsultationType} from 'hms-core-sdk/dist/interfaces/IAppointment';

export const getAppointmentService = (): IAppointmentService => {
    return {
        createAppointment: (appointment: IAppointment): Promise<IAppointment> => {
            return new Promise((resolve, reject) => {
                console.log("WIP...")
                const appointment : IAppointment = {
                    id: "",
                    patientId: "",
                    doctorId: "",
                    appointmentDateTime: "",
                    status: AppointmentStatus.Scheduled,
                    reasonForVisit: "",
                    createdAt: "",
                    updatedAt: ""
                };
                resolve(appointment);
            })
        },
        getAppointmentsByUser: (userId: string): Promise<IAppointment[]> => {
            return new Promise((resolve, reject) => {
                console.log("WIP...");
                const appointments : IAppointment[] = [];
                resolve(appointments);
            })
        },
        updateAppointmentStatus: (appointment: IAppointment, status: AppointmentStatus): Promise<IAppointment> => {
            return new Promise((resolve, reject) => {
                appointment.status = status;
                resolve(appointment);
            })
        },
        updateConsultationType: (appointment: IAppointment, consultationType: ConsultationType): Promise<IAppointment> => {
            return new Promise((resolve, reject) => {
                appointment.consultationType = consultationType;
                resolve(appointment);
            })
        }
    }
}   