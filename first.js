const walletConnectURL = 'https://docs.walletconnect.com/web3modal/react/about';


function connectWallet() {
 
    window.location.href = walletConnectURL;
}

document.getElementById('connectWalletButton').addEventListener('click', connectWallet);