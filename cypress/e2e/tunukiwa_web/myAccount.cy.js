describe('Navigate to My Safaricom Account', () => {
  
  it('User is not connected to Safaricom Data bundles', () => {
      cy.visit("https://safaricom.com/account")
    }) 
  it('Verify Page Title',()=>{
        cy.title().should('eq', 'My Account')
    })
  it('User is not connected to Safaricom Data Bundles',()=>{
      cy.get('#client-snackbar')
        .should('have.text',"Sorry, we were unable to retrieve your number. Please switch to Safaricom Mobile Data on your device, or try again later.")
  })
})