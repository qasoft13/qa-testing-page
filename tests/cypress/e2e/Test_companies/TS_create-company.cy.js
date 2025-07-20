import { CreateCompanyPage } from '../../support/pageObjects/CreateCompanyPage';
import { utils } from '../../support/utils';

describe('Company creation page test suite', () => {

  const company = new CreateCompanyPage();
  const navBar = new utils();
  

  //load json data
  beforeEach(function(){

    company.goTo("http://localhost:5000/create-company");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })//before each

  it('TC_COMPANY_02 Create a company with valid data', function() {
    /*
    Title: TC_COMPANY_02 Create a company with valid data
    Type: Functional
    Priority: High
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail(this.data.email);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
       
    })// with valid data

  it('TC_COMPANY_03 Create a valid company without email', function() {
    /*
    Title: TC_COMPANY_03 Create a valid company without email
    Type: Functional
    Priority: Low
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
       
    })// fin without email

  // negative test cases 
  it('TC_COMPANY_04 Fail to create a company with empty form', function() {
    /*
    Title: TC_COMPANY_04 Fail to create a company with empty form
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    company.clickCreateButton();
    company.validateEmptyForm();
    
  })// fin Submit with empty create company form
  
  it('TC_COMPANY_05 Fail to create a company with missing company name', function() {
    /*
    Title: TC_COMPANY_05 Fail to create a company with missing company name
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    company.selectCompanyType(this.data.companyType);
    company.clickCreateButton();
    company.validateEmptyForm();

  })// fin Submit with missing company name

  it('TC_COMPANY_06 Fail to create a company with missing company type', function() {
    /*
    Title: TC_COMPANY_06 Fail to create a company with missing company type
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
    
    company.fillCompanyName(this.data.companyName);
    company.clickCreateButton();
    company.validateEmptyForm();

  })// fin Submit with missing company type

  it('TC_COMPANY_07 Fail to create a company with invalid email format', function() { 
    /*
    Title: TC_COMPANY_07 Fail to create a company with invalid email format
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
    
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail("InvalidFormat");
    company.clickCreateButton();
    company.validateEmptyForm();

 })// fin Submit with invalid email format


//reset data after run TS
after(function(){
    navBar.resetData();
    })

})//fin describe suit

 