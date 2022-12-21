it('Proyek berhasil dibuat', () =>{
    cy.visit('http://localhost:8000/login')
    cy.get('#email').type('user')
    cy.get('#password').type('123')
    cy.get('.btn-primary').click()
    cy.visit('http://localhost:8000/create-project')
    cy.get('[name="title"]')//.type('UAS PPL')
    cy.get('textarea').typeCkeditor("Testing PPL")
    cy.get('[name="start"]').type('300000')
    cy.get('[name="end"]').type('500000')
    cy.get('[class="select2-search select2-search--inline"]').type('Java').type('{enter}')
    cy.get('[name="deadline"]').type ('2022-12-12')
    cy.get('button').contains('Kirim').click()
})