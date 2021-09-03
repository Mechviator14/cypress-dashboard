describe('Pkh test 2', function (){
    it('tc-tambahFacil', function(){
        cy.pkh()
        cy.get('input[id="input-email"]',{force:true}).type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('input[id="input-password"]',{force:true}).type('admin').should('have.value','admin')
        cy.get('#btn-login').should('be.visible').click({force:true})
        cy.get('.d-flex > .btn').should('be.visible').click()
        cy.get('input[id="user_fullname"]').type('wong jowo',{force:true}).should('have.value','wong jowo')
        cy.get('input[id="user_email"]').type('javajowo@gmail.com',{force:true}).should('have.value','javajowo@gmail.com')
        cy.get('#user_is_active',{force:true}).select('Aktif')
        cy.get('input[id="user_password"]').type('jowonese',{force:true}).should('have.value','jowonese')
        cy.get('#user_province_id').select('DI YOGYAKARTA').should('have.value','34')
        cy.get('#user_city_id').select('KAB. SLEMAN').should('have.value','3404')
        cy.get('#user_subdistrict_id').select('Mlati').should('have.value','340406')
        cy.get('textarea[id="user_address"]').type('omah gede',{force:true}).should('have.value','omah gede')
        // cy.get('#user_address').type('omah gede',{force:true}).should('have.value','omah gede')
        cy.get('#drop-zone').attachFile('209377413_2706495079652346_3575576564316998897_n.jpg')
        cy.get('.py-2',{force:true}).click()
        cy.get('#user_area_province_id').should('be.disabled')
        cy.get('#user_area_city_id').should('be.disabled')
        cy.get('#user_area_subdistrict_id').should('be.disabled')
        cy.get('#add').click()
        


    })
})