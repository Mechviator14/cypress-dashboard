
describe('Pkh test 1', function (){
    it('tc-Login', function(){
        cy.pkh()
        cy.get('input[id="input-email"]',{force:true}).type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('input[id="input-password"]',{force:true}).type('admin').should('have.value','admin')
        cy.get('#btn-login').should('be.visible').click({force:true})
    })
})