import React from 'react'
import { Card, Col, Row, Select } from 'antd';


import image1 from '../../assets/trending/trend_1.png';
import image2 from '../../assets/trending/trend_2.png';
import image3 from '../../assets/trending/trend_3.png';
import image4 from '../../assets/trending/trend_4.png';


import icon_check from '../../assets/icons/BadgeCheck.png';
import icon_ether from '../../assets/icons/Ethereum.png';


const { Meta } = Card;
const { Option } = Select;
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
    }
]
const mdesc = (
    <>
        <div className='d-flex just-between'>
            <div className='text-base md:text-xs lg:text-xl flex'>Vol <img className='m-auto' src={icon_ether} alt={icon_ether}></img><span>657.2k</span></div>
            <div className='text-base md:text-xs lg:text-xl flex'>Floor <img className='m-auto' src={icon_ether} alt={icon_ether}></img><span>70</span></div>
        </div>
    </>
);
function AppTrending() {
    return (
        <div id="feature" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder d-flex just-between">
                    <div className='voomio-header text-3xl lg:text-4xl 2xl:text-5xl'>Trendings</div>
                    <div>    
                        <Select defaultValue="option_1" className='voomio-select mobileHidden' size='large'>
                            <Option value="option_1">Past 24 hours</Option>
                            <Option value="option_2">Past 48 hours</Option>
                            <Option value="option_3">Past 56 hours</Option>
                        </Select>
                    </div>
                </div>
                <Row className ="reveal" gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }} key={item.key}>

                                <Card
                                    hoverable
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta 
                                        className='trending-card'
                                        title={<div className='text-1xl md:text-xs lg:text-2xl 2xl:text-3xl flex'>{item.title}<img className='my-auto' src={icon_check} alt={icon_check}></img></div>} 
                                        description={mdesc}
                                        />
                                </Card>

                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>


    )
}

export default AppTrending
