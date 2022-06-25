describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
      cy.get('#Username.form-control').type("tester");
      cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");
      cy.get('.btn').click()
      cy.get('#navbarDropdown.nav-link.dropdown-toggle').click('topRight')
      cy.get('[href="/User/Index"]').click('topLeft')
      cy.get('.btn-primary').click('topLeft')
      cy.get('#Name').type("Jason Raul Luque Medina"); // Ingrese nombre
      cy.get('#UserName').type("jason.luque"); // Ingrese usuario
      cy.get('#Email').type("jasonluquem@gmail.com"); // Ingrese cuenta de correo electrónico
      cy.get('#PhoneNumber').type("5617192668"); // Ingrese número de télefono
      cy.get('.form-horizontal > :nth-child(6)').type("$XYlFvcIiNPZ"); // Ingrrse contraseña
      cy.get('#ConfirmPassword').type("$XYlFvcIiNPZ"); // Confirme contraseña
      cy.get('#UserTypeId').select('Interno') // Seleccione una opción
      cy.get('.filter-option-inner-inner').click('bottomLeft', { force: true })
      cy.get(':nth-child(1) > .dropdown-item').click('bottomLeft', { force: true })
      cy.get('.btn-primary').click()
    })
  })
  