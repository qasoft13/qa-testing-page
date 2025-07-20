# Instruction for execution button of the file #

# Leasey.AI – QA Automation Test Page

Welcome to the **QA Automation Engineer** technical test for candidates applying to **Leasey.AI**.

This project simulates a simplified real estate management app. Your task is to explore the functionality, write automated test cases, and showcase your testing skills using the tools of your choice.

---

## 🏢 About the App

The web app allows users to:

### 1. List, Create, and Delete Companies

**Fields:**

- Company Name (required)
- Company Type (dropdown: Real Estate, Construction, Broker, etc.)
- Email (optional, must be valid if provided)

Successfully created companies are stored in memory and appear in a list.

### 2. List, Create, and Delete Properties

**Fields:**

- Property Name (required)
- Address (required)
- Price (required, must be a positive number)
- Size (optional)
- Company (must be selected from the list of existing companies)

Successfully created properties are listed below the form.

> 💡 This app is fully frontend-driven — data is stored **in memory** only, and resets on server restart. No database or backend persistence is used.

---

## 🎯 Your Task

As part of the QA Automation Engineer technical test for **Leasey.AI**, your task is to evaluate the real estate management app by writing automated tests that validate its core functionality, edge cases, and validation rules.

We’re interested in your approach to structuring tests, selecting scenarios, and communicating quality — not in full coverage or tool choice.

---

### 1. ⚙️ Automate Functional Tests

Write automated test cases that cover the **main user flows and validation logic**, including:

#### 🔸 CRUD Functionality
- Listing existing companies and properties
- Creating a company with valid data
- Creating a property linked to a company
- Deleting companies and properties

#### 🔸 Edge Cases and Validation
- Attempt to create a company with invalid email
- Attempt to create a property with negative or missing price
- Submit forms with required fields left blank
- Verify handling of long strings or boundary values
- Check that property creation fails when no company is selected

#### 🔸 Get Curious (Optional)
- Create your own test cases by exploring the app's routes, forms, and behaviors
- Try unexpected inputs or actions to uncover bugs or edge cases
- Review the base code and test anything that catches your eye

#### 🔸 Documentation
- Update the `tests/test-cases.md` file with a short explanation of your automated tests:
  - What you tested
  - Tools/frameworks used
  - Any known limitations or notes

---

### 2. 🧪 Test Framework

You may use any automation tool you're comfortable with, such as:

- **Selenium**
- **Playwright**
- **Cypress**
- **pytest + requests + BeautifulSoup (for simple DOM inspection)**

Organize your tests clearly under the `tests/` directory. Use meaningful naming and include assertions to validate expected behavior.

---

### 3. 🔧 Setup & Execution

- Add any required Python packages using Poetry (`poetry add --group dev your-package`) or Node packages using `npm`
- Update the `Makefile` to include a `test:` command that runs your automation tests

  For example, with `pytest`:

  ```makefile
  test:
  	poetry run pytest tests/
  ```

  Or with `Cypress`:

  ```makefile
  test:
  	npx cypress run
  ```

- Include any necessary configuration or usage notes in `tests/README.md` or as comments in your test files

---

### ✅ What We’re Looking For

- Clear and readable test structure
- Accurate and meaningful assertions
- Solid scenario selection (not just happy path)
- Minimal setup, easy to run
- Optional: creative exploration, bug findings, or documentation

---

## 🛠 Setup Instructions

You will need:

- Python 3.12 or higher
- Poetry (Python dependency manager): [https://python-poetry.org/docs/#installation](https://python-poetry.org/docs/#installation)

### 📦 To Run the App Locally:

```bash
# Install dependencies
make install

# Start the Flask app
make run

# Open the app in your browser:
http://localhost:5000/create-company
```

---

## 📁 Working With This Test

Please follow these steps to complete and submit your work:

1. **Fork this repository** to your GitHub account
2. Add your automation test code:
   - Add your test suite description in `tests/test-cases.md`
   - Place your automation test code inside the `tests/` directory
3. Add any required dependencies using Poetry or npm:

   ```bash
   poetry add --group dev your-package
   # or
   npm install your-package
   ```

4. Update the `Makefile` to define a `test:` command that runs your test suite
5. **Push your fork to GitHub** and share the link with us

---

## 📝 Submission Checklist

- [x] Forked the repository  
- [x] Test suite description added in `tests/test-cases.md`  
- [x] Automation tests included in `tests/`  
- [x] (Optional) Bug report included  
- [x] `make test` command added to `Makefile`  
- [x] Dependencies added to `pyproject.toml` or `package.json`  
- [x] Instructions included for how to run the tests (in a short README or code comments)

---

## 🙌 Final Notes

This is not a speed test — we’re more interested in how you think, organize, and communicate your testing work than in full coverage or tool choice.

Thank you for applying to **Leasey.AI**, and good luck!

— *Leasey.AI Recruitment Team*


====================================================================================================

# TEST EXECUTION #

✔ make test command added in Makefile	
✅ the Makefile to run Cypress: npx cypress run.
✔ Dependencies in pyproject.toml or package.json
✅ Cypress is managed via npm; assumed added to package.json. Poetry used for backend.

⚙ Prerequisites

1. Node.js and npm

2. Cypress as a dev dependency:
  npm install cypress --save-dev

3. If using Python/Flask backend:  
   poetry install

▶ Run Tests via Cypress UI
npx cypress open
Or, using the Makefile: make test

ip put the spec patter to be more visible specPattern: 'cypress/e2e/**/*.cy.js', it list all .cy.js cypress test