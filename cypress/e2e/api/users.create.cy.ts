import { faker } from '@faker-js/faker';
import { UserData } from 'bookem-shared/src/types/database';

describe('[POST] /users/create', () => {
  beforeEach(() => {
    cy.task('db:seed');
    cy.visit('http://127.0.0.1:3000');
  });

  it('redirect to login page when user is unauthenticated', () => {
    // go to users page
    cy.intercept('POST', '/api/users/', {});

    // check if redirected to login page
    cy.url().should('include', '/login');
  });

  it('successfully create user when user is authenticated', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    let user: UserData = {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      email,
      password,
      phone: faker.phone.number(),
      address: faker.address.streetAddress(),
      sourceHeardFrom: 'social media',
      ethnicity: 'white',
      gender: 'female',
      backgroundCheck: {
        passed: false,
        expirationDate: new Date(),
      },
      userType: 'user',
      programs: [],
      tags: [],
    };

    // expect user to be created
    cy.request('POST', '/api/users/create/', user).as('create-users');

    // expect success status
    cy.get('@create-users').its('status').should('eq', 201);

    // login with new user
    cy.login(email, password);

    // go to users page
    cy.request({ method: 'GET', url: '/api/users/' }).as('users');

    // expect success status
    cy.get('@users').its('status').should('eq', 200);

    // expect user object to be returned
    cy.get('@users').its('body').should('not.deep.equal', user);
  });
});

export {};
