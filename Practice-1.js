describe('kumpulan test case', function (){
    // it('tc-1', function(){
    //   cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
      /*   cy.visit('https://www.bukalapak.com/')
        cy.get('.bl-link > .pr-4').click()
        cy.get('.bl-text-field__inner').type('bawok')
        cy.get('.mv-24 > .bl-button').click()
    }) */   
//     cy.get('select').select('opel').should('have.value','opel')
//     cy.get('[value="Bike"]').check().should('have.value','Bike')
//     cy.get('#idExample').click()
// })
/* it('tc-2', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('select').select('volvo').should('have.value','volvo')
    cy.get('[value="Car"]').check().should('have.value','Car')
    cy.get('.buttonClass').click() 
}) */
/* it('tc-3', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('[value="Bike"]').check().should('have.value','Bike')
    cy.get('[value="Car"]').check().should('have.value','Car')
    cy.get('.et_pb_column_3 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form > button').click()
}) */
/* it('tc-4', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
})
it('tc-5', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('#simpleElementsLink').click()
    cy.get('.entry-title').should('have.text','Link success')
}) */
/* it('tc-6', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('.et_pb_cta_1 > .et_pb_button_wrapper > .et_pb_button').click()
    cy.get('input[id="user[email]"]').type('ezra.mufa@gmail.com')
    cy.get('input[id="user[password]"]').type('12345678')
    cy.get('input[id="user[remember_me]"]').check()
    cy.get('.form__button-group > .button').click()
    // cy.get('.form_label').click()
}) */
it('tc-7', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('.et_pb_cta_1 > .et_pb_button_wrapper > .et_pb_button').click()
    cy.get('.form__forgot-password').click()
    cy.get('input[id="user[email]"]').type('ezra.mufa@gmail.com').should('be.visible').should('have.value','ezra.mufa@gmail.com')
    cy.get('.button').click()
    cy.get('.img-responsive').should('be.visible').click()
    // cy.get('.form_label').click()
})
}) 
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})
