describe('Allocate Booking space', () => {
    it('Log Allocation data', () => {
      cy.visit('https://covidpcrportal.netlify.app/');
      cy.wait(3000)
      cy.get('#selectLocation').select('Lagos, Nigeria');
      cy.get('#capacity').type(500);
      cy.get('#bookingDates').type('2021-10-30');
      cy.get('#submiAllocate').click();
      cy.wait(3000)

      //route to individuals table
      cy.get('#routeindividuals').click();
      
      cy.get('#individualFirstName').type('Umar');
      cy.get('#individualLastName').type('Tola');
      cy.get('#individualEmailAddress').type('test9@test.com');
      cy.get('#individualMobileNumber').type('08075213245');
      cy.get('#testType').select('PCRTest');
      cy.get('#location').select('Lagos, Nigeria');
      cy.get('#bookingDates').type('2021-10-30');     
      cy.get('#submiBooking').click();
      cy.wait(4000)

      //route to individual labs
      cy.get('#routereports').click();
      cy.get('#routeindividualLabs').click();

      cy.get('#individualEmailAddresslabs').type('test9@test.com');
      cy.get('#individualMobileNumberlabs').type('08075213245');
      cy.get('#getBookingDetails').click();
      cy.wait(3000)
      cy.get('#selectOutComes').select('negative');
      cy.get('#setOutcome').click();
      cy.wait(3000)

      //route to cancel booking 
      cy.get('#routecancelBookings').click();

      cy.get('#individualEmailAddress').type('test9@test.com');
      cy.get('#individualMobileNumber').type('08075213245');
      cy.get('#getBookingDetails').click();
      cy.get('#canelBooking').click();
      cy.wait(2000)

      //route to reports
      cy.get('#routereports').click();
      cy.get('#bookingStartDates').type('2021-10-30');
      cy.get('#bookingEndDates').type('2021-10-30');
      cy.get('#getReport').click();
      cy.wait(2000)
      cy.get('#viewindividualData').click();
      cy.wait(2000)
    });
  });


