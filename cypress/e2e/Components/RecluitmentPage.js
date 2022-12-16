
const UserInput = () =>{
    return cy.get('[name="username"]')
}

const passwordInput = () =>{
    return cy.get ('[name="password"]')
}

const submit = () =>{
    return cy.get ('[type="submit"]')
}

const recluitmentSubmit = () =>{
    return cy.get(':nth-child(5) > .oxd-main-menu-item')
}

const AddCandidatesSubmit = () =>{
    return cy.get('.orangehrm-header-container > .oxd-button')
}

export default {
    UserInput,
    passwordInput,
    submit,
    recluitmentSubmit,
    AddCandidatesSubmit
}