// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website 
// for Automation Engineers' text is visible on screen

import { 
    
    clickScrollUpButton, 
    navigateToURL, 
    scrollToBottomOfPage, 
    verifyHomePage, 
    verifySubscriptionVisibility,
    verifyTextTitleIsVisible

} from './application-actions'

describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {

    it('Test Case 25', () => {

    navigateToURL();
    verifyHomePage();
    scrollToBottomOfPage();
    verifySubscriptionVisibility();
    clickScrollUpButton();
    verifyTextTitleIsVisible();
    
    });


});