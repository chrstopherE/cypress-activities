// Test Case 7: Verify Test Cases Page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

import {

    navigateToURL,
    verifyHomePage,
    clickTestCasesButton,
    verifyTestCasesPage

} from "./application-actions";

describe("Test Case 7: Verify Test Cases Page", () => {
    it("Test Case 7", () => {
    
      navigateToURL();
      verifyHomePage();
      clickTestCasesButton();
      verifyTestCasesPage();

    });
});