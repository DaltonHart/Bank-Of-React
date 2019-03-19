## Bank of React

[![Greenkeeper badge](https://badges.greenkeeper.io/DaltonHart/Bank-Of-React.svg)](https://greenkeeper.io/)

Submisson of coding challenge for GA.

To view application clone down the repo and then:

```bash
    cd Bank-of-React
    npm i
    npm start
```

Requirements:

- A React app built using the create-react-app package.
- Data pulled from existing API linked below. We recommend using the built-in fetch
  API in order to retrieve this data.

  - Use the API to display the data coming from the following endpoints:

    - https://bank-of-react-api.herokuapp.com/credits
    - https://bank-of-react-api.herokuapp.com/debits
    - https://bank-of-react-api.herokuapp.com/me

- Semantically clean JSX and JavaScript. Emphasize keeping components small and
  reusable. Use at least some CSS to design and organize the page.
- You must incorporate a few React concepts in your app:
  - Unidirectional Data Flow
  - Lifecycle methods such as componentDidMount
  - Making an API call inside a React App
- Your application should be clear and understandable, since your student facing code
  should be beginner friendly! Include comments or documentation briefly explaining
  your thought process and your code.

NOTES:

- Application was built with FIRST component structure in mind.
- Used Semantic React for simple styling.
- Implemented moment.js for improved date objects.
- Reorganized the data set for each endpoint to be newest in date to oldest to more match a real world application
- The profile PATCH request is not working on the heroku application due to CORS issue. Would have to deploy the application to remove the issue. To demo how the feature would work I used the same data set to manipulate state.
