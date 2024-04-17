describe('Entire webpage testing', () => {

    it('successfully opened website', () => {
      cy.visit('/');
    });

    it('Should login as Nurse successfully', () => {

      // Visit the login page
      cy.visit('/');
      // Click on the Nurse button
      cy.contains('Nurse').click();
      // Enter username and password
      cy.get('input[name="ID"]').type('100');
      cy.get('input[name="password"]').type('masai');
      // Submit the login form
      cy.get('button[type="submit"]').click();

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting profile
      cy.contains('Profile').click();
      // Click on the "Edit profile" button
      cy.contains('Edit profile').click();
      // Wait for the modal to open
      cy.get('.ant-modal-title').should('contain', 'Edit details');
      // Clear and type new profile details
      cy.get('input[name="nurseName"]').clear().type('Rishita');
      cy.get('input[name="age"]').clear().type('30');
      cy.get('select[name="gender"]').select('Female');
      cy.get('input[name="bloodGroup"]').clear().type('AB+');
      cy.get('input[name="education"]').clear().type('Bachelor of Science in Nursing');
      cy.get('input[name="mobile"]').clear().type('1234567890');
      cy.get('input[name="DOB"]').clear().type('1990-01-01');
      // Click on the "Edit" button
      cy.get('#editbutton').click();
      // Wait for the notification message
      cy.contains('user updated').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting appointments
      cy.contains('Appointments').click();

      // Fill in the patient details
      cy.get('input[name="patientName"]').type('John Doe');
      cy.get('input[name="age"]').type('35');
      cy.get('select[name="gender"]').select('Male');
      cy.get('input[name="mobile"]').type('1234567890');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('select[name="disease"]').select('Fever');
      cy.get('input[name="address"]').type('123 Main Street');
      cy.get('select[name="department"]').select('Cardiology');
      cy.get('input[name="date"]').type('2024-04-15');
      cy.get('input[name="time"]').type('09:00');

      // Click on the submit button
      cy.get('.book_formsubmitbutton').click();

      // Verify loading state
      cy.contains('Loading...').should('be.visible');

      // Wait for the success notification
      cy.contains('Appointment Booked').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting beds
      cy.contains('Beds').click();
      // Scroll down
      cy.scrollTo('bottom');
      // Add some delay to observe the scrolling action
      cy.wait(1000);
      // Scroll up
      cy.scrollTo('top');
      // Add some delay to observe the scrolling action
      cy.wait(1000);

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting patient
      cy.contains('Add Patient').click();
      // Fill out the form
      cy.get('input[name="patientName"]').type('sanjuvvavvvvv');
      cy.get('input[name="age"]').type('30');
      cy.get('input[name="email"]').type('sanjuvavvvvvv@example.com');
      cy.get('input[name="date"]').type('2024-04-14');
      cy.get('select[name="gender"]').select('Female');
      cy.get('input[name="DOB"]').type('1989-02-02');
      cy.get('input[name="mobile"]').type('1234567890');
      cy.get('input[name="details"]').type('Lorem ipsum dolor sit amet');
      cy.get('input[name="disease"]').type('Fever');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="bedNumber"]').type('3');
      cy.get('input[name="roomNumber"]').type('3');
      cy.get('select[name="department"]').select('Cardiology');
      cy.get('select[name="docID"]').select('Piyush Agrawal');
      cy.get('select[name="bloodGroup"]').select('A+');
      cy.get('input[name="password"]').type('password');
      // Submit the form
      cy.get('.formsubmitbutton').click();
      // Verify success message
      cy.contains('Patient Added').should('exist');
      // Opening the sidebar
      cy.get('.bars').click();
      //selecting logout
      cy.contains('Logout').click();

    });

    it('Should login as Doctor successfully', () => {
      // Visit the login page
      cy.visit('/');
  
      // Click on the Doctor button
      cy.contains('Doctor').click();
  
      // Enter username and password
      cy.get('input[name="ID"]').type('100');
      cy.get('input[name="password"]').type('masai');
  
      // Submit the login form
      cy.get('button[type="submit"]').click();
  
      // Verify that login was successful
      cy.contains('Overview').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting profile
      cy.contains('Profile').click();

      // Click on the "Edit profile" button
      cy.contains('Edit profile').click();
    
      // Wait for the modal to open
      cy.get('.ant-modal-title').should('contain', 'Edit details');
  
      // Clear and type new profile details
      cy.get('input[name="docName"]').clear().type('Rajesh');
      cy.get('input[name="age"]').clear().type('30');
      cy.get('select[name="gender"]').select('Female');
      cy.get('input[name="bloodGroup"]').clear().type('AB+');
      cy.get('input[name="education"]').clear().type('MD');
      cy.get('input[name="mobile"]').clear().type('1234567890');
      cy.get('input[name="DOB"]').clear().type('1990-01-01');
  
      // Click on the "Edit" button
      cy.get('#editbutton').click();
  
      // Wait for the notification message
      cy.contains('user updated').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting create report
      cy.contains('Create Report').click();

      // Fill in the report details
      cy.get('input[name="docName"]').type('abc');
      cy.get('input[name="docDepartment"]').type('Cardiology');
      cy.get('input[name="docMobile"]').type('1234567890');
      cy.get('input[name="patientName"]').type('rahulg');
      cy.get('input[name="patientAge"]').type('35');
      cy.get('input[name="patientMobile"]').type('1234567890');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('select[name="patientGender"]').select('Male');
      cy.get('select[name="patientBloodGroup"]').select('A+');
      cy.get('input[name="patientDisease"]').type('Fever');
      cy.get('input[name="patientTemperature"]').type('100c');
      cy.get('input[name="patientWeight"]').type('72kg');
      cy.get('input[name="patientBP"]').type('140/95mmhg');
      cy.get('input[name="patientGlucose"]').type('99mg/dl');
      cy.get('input[name="extrainfo"]').type('2024-04-15');
      cy.get('input[name="medName"]').type('PCM');
      cy.get('select[name="duration"]').select('After Meal');
      cy.get('select[name="dosage"]').select('1');
      cy.get('input[type="submit"]').click();
      cy.get('input[name="date"]').type('2024-04-16');
      cy.get('input[name="time"]').type('10:00');

      // Submit the form
      cy.get('.formsubmitbutton').click();

      // Verify loading state
      cy.contains('Loading...').should('be.visible');

      // Wait for the success notification
      cy.contains('Report Created Sucessfully').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting report
      cy.contains('Reports').click();

      // Add some delay to load beds information
      cy.wait(1000);

      // Scroll down
      cy.scrollTo('bottom');

      // Add some delay to observe the scrolling action
      cy.wait(1000);

      // Scroll up
      cy.scrollTo('top');

      // Add some delay to observe the scrolling action
      cy.wait(1000);

      // Opening the sidebar
      cy.get('.bars').click();

      // selecting logout
      cy.contains('Logout').click();

    });

    it('Should login as Admin successfully', () => {
      // Visit the login page
      cy.visit('/');
  
      // Click on the Admin button
      cy.contains('Admin').click();
  
      // Enter username and password
      cy.get('input[name="ID"]').type('100');
      cy.get('input[name="password"]').type('masai');
      // Submit the login form
      cy.get('button[type="submit"]').click();

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting Add Doctor
      cy.contains('Add Doctor').click();
      // Fill out the form
      cy.get('input[name="docName"]').type('John Doeeeeee');
      cy.get('input[name="age"]').type('35');
      cy.get('input[name="mobile"]').type('1234567890');
      cy.get('input[name="email"]').type('johnnnnnnn.doe@example.com');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="bloodGroup"]').select('A+');
      cy.get('input[name="DOB"]').type('1989-02-02');
      cy.get('input[name="address"]').type('123 Main Street');
      cy.get('input[name="education"]').type('MD');
      cy.get('select[name="department"]').select('Cardiology');
      cy.get('input[name="password"]').type('password');
      cy.get('textarea[name="details"]').type('Lorem ipsum dolor sit amet');

      // Submit the form
      cy.get('.formsubmitbutton').click();

      // Verify loading state
      cy.contains('Loading...').should('be.visible');

      // Wait for the success notification
      cy.contains('Account Detais Sent').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting Add Nurse
      cy.contains('Add Nurse').click();

      // Fill out the form
      cy.get('input[name="nurseName"]').type('Jane Doeeeeeee');
      cy.get('input[name="age"]').type('30');
      cy.get('input[name="mobile"]').type('9876543210');
      cy.get('input[name="email"]').type('janeeeeeee.doe@example.com');
      cy.get('select[name="gender"]').select('Female');
      cy.get('input[name="DOB"]').type('1994-05-05');
      cy.get('input[name="address"]').type('456 Elm Street');
      cy.get('input[name="education"]').type('RN');
      cy.get('select[name="bloodGroup"]').select('B+');
      cy.get('input[name="password"]').type('password');
      cy.get('textarea[name="details"]').type('Lorem ipsum dolor sit amet');

      // Submit the form
      cy.get('.formsubmitbutton').click();

      // Verify loading state
      cy.contains('Loading...').should('be.visible');

      // Wait for the success notification
      cy.contains('Nurse Added').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();

      //selecting Add Admin
      cy.contains('Add Admin').click();

      // Fill out the form
      cy.get('input[name="adminName"]').type('John Doeeeeeeee');
      cy.get('input[name="age"]').type('35');
      cy.get('input[name="mobile"]').type('9876543210');
      cy.get('input[name="email"]').type('johnnnnnnnnn.doe@example.com');
      cy.get('select[name="gender"]').select('Male');
      cy.get('input[name="DOB"]').type('1989-03-15');
      cy.get('input[name="address"]').type('123 Main Street');
      cy.get('input[name="education"]').type('MBA');
      cy.get('input[name="password"]').type('password');

      // Submit the form
      cy.get('.formsubmitbutton').click();

      // Verify loading state
      cy.contains('Loading...').should('be.visible');

      // Wait for the success notification
      cy.contains('Admin Added').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting Add Beds
      cy.contains('Add Beds').click();

      // Fill out the form
      cy.get('input[name="bedNumber"]').type('101');
      cy.get('input[name="roomNumber"]').type('201');
      // Submit the form
      cy.get('.formsubmitbutton').click();

      // Wait for the success notification
      cy.contains('Bed Added').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting Add Ambulance
      cy.contains('Add AMBU').click();

      // Select ambulance type
      cy.get('#1').click();
      // Fill out the form
      cy.get('input[name="charges"]').type('200');
      cy.get('input[name="ambulanceID"]').type('1223');
      cy.get('input[name="ambulanceDriver"]').type('John Doe');
      cy.get('input[name="number"]').type('1234567890');
      // Submit the form
      cy.get('.formsubmitbutton').click();
      // Wait for the success notification
      cy.contains('Ambulance Added').should('be.visible');

      // Opening the sidebar
      cy.get('.bars').click();
      //selecting logout
      cy.contains('Logout').click();

    });
    
  })