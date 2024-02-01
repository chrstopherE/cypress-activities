import {
    navigateToURL,
    verifyHomePage,
    clickSignupLoginButton,
    verifyLoginToYourAccount,
    enterCorrectEmailAndPassword,
    clickLoginButton,
    verifyLoggedInAsUser,
    clickDeleteAccountButton,
    verifyAccountDeleted
  } from "./application-actions";
  
  describe("Test Case 1: Register User", () => {
    it("Test Case 1", () => {
      navigateToURL();
      verifyHomePage();
      clickSignupLoginButton();
      verifyLoginToYourAccount();
      enterCorrectEmailAndPassword();
      clickLoginButton();
      verifyLoggedInAsUser();
      clickDeleteAccountButton();
      verifyAccountDeleted();
  
      // ... continue with the rest of your test steps
    });
  });