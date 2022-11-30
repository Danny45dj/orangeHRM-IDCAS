describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Login Successfully', () => {
        cy.fixture('users').then((user) => {
            cy.get('[name="username"]').should('be.empty').type(user.username);
            cy.get('[name="password"]').should('be.empty').type(user.password); 
        });
        cy.get('[type="submit"]').should('be.visible').click();
    })
})