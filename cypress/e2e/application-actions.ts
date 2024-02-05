// application-actions.ts

import { should } from "chai";

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

export const enterIncorrectEmailAndPassword = () => {

    cy.get('[data-qa="login-email"]')
    .type("testemail098@gmail.com");

    cy.get('[data-qa="login-password"]')
    .type("testpassword098");

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

export const clickLogoutButton = () => {

    cy.contains(" Logout").click();

};

export const verifyAccountDeleted = () => {

    cy.contains("Account Deleted!").should("be.visible");

};

export const incorrectEmailOrPasswordError = () => {

    cy.contains("Your email or password is incorrect!").should("be.visible");

};

export const verifyUserIsNavigatedToLoginPage = () => {
    
    cy.location('pathname').should('eq', '/login');

};

export const verifyNewUserSignUp = () => {

    cy.contains("New User Signup!").should("be.visible");

};

export const emailAddressAlreadyRegisteredError = () => {

    cy.contains("Email Address already exist!")
    .should("be.visible");

};

export const clickSignUpButton = () => {

    cy.get('[data-qa="signup-button"]').click();

};

export const enterNameAndAlreadyRegisteredEmail = () => {

    cy.get('[data-qa="signup-name"]')
    .type("test012");
    cy.get('[data-qa="signup-email"]')
    .type("testemail012@gmail.com")

};

export const clickContactUs = () => {

    cy.contains(' Contact us').click();

};

export const verifyGetInTouch = () => {

    cy.contains('Get In Touch').should("be.visible");

};

export const fillInContactUsForm = () => {

    cy.get('[data-qa="name"]').type("random name");
    cy.get('[data-qa="email"]').type("testemail012@gmail.com");
    cy.get('[data-qa="subject"]').type("random subject");
    cy.get('[data-qa="message"]').type("random message"); 

};

export const uploadFile = () => {
    
    cy.get('input[type=file]')
    .selectFile('cypress/fixtures/example.json');
    
};

export const clickSubmitButton = () => {
    
    cy.get('[data-qa="submit-button"]').click();

};

export const verifySuccessMessage = () => {
    
    cy.contains('Success! Your details have been submitted successfully.')
    .should("be.visible");

};

export const clickHomeButton = () => {
    
    cy.contains(' Home').click();

};

export const clickTestCasesButton = () => {

    cy.contains(' Test Cases').click();

};

export const verifyTestCasesPage = () => {

    cy.location('pathname').should('eq', '/test_cases');

};

export const clickProductsButton = () => {

    cy.contains(' Products').click();

};

export const navigatedProductsPage = () => {

    cy.location('pathname').should('eq', '/products');

};

export const productListVisible = () => {

    cy.get('.features_items').should('be.visible');

};

export const clickViewFirstProduct = () => {

    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();

};

export const userLandedOnProductDetailPage = () => {

    cy.location('pathname').should('eq', '/product_details/1');

};

export const verifyProductDetails = () => {

    cy.get('.product-information').should('be.visible');
    cy.get('.product-information > h2').should('be.visible');
    cy.get('p').contains('Category', { matchCase: false }).should('be.visible');
    cy.get('span').contains('Rs.', { matchCase: false }).should('be.visible');
    cy.get('p').contains('Availability:').should('be.visible');
    cy.get('p').contains('Condition:').should('be.visible');
    cy.get('p').contains('Brand:').should('be.visible');

};

export const enterProductNameToSearch = () => {

    cy.get('#search_product').type('Winter top');

};

export const clickSearchButton = () => {

    cy.get('#submit_search').click();

};

export const verifySearchedProducts = () => {

    cy.contains('Searched Products').should('be.visible');

};

export const verifyAllProductsRelatedToSearchAreVisible = () => {

    cy.get('.productinfo > p').contains('winter top', { matchCase: false }).should('be.visible');

};

export const scrollIntoView = () => {

    cy.get('.features_items > .col-sm-4').scrollIntoView();

};

export const scrollDownToFooter = () => {

    cy.get('#footer').scrollIntoView();

};

export const verifySubscriptionVisibility = () => {

    cy.contains('Subscription').should ('be.visible');

};

export const enterEmailAddressToSubscribe = () => {

    cy.get('#susbscribe_email').type('testemail@gmail.com');

};

export const clickSubscribeArrowButton = () => {

    cy.get('#subscribe').click();

};

export const verifySuccessMessageForSubscription = () => {

    cy.contains('You have been successfully subscribed!').should('be.visible');

};

export const clickCartButton = () => {

    cy.contains(' Cart').click();

};

export const hoverOverFirstProduct = () => {

    cy.get(':nth-child(3) > .product-image-wrapper')
    .trigger('mouseover')
    .realHover();

};

export const clickFirstHiddenAddToCartButton = () => {


    cy.get('div.product-overlay > div > a').contains('Add to cart').click();
    //body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a
    //body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a
    
};

export const clickContinueShoppingButton = () => {

    cy.contains('Continue Shopping').click();

};

export const hoverOverSecondProduct = () => {

    cy.get(':nth-child(4) > .product-image-wrapper')
    .realHover();

};

export const clickSecondHiddenAddToCartButton = () => {
    
    cy.get(':nth-child(4)[data-product-id="2"]').click();

};

export const clickViewCartButton = () => {
    
    cy.contains('View Cart').click();

};

export const verifyProductsAreAddedToCart = () => {

    cy.get('#product-1 > .cart_description')
    .should('contain', 'Blue Top')

    cy.get('#product-2 > .cart_description')
    .should('contain', 'Men Tshirt')

};

export const verifyProductDetailsInCart = () => {

    cy.get('#product-1 > .cart_price').contains('500');
    cy.get('#product-1 > .cart_quantity').contains('1');
    cy.get('#product-1 > .cart_total').contains('500');

    cy.get('#product-2 > .cart_price').contains('400');
    cy.get('#product-2 > .cart_quantity').contains('1');
    cy.get('#product-2 > .cart_total').contains('400');

};

export const changeQuantityOfProduct = () => {

    cy.get('#quantity').clear().type('4');

};

export const clickAddToCartButton = () => {

    // :nth-child(5) > .btn <-- Selector provided by Cypress
    cy.get('.features_items :nth-child(3) .productinfo > .btn').click();
    
};

export const verifyCartQuantity = () => {

    cy.get('td.cart_quantity').contains('4');
    
};

export const verifyCartPage = () => {

    cy.location('pathname').should('eq', '/view_cart');

};

export const clickProceedToCheckoutButton = () => {

    cy.contains('Proceed To Checkout').click();

};

export const clickRegisterLoginButton = () => {

    cy.get('.modal-body > :nth-child(2) > a > u').click();

    // .modal-body > :nth-child(2) > a > u
    //#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a > u

};

export const signUpNewAccount = () => {

    cy.get('[data-qa="signup-name"]')
    .type("test012");

    cy.get('[data-qa="signup-email"]')
    .type("testemail012@gmail.com");

};

export const fillDetailsInSignUpForm = () => {

    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get("b").contains("Enter Account Information").should("exist");

    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').click();
    cy.get('[data-qa="name"]').type("test012");
    cy.get('[data-qa="password"]').type("testpassword1");
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2021');

    // Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').click();

    // Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').click();

    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type("firstname");
    cy.get('[data-qa="last_name"]').type("lastname");
    cy.get('[data-qa="company"]').type("random company");
    cy.get('[data-qa="address"]').type("random address");
    cy.get('[data-qa="address2"]').type("random address two");
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').type("random state");
    cy.get('[data-qa="city"]').type("random city");
    cy.get('[data-qa="zipcode"]').type("123456");
    cy.get('[data-qa="mobile_number"]').type("123456789");

};

export const clickCreateAccountButton = () => {

    cy.get('[data-qa="create-account"]').click();

};

export const verifyAccountCreated = () => {

    cy.get('b').contains("Account Created!").should("exist");

};

export const clickContinueButton = () => {

    cy.get('[data-qa="continue-button"]').click();

};

export const verifyLoggedInAs = () => {

    cy.get(':nth-child(10) > a')
    .contains(" Logged in as ")
    .should("exist");
    cy.get('b').contains('test012').should("exist");

};

export const verifyAddressDetails = () => {

    cy.get('#address_delivery > .address_firstname')
    .contains('Mr. firstname lastname');

    cy.get('#address_delivery > :nth-child(3)')
    .contains('random company');

    cy.get('#address_delivery > :nth-child(4)')
    .contains('random address');

    cy.get('#address_delivery > :nth-child(5)')
    .contains('random address two');

    cy.get('#address_delivery > :nth-child(6)')
    .contains('random city');

    cy.get('#address_delivery > .address_country_name')
    .contains('Singapore');

    cy.get('#address_delivery > .address_phone')
    .contains('123456789');
};

export const reviewOrder = () => {

    cy.get('.cart_description')
    .contains('Blue Top').should('be.visible');

    cy.get('.cart_total')
    .contains('Rs. 500').should('be.visible');

    cy.get(':nth-child(4) > .cart_total_price')
    .contains('Rs. 500').should('be.visible');

};

export const inputComment = () => {

    cy.get('.form-control').type('random comment');

};

export const clickPlaceOrderButton = () => {

    cy.contains('Place Order').click();

};

export const enterCardDetails = () => {

    cy.get('[data-qa="name-on-card"]').type('test012');
    cy.get('[data-qa="card-number"]').type('123456789');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('01');
    cy.get('[data-qa="expiry-year"]').type('2028');

};

export const clickPayAndConfirmOrderButton = () => {

    cy.get('[data-qa="pay-button"]').click();

};

export const verifySuccessMessageForOrder = () => {

    cy.get('[data-qa="order-placed"] > b')
    .contains('Order Placed!');

};

export const verifyAccountDeletedVisible = () => {
    cy.get('b').contains("Account Deleted!")
    .should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
};

export const clickRemoveItemButton = () => {

    cy.get('.cart_quantity_delete').click();

};

export const cartIsEmpty = () => {

    cy.get('#empty_cart')
    .contains('Cart is empty!')
    .should('be.visible');

};

export const verifyCategoryVisible = () => {

    cy.get('.left-sidebar')
    .contains('Category')
    .should('be.visible');

};

export const clickOnWomenCategory = () => {

    cy.get('#accordian').contains('Women').click();

}

export const clickOnDressSubCategory = () => {

    cy.get('#Women > .panel-body').contains('Dress ').click();

};

export const verifyCategoryPage = () => {

    cy.location('pathname').should('eq', '/category_products/1');

};

export const verifyCategoryPageTextTitle = () => {

    cy.get('.title').contains('Women - Dress Products').should('be.visible');

};

export const clickOnMenCategory = () => {

    cy.get('#accordian').contains('Men').click();

}

export const clickOnTShirtSubCategory = () => {

    cy.get('#Men :nth-child(1) > a').contains('Tshirts ').click();

};

export const verifyCategoryPageMenTShirt = () => {

    cy.location('pathname').should('eq', '/category_products/3');

};

export const verifyBrandsVisible = () => {

    cy.get('.brands_products').should('be.visible');

};

export const clickOnAnyBrand = () => {

    cy.get('.brands-name > .nav > :nth-child(1) > a').click();

};

export const verifyBrandPage = () => {

    cy.location('pathname').should('eq', '/brand_products/Polo');

};

export const verifyBrandProductsVisible = () => {

    cy.get('.features_items').should('be.visible');

};

export const clickAnotherBrand = () => {

    cy.get('.brands-name > .nav > :nth-child(2) > a').click();

};

export const verifyAnotherBrandPage = () => {

    cy.location('pathname').should('eq', '/brand_products/H&M');

};

export const verifyCustomProductsAreAddedToCart = () => {

    cy.get('.cart_description').contains('Winter Top').should('exist');

};

export const verifyProductsPage = () => {

    cy.location('pathname').should('eq', '/products');

};

export const verifyWriteYourReview = () => {

    cy.get('.active > a')
    .contains('Write Your Review')
    .should('be.visible');

};

export const fillInReviewDetails = () => {

    cy.get('#name').type('random name');
    cy.get('#email').type('random@hotmail.com');
    cy.get('#review').type('this is a review');

};

export const clickSubmitReviewButton = () => {

    cy.get('#button-review').click();

};

export const verifyReviewSuccessMessage = () => {

    cy.get('.alert-success > span')
    .contains('Thank you for your review.')
    .should('be.visible');

};

export const scrollToBottomOfPage = () => {

    cy.scrollTo('bottom');

};

export const verifyRecommendedItemsVisible = () => {

    cy.get('.recommended_items > .title').should('be.visible');

};

export const clickAddToCartOnRecommendedProduct = () => {

    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn')
    .click();
    
};

export const verifyRecommendedIsDisplayedInCart = () => {

    cy.get('h4 > a').contains('Stylish Dress');

};

export const verifyBillingAddress = () => {

    cy.get('#address_delivery > .address_firstname')
    .contains('Mr. firstname lastname');

    cy.get('#address_delivery > :nth-child(3)')
    .contains('random company');

    cy.get('#address_delivery > :nth-child(4)')
    .contains('random address');

    cy.get('#address_delivery > :nth-child(5)')
    .contains('random address two');

    cy.get('#address_delivery > :nth-child(6)')
    .contains('random city');

    cy.get('#address_delivery > .address_country_name')
    .contains('Singapore');

    cy.get('#address_delivery > .address_phone')
    .contains('123456789');

};

export const clickDownloadInvoiceButton = () => {

    cy.contains('Download Invoice').click();

};

export const verifyInvoiceDownloaded = () => {

    cy.readFile('cypress/downloads/invoice.txt')

};

export const clickScrollUpButton = () => {

    cy.get('#scrollUp').click();

}

export const verifyTextTitleIsVisible = () => {

    cy.get('.active > :nth-child(1) > h2')
    .contains('Full-Fledged practice website for Automation Engineers')
    .should('be.visible');

};

export const scrollUpToPage = () => {

    cy.scrollTo('top');

}