# EthLogin Component V1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Using the Component

//to be added

Example Usage:

```js
import * as React from "react";
import EthLogin from "./lib/components/EthLogin";

function App() {
  const [currAccount, setCurrAcount] = React.useState("");
  const [error, setError] = React.useState("");
  console.log("from app", currAccount);
  console.log("from app", error);
  return (
    <EthLogin
      message="Login with Eth"
      setAccount={setCurrAcount}
      setError={setError}
    />
  );
}

export default App;
```

### Run this project locally

Run the following commands:

```
yarn install
yarn start

```

## Learn More

This open source project is a work in progress. Any questions contact Rahat on twitter:
https://twitter.com/Rahatcodes
