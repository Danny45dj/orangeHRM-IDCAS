const checkError = message => {
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text',message)
}
const checkEmailError = message =>{
    cy.get(':nth-child(1) > .oxd-input-group > .oxd-text').should('have.text',message)
}
const errorNot = {
    recluitmentError: {
        nameReq: 'Required',
        emailInvalidNotif: 'Expected format: admin@example.com'
    }
}

export default {
    checkError,
    errorNot,
    checkEmailError
}