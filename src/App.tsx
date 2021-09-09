import * as React from 'react';
import EthLogin from './lib/components/EthLogin';

function App() {
  const [currAccount, setCurrAcount] = React.useState("");
  const [error, setError] = React.useState("");
  return (
    <EthLogin message='Login with Eth' setAccount={setCurrAcount} setError={setError} />
  );
}

export default App;
