 Automated Test Coverage Summary

## ✅ What We Tested

The following core functionalities have been automated and tested:

🔸 CRUD Functionality
Listing existing companies and properties: 
TC_COMPANY_01 Required fields are present in table
TC_PROP_21 Required fields are present in table
TC_NAV_22 Nav Flow

Creating a company with valid data:
TC_COMPANY_02 Create a company with valid data
TC_COMPANY_03 Create a valid company without email

Creating a property linked to a company
TC_PROP_09 Create a new property
TC_PROP_09 Create a new property without size
TC_PROP_11 Create a new property without price

Deleting companies and properties
TC_COMPANY_08 Delete a company
TC_COMPANY_08 Delete a random company
TC_PROP_19 Delete a property
TC_PROP_20 Delete a random property

🔸 Edge Cases and Validation
Attempt to create a company with invalid email
TC_COMPANY_03 Create a valid company without email
TC_COMPANY_07 Submit with invalid email format

Attempt to create a property with negative or missing price
TC_PROP_11 Create a new property without price
TC_PROP_15 Create a new property with negative price

Submit forms with required fields left blank
TC_COMPANY_04 Fail to create a company with empty form
TC_COMPANY_05 Fail to create a company with missing company name
TC_COMPANY_06 Fail to create a company with missing company type
TC_PROP_16 Fail to create a new property with empty form

Verify handling of long strings or boundary values
(Incident) 

TC_PROP_18 Create a new property with max name characters @Regression
[anomalie]
Description: fields don’t have max characters validation “n” number of characters is valid
[steps to reproduce]
Fill the name field with 1000 characters and make submit, the submit for is accepted


🔸 (Optional)

TC_COMPANY_01 Required fields are present in table
TC_COMPANY_07 Fail to create a company with invalid email format
TC_PROP_21 Required fields are present in table
TC_NAV_22 Nav Flow


## 🧰 Tools and Frameworks Used

- **Cypress**: for end-to-end browser automation and assertions
- **JavaScript**: test scripting
- **Page Object Model (POM)**: to organize page-level logic and selectors
- **Git + GitHub**: for version control

## ⚠️ Known Limitations / Notes

- **Confirmation dialogs** (e.g., `window.confirm`) are stubbed automatically by Cypress.
- Tests currently run with default browser chrome 
- Form validation edge cases (e.g., invalid characters) are not covered, the form already validate the string inputs