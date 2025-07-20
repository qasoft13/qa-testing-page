import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { utils } from '../../support/utils';

describe('Delete companies test suite', () => {
  
  const companies = new CompaniesPage();
  const navBar = new utils();

  //load json data
  beforeEach(function(){

    companies.goTo("http://localhost:5000/companies");
    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })

  it('TC_COMPANY_08 Delete a company', function() {
    /*
    Title: TC_COMPANY_08 Delete a company
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
        companies.deleteCompanyByName(this.data.companyName);
        companies.deleteValidation(this.data.companyName);

    })

    it('TC_COMPANY_09 Delete a random company', function() {
    /*
    Title: TC_COMPANY_08 Delete a random company
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
        companies.deleteRandomCompany();
        companies.deleteValidation();

    })

    
    //reset data after delete 
    after(function(){
        navBar.resetData();
    })
    
  })//fin describe suit

 

