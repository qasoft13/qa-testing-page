import { Properties_Page } from '../../support/pageObjects/Properties_Page';
import { utils } from '../../support/utils';

describe('Properties delete test suite', () => {
  
  const properties = new Properties_Page();
  const navBar = new utils();

  //load json data
  beforeEach(function(){

    properties.goTo("http://localhost:5000/properties");

    cy.fixture('propertiesData').then(function(propertiesData){
         this.data = propertiesData[0];
    })

  })

  it('TC_PROP_19 Delete a property', function() {
    /*
    Title: TC_PROP_19 Delete a property
    Type: Functional
    Priority: Hight
    Module: Properties listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
        properties.deletePropertyByName(this.data.propertyName);
        properties.deleteValidation(this.data.propertyName);

    })

    it('TC_PROP_20 Delete a random property', function() {
    /*
    Title: TC_PROP_20 Delete a random property
    Type: Functional
    Priority: Hight
    Module: Properties listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */
  
        properties.deleteRandomProperty();
        properties.deleteValidation();

    })

    
    //reset data after delete 
    after(function(){
      navBar.resetData();
    })
    
  })//fin describe suit

 

