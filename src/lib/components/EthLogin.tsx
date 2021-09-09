import * as React from 'react';

interface Props {
    message: string;
    setAccount: (account:string) => void;
    setError: (err:any) => void;
}

const EthLogin: React.FC<Props> = ({message, setAccount, setError}:Props) => {
    const { ethereum } = window;

    const connectWallet = async () => {
        if(!ethereum){
            setError('Metamask Extension not detected')
            console.log('not detected')
            return
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setAccount(accounts[0])
            console.log(accounts[0])
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    React.useEffect(() => {
        const isWalletConnected = async () => {
        if(!ethereum) {
            setError('Metamask Extension not detected')
            console.log('use effect not detected')
            return
        }

        const accounts = await ethereum.request({ method: 'eth_accounts'})
        if (accounts.length !== 0) {
            const account = accounts[0]
            setAccount(account)
            console.log(account)
        }
    }
        isWalletConnected()
    },[ethereum, setAccount, setError])
    return (
        <button onClick={connectWallet}>{message}</button>
    )
}

export default EthLogin