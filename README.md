# TODO-PRIME

## About

The application was written according to the tutorial created by Karl Hadwen (I highly recommend watching it - just click [here](https://www.youtube.com/watch?time_continue=2&v=HgfA4W_VjmI)). It is a Todoist clone written from the scratch - starting from 'create-react-app', through React Hooks, Custom Hooks, Context, SCSS for styling and ending with tests using the React Testing Library.

After finishing the tutorial, I added:
* more style (especially darkmode)
* mobile version of the sidebar component (including changes in behavior of the necessary dependent components)

## Installation

Using terminal clone this repository and run npm install.

```
git clone https://github.com/m-zaremba/todo-prime.git
cd todo-prime
npm install
or
yarn install
```

## Configuring firebase

Configure your own firebase project (you can follow the instructions in [this](https://css-tricks.com/intro-firebase-react/)  tutorial - sections from #Creating our Firebase Database) and paste your values into /src/firebase.js file.

## Starting the app

After installation start the app with:

```
npm start
or
yarn start
```

Now try to add a project - if it doesn't show up open the console in the browser and then go to 1:55:16 of the Karl's tutorial. Debug firebase accordingly and the app should work fine!


### TODO:

* Fix router bug (redirecting logged in user to landing page after page refresh)
* Restructure app's theme 'provider'
