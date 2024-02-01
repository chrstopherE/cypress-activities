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
  
  describe("Test Case 2: Login User with correct email and password", () => {
    it("Test Case 2", () => {
    
      navigateToURL();
      verifyHomePage();
      clickSignupLoginButton();
      verifyLoginToYourAccount();
      enterCorrectEmailAndPassword();
      clickLoginButton();
      verifyLoggedInAsUser();
      clickDeleteAccountButton();
      verifyAccountDeleted();
  
    });
    });