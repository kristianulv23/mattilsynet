# Mattilsynet - Tilsynsresultater

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `Issues found during development`

- Had issues retrieving headers threw `response.headers.get` func
  - `X-Datahotel-Page`
  - `X-Datahotel-Total-Pages`
  - `X-Datahotel-Total-Posts`

Standard headers such as `Content-Type` works as expected.

[Stack Overflow](https://stackoverflow.com/questions/43344819/reading-response-headers-with-fetch-api?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) points out that the reason might lie in the cors settings, but does not get any cors errors when calling the API.

### `Technology`

- React
- SCSS
- Bootstrap