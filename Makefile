.PHONY: install run test

install:
	poetry install --no-root
	npm install

run:
	poetry run flask --app app.routes run --debug

test:
	npx cypress run
