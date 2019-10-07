# Schoolmouv Vuejs test

This exercice consist on creating a Vuejs app from scratch, you are free to use any tool you want, except for the following ones (which are mandatory) :
- Vuejs
- Vuex
- Vue Router
- Axios

UI has to be clean and usable both on desktop and mobile.

## Content

This is a simplified Signup process. All pages should work even on a browser refresh.

You will have to create a page with a common header looking like this one:

![](/screens/header.jpg)

(forget about the weird yellow thing, it's just an export issue)

The page shows a block like the following one centerd vertically and horinzontaly in the page

![](/screens/step1.png)

Fields meaning:
- `Email:Email`
- `Mot de passe:Password`

The 2 fields are mandatory before going to the next step on a click to the button (please differentiate hover and click styles for the button).

You'll have to check the email against the API. If the email is a@a.com, the API will give you an error, show some error message to the user.

Once everything is valid, an animation (like a fade or slide) shows the second step (which has his own url).

![](/screens/step2.png)

Fields meaning:
- `Fille:Girl`
- `Garçon:Boy`
- `Prénom:Firstname`
- `Nom:Lastname`
- `Classe:Degree`

The list "Liste" is filled with degrees coming from the API.

All fields are mandatory to finish the signup process.

Once validation is passed, you create the user by requesting the API.
If you receive a 201 HTTP Status response, you provide a visual information of the success for the user (up to you how and where it is shown).

## API
To run it, you need Nodejs and NPM:
- Go into `api` folder
- `npm install`
- `node api.js`

The API run locally on port 3000.

It will answer on:
- `GET /check-email?email=user-email`
- `GET /degrees`
- `POST /user`