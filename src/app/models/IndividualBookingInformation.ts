export interface IndividualLab {
    individualLabId: number;
    testType: string;
}

export interface IndividualBookingInformation {
    individualFirstName: string;
    individualLastName: string;
    individualEmailAddress: string;
    individualMobileNumber: string;
    individualLab: IndividualLab;
    adminBookingAllocationId: number;
}