import { utils } from '../../support/utils';

describe('Delete companies test suite', () => {
  
  const navBar = new utils();
  const  deleteButton = 'button.btn.btn-sm.btn-danger';


  beforeEach(function() {

    cy.visit("http://localhost:5000/companies");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })

  it('TC_COMPANY_08 Delete a company', function() {

    cy.contains('td', this.data.companyName).parent('tr').within(() => {
    cy.get(deleteButton).click();
    //or  cy.contains('button', 'Delete').click();

    });

    cy.contains('td', this.data.companyName).should('not.exist')

  })

  it('TC_COMPANY_09 Delete a random company', function() {
  
    cy.get('table tbody tr').then(rows => {
    const rowCount = rows.length;
    
     if (rowCount === 0) {
      cy.log('No companies to delete');
      return;
    }

    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows[randomIndex];
    const companyName = row.cells[0].innerText;

    cy.wrap(row).find(deleteButton).click();

    cy.get('table tbody').should('not.contain', companyName);
   
   });

  })
    
  after(function(){
     navBar.resetData();
  })
    
})

 

