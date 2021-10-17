describe('Allocate Booking space', () => {
    it('Log Allocation data', () => {
      cy.visit('http://localhost:4200/portal/administrator');
      cy.wait(2000)
      cy.get('#selectLocation').select('Lagos, Nigeria');
      cy.get('#capacity').type(500);
      cy.get('#bookingDates').type('2021-10-30');
      cy.get('#submiAllocate').click();
      cy.wait(2000)
    });

    it('Book Covid Test', () => {
      cy.visit('http://localhost:4200/portal/individuals');

      cy.get('#individualFirstName').type('Umar');
      cy.get('#individualLastName').type('Tola');
      cy.get('#individualEmailAddress').type('test9@test.com');
      cy.get('#individualMobileNumber').type('08075213245');
      cy.get('#testType').select('PCRTest');
      cy.get('#location').select('Lagos, Nigeria');
      cy.get('#bookingDates').type('2021-10-30');
      
      cy.get('#submiBooking').click();
      cy.wait(4000)
    });

    it('Set booking outcome', () => {
      cy.visit('http://localhost:4200/portal/individualLabs');

      cy.get('#individualEmailAddress').type('test9@test.com');
      cy.get('#individualMobileNumber').type('08075213245');
      cy.get('#getBookingDetails').click();
      cy.wait(3000)
      cy.get('#selectOutComes').select('positive');
      cy.get('#setOutcome').click();
      cy.wait(2000)
    });

    it('Cancel Booking', () => {
      cy.visit('http://localhost:4200/portal/cancelBookings');

      cy.get('#individualEmailAddress').type('test9@test.com');
      cy.get('#individualMobileNumber').type('08075213245');
      cy.get('#getBookingDetails').click();
      cy.get('#canelBooking').click();
      cy.wait(2000)
    });

    it('Booking Report', () => {
      cy.visit('http://localhost:4200/portal/reports');

      cy.get('#bookingStartDates').type('2021-10-30');
      cy.get('#bookingEndDates').type('2021-10-30');
      cy.get('#getReport').click();
      cy.wait(2000)
      cy.get('#viewindividualData').click();
      cy.wait(2000)
    });

  });


