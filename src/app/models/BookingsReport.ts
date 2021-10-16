export interface Location {
    locationName: string;
}

export interface IndividualLab {
    testType: string;
    testOutCome: string;
    testCompleted: boolean;
}

export interface Individual {
    individualFirstName: string;
    individualLastName: string;
    individualEmailAddress: string;
    individualMobileNumber: string;
    individualBookingStatus: boolean;
    individualLab: IndividualLab;
}

export interface BookingsReport {
    capacity: number;
    spaceAllocated: number;
    bookingDates: Date;
    location: Location;
    individuals: Individual[];
}
