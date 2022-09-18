import React from 'react'
import { List, Select,Radio, Button } from 'antd';


// import image1 from '../../assets/trending/trend_1.png';
// import image2 from '../../assets/trending/trend_2.png';
// import image3 from '../../assets/trending/trend_3.png';
// import image4 from '../../assets/trending/trend_4.png';


import icon_check from '../../assets/icons/BadgeCheck.png';
import icon_ether from '../../assets/icons/Ethereum.png';


const { Option } = Select;

const data = [
    {
        key: '1',
        name: "Sample Collection",
        volume: 134,
        _24hr: "+13.3%",
        _7d: "+13.3%",
        price: 134
    },
    {
        key: '2',
        name: "Sample Collection",
        volume: 134,
        _24hr: "+13.3%",
        _7d: "+13.3%",
        price: 134
    },
    {
        key: '3',
        name: "Sample Collection",
        volume: 134,
        _24hr: "+13.3%",
        _7d: "+13.3%",
        price: 134
    },
    {
        key: '4',
        name: "Sample Collection",
        volume: 134,
        _24hr: "+13.3%",
        _7d: "+13.3%",
        price: 134
    },
    {
        key: '5',
        name: "Sample Collection",
        volume: 134,
        _24hr: "+13.3%",
        _7d: "+13.3%",
        price: 134
    },
]

function AppTopnfts() {
    return (
        <div id="feature" className="block aboutBlock">
            <div className="container-fluid nfts-list reveal reveal-x">
                <div className="titleHolder d-flex just-center pd-t-40 pd-b-0">
                    <div className='voomio-header'>Top Nfts</div>
                </div>
                <div className='d-flex just-between categories'>
                    <div>    
                        <Select defaultValue="option_1" className='voomio-select mobileHidden' size='large'>
                            <Option value="option_1">Past 24 hours</Option>
                            <Option value="option_2">Past 48 hours</Option>
                            <Option value="option_3">Past 56 hours</Option>
                        </Select>       
                    </div>
                    <div>    
                        <Select defaultValue="option_1" className='voomio-select mobileHidden' size='large'>
                            <Option value="option_1">All Categories</Option>
                            <Option value="option_2">Past 48 hours</Option>
                            <Option value="option_3">Past 56 hours</Option>
                        </Select>       
                    </div>
                    <div>    
                        <Select defaultValue="option_1" className='voomio-select mobileHidden' size='large'>
                            <Option value="option_1">All Chains</Option>
                            <Option value="option_2">Past 48 hours</Option>
                            <Option value="option_3">Past 56 hours</Option>
                        </Select>       
                    </div>
                </div>
                <List
                    className='pd-x-30 pd-b-30'
                    header={<>
                    <div className= 'd-flex just-between text-center'>
                        <div className='pd-y-10 w-1-5'>Collection</div>
                        <div className='pd-y-10 w-1-5'>Volume</div>
                        <div className='pd-y-10 w-1-5'>24hr</div>
                        <div className='pd-y-10 w-1-5'>7d</div>
                        <div className='pd-y-10 w-1-5'>Floor Price</div>
                        </div></>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <>
                    <div className= 'd-flex just-between text-center nft-list-item'>
                        <div className='pd-y-10 w-1-5'><Radio>{item.name}</Radio><img src={icon_check} alt={icon_check}></img></div>
                        <div className='pd-y-10 w-1-5 nft-list-item-vol'><img src={icon_ether} alt={icon_ether}></img>{item.volume}</div>
                        <div className='pd-y-10 w-1-5 nft-list-item-span'><span>{item._24hr}</span></div>
                        <div className='pd-y-10 w-1-5 nft-list-item-span'><span>{item._7d}</span></div>
                        <div className='pd-y-10 w-1-5 nft-list-item-vol'><img src={icon_ether} alt={icon_ether}></img>{item.price}</div>
                    </div>
                    </>
                    )}
                />
                <div className='d-flex just-center pd-b-30'>
                    <Button className='creator-btn w-1-5' shape='round' size="large">The more</Button>
                </div>
            </div>
        </div>


    )
}

export default AppTopnfts
