context('[GET] /users/index', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('error when user is unauthenticated', () => {
    cy.intercept('GET', '/api/users/index', {});
  });
});

export {};
