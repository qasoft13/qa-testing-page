
describe('Company creation page test suite', () => {

    const companyNameField = '#name'
    const selectCompanyType = 'select'
    const emailField = '#email'
    const createCompanyButton =  '.btn-success'
    const urlCompanyCreation = '/create-company'
  
  
  beforeEach(function(){

    cy.visit("http://localhost:5000/create-company");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })

  it('TC_COMPANY_02 Create a company with valid data', function() {
    
    cy.get(companyNameField).type(this.data.companyName);
    cy.get(selectCompanyType).select(this.data.companyType);
    cy.get(emailField).type(this.data.email);
    cy.get(createCompanyButton).click();
    cy.contains('Company created successfully!').should('be.visible');
    cy.get('table.table.table-bordered.table-striped').should('contain.text', this.data.companyName);
       
    })

  it('TC_COMPANY_03 Create a valid company without email', function() {

    cy.get(companyNameField).type(this.data.companyName);
    cy.get(selectCompanyType).select(this.data.companyType);
    cy.get(createCompanyButton).click();
    cy.contains('Company created successfully!').should('be.visible');
    cy.get('table.table.table-bordered.table-striped').should('contain.text', this.data.companyName);
       
    })

  
  it('TC_COMPANY_04 Fail to create a company with empty form', function() {
    
     cy.get(createCompanyButton).click();
     cy.url().should('include', urlCompanyCreation);
    
  })
  
  it('TC_COMPANY_05 Fail to create a company with missing company name', function() {

    cy.get(selectCompanyType).select(this.data.companyType);
    cy.get(createCompanyButton).click();
    cy.url().should('include', urlCompanyCreation);

  })

  it('TC_COMPANY_06 Fail to create a company with missing company type', function() {
    
    
    cy.get(companyNameField).type(this.data.companyName);
    cy.get(createCompanyButton).click();
    cy.url().should('include', urlCompanyCreation);

  })

  it('TC_COMPANY_07 Fail to create a company with invalid email format', function() { 
   
    cy.get(companyNameField).type(this.data.companyName);
    cy.get(selectCompanyType).select(this.data.companyType);
    cy.get(emailField).type("invalid format");
    cy.get(createCompanyButton).click();
    cy.url().should('include', urlCompanyCreation);

 })

  after(function(){
    cy.contains('button', 'Reset Data').click();
    cy.contains('Session data reset successfully.').should('be.visible');
  })

})

 