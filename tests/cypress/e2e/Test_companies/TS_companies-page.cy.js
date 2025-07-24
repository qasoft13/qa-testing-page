
describe('Company page test suite', () => {
  

  before(function(){

   cy.visit("http://localhost:5000/companies");

  })

  it('TC_COMPANY_07 Required fields are present in table', function() {
    
     cy.get('table tbody tr').each(($row) => {
      
        cy.wrap($row).find('td').eq(0).should('not.be.empty');
        
        cy.wrap($row).find('td').eq(1).should('not.be.empty');
       
        cy.wrap($row).find('td').eq(3).should('not.be.empty'); 
     });
  
  })


})

   


 
