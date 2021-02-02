
# Base project for use of typescript with react-three-fiber with snowpack build

Why this? snowpack builds and reloads fast, sub-second after saving the typescript file. Who doesn't want sub-second refresh of their development.
## To install and run

yarn install

yarn start

## How was this created?

i created with

```
npx create-snowpack-app snowpack-yarn --template @snowpack/app-template-react-typescript --use-yarn

yarn start

yarn add react-three-fiber

yarn add react-spring-three

yarn add react-three-gui
```

## ?

philip

EOL

# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
