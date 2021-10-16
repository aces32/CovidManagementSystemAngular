import { IndividualLab } from "./IndividualLab";


    export interface BookCovidTestRequest {
        individualFirstName: string;
        individualLastName: string;
        individualEmailAddress: string;
        individualMobileNumber: string;
        bookingDate: Date;
        locationID: number;
        individualLab: IndividualLab;
    }
