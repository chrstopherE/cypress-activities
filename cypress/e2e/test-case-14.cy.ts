// Test Case 14: Place Order: Register while Checkout
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Signup and create account
// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 11. Verify ' Logged in as username' at top
// 12.Click 'Cart' button
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Delete Account' button
// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

import {

    navigateToURL,
    verifyHomePage, 
    clickAddToCartButton,
    clickCartButton,
    verifyCartPage,
    clickProceedToCheckoutButton,
    clickRegisterLoginButton, 
    signUpNewAccount,
    fillDetailsInSignUpForm,
    clickCreateAccountButton,
    verifyAccountCreated,
    clickContinueButton,
    verifyLoggedInAs,
    clickContinueShoppingButton,
    clickSignUpButton,
    verifyAddressDetails,
    reviewOrder,
    inputComment,
    clickPlaceOrderButton,
    enterCardDetails,
    clickPayAndConfirmOrderButton,
    verifySuccessMessageForOrder,
    clickDeleteAccountButton,
    verifyAccountDeleted


} from './application-actions';

describe("Test Case 14: Place Order: Register while Checkout", () => {

    it("Test Case 14", () => {

        navigateToURL();                // 2.
        verifyHomePage();               // 3.
        clickAddToCartButton();         // 4.
        clickContinueShoppingButton();  // 4.
        clickCartButton();              // 5.
        verifyCartPage();               // 6.
        clickProceedToCheckoutButton(); // 7.
        clickRegisterLoginButton();     // 8.
        signUpNewAccount();             // 9.
        clickSignUpButton();            // 9.
        fillDetailsInSignUpForm();      // 9.
        clickCreateAccountButton();     // 9.
        verifyAccountCreated();         //10.
        clickContinueButton();          //10.
        verifyLoggedInAs();             //11.
        clickCartButton();              //12.
        clickProceedToCheckoutButton(); //13.
        verifyAddressDetails();         //14.
        reviewOrder();                  //14.
        inputComment();                 //15.
        clickPlaceOrderButton();        //15.
        enterCardDetails();             //16.
        clickPayAndConfirmOrderButton();//17.
        verifySuccessMessageForOrder(); //18.
        clickDeleteAccountButton();     //19.
        verifyAccountDeleted();         //20.

    });

});