import searchMenuPage from "./pages/searchMenuPage";

describe('searchMenu Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('users').then((user) => {
            cy.login(user[0].username, user[0].password);
        });
    });
    
    it('searchMenu | Successfully find element in the menu', () => {
        searchMenuPage.toggleMenuButton().should('be.visible');

        // if (searchMenuPage.toggleMenuButton().should('have.class', '.toggled')) {
        //     searchMenuPage.toggleMenuButton().click();
        // } else {
        //     searchMenuPage.inputSearchMenu.should('be.visible').and('be.empty');
        // }
        
    });
});