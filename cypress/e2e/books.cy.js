

it('Add a book 1', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.books('Детство', 'Лев Толстой');
    cy.contains('Детство').should('be.visible'); 
});
it('Add a book 2', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.books('Мишкина каша', 'Николай Носов');
    cy.contains('Мишкина каша').should('be.visible'); 
});

it( 'Add book to favorites', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Add to favorite').click();
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').should('be.visible');
});

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