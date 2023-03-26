import { UserData } from 'bookem-shared/src/types/database';

interface CypressResponse {
  body: UserData;
}

describe('[GET] /users/index', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000');
  });

  it('redirect to login page when user is unauthenticated', () => {
    // go to users page
    cy.intercept('GET', '/api/users/', {});

    // check if redirected to login page
    cy.url().should('include', '/login');
  });

  it('return user object when user is authenticated', () => {
    // login
    cy.login('test_user@bookem.org', 'changeplusplus');

    // go to users page
    cy.request({ method: 'GET', url: '/api/users/' }).as('users');

    // check if user object is returned
    cy.get('@users').its('status').should('eq', 200);

    // check if user object has correct properties
    cy.get<CypressResponse>('@users').then(res => {
      const user = res.body;
      expect(user).to.have.property('name', 'Bookem User');
      expect(user).to.have.property('email', 'test_user@bookem.org');
      expect(user).to.have.property('password').that.is.an('string');
      expect(user).to.have.property('phone', '615-555-5555');
      expect(user).to.have.property('address').that.is.an('string');
      expect(user).to.have.property('sourceHeardFrom').that.is.an('string');
      expect(user).to.have.property('ethnicity').that.is.an('string');
      expect(user).to.have.property('gender').that.is.an('string');
      expect(user).to.have.property('backgroundCheck').that.is.an('object');
      expect(user).to.have.property('userType').that.is.an('string');
      expect(user).to.have.property('programs').that.is.an('array');
      expect(user).to.have.property('tags').that.is.an('array');
    });
  });

  it('return 405 when method is not GET', () => {
    // login
    cy.login('test_user@bookem.org', 'changeplusplus');

    // POST request
    cy.request({
      method: 'POST',
      url: '/api/users/',
      failOnStatusCode: false,
    }).as('users');

    // check if user object is returned
    cy.get('@users').its('status').should('eq', 405);
  });
});

export {};
