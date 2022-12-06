import LoginPage from "../e2e/Components/LoginPage"

Cypress.Commands.add('login',()=>{
    cy.fixture('users').then(user=>{
        LoginPage.UserInput().type(user.username)
        LoginPage.passwordInput().type(user.password)
    })

    LoginPage.submit().click()
})