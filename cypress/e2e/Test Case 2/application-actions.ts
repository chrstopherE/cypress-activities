// application-actions.ts

// export const navigateToURL = () => {
//     cy.visit("http://automationexercise.com");
//   };
  
//   export const verifyHomePage = () => {
//     cy.location().should(() => {
//       expect(location.href).to.eq("http://automationexercise.com");
//     });
//     cy.contains("Category").should("exist");
//     cy.contains("Features Items").should("exist");
//   };
  
//   export const clickSignupLoginButton = () => {
//     cy.get("a").contains(" Signup / Login").click();
//   };
  
// ... define other application actions as needed

export const navigateToURL = () => {

    cy.visit("http://automationexercise.com");

};

export const verifyHomePage = () => {

    cy.contains("Category").should("be.visible");
    cy.contains("Features Items").should("be.visible");

};

export const clickSignupLoginButton = () => {

    cy.contains(" Signup / Login").click();

};

export const verifyLoginToYourAccount = () => {
    
    cy.contains("Login to your account").should("be.visible");

};

export const enterCorrectEmailAndPassword = () => {
    
    cy.get('[data-qa="login-email"]')
    .type("testemail012@gmail.com");

    cy.get('[data-qa="login-password"]')
    .type("testpassword1");

};

export const clickLoginButton = () => {
        
    cy.get('[data-qa="login-button"]').click();
    
};

export const verifyLoggedInAsUser = () => {
    
    cy.contains(" Logged in as ").should("be.visible");
    cy.contains("test012").should("be.visible");

};

export const clickDeleteAccountButton = () => {

    cy.contains(" Delete Account").click();

};

export const verifyAccountDeleted = () => {

    cy.contains("Account Deleted!").should("be.visible");

};