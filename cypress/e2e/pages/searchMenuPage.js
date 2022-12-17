const inputSearchMenu = () => {
    cy.get('.oxd-input');
}

const toggleMenuButton = () => {
    cy.get('.oxd-main-menu-search > .oxd-icon-button');
}

export default {
    inputSearchMenu,
    toggleMenuButton
}