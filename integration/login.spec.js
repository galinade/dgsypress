it('Should open the books page', () => {
    cy.visit('/');
    cy.contains('Books list').should('be.visible')
});