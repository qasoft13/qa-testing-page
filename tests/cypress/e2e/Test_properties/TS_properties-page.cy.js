import { Properties_Page } from '../../support/pageObjects/Properties_Page';
import { utils } from '../../support/utils';


describe('Properties page test suite', () => {
  
  const properties = new Properties_Page();
  //const navBar = new utils();

  //load json data
  before(function(){

    properties.goTo("http://localhost:5000/properties");
   
  })

  it('TC_PROP_21 Required fields are present in table', function() {
    /*
    Title: TC_PROP_21 Required fields are present in table
    Type: Functional
    Priority: Hight
    Module: Properties listings
    Created By: Juan De los Rios
    Date: 25-07-20
    */

  
        properties.validateRequiredFieldInTable();

  });

})//fin describe suit



