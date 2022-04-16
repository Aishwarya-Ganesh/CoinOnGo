import { Web3 } from 'web3';
// const Web3 = require('web3');


const networks =
{'Ethereum Mainnet': {'name': 'Ethereum Mainnet',
'chain': 'ETH',
'icon': 'ethereum',
'rpc': ['https://mainnet.infura.io/v3/${INFURA_API_KEY}',
 'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
 'https://api.mycryptoapi.com/eth',
 'https://cloudflare-eth.com'],
'faucets': [],
'nativeCurrency': {'name': 'Ether', 'symbol': 'ETH', 'decimals': 18},
'infoURL': 'https://ethereum.org',
'shortName': 'eth',
'chainId': 1,
'networkId': 1,
'slip44': 60,
'ens': {'registry': '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'},
'explorers': [{'name': 'etherscan',
  'url': 'https://etherscan.io',
  'standard': 'EIP3091'}]},
'Cronos Mainnet Beta': {'name': 'Cronos Mainnet Beta',
'chain': 'CRO',
'rpc': ['https://evm.cronos.org'],
'faucets': [],
'nativeCurrency': {'name': 'Cronos', 'symbol': 'CRO', 'decimals': 18},
'infoURL': 'https://cronos.org/',
'shortName': 'cro',
'chainId': 25,
'networkId': 25,
'explorers': [{'name': 'Cronos Explorer',
  'url': 'https://cronos.org/explorer',
  'standard': 'none'}]},
'Binance Smart Chain Mainnet': {'name': 'Binance Smart Chain Mainnet',
'chain': 'BSC',
'rpc': ['https://bsc-dataseed1.binance.org',
 'https://bsc-dataseed2.binance.org',
 'https://bsc-dataseed3.binance.org',
 'https://bsc-dataseed4.binance.org',
 'https://bsc-dataseed1.defibit.io',
 'https://bsc-dataseed2.defibit.io',
 'https://bsc-dataseed3.defibit.io',
 'https://bsc-dataseed4.defibit.io',
 'https://bsc-dataseed1.ninicoin.io',
 'https://bsc-dataseed2.ninicoin.io',
 'https://bsc-dataseed3.ninicoin.io',
 'https://bsc-dataseed4.ninicoin.io',
 'wss://bsc-ws-node.nariox.org'],
'faucets': ['https://free-online-app.com/faucet-for-eth-evm-chains/'],
'nativeCurrency': {'name': 'Binance Chain Native Token',
 'symbol': 'BNB',
 'decimals': 18},
'infoURL': 'https://www.binance.org',
'shortName': 'bnb',
'chainId': 56,
'networkId': 56,
'slip44': 714,
'explorers': [{'name': 'bscscan',
  'url': 'https://bscscan.com',
  'standard': 'EIP3091'}]},
'Polygon Mainnet': {'name': 'Polygon Mainnet',
'chain': 'Polygon',
'rpc': ['https://polygon-rpc.com/',
 'https://rpc-mainnet.matic.network',
 'https://matic-mainnet.chainstacklabs.com',
 'https://rpc-mainnet.maticvigil.com',
 'https://rpc-mainnet.matic.quiknode.pro',
 'https://matic-mainnet-full-rpc.bwarelabs.com'],
'faucets': [],
'nativeCurrency': {'name': 'MATIC', 'symbol': 'MATIC', 'decimals': 18},
'infoURL': 'https://polygon.technology/',
'shortName': 'MATIC',
'chainId': 137,
'networkId': 137,
'slip44': 966,
'explorers': [{'name': 'polygonscan',
  'url': 'https://polygonscan.com',
  'standard': 'EIP3091'}]},
'Fantom Opera': {'name': 'Fantom Opera',
'chain': 'FTM',
'rpc': ['https://rpc.ftm.tools'],
'faucets': ['https://free-online-app.com/faucet-for-eth-evm-chains/'],
'nativeCurrency': {'name': 'Fantom', 'symbol': 'FTM', 'decimals': 18},
'infoURL': 'https://fantom.foundation',
'shortName': 'ftm',
'chainId': 250,
'networkId': 250,
'icon': 'fantom',
'explorers': [{'name': 'ftmscan',
  'url': 'https://ftmscan.com',
  'icon': 'ftmscan',
  'standard': 'EIP3091'}]},
'Klaytn Mainnet Cypress': {'name': 'Klaytn Mainnet Cypress',
'chain': 'KLAY',
'rpc': ['https://public-node-api.klaytnapi.com/v1/cypress'],
'faucets': [],
'nativeCurrency': {'name': 'KLAY', 'symbol': 'KLAY', 'decimals': 18},
'infoURL': 'https://www.klaytn.com/',
'shortName': 'Cypress',
'chainId': 8217,
'networkId': 8217,
'slip44': 8217,
'explorers': [{'name': 'Klaytnscope',
  'url': 'https://scope.klaytn.com',
  'standard': 'none'}]},
'Arbitrum One': {'name': 'Arbitrum One',
'chainId': 42161,
'shortName': 'arb1',
'chain': 'ETH',
'networkId': 42161,
'nativeCurrency': {'name': 'Ether', 'symbol': 'ETH', 'decimals': 18},
'rpc': ['https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
 'https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
 'https://arb1.arbitrum.io/rpc',
 'wss://arb1.arbitrum.io/ws'],
'faucets': [],
'explorers': [{'name': 'Arbiscan',
  'url': 'https://arbiscan.io',
  'standard': 'EIP3091'},
 {'name': 'Arbitrum Explorer',
  'url': 'https://explorer.arbitrum.io',
  'standard': 'EIP3091'}],
'infoURL': 'https://arbitrum.io',
'parent': {'type': 'L2',
 'chain': 'eip155-1',
 'bridges': [{'url': 'https://bridge.arbitrum.io'}]}},
'Avalanche C-Chain': {'name': 'Avalanche C-Chain',
'chain': 'AVAX',
'rpc': ['https://api.avax.network/ext/bc/C/rpc'],
'faucets': ['https://free-online-app.com/faucet-for-eth-evm-chains/'],
'nativeCurrency': {'name': 'Avalanche', 'symbol': 'AVAX', 'decimals': 18},
'infoURL': 'https://www.avax.network/',
'shortName': 'Avalanche',
'chainId': 43114,
'networkId': 43114,
'slip44': 9005,
'explorers': [{'name': 'snowtrace',
  'url': 'https://snowtrace.io',
  'standard': 'EIP3091'}]}}


