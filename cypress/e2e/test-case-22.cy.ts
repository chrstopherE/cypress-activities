// Test Case 22: Add to cart from Recommended items
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Scroll to bottom of page
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page

import {

    navigateToURL,
    scrollToBottomOfPage,
    verifyRecommendedItemsVisible,
    clickAddToCartOnRecommendedProduct,
    clickViewCartButton,
    verifyRecommendedIsDisplayedInCart


} from './application-actions'


describe('Test Case 22: Add to cart from Recommended items', () => {
    
    it('Test Case 22', () => {

        navigateToURL();
        scrollToBottomOfPage();
        verifyRecommendedItemsVisible();
        clickAddToCartOnRecommendedProduct();
        clickViewCartButton();
        verifyRecommendedIsDisplayedInCart();

    });
});