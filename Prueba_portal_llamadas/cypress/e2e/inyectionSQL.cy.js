describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
      cy.get('#Username.form-control').type("'asdf' OR 'a'='a'");
      cy.get('#Password.form-control').type("'asdf' OR 'a'='a'");
      cy.get('.btn').click()
    })
  })