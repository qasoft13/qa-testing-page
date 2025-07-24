import { utils } from '../../support/utils';

describe('Navigation validation test suite', () => {
  
  const navBar = new utils();
  
  const companyNameField = '#name';
  const selectCompanyType = 'select';
  const emailField = '#email';
  const createCompanyButton =  '.btn-success';
  const urlCompanyCreation = '/create-company';
 
  const propertyNameFiled = '#name';
  const addressField = '#address';
  const priceField = '#price';
  const sizeField = '#size';
  const selectCompanyField = '#company';
  const createButton = '.btn-success';
  const backToListButton = '.btn-secondary ms-2';
  const urlPropertyCreation = '/create-property';

  const deleteButton = 'button.btn.btn-sm.btn-danger';
   

  before(function(){

    cy.visit("http://localhost:5000/properties");

  })

  it('TC_NAV_22 Nav Flow', function() {
    

    navBar.clickLeaseyaiLogo();
    cy.url().should('include', '/properties');
    cy.get('.btn-primary').click();
    cy.contains('Create a New Property');
    cy.get('.btn-secondary').click();
    navBar.clickCompaniesLogo();
    cy.contains('Company List');
    cy.get(createCompanyButton).should('have.text', '+ Create Company');
   // company.validateCompLandingPage();
    //company.clickCreateButton();
    //company.validateEmptyForm();
   // company.clickBackToListButton();
   // companies.validateCompLandingPage();
   // companies.deleteRandomCompany();
    
    })


  


//reset data after run TS
 // after(function(){
 //    navBar.resetData();
  //  })

})