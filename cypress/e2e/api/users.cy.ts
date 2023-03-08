describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
    cy.wait(1000);
    const a = cy.get('a');
  });
});

export {};
