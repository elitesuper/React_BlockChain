import React from "react";
import {SlidersOutlined, SearchOutlined, RetweetOutlined} from '@ant-design/icons';
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import {Button, Input, Select, Row, Col, Card} from 'antd';


import image1 from '../../assets/trending/trend_1.png';
import image2 from '../../assets/trending/trend_2.png';
import image3 from '../../assets/trending/trend_3.png';
import image4 from '../../assets/trending/trend_4.png';


import icon_check from '../../assets/icons/BadgeCheck.png';
import icon_ether from '../../assets/icons/Ethereum.png';


const { Meta } = Card;
const {Option} = Select;

const items = [
    {
        key: '1',
        image: image1,
        title: 'Bored Ape Yacht Club'
    },
    {
        key: '2',
        image: image2,
        title: 'CryptoPunks'
    },
    {
        key: '3',
        image: image3,
        title: 'Doodles'
    },
    {
        key: '4',
        image: image4,
        title: 'Moonbirds'
    },
    {
        key: '5',
        image: image3,
        title: 'Doodles'
    },
    {
        key: '6',
        image: image1,
        title: 'Doodles'
    },
    {
        key: '7',
        image: image2,
        title: 'CryptoPunks'
    },
    {
        key: '8',
        image: image3,
        title: 'Doodles'
    }
]
const mdesc = (
    <>
        <div className='wd-100'>
            <div className='trend-vol neue-ft f-l'>Floor<img src={icon_ether} alt={icon_ether}></img><span>70</span></div>
        </div>
    </>
);

function TabPage (props){
    return (
        <>
        <div className="tab-header">
            <Button size="large" type="text" icon={<SlidersOutlined />}/>
            <Input prefix={<SearchOutlined/>} className='search-profile' style={{ width: '30%' }} size="large" placeholder="Search for assets or collections..."/>
            <div className="f-l m-x-5">
                <Button size='large' value="large" icon={<BsGrid/>}></Button>
                <Button size='large' value="default" icon={<BsGrid3X3Gap/>}></Button>
            </div>
            <Select defaultValue="option_1" className='voomio-select f-l' size='large'>
                <Option value="option_1">Price low to high</Option>
                <Option value="option_2">Price high to low</Option>
                <Option value="option_3">latest</Option>
            </Select>
        </div>
        <Row className="pd-t-10">
            <Row><Button size="small" type="text" icon={<RetweetOutlined />}/>44 items</Row>
            <Row className="pd-t-10" gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }} key={item.key}>

                                <Card
                                    className="profile-card"
                                    hoverable
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta 
                                        className='trending-card'
                                        title={<>{item.title}<img src={icon_check} alt={icon_check}></img></>} 
                                        description={mdesc}
                                        />
                                </Card>

                            </Col>
                        );
                    })}
                </Row>
        </Row>
        {/* {props.tabid} */}
        </>
    )
}

export default TabPage;