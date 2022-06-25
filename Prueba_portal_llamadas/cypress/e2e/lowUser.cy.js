describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://tester.intertel.mx/Home/Index');
      cy.get('#Username.form-control').type("tester");
      cy.get('#Password.form-control').type("4iB3qJw2eX28Vvzb");
      cy.get('.btn').click()

    //Módulo usuarios
      cy.get('#navbarDropdown.nav-link.dropdown-toggle').click('topRight')
      cy.get('[href="/User/Index"]').click('topLeft')


    //Validación del botón cancelar eliminación usuario
        cy.get('.even > :nth-child(6) > .btn-danger').click() // ¿Esta seguro?
        cy.get('.swal2-cancel').click() // Botón cancelar eliminación

    //Eliminación de usuario (Baja)
        cy.get('.even > :nth-child(6) > .btn-danger').click() //¿Esta seguro?
        cy.get('.swal2-confirm').click() // Confirmar eliminación

    })
})
