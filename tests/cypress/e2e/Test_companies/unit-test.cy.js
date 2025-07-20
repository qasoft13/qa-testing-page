import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreateCompanyPage } from '../../support/pageObjects/CreateCompanyPage';

describe('Company validation page test suite', () => {

  const companies = new CompaniesPage();
  const company = new CreateCompanyPage();
  

  //load json data
  beforeEach(function(){

    company.goTo("http://localhost:5000/create-company");

    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[0];
    })

  })//beforeeach

  it('TC_COMPANY_01 Create a company with valid data', function() {
  
    company.fillCompanyName(this.data.companyName);
    company.selectCompanyType(this.data.companyType);
    company.fillEmail(this.data.email);
    company.clickCreateButton();
    company.validateCreation();
    company.validateCompanyList(this.data.companyName);
       
    })


 
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


})//fin describe suit

//})

//})