
describe('Properties page test suite', () => {

 
  before(function(){

    cy.visit("http://localhost:5000/properties");
   
  })

  it('TC_PROP_21 Required fields are present in table', function() {
     cy.get('table tbody tr').each(($row) => {
       
    cy.wrap($row).find('td').eq(0).should('not.be.empty');
        
    cy.wrap($row).find('td').eq(1).should('not.be.empty');
      
    cy.wrap($row).find('td').eq(2).should('not.be.empty');
      
    cy.wrap($row).find('td').eq(4).should('not.be.empty');
    
    cy.wrap($row).find('td').eq(5).should('not.be.empty');

    });

  });

})



