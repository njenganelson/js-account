describe('Tunukiwa on Web', () => {
  beforeEach (() => {
      cy.visit("https://safaricom.com/bundles/tunukiwa")
    }) 
  it('Verify Page Title',()=>{
        cy.title().should('eq', 'Tunukiwa Bundles')
    })
  it('Tunukiwa Deals header section',()=>{
      cy.get('[role="tablist"]')
      //cy.get('#tunukiwaSpecials')
       //cy.get('#tunukiwaInternet')
       //cy.get('#tunukiwaMinutes')
        .should('include.text','DEALS')
        .should('include.text','INTERNET')
        .should('include.text','CALLS & SMS')
  })
  it('Verify Tunukiwa balance is populated',()=>{
    cy.get('.MuiCardContent-root')
    .should('include.text','Tunukiwa Voice Balance:')
    .should('include.text','Tunukiwa Data Balance:')
    .should('include.text','Tunukiwa Airtime Balance:')
  })
  it('Verify offers are displayed',()=>{
    cy.get('.MuiTypography-root.jss8.MuiTypography-body1')
    .should('be.visible')
  })
})