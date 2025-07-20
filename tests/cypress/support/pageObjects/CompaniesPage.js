export class CompaniesPage{



//locators
get createCompanyButton() { return 'button[type="submit"]'};
get deleteButton() { return 'button.btn.btn-sm.btn-danger'};
get resetDataButton() { return 'button.btn btn-outline-light btn-sm'};


//nav 
goTo(url) { cy.visit(url) }

validateCompLandingPage() { 
  cy.url().should('include', '/companies');
  cy.contains("Company List");

}


deleteCompanyByName(companyName) {
    cy.contains('td', companyName).parent('tr').within(() => {
    cy.contains('button', 'Delete').click();
    });
  }

deleteValidation(companyName){
    cy.contains('td', companyName).should('not.exist')
}


deleteRandomCompany(){
// Get all rows in the table body
  cy.get('table tbody tr').then(rows => {
    const rowCount = rows.length;

    // Exit early if there are no companies
    if (rowCount === 0) {
      cy.log('No companies to delete');
      return;
    }

    // Pick a random index
    const randomIndex = Math.floor(Math.random() * rowCount);

    // Get the company name of the random row for later assertion
    const row = rows[randomIndex];
    const companyName = row.cells[0].innerText;

    // Use Cypress to click the delete button in that row
    cy.wrap(row).find('button.btn-danger').click();

    // Optionally assert the company was deleted
    cy.get('table tbody').should('not.contain', companyName);
  });

}// fin delete random


validateRequiredFieldInTable(){

        cy.get('table tbody tr').each(($row) => {
        // Validate Company Name cell is not empty
        cy.wrap($row).find('td').eq(0).should('not.be.empty');
        // Validate Company Type cell is not empty
       cy.wrap($row).find('td').eq(1).should('not.be.empty');
       // Validate Button Delete is not empty
       cy.wrap($row).find('td').eq(3).should('not.be.empty');

});

}// fin validate table

resetData(){ cy.contains('button', 'Reset Data').click(); }

}//fin class