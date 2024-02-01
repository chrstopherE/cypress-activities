// Test Case 12: Add Products in Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Products' button
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price

import {

    navigateToURL,
    verifyHomePage,
    clickProductsButton,
    hoverOverFirstProduct,
    clickFirstHiddenAddToCartButton,
    clickContinueShoppingButton,
    hoverOverSecondProduct,
    clickViewCartButton,
    clickSecondHiddenAddToCartButton,
    verifyProductsAreAddedToCart,
    verifyProductDetailsInCart
    

} from './application-actions';

describe("Test Case 12: Add Products in Cart", () => {

    it("Test Case 12", () => {

        navigateToURL();
        verifyHomePage();
        clickProductsButton();
        hoverOverFirstProduct();
        clickFirstHiddenAddToCartButton(); // The mouseover event is kinda buggy here.
        clickContinueShoppingButton();
        hoverOverSecondProduct();
        clickSecondHiddenAddToCartButton();
        clickViewCartButton();
        verifyProductsAreAddedToCart();
        verifyProductDetailsInCart();

    })

});