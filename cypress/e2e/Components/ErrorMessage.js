const checkError = message => {
    return cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text',message)
}
const checkError2 = message => {
    return cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text',message)
}
const checkEmailError = message =>{
    return cy.get(':nth-child(1) > .oxd-input-group > .oxd-text').should('be.visible','have.text',message)
}
const invalidContactFormat = message =>{
    return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible','have.text',message)
}
const errorNot = {
    recluitmentError: {
        nameReq: 'Required',
        emailInvalidNotif: 'Expected format: admin@example.com',
        contactInvalidFormat: 'Allows numbers and only + - / ( )'
    }
}

export default {
    checkError,
    checkError2,
    errorNot,
    checkEmailError,
    invalidContactFormat
}