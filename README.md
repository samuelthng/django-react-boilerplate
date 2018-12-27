# Django-React Backbone

> The bare skeleton of the project is based on [this tutorial](https://www.valentinog.com/blog/tutorial-api-django-rest-react/#Django_REST_with_React_resources).
>
> Credits to Valentino Gagliardi for his wonderful tutorial.

---

## Objective

The aim of this project is to serve as a web starter kit for a Raspberry Pi

## Django

This project aims to be modular with two main sides. Django serves APIs as the middle-man between React and the server's internal or private services. The project serves the React front-end as a Django sub-application. Future services shall be encapsulated in their own Django sub-application.

## React

The React Front-end shall only consume a server's internal/private services via Django's REST Framework. As such, a server's internal/private services must only be exposed via an API.

## Requirements

- Node.js
- pipenv
- Python 3.x

## Setup

```
git clone https://github.com/samuelthng/django-react-boilerplate.git
cd django-react-boilerplate
pipenv install
npm install
pipenv run python django/manage.py migrate
```

## Running the test server

Inside the `django-react-boilerplate` directory, open two terminals and run these:

The Django Server
```
pipenv run python django/manage.py runserver
```

The React Hot Reload Server
```
npm run dev
```

or use VSCode, the debug profiles are setup already.
