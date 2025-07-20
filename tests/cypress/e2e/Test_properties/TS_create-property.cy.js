import { CompaniesPage } from '../../support/pageObjects/CompaniesPage';
import { CreatePropertyPage } from '../../support/pageObjects/CreatePropertyPage';
import { utils } from '../../support/utils';

describe('Properties creation page test suite', () => {

  const property = new CreatePropertyPage();
  const navBar = new utils();
  

  // load json data
  beforeEach(function(){

    property.goTo("http://localhost:5000/create-property");

    cy.fixture('propertiesData').then(function(propertyData){
         this.data = propertyData[1];
    })

  })// fin before each
  

  it('TC_PROP_09 Create a new property', function() {
    /*
    Title: TC_PROP_09 Create a new property
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
    property.ValidatePropertyInTable(this.data.propertyName);
       
    })// fin TC_PROP_09

  it('TC_PROP_10 Create a new property without size', function() {
    /*
    Title: TC_PROP_09 Create a new property without size
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
    property.ValidatePropertyInTable(this.data.propertyName);
       
    })

  it('TC_PROP_11 Create a new property without price', function() {
    /*
    Title: TC_PROP_11 Create a new property without price
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })


  it('TC_PROP_12 Fail to create a new property without size', function() {
    /*
    Title: TC_PROP_12 Fail to create a new property without size
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

//Negative TC

  it('TC_PROP_13 Create a new property without Name', function() {
    /*
    Title: TC_PROP_13 Fail to create a new property without size
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    }) // property without address

  it('TC_PROP_14 Create a new property without address', function() {
    /*
    Title: TC_PROP_14 Create a new property without address
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillPropertyName(this.data.propertyName);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    }) // property without address

  it('TC_PROP_15 Fail to Create a new property with negative price', function() {
    /*
    Title: TC_PROP_15 Create a new property with negative price
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    //hardcode the price for don't interrupt the TS 
    property.fillPrice(-1999);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateFormWithNegativePrice();
       
    })


  it('TC_PROP_16 Fail to create a new property with empty form', function() {
    /*
    Title: TC_PROP_16 Fail to create a new property with empty form
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

 it('TC_PROP_17 Fail to create a new property without a listing company', function() {
    /*
    Title: TC_PROP_17 Fail to create a new property without a listing company
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
    
    property.fillPropertyName(this.data.propertyName);
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.clickCreateButton();
    property.validateEmptyForm();
       
    })

//Bouandary
//bug not field property name restriction
 it('TC_PROP_18 Create a new property with max name characters @Regression', function() {
    /*
    Title: TC_PROP_18 Create a new property with max name characters @Regression
    Type: Functional
    Priority: Hight
    Module: Companies listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
    property.fillMaxCharPropertyName();
    property.fillAddress(this.data.address);
    property.fillPrice(this.data.price);
    property.fillSize(this.data.size);
    property.selectCompany(this.data.company);
    property.clickCreateButton();
    property.validateCreation();
       
    })

//reset data after delete 
    after(function(){
        navBar.resetData();
    })

})//fin describe suit