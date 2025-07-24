import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreateCompanyPage } from '../../support/pageObjects/CreateCompanyPage';

describe('Company validation page test suite', () => {

  const companies = new CompaniesPage();
  const company = new CreateCompanyPage();
  

  //load json data
  before(function(){

    company.goTo("http://localhost:5000/create-company");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  
  it('TC_COMPANY_02 Create a company with valid data', function() {
    
    cy.get(companyName).type('New Test');
    cy.get('select').select("Real Estate");
    cy.get(email).type('new email')
    cy.get(createButton).click();
    

    //company.fillEmail(this.data.email);
   // company.clickCreateButton();
  //  company.validateCreation();
   // company.validateCompanyList(this.data.companyName);
       
    })// with valid data



})//fin describe suit

})