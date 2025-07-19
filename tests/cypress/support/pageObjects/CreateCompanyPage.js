export class CreateCompanyPage{
    //go to the common page

    //locators 
    get companyName() { return '#name'; }
    get selectCompanyType() { return 'type'; }
    get email() {return '#email' }
    get createButton() { return '.btn btn-success'}
    get resetDataButton() { return 'button.btn btn-outline-light btn-sm'};

    //nav 
    goTo(url) { cy.visit(url) }

    //fill company name field
    fillCompanyName(company_name) { cy.get(this.companyName).type(company_name); }

    //select company dropdown
    selectCompanyType(type) { cy.get('select').select(type)}
    
    //fill email field
    fillEmail(email) { cy.get(this.email).type(email); }

    //click create button
    clickCreateButton() { cy.contains('Create Company').click(); }

    //validation creation
    validateCreation() { cy.contains('Company created successfully!').should('be.visible'); }

    ValidateCompanyInTable(companyName) { cy.get('table.table.table-bordered.table-striped').should('contain.text', companyName);}

    //validation company is on the list
    validateCompanyList(companyName) { cy.get('tbody').find('tr').should('contain.text', companyName) }

    // for Negative Test

    //validation creation with empty form
    //is not part of the DOM,
    //can't be selected via standard Cypress commands (e.g. .contains() or .should('have.text')),
    //and only appears when a required field is left blank and a native form submission is attempted.
    //Assert that the form is still on the same page (not redirected)
    validateEmptyForm() { cy.url().should('include', '/create-company'); }

    resetData(){ cy.contains('button', 'Reset Data').click(); }


}
