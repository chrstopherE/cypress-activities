// Test Case 23: Verify address details in checkout page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill all details in Signup and create account
// 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 7. Verify ' Logged in as username' at top
// 8. Add products to cart
// 9. Click 'Cart' button
// 10. Verify that cart page is displayed
// 11. Click Proceed To Checkout
// 12. Verify that the delivery address is same address filled at the time registration of account
// 13. Verify that the billing address is same address filled at the time registration of account
// 14. Click 'Delete Account' button
// 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

import {

    navigateToURL,
    verifyHomePage,
    clickSignupLoginButton,
    signUpNewAccount,
    clickSignUpButton,
    fillDetailsInSignUpForm,
    verifyAccountCreated,
    verifyLoggedInAs,
    clickAddToCartButton,
    clickCartButton,
    clickProceedToCheckoutButton,
    verifyAddressDetails,
    clickCreateAccountButton,
    clickContinueButton,
    verifyBillingAddress,
    clickDeleteAccountButton,
    verifyAccountDeleted,



} from './application-actions'

describe('Test Case 23: Verify address details in checkout page', () => {

    it('Test Case 23', () => {

        navigateToURL();
        verifyHomePage();
        clickSignupLoginButton();
        signUpNewAccount();
        clickSignUpButton();
        fillDetailsInSignUpForm();
        clickCreateAccountButton();
        verifyAccountCreated();
        clickContinueButton();
        verifyLoggedInAs();
        clickAddToCartButton();
        clickCartButton();
        clickProceedToCheckoutButton();
        verifyAddressDetails();
        verifyBillingAddress();
        clickDeleteAccountButton();
        verifyAccountDeleted();

    });

});