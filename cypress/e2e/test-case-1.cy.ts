describe("Test Case 1: Register User", () => {
    it("Test Case 1", () => {
        // Navigate to the URL
        cy.visit("http://automationexercise.com");

        // Verify the home page is visible
        // cy.location().should(() => {
        //     expect(location.href).to.eq("http://automationexercise.com");
        // });
        cy.contains("Category").should("exist");
        cy.contains("Features Items").should("exist"); // Assert the page has finished loading.

        // Suggested implementation according to Co Pilot
        // cy.visit("/"); // Navigate to the home page URL
        // cy.contains("Welcome to the Home Page"); // Assert that a specific text is present on the page
        // cy.get(".logo").should("be.visible"); // Assert that a specific element with class "logo" is visible on the page

        // Click on 'Signup / Login' button
        cy.get("a").contains(" Signup / Login").click();

        // Verify 'New User Signup!' is visible
        cy.get(".signup-form > h2")
            .contains("New User Signup!")
            .should("exist");

        // Enter name and email address
        cy.get('[data-qa="signup-name"]').type("test012");
        cy.get('[data-qa="signup-email"]').type("testemail012@gmail.com");

        // Click Signup button
        cy.get('[data-qa="signup-button"]').click();

        // Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get("b").contains("Enter Account Information").should("exist");

        // Fill details: Title, Name, Email, Password, Date of birth
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type("test012");
        cy.get('[data-qa="password"]').type("testpassword1");
        cy.get('[data-qa="days"]').select('1');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('2021');

        // Select checkbox 'Sign up for our newsletter!'
        cy.get('#newsletter').click();

        // Select checkbox 'Receive special offers from our partners!'
        cy.get('#optin').click();

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('[data-qa="first_name"]').type("firstname");
        cy.get('[data-qa="last_name"]').type("lastname");
        cy.get('[data-qa="company"]').type("random company");
        cy.get('[data-qa="address"]').type("random address");
        cy.get('[data-qa="address2"]').type("random address two");
        cy.get('[data-qa="country"]').select('Singapore');
        cy.get('[data-qa="state"]').type("random state");
        cy.get('[data-qa="city"]').type("random city");
        cy.get('[data-qa="zipcode"]').type("123456");
        cy.get('[data-qa="mobile_number"]').type("123456789");

        // Click 'Create Account' button
        cy.get('[data-qa="create-account"]').click();

        // Verify that 'ACCOUNT CREATED!' is visible
        cy.get('b').contains("Account Created!").should("exist");

        // Click 'Continue' button
        cy.get('[data-qa="continue-button"]').click();

        // Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a')
            .contains(" Logged in as ")
            .should("exist");
        cy.get('b').contains('test012').should("exist");

        // // Click 'Delete Account' button
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

        // // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        // cy.get('b').contains("Account Deleted!").should("exist");
        // cy.get('[data-qa="continue-button"]').click();
    });
});
