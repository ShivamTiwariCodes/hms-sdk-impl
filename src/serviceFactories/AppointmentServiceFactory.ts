import { IHmsSdkFactory } from "./IHmsSdkFactory";
import { IAppointmentService } from "hms-core-sdk/dist/services/IAppointmentService";
import { getAppointmentService } from "../services/AppointmentService";

export const AppointmentServiceFactory = ():IHmsSdkFactory<IAppointmentService> => {   
    return {
        getInstance: (version?: String): IAppointmentService => {
            return getAppointmentService();
        }
    }
}