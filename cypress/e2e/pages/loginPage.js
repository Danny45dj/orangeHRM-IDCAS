const usernameInput = () => {
    return cy.get('[name="username"]');
}

const passwordinput = () => {
    return cy.get('[name="password"]');
}

const submitButton = () => {
    return cy.get('[type="submit"]');
}

export default {
    usernameInput,
    passwordinput,
    submitButton
}