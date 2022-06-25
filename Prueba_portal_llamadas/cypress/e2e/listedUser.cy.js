describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');

      //Login
      cy.get('#Username.form-control').type("tester");
      cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");

      //Ingreso a módulo opciones / Listado de celulares
      cy.get('.btn').click()
      cy.get('#navbarDropdown.nav-link.dropdown-toggle').click('topRight')
      cy.get('[href="/CellLine/Index"]').click('topLeft')
      cy.get('#line-table_filter > label > .form-control').type('Angel')
      cy.get('#line-table_filter > label > .form-control').clear();
      cy.get('#line-table_filter > label > .form-control').type('Yadira Luján')
      cy.get('#line-table_filter > label > .form-control').clear();
      cy.get('#line-table_filter > label > .form-control').type('Jason')
      cy.get('#line-table_filter > label > .form-control').clear();
      cy.get(':nth-child(4) > .page-link').click()
      cy.get(':nth-child(5) > .page-link').click()
      cy.get(':nth-child(6) > .page-link').click()
      cy.get(':nth-child(8) > .page-link').click()
      //cy.get('.custom-select').click()
      cy.get('.custom-select').select('25')
      cy.get('.custom-select').select('50')
      cy.get('.custom-select').select('100')
      cy.get('.intersel-logo').click()
    })
})
