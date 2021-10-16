    export interface BookedCovidTest {
        individualFirstName: string;
        individualLastName: string;
        individualEmailAddress: string;
        individualMobileNumber: string;
        bookingDate: Date;
        success: boolean;
        message: string;
    }