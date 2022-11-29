it('Should open the books page', () => {
    cy.visit('/');
    cy.contains('Books list').should('be.visible');
});
it('Success login', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('test@test.com').should('be.visible');
    cy.contains('Add new').should('have.class', 'btn');
});
it('Wrong password', () => {
    cy.visit('/');
    cy.login('test@test.com');
    cy.get('#pass').then(($el) => $el[0].checkValidity()).should('be.false');
});