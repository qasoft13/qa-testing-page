# Leasey.AI – QA Automation Test Page

Welcome to the **QA Automation Engineer** technical test for candidates applying to **Leasey.AI**.

This project simulates a simplified real estate management app. Your task is to explore the functionality, write test cases, and optionally implement automation using your preferred tools.

---

## 🏢 About the App

The web app allows users to:

### 1. Create Companies

* **Fields**:

  * Company Name (required)
  * Company Type (dropdown: Real Estate, Construction, Broker, etc.)
  * Email (optional, must be valid if provided)
* Successfully created companies are stored in memory and appear in a list.

### 2. Create Properties

* **Fields**:

  * Property Name (required)
  * Address (required)
  * Price (required, must be a positive number)
  * Size (optional)
  * Company (must be selected from the list of existing companies)
* Successfully created properties are listed below the form.

> 💡 This app is fully frontend-driven — data is stored **in memory** only, and resets on server restart. No database or backend persistence is used.

---

## 🎯 Your Task

1. **Write Manual Test Cases**

   * Cover both company and property creation flows.
   * Include valid cases, edge cases, and error conditions.
   * Submit in Markdown or PDF format.

2. **(Optional) Automate 2–3 Scenarios**

   * Use any automation tool you prefer (Selenium, Cypress, Playwright, etc.).
   * Focus on structure, clarity, and correctness — not full coverage.
   * Add a `make test` command to the `Makefile` to run your tests.

3. **(Optional) Report Bugs**

   * Identify any functional, validation, or UX issues.
   * Describe each clearly in your submission.

---

## 🛠 Setup Instructions

You will need:

* Python 3.12 or higher
* Poetry (Python dependency manager): [https://python-poetry.org/docs/#installation](https://python-poetry.org/docs/#installation)

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

Please follow these steps to complete and submit your test:

1. **Fork this repository**
2. Add your manual test cases and automation code:

   * Place your manual test cases in a new file inside `tests/` (e.g. `tests/test-cases.md`)
   * Place your automation code inside the `tests/` directory (you can organize as needed)
3. **Add any required dependencies** for your automation framework using Poetry:

   ```bash
   poetry add --group dev your-package
   ```
4. \*\*Update the \*\*\`\` to include a `test:` command to run your automation:

   ```makefile
   test:
   	poetry run pytest tests/
   ```

   Or, for Cypress:

   ```makefile
   test:
   	npx cypress run
   ```
5. **Push your fork to GitHub** and share the link with us.

---

## 📝 Submission Checklist

- [x] Forked the repository  
- [x] Manual test cases added in `tests/`  
- [x] (Optional) Automation tests added in `tests/`  
- [x] (Optional) Bug report included  
- [x] `make test` command added to `Makefile`  
- [x] Dependencies added to `pyproject.toml` via Poetry (if needed)  
- [x] Instructions included for how to run the tests (in a short README or comment)  


---

## 🙌 Final Notes

This is not a speed test — we’re more interested in how you think, organize, and communicate your testing work than in full coverage or tool choice.

Thank you for applying to **Leasey.AI**, and good luck!

— *Leasey.AI Recruitment Team*