const addToNetwork = (networkName) => {
    const chain = networks[networkName];
    const params = {
      chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
      chainName: chain.name,
      nativeCurrency: {
        name: chain.nativeCurrency.name,
        symbol: chain.nativeCurrency.symbol, // 2-6 characters long
        decimals: chain.nativeCurrency.decimals,
      },
      rpcUrls: chain.rpc,
      blockExplorerUrls: [
        chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url ? chain.explorers[0].url : chain.infoURL,
      ],
    };
  
    window.web3.eth.getAccounts((error, accounts) => {
      window.ethereum
        .request({
          method: 'wallet_addEthereumChain',
          params: [params, accounts[0]],
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          stores.emitter.emit(ERROR, error.message ? error.message : error);
          console.log(error);
        });
    });
  };


const connectWalletHandler = async () => {
    // Detect Provider
    let walletProvider;
    if (window.ethereum) {
        walletProvider = window.ethereum;
    } else if (window.web3) {
        walletProvider = window.web3.currentProvider;
    } else {
        window.alert("No web3 injected. Download wallet first!!");
    }

    if (walletProvider) {
        const web3 = new Web3(walletProvider);
        const chainId = await web3.eth.getChainId();
        const accounts = await web3.eth.getAccounts();
        if (walletProvider !== window.ethereum) {
            console.error("No Ethereum browser detected! Connect to correct network.");
        }
        await walletProvider
            .request({
                method: 'eth_requestAccounts'
            })
            .then((result) => {
                // successful response would contain current account address in its element of first index in result array
                dispatch(walletLoginThunk(walletProvider, chainId, accounts, result[0]));
            })
            .catch((error) => {
                console.log('Error in changing network:', error);
            });
    }
}


export {addToNetwork, connectWalletHandler};