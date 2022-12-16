import loginPage from "../e2e/pages/loginPage";

Cypress.Commands.add('login', (username, password) => {
    loginPage.usernameInput().should('be.empty').type(username);
    loginPage.passwordinput().should('be.empty').type(password);
    loginPage.submitButton().should('be.visible').click();
})

Cypress.Commands.add('hasText', (element, text) => {
    element.should('have.text', text);
})

Cypress.Commands.add('hasAttr', (element, href) => {
    element.should('have.attr', 'href', href);
})

Cypress.Commands.add('obtaineText', (element, text) => {
    element.then(($element) => {
        expect($element.text()).to.be.equal(text);
    })
})

Cypress.Commands.add('dropdown',()=>{
    cy.get('.oxd-select-text').trigger('mousedown');
    cy.wait(1500)
    cy.get('.oxd-select-dropdown').children().eq(1).click();
})