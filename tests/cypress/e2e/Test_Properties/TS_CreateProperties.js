import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreatePropertyPage } from '../../support/pageObjects/CreatePropertyPage';

describe('Company validation page test suite', () => {

  //const properties = new CompaniesPage();
  const property = new CreatePropertyPage();
  

  //load json data
  beforeEach(function(){

    property.goTo("http://localhost:5000/create-property");

    cy.fixture('propertiesData').then(function(propertyData){
         this.data = propertyData[1];
    })

  })//before each

  it('TC_PROP_01 Create a new property', function() {
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
    property.ValidatePropertyInTable(this.data.propertyName);
       
    })

  it('TC_PROP_02 Create a new property without size', function() {
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
    property.ValidatePropertyInTable(this.data.propertyName);
       
    })

  it('TC_PROP_03 Create a new property without price', function() {
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

  

  it('TC_PROP_05 Fail to create a new property without size', function() {
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

//Negative TC
  it('TC_PROP_06 Fail to Create a new property with negative price', function() {
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    //hardcode the price for don't interrupt the TS 
    property.fillPrice(-1999);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateFormWithNegativePrice();
       
    })


  it('TC_PROP_07 Fail to create a new property with empty form', function() {

    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

 it('TC_PROP_08 Fail to create a new property without a listing company', function() {
    
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

//Bouandary
//bug not field property name restriction
 it('TC_PROP_09 Create a new property with max name characters (Regression)', function() {
  
    property.fillMaxCharPropertyName();
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
       
    })



})//fin describe suit

//})

//})