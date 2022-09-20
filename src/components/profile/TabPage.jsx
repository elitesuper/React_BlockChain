import React, {useState} from "react";
import {SlidersOutlined, SearchOutlined, RetweetOutlined} from '@ant-design/icons';
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import {Button, Input, Select, Row, Col, Card, Radio, Tag} from 'antd';

import image1 from '../../assets/trending/trend_1.png';
import image2 from '../../assets/trending/trend_2.png';
import image3 from '../../assets/trending/trend_3.png';
import image4 from '../../assets/trending/trend_4.png';


import icon_check from '../../assets/icons/BadgeCheck.png';
import icon_ether from '../../assets/icons/Ethereum.png';
import icon_vector from '../../assets/icons/icon_vector.png';



const { Meta } = Card;
const { Option } = Select;

const items = [
    {
        key: '1',
        image: image1,
        vector: icon_vector,
        tag: "#111559",
        title: 'Bored Ape Yacht Club',
        type:1
    },
    {
        key: '2',
        image: image2,
        vector: icon_vector,
        tag: "#111559",
        title: 'CryptoPunks',
        type:2
    },
    {
        key: '3',
        image: image3,
        vector: icon_vector,
        tag: "#111559",
        title: 'Doodles',
        type:1
    },
    {
        key: '4',
        image: image4,
        vector: icon_vector,
        tag: "#111559",
        title: 'Moonbirds',
        type:2
    },
    {
        key: '5',
        image: image3,
        vector: icon_vector,
        tag: "#111559",
        title: 'Doodles',
        type:1,
    },
    {
        key: '6',
        image: image1,
        vector: icon_vector,
        tag: "#111559",
        title: 'Doodles',
        type:2,
    },
    {
        key: '7',
        image: image2,
        vector: icon_vector,
        tag: "#111559",
        title: 'CryptoPunks',
        type:1
    },
    {
        key: '8',
        image: image3,
        vector: icon_vector,
        tag: "#111559",
        title: 'Doodles',
        type:2
    }
]

const mdesc = (val) => (
    <>
        {(val==1)?(
            <div className='wd-100'>
                <div className='f-l text-base md:text-xs lg:text-xl flex'>Floor<img className="my-auto" src={icon_ether} alt={icon_ether}></img><span>70</span></div>
            </div>
        ):(
            <div>
            <div className="absolute vector-icon"><img src={icon_vector}></img></div>
            <div className='wd-100 flex justify-between '>
                <Tag className="text-base my-auto md:text-xs lg:text-xl profile-tag" color="#F4EEFF">#2db7f5</Tag>
                <div className='text-base md:text-xs lg:text-xl f-l d-flex'>Floor<img className="my-auto" src={icon_ether} alt={icon_ether}></img><span>70</span></div>
            </div>
            </div>
        )}
    </>
);

function TabPage (props){
    

    var filtereddata = items;
    if(props.tabid == 2)
    {
        filtereddata = items.filter(item => item.type == 2);
        console.log(filtereddata);
    }

    const [aligntype, setAligntype] = useState(1);

    const onChange = (e) =>{
        console.log('radio chcecked', e.target.value);
        setAligntype(e.target.value);
    }

    return (
        <div className="container-fluid">
        <div className="tab-header mobileHidden">
            <Button size="large" type="text" icon={<SlidersOutlined />}/>
            <Input prefix={<SearchOutlined/>} className='search-profile' style={{ width: '30%' }} size="large" placeholder="Search for assets or collections..."/>
            <div className="f-l m-x-5">
                <Radio.Group defaultValue={aligntype} onChange={onChange} size="large">
                    <Radio.Button className="tab-profile-type ra-l-20" value={1}><BsGrid style={{ fontSize: '20px', color: '#08c' }} /></Radio.Button>
                    <Radio.Button className="tab-profile-type ra-r-20" value={2}><BsGrid3X3Gap style={{ fontSize: '20px', color: '#08c' }} /></Radio.Button>
                </Radio.Group>
            </div>
            <Select defaultValue="option_1" className='voomio-select f-l' size='large'>
                <Option value="option_1">Price low to high</Option>
                <Option value="option_2">Price high to low</Option>
                <Option value="option_3">latest</Option>
            </Select>
        </div>
        <Row className="pd-t-10 wd-100">
            <Row className="wd-100"><Button size="small" type="text" icon={<RetweetOutlined />}/>44 items</Row>
            <Row className="pd-t-10 wd-100" gutter={[16, 16]}>
                    {(aligntype==1) ? filtereddata.map(item => {
                        return (
                            <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }} key={item.key}>
                                <Card
                                    className="profile-card"
                                    hoverable
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta 
                                        className='trending-card'
                                        title={<div className="text-1xl md:text-xs lg:text-2xl 2xl:text-3xl flex">{item.title}<img className="my-auto" src={icon_check} alt={icon_check}></img></div>} 
                                        description={mdesc(aligntype)}
                                        />
                                </Card>
                            </Col>
                        );
                    }):(
                        filtereddata.map(item => {
                            return (
                                <div className="align-type-2" key={item.key}>
                                    <Card
                                        className="profile-card relative"
                                        hoverable
                                        cover={<img alt={item.title} src={item.image} />}
                                    >
                                        <Meta 
                                            className='trending-card'
                                            title={<div className="trend-title">{item.title}<img src={icon_check} alt={icon_check}></img></div>} 
                                            description={mdesc(aligntype)}
                                            />
                                    </Card>
                                </div>
                            );
                        })
                    )}
                </Row>
        </Row>
        {(props.tabid == 2)&&(
            <Row className="justify-center py-24">
                <Button type="primary" className='connect-btn mobile-state-btn create-btn text-base' shape="round" size="large">
                    + Create New
                </Button>
            </Row>
        )}
        </div>
    )
}

export default TabPage;