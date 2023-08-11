describe('template spec', () => {

  it('passes', () => {

    cy.visit('https://meupc.net/')

   

   cy.wait(1000)

   cy.get('.navbar-burger').click()

   cy.get('ul.menu-list')

   .children('li')

   .children('a[href="https://meupc.net/cadastro"]')

   .click()

   cy.get('input[name="nome"]').type('pipito')

   cy.get('input[name="email"]').type('pipitowest@gmail.com')

   cy.get('input[placeholder="Defina uma senha"]').type('pipito123')

   cy.get('input[type="checkbox"]').check( {force:true})

   cy.contains('Cadastrar-se').click()

   cy.contains('Escolha seu nome de usuário').should('be.visible')

 

  })

})