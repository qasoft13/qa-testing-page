import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';

describe('Company creation test suite', () => {
  
  const companies = new CompaniesPage();

  //load json data
  beforeEach(function(){

    companies.goTo("http://localhost:5000/companies");
    cy.fixture('companiesData').then(function(companyData){
         this.data = companyData[1];
    })

  })

  it('TC_01 Delete a company', function() {
  
        companies.deleteCompanyByName(this.data.companyName);
        companies.deleteValidation(this.data.companyName);

    })

    it('TC_02 Delete a random company', function() {
  
        companies.deleteRandomCompany();
        companies.deleteValidation();

    })

    
    //reset data after delete 
    after(function(){
        companies.resetData();
    })
    
  })//fin describe suit

 

