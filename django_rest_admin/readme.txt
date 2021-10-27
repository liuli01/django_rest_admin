Adding table CRUD rest api with admin ui.
Adding table CRUD rest api without coding.

dependencies:

- django
- djangorestframework

install:
1. pip install django djangorestframewrok
2. pip install django_rest_admin


how to use:
1. start a demo project:
'''
python -m django startproject django_rest_admin_test
python ./manage.py migrate
python ./manage.py createsuperuser
python ./manage.py runserver

open web using chrome: http://127.0.0.1:8000/admin
login using the user createed with createsuperuser command
'''

2. add settings.py:
 A. INSTALLED_APPS.append('django_rest_admin')
 B. add in urls.py: path('rest_admin/', include('django_rest_admin.urls')),


