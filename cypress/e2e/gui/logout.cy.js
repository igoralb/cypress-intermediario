describe('Logout', () => {
    //pré condições
    beforeEach(()=>{
        cy.login()
        cy.visit('/')
    })
    it('sucessfully', () => {
       
        cy.logout()
        // cy.get('#signin-container').should('be.visible') -> melhor garantir que seja redirecionado a pagina de login
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})