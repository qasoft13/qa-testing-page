import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreateCompanyPage } from '../../support/pageObjects/CreateCompanyPage';

describe('Company validation page test suite', () => {

  const companies = new CompaniesPage();
  const company = new CreateCompanyPage();
  

  //load json data
  beforeEach(function(){

    company.goTo("http://localhost:5000/create-company");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })//before each

  it('TC_COMPANY_01 Create a company with valid data', function() {
  
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail(this.data.email);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
       
    })

  it('TC_COMPANY_02 Create a valid company without email', function() {
  
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
       
    })

  // negative test cases 
  it('TC_COMPANY_03 Submit with empty create company form', function() {

    company.clickCreateButton();
    company.validateEmptyForm();
    
  })//fin Submit with empty create company form
  
  it('TC_COMPANY_04 Submit with missing company name', function() {

    company.selectCompanyType(this.data.companyType);
    company.clickCreateButton();
    company.validateEmptyForm();

  })//fin Submit with missing company name

  it('TC_COMPANY_05 Submit with missing company type', function() {

    company.fillCompanyName(this.data.companyName);
    company.clickCreateButton();
    company.validateEmptyForm();

  })//fin Submit with missing company type

  it('TC_COMPANY_06 Submit with invalid email format', function() { 

    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail("InvalidFormat");
    company.clickCreateButton();
    company.validateEmptyForm();

 })//fin Submit with invalid email format
/*
 it('TC_07 Create an existing company (Duplicate)', function() {

    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail(this.data.email);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
 
})//fin Create an existing company (Duplicate)
*/

//reset data after run TS
after(function(){
    company.resetData();
    })

})//fin describe suit

 