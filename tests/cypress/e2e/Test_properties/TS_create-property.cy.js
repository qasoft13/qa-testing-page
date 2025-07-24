
import { utils } from '../../support/utils';

describe('Properties creation page test suite', () => {

  const navBar = new utils();

  const  propertyNameFiled = '#name'
  const addressField = '#address'
  const priceField = '#price'
  const sizeField = '#size'
  const selectCompanyField = '#company'
  const createButton = '.btn-success'
  const backToListButton = '.btn btn-secondary ms-2'
  const urlPropertyCreation = '/create-property'
   

  beforeEach(function(){

    cy.visit("http://localhost:5000/create-property");

    cy.fixture('propertiesData').then(function(propertyData){
         this.data = propertyData[1];
    })

  })
  
  it('TC_PROP_09 Create a new property/ TEST EN CALIENTE ', function() {
    
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);   
    cy.get(sizeField).type(this.data.size);
    //cy.get(this.size).should('have.value', '');
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.contains('Property created successfully!').should('be.visible')
    cy.get('table.table.table-bordered.table-striped').should('contain.text', this.data.propertyName);
       
  })

  it('TC_PROP_10 Create a new property without size', function() {
   
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);  
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.contains('Property created successfully!').should('be.visible')
    cy.get('table.table.table-bordered.table-striped').should('contain.text', this.data.propertyName);
       
  })

  it('TC_PROP_11 Fail to Create a new property without price', function() {
    
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
       
  })

  it('TC_PROP_12 Fail to create a new property without size', function() {
  
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
       
  })
 
  it('TC_PROP_13 Fail to Create a new property without Name', function() {
   
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);   
    cy.get(sizeField).type(this.data.size);
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
    
  })

  it('TC_PROP_14 Create a new property without address', function() {
   
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(priceField).type(this.data.price);   
    cy.get(sizeField).type(this.data.size);
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
       
  })

  it('TC_PROP_15 Fail to Create a new property with negative price', function() {
  
    cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    //hardcode the price for don't interrupt the TS 
     cy.get(priceField).type(-1000);   
    cy.get(sizeField).type(this.data.size);
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.contains('Price must be a positive number.').should('be.visible');

  })
  
  it('TC_PROP_16 Fail to create a new property with empty form', function() {
    
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
       
  })

 it('TC_PROP_17 Fail to create a new property without a listing company', function() {
    
    
  cy.get(propertyNameFiled).type(this.data.propertyName);
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);   
    cy.get(sizeField).type(this.data.size);
    cy.get(createButton).click();
    cy.url().should('include', urlPropertyCreation);
       
})

 it('TC_PROP_18 Create a new property with max name characters @Regression', function() {
  
    const longText = "QA".repeat(250);

    cy.get(propertyNameFiled).type(longText);
    cy.get(addressField).type(this.data.address);
    cy.get(priceField).type(this.data.price);   
    cy.get(sizeField).type(this.data.size);
    cy.get(selectCompanyField).select(this.data.company);
    cy.get(createButton).click();
    cy.contains('Property created successfully!').should('be.visible')
    cy.get('table.table.table-bordered.table-striped').should('contain.text', this.data.propertyName);
       
  })

  after(function(){
       navBar.resetData();
  })

})//fin describe suit