.PHONY: install run test

install:
	poetry install --no-root

run:
	poetry run flask --app app.routes run --debug

test:
	@echo "Define your test command here (e.g., pytest, cypress, etc.)"
