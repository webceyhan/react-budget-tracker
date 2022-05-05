<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/react-budget-tracker/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/react-budget-tracker/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/webceyhan/react-budget-tracker/actions/workflows/netlify-deploy.yml/badge.svg)](https://github.com/webceyhan/react-budget-tracker/actions/workflows/netlify-deploy.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Budget Tracker App + React + MaterialUI + Speechly

This is a mobile friendly Budget Tracker inspired by a tutorial.\

It's covering many advanced React & JavaScript topics. Some of them are State Management in React, Context API, Local Storage, Material UI, and how to create a scalable React folder structure. 

But most importantly, how to add voice capabilities to the applications using Speechly which is a cloud-based speech recognition service. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/react-budget-tracker.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd react-budget-tracker
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Run the app in the development mode.

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

<br>
<!-- TESTING ///////////////////////////////////////////////////////////// -->

## Testing

Launch the test runner in the interactive watch mode.

```sh
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the app for production to the `build` folder.

```sh
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

You can also preview the built application locally as follows:

```sh
npm install -g serve # if not installed yet
serve -s build
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment on Netlify

A GitHub Action will automatically deploy the project to Netlify on every push.

> See the details in [.github/workflows/netlify-deploy.yml](./.github/workflows/netlify-deploy.yml)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [React](https://reactjs.org/)
-   [Material UI](https://material-ui.com/)
-   [Speechly](https://speechly.com/)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Netlify](https://www.netlify.com/)
    -   [Netlify Actions](https://github.com/nwtgck/actions-netlify)
-   [Build and Deploy a Voice Powered React App - Budget Tracker | Context API, Local Storage, Speechly](https://www.youtube.com/watch?v=NnUFOWR_V4Y&t=4656s)
