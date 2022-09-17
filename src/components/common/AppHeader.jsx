import React, { useState, useEffect } from 'react'


import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3"

import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import logoicon from '../../assets/icons/logo_icon.png';

const { Option } = Select;




       
let web3Modal;
let provider;
let selectedAccount;

// import Web3 from 'web3'
function init() {
    const providerOptions = {
        walletconnect: {
        package: WalletConnectProvider,
        options: {
            networ:'rinkeby',
            rpc: {
                4:"https://rinkeby.infura.io/v3/"
            },
            chainId:4
        }
        },           
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    window.w3m = web3Modal;
}

async function fetchAccountData() {
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    selectedAccount = await signer.getAddress();
    console.log(selectedAccount);    
    return selectedAccount;
}

async function refreshAccountData() {
    await fetchAccountData(provider);
    window.location.reload();
}

async function onConnect(){
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect({ cacheProvider: true });
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        console.log('chainchan',accounts)
        fetchAccountData();
        window.location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
        window.location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
        window.location.reload();
    });
    // window.location.reload()

    await refreshAccountData();
}

async function disconnet() {
    console.log("Opening a dialog", web3Modal);
    try {
        // provider = await web3Modal.connect();
        await web3Modal.clearCachedProvider();
        // await window.ethereum.disable()
        window.location.reload()
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }   
}

function AppHeader() {

    const [acc,setacc] = useState()

    useEffect(() => {
        init();
        getAccount();
        if (web3Modal.cachedProvider) {
            setacc(true)
        }
    }, []); 

    async function getAccount() {
        // const web3_2 = new Web3(window.ethereum, null, { transactionConfirmationBlocks: 1 })
        if (window.ethereum) {
            // request change chain
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x04' }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        const data = [{
                            chainId: '0x01',
                            chainName: 'Ethereum Chain',
                            nativeCurrency: {
                            name: 'ETH',
                            symbol: 'ETH',
                            decimals: 18,
                            },
                            rpcUrls: ['https://mainnet.infura.io/v3/'],
                            blockExplorerUrls: ['https://etherscan.io'],
                        }]

                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: data,
                        });
                    } catch (addError) {
                        
                    }
                }
            }
        } 
    }

    const { Link } = Anchor;
    // const [size, setSize] = useState<SizeType>('large');
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const selectAfter = (
        <Select defaultValue="BTH" className="select-after">
            <Option value="BTH">BTH</Option>
            <Option value="TTT">TTT</Option>
            <Option value="DDD">DDD</Option>
        </Select>
    );
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <img src={logoicon} alt="logo_icon"></img>
                    <a href="/#">VOOMIO</a>
                </div>
                <Input prefix={<SearchOutlined/>} className='search-collection mobileHidden' style={{ width: '30%' }} size="large" addonAfter={selectAfter} placeholder="Search for assets or collections..."/>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#explore" title="Explore" />
                            <Link href="#ranking" title="Ranking" />
                            <Link href="#resourses" title="Resourses" />
                            <Link href="#works" title="Create" />
                        </Anchor>
                        <Button type="primary" onClick={()=> onConnect()} className='connect-btn mobile-state-btn' shape="round" size="large">
                            Connect Wallet
                        </Button>
                    </Drawer>

                </div>


                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#explore" title="Explore" />
                        <Link href="#ranking" title="Ranking" />
                        <Link href="#resourses" title="Resourses" />
                        <Link href="#works" title="Create" />
                    </Anchor>
                </div>

                <Button type="primary" onClick={()=> onConnect()} className='connect-btn mobileHidden' shape="round" size="large">
                    Connect Wallet
                </Button>
            </div>
        </div>
        // <h1>
        //     Header
        // </h1>
    )
}

export default AppHeader
