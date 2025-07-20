export class CreatePropertyPage{
    //go to the common page

    //locators 
    get propertyName() { return '#name'; }
    get address() { return '#address'; }
    get price() { return '#price'; }
    get size() { return '#size'; }
    get selectCompany() { return '#company'; }
    get createButton() { return '.btn btn-success'}
    get backToListButton() { return '.btn btn-secondary ms-2'}
    //btn btn-secondary ms-2

    //nav 
    goTo(url) { cy.visit(url) }

    // fill fields

    //fill company name field
    fillPropertyName(property_name) { cy.get(this.propertyName).type(property_name); }

    fillMaxCharPropertyName() {
         const longText = "QA".repeat(250);
         cy.get(this.propertyName).type(longText);
     }

    fillAddress(property_address) { cy.get(this.address).type(property_address); }

    fillPrice(property_price) { cy.get(this.price).type(property_price); }

    fillSize(property_size) { cy.get(this.size).type(property_size); }

    //select company dropdown
    selectCompany(type) { cy.get('select').select(type)}

    //click create button
    clickCreateButton() { cy.contains('Create Property').click(); }

    //click back to lits
    clickBackToListButton() { cy.contains('Back to List').click(); }

    //validation creation
    validateCreation() { cy.contains('Property created successfully!').should('be.visible'); }

    //validate property listing
    ValidatePropertyInTable(propertyName) { cy.get('table.table.table-bordered.table-striped').should('contain.text', propertyName);}

    //validation creation with empty form
    //is not part of the DOM,
    //can't be selected via standard Cypress commands (e.g. .contains() or .should('have.text')),
    //and only appears when a required field is left blank and a native form submission is attempted.
    //Assert that the form is still on the same page (not redirected)
    validateEmptyForm() { cy.url().should('include', '/create-property'); }

    validateFormWithNegativePrice() { cy.contains('Price must be a positive number.').should('be.visible'); }

    

    


}
