describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
      cy.get('#Username.form-control').type("prueba");
      cy.get('#Password.form-control').type("1234");
      cy.get('.btn').click()
    })
  })