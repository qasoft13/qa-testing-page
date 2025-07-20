export class Properties_Page{



// locators
get createPropertyButton() { return 'button[type="submit"]'};
get deleteButton() { return 'button.btn.btn-sm.btn-danger'};
get resetDataButton() { return 'button.btn btn-outline-light btn-sm'};


// nav 
goTo(url) { cy.visit(url) }

clickCreateProperty() { cy.get('a.btn.btn-primary[href="/create-property"]').should('have.text', '+ Create Property').click(); }


// functions

validatePropLandingPage() { 
  cy.url().should('include', '/create-property');
  cy.contains('Create a New Property'); 
}// fin validate landing page

deletePropertyByName(propertyName) {
    cy.contains('td', propertyName).parent('tr').within(() => {
    cy.contains('button', 'Delete').click();
    });
  } // fin delete by name

deleteValidation(propertyName){
    cy.contains('td', propertyName).should('not.exist')
} // fin delete validation


deleteRandomProperty(){
// Get all rows in the table body
    cy.get('table tbody tr').then(rows => {
    const rowCount = rows.length;

    // Exit early if there are no companies
    if (rowCount === 0) {
      cy.log('No properties to delete');
      return;
    }

    // Pick a random index
    const randomIndex = Math.floor(Math.random() * rowCount);

    // Get the company name of the random row for later assertion
    const row = rows[randomIndex];
    const propertyName = row.cells[0].innerText;

    // Use Cypress to click the delete button in that row
    cy.wrap(row).find('button.btn-danger').click();

    // Optionally assert the company was deleted
    cy.get('table tbody').should('not.contain', propertyName);
  });

}// fin delete random property

validateRequiredFieldInTable(){

    cy.get('table tbody tr').each(($row) => {
        // Validate Property Name cell is not empty
    cy.wrap($row).find('td').eq(0).should('not.be.empty');
        // Validate Property address cell is not empty
    cy.wrap($row).find('td').eq(1).should('not.be.empty');
       // Validate Property Price is not empty
    cy.wrap($row).find('td').eq(2).should('not.be.empty');
       // Validate Company is not empty
    cy.wrap($row).find('td').eq(4).should('not.be.empty');
       // Validate Button Delete is present
    cy.wrap($row).find('td').eq(5).should('not.be.empty');

});

}// fin validate required fields table

resetData(){ cy.contains('button', 'Reset Data').click(); }

}//fin class