import LoginPage from "../e2e/Components/LoginPage"

Cypress.Commands.add('login',()=>{
    cy.fixture('users').then(user=>{
        LoginPage.UserInput().type(user.username)
        LoginPage.passwordInput().type(user.password)
    })
    LoginPage.submit().click()
})

Cypress.Commands.add('dropdown',()=>{
    cy.get('.oxd-select-text').trigger('mousedown');
    cy.wait(1500)
    cy.get('.oxd-select-dropdown').children().eq(1).click();
})