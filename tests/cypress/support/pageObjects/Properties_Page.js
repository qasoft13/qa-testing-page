export class Properties_Page{



//locators
get createPropertyButton() { return 'button[type="submit"]'};
get deleteButton() { return 'button.btn.btn-sm.btn-danger'};
get resetDataButton() { return 'button.btn btn-outline-light btn-sm'};


//nav 
goTo(url) { cy.visit(url) }


deletePropertyByName(propertyName) {
    cy.contains('td', propertyName).parent('tr').within(() => {
    cy.contains('button', 'Delete').click();
    });
  }

deleteValidation(propertyName){
    cy.contains('td', propertyName).should('not.exist')
}


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

}


resetData(){ cy.contains('button', 'Reset Data').click(); }

}//fin class