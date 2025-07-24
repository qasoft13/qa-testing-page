@echo off
REM === Combined Script to Run Flask and Cypress ===

echo Installing Python dependencies using Poetry...
poetry install

echo Setting FLASK_APP environment variable...
set FLASK_APP=app.routes:create_app

echo Starting Flask application...
start cmd /k "cd /d %cd% && poetry run flask run"

REM Wait for Flask to initialize
timeout /t 5

echo Starting Cypress from tests folder...
start cmd /k "cd /d %cd%\tests\ && node_modules\.bin\cypress.cmd open"