describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
      cy.get('#Username.form-control').type("tester");
      cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");
      cy.get('.btn').click()

    //Módulo usuarios
      cy.get('#navbarDropdown.nav-link.dropdown-toggle').click('topRight')
      cy.get('[href="/User/Index"]').click('topLeft')
      cy.get('.even > :nth-child(6) > .btn-success').click()
      //Editar usuario
      cy.get('#Name').clear(); // Limpiar campo
      cy.get('#Name').type("Jason Luque Medina"); // Ingresar nombre
      
      cy.get('#UserName').clear(); // Limpiar campo
      cy.get('#UserName').type("jason.medina2022"); // Ingresar usuario
      
      cy.get('#Email').clear(); // Limpiar campo
      cy.get('#Email').type("jason.luque@outlook.es"); // ingresar correo electrónico

      cy.get('#PhoneNumber').clear(); // Limpiar campo
      cy.get('#PhoneNumber').type("5567654566"); // Ingresar número de teléfono

      cy.get('#PasswordHash').clear(); // Limpiar campo
      cy.get('#PasswordHash').type("XYl8383dgds!"); // Ingresar contraseña

      cy.get('#ConfirmPassword').clear(); // Limpiar campo
      cy.get('#ConfirmPassword').type("XYl8383dgds!"); // Confirmar contraseña

      cy.get('#UserTypeId').select('Externo') // Seleccione una opción
      cy.get('.filter-option-inner-inner').click()
      cy.get('.dropdown-menu > :nth-child(2) > .dropdown-item').click()
      cy.get('.btn-primary').click()
    })
  })
  