//import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreateCompanyPage } from '../../support/pageObjects/CreateCompanyPage';
import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreatePropertyPage } from '../../support/pageObjects/CreatePropertyPage';
import { utils } from '../../support/utils';
import { Properties_Page } from '../../support/pageObjects/Properties_Page';


describe('Navigation validation test suite', () => {

  const companies = new CompaniesPage();
  const company = new CreateCompanyPage();
  const property = new CreatePropertyPage();
  const properties_page = new Properties_Page();
  const navBar = new utils();
  

  beforeEach(function(){

    company.goTo("http://localhost:5000/properties");

  })//before each

  it('TC_NAV_22 Nav Flow', function() {
    /*
    Title: TC_NAV_22 Nav Flow
    Type: Functional
    Priority: Hight
    Module: Properties listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    navBar.clickLeaseyaiLogo();
    properties_page.clickCreateProperty();
    properties_page.validatePropLandingPage();
    property.clickCreateButton();
    property.validateEmptyForm();
    property.clickBackToListButton();
    navBar.clickCompaniesLogo();
    companies.validateCompLandingPage();
    company.clickCreateButton();
    company.validateCompLandingPage();
    company.clickCreateButton();
    company.validateEmptyForm();
    company.clickBackToListButton();
    companies.validateCompLandingPage();
    companies.deleteRandomCompany();
    
    })// fin NAV_01 Flow


  


//reset data after run TS
  after(function(){
     navBar.resetData();
    })

})//fin describe suit
