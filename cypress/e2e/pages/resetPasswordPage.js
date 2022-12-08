const forgotPasswordLink = () => {
    return cy.get('.orangehrm-login-forgot > .oxd-text');
}

const titleResetForm = () => {
    return cy.get('.oxd-text--h6');
}

const descResetForm = () => {
    return cy.get('.orangehrm-card-note > .oxd-text');
}

const usernameInputResetForm = () => {
    return cy.get('.oxd-input');
}

const resetPasswordButton = () => {
    return cy.get('.oxd-button--secondary');
}

const resetCancelButton = () => {
    return cy.get('.oxd-button--ghost');
}

export default {
    forgotPasswordLink,
    titleResetForm,
    descResetForm,
    usernameInputResetForm,
    resetPasswordButton,
    resetCancelButton
}