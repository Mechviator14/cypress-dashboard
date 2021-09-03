describe('Pkh test 3', function (){
    it('tc-ubahFacil2', function(){
        cy.pkh()
        cy.get('input[id="input-email"]',{force:true}).type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('input[id="input-password"]',{force:true}).type('admin').should('have.value','admin')
        cy.get('#btn-login').should('be.visible').click({force:true})
        cy.get('#dataTable_filter > label > .form-control').type('wong ndablek').should('have.value','wong ndablek')
        cy.wait(800)
        cy.get('.btn-group > .btn').click()
        cy.get('span.dropdown-item').click()
    })
})