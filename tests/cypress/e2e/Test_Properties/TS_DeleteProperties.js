import { Properties_Page } from '../../support/pageObjects/Properties_Page';

describe('Properties delete test suite', () => {
  
  const properties = new Properties_Page();

  //load json data
  beforeEach(function(){

    properties.goTo("http://localhost:5000/properties");
    cy.fixture('propertiesData').then(function(propertiesData){
         this.data = propertiesData[0];
    })

  })

  it('TC_01 Delete a property', function() {
  
        properties.deletePropertyByName(this.data.propertyName);
        properties.deleteValidation(this.data.propertyName);

    })

    it('TC_02 Delete a random property', function() {
  
        properties.deleteRandomProperty();
        properties.deleteValidation();

    })

    
    //reset data after delete 
    after(function(){
    properties.resetData();
    })
    
  })//fin describe suit

 

