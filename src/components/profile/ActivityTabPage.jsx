import React from 'react';
import {List, Row, Col, Collapse, Button, Divider} from 'antd';
import {TagOutlined} from '@ant-design/icons';

import ch1 from '../../assets/collections/ch1.png'
import ch2 from '../../assets/collections/ch2.png' 
import ch3 from '../../assets/collections/ch3.png' 
import ch4 from '../../assets/collections/ch4.png' 

const {Panel} = Collapse;

const data = [
    {
        img : ch1,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch2,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch3,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch4,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch3,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch2,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch4,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch1,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch2,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch3,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
    {
        img : ch4,
        category:  "Bored Ape Yacht Club",
        name: "CryptoPunks #45633",
        price:"0.078",
        quantity: "1",
        from : "WillByers...",
        to : "---",
        time :"21 seconds ago"
    },
]
function ActivityTabPage(){
    return(
        <div>

            <Row>
                <Col md={{span:24}} lg={{span:6}}>
                <Collapse defaultActiveKey={['1']} ghost>
                    <Panel header="Event Type" key="1">
                    <p>sfdadcdcasd</p>
                    </Panel>
                    <Divider/>
                    <Panel header="Collections" key="2">
                    <p>dfasdfasdf</p>
                    </Panel>
                    <Panel header="Chains" key="3">
                    <p>fdafasd</p>
                    </Panel>
                </Collapse>
                </Col>
                <Col md={{span:24}} lg={{span:18}}>
                    <div className='pt-2 pd-12 w-full h-8'>
                        <div className='flex'>
                            <h4 className='col-spec-2'>Filters</h4>
                        </div>
                    </div>
                    <List
                    className='pd-b-30 nft-list'
                    header={<Row>
                            <Col className='text-center' span={9}>Item</Col>
                            <Col className='text-center' span={4}>Price</Col>
                            <Col className='text-center' span-={2}>Quantity</Col>
                            <Col className='text-center' span={3}>From</Col>
                            <Col className='text-center' span={3}>To</Col>
                            <Col className='text-center' span={3}>Time</Col>
                        </Row>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <Row className='activity-list'>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:12}} xl={{span:9}} className="flex">
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <Button className='my-auto' size='large' type="text" icon={<TagOutlined  />}>
                                    </Button>
                                    <h4 className='my-auto'>List</h4>
                                </div>
                                <div className='flex'>
                                    <img className='p-1 m-auto activity-avatar' src={item.img}></img>
                                    <div className='my-auto'>
                                        <h5 className='text-base sm:text-sm col-spec-1'>{item.category}</h5>
                                        <h5 className='text-base sm:text-sm'>{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:8}} md={{span:12}} xl={{span:4}}>
                            <div className='h-full flex'>
                                <div className='m-auto'>
                                    <h5 className='text-sm col-spec-2'>{item.price}</h5>
                                    <h5 className='text-sm col-spec-1'>$1531.63</h5>                                
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:8}} md={{span:6}} xl={{span:2}}>
                            <div className='h-full flex'>
                                <div className='m-auto'>
                                    <h5>{item.quantity}</h5>                               
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:8}} md={{span:6}} xl={{span:3}}>
                            <div className='h-full flex'>
                                <div className='m-auto'>
                                    <h5 className='col-spec-3'>{item.from}</h5>                               
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:12}} md={{span:6}} xl={{span:3}}>
                            <div className='h-full flex'>
                                <div className='m-auto'>
                                    <h5>{item.to}</h5>                               
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:12}} md={{span:6}} xl={{span:3}}>
                            <div className='h-full flex'>
                                <div className='m-auto'>
                                    <h5>{item.time}</h5>                               
                                </div>
                            </div>
                        </Col>
                    </Row>
                    )}
                />
                </Col>
            </Row>
        </div>
    )
}
export default ActivityTabPage;