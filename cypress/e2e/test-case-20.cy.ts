// Test Case 20: Search Products and Verify Cart After Login
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Enter product name in search input and click search button
// 6. Verify 'SEARCHED PRODUCTS' is visible
// 7. Verify all the products related to search are visible
// 8. Add those products to cart
// 9. Click 'Cart' button and verify that products are visible in cart
// 10. Click 'Signup / Login' button and submit login details
// 11. Again, go to Cart page
// 12. Verify that those products are visible in cart after login as well

import {

    navigateToURL,
    clickProductsButton,
    navigatedProductsPage,
    enterProductNameToSearch,
    clickSearchButton,
    verifySearchedProducts,
    clickAddToCartButton,
    clickContinueShoppingButton,
    clickCartButton,
    verifyCustomProductsAreAddedToCart,
    clickSignupLoginButton,
    signUpNewAccount,
    clickSignUpButton



} from './application-actions';

describe ("Test Case 20: Search Products and Verify Cart After Login", () => {

    it("Test Case 20", () => {

        navigateToURL();
        clickProductsButton();
        navigatedProductsPage();
        enterProductNameToSearch();
        clickSearchButton();
        verifySearchedProducts();
        clickAddToCartButton();
        clickContinueShoppingButton();
        clickCartButton();
        verifyCustomProductsAreAddedToCart();
        clickSignupLoginButton();
        signUpNewAccount();
        clickSignUpButton();
        clickCartButton();
        verifyCustomProductsAreAddedToCart();

    });

});