describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://tester.intertel.mx/Home/Index');
    //cy.get('#Username').click()
    //cy.get('.form-horizontal > :nth-child(3)').click()
    //cy.get('.btn').click()

    cy.get('#Username.form-control').type("tester");
    cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");
    cy.get('.btn').click()
  })
})
