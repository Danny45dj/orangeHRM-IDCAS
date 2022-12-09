import messagesResetPassword from "../../fixtures/enums/messagesResetPassword";

const titleResetConfirmation = () => {
   return cy.get('.oxd-text--h6');
}

const descFirstResetConfirmation = () => {
   return cy.get(':nth-child(3) > .oxd-text');
}

const descSecondResetConfirmation = () => {
   return cy.get(':nth-child(4) > .oxd-text');
}

const titleNoteResetConfirmation = () => {
   return cy.get('.orangehrm-sub-title');
}

const descNoteResetConfirmation = () => {
   return cy.get('.orangehrm-card-note--background > :nth-child(2)');
}

const validationFormConfirmationSendPassword = () => {
    cy.obtaineText(titleResetConfirmation(), messagesResetPassword.enumConfTextSendPass.CONF_TITLE);
    cy.obtaineText(descFirstResetConfirmation(), messagesResetPassword.enumConfTextSendPass.CONF_FIRST_DESC);
    cy.obtaineText(descSecondResetConfirmation(), messagesResetPassword.enumConfTextSendPass.CONF_SECOND_DESC);
    cy.obtaineText(titleNoteResetConfirmation(), messagesResetPassword.enumConfTextSendPass.CONF_NOTE_TITLE);
    cy.obtaineText(descNoteResetConfirmation(), messagesResetPassword.enumConfTextSendPass.CONF_NOTE_DESC);
}

export default {
    validationFormConfirmationSendPassword
}