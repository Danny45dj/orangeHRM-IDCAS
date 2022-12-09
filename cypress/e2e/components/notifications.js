const invalidCredendialsMessage = () => {
   return cy.get('.oxd-alert');
}

const usernameRequiredMessage = () => {
    return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text');
}

const passwordRequiredMessage = () => {
    return cy.get(':nth-child(3) > .oxd-input-group > .oxd-text');
}

const usernameRequiredMessageinFormResetPass = () => {
    return cy.get('.oxd-input-group > .oxd-text');
}

export default {
    invalidCredendialsMessage,
    usernameRequiredMessage,
    passwordRequiredMessage,
    usernameRequiredMessageinFormResetPass
}