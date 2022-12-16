const fistName = () =>{
    return cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
}

const middleName = () =>{
    return cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
}

const lastName = () =>{
    return cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
}

const vacancy = () =>{
    return cy.dropdown()
}

const emailCandidate = () =>{
    return cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
}

const contactNumber = () =>{
    return cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
}
const resume = () =>{
    return cy.get('.oxd-file-input')
}

const keywords = () =>{
    return cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input')
}

const dateOfApplication = () =>{
    return cy.get('.oxd-date-input > .oxd-input')
}

const notes = () =>{
    return cy.get('.oxd-textarea')
}

const consent = () =>{
    return cy.get('.oxd-checkbox-input > .oxd-icon')
}

const saveSubmit = () =>{
    return cy.get('.oxd-button--secondary')
}

const toast = () =>{
    return cy.get('.oxd-toast')
}

export default {
    fistName,
    middleName,
    lastName,
    vacancy,
    emailCandidate,
    contactNumber,
    resume,
    keywords,
    dateOfApplication,
    dateOfApplication,
    notes,
    consent,
    saveSubmit,
    toast
}