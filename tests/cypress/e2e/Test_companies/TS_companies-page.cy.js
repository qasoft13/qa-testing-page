import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';

describe('Company page test suite', () => {
  
  const companies = new CompaniesPage();
  
  before(function(){

    companies.goTo("http://localhost:5000/companies");

  })

  it('TC_COMPANY_07 Required fields are present in table', function() {
    /*
    Title: TC_COMPANY_01 Required fields are present in table
    Type: Functional
    Priority: High
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    companies.validateRequiredFieldInTable();
  
  });


})//fin describe suit

   


 
