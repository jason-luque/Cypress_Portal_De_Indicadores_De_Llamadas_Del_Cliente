describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
  
      //Inicio de sesión exitoso (Autenticación con usuario tester)
      cy.get('#Username.form-control').type("tester");
      cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");
      cy.get('.btn').click()
     
      //Cierre de sesión    
    cy.get('.ml-auto > .nav-item > .nav-link').click()
    cy.get('.ml-auto > .nav-item > .dropdown-menu > .dropdown-item').click()
})
})