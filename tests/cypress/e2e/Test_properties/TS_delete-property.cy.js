import { utils } from '../../support/utils';

describe('Properties delete test suite', () => {

  const navBar = new utils();

  const createPropertyButton = 'button[type="submit"]'
  const deleteButton = 'button.btn.btn-sm.btn-danger'
 
  beforeEach(function(){

    cy.visit("http://localhost:5000/properties");

    cy.fixture('propertiesData').then(function(propertiesData){
         this.data = propertiesData[0];
    })

  })

  it('TC_PROP_19 Delete a property', function() {
    
    cy.contains('td', this.data.propertyName).parent('tr').within(() => {
    cy.get(deleteButton).click();
    //or  cy.contains('button', 'Delete').click();

    })
  })

  it('TC_PROP_20 Delete a random property', function() {

    cy.get('table tbody tr').then(rows => {
    const rowCount = rows.length;

    if (rowCount === 0) {
      cy.log('No properties to delete');
      return;
    }

    const randomIndex = Math.floor(Math.random() * rowCount);

    const row = rows[randomIndex];
    const propertyName = row.cells[0].innerText;

    cy.wrap(row).find('button.btn-danger').click();

    cy.get('table tbody').should('not.contain', propertyName);

    })

 
  })
      
  after(function(){
      navBar.resetData();
  })


})
