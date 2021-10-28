PYTHON ?= python

.PHONY: dist
dist:
	$(PYTHON) setup.py sdist bdist_wheel

.PHONY: upload
upload:
	$(PYTHON) -m twine upload dist/*

.PHONY: clean
clean:
	rm  -rf build dist  django_rest_admin.egg-info



.PHONY: test
test:
	pytest

