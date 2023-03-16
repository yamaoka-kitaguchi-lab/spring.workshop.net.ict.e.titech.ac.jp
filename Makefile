.PHONY: default
default:
	docker compose up pug
	docker compose up -d web
	docker compose logs -f web

.PHONY: build
build:
	docker compose up --force-recreate pug

.PHONY: web
web:
	docker compose up --force-recreate web

.PHONY: clean
clean:
	docker compose kill
	docker compose rm -f

.PHONY: remove
remove: clean
	rm -rf yarn.lock node_modules public
