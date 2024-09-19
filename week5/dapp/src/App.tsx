
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
  WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';



function App() {


  return (
    <>


<ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton/>
                  <WalletDisconnectButton/>
                   <div>
                    hello
                   </div>
               
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
