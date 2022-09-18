import React from 'react'
import { Card, Col, Row, Select } from 'antd';


import image1 from '../../assets/collections/collection1.png';
import image2 from '../../assets/collections/collection2.png';
import image3 from '../../assets/collections/collection3.png';
import image4 from '../../assets/collections/collection4.png';


import user1 from '../../assets/collections/ch1.png';
import user2 from '../../assets/collections/ch2.png';
import user3 from '../../assets/collections/ch3.png';
import user4 from '../../assets/collections/ch4.png';

import icon_check from '../../assets/icons/BadgeCheck.png';




const { Meta } = Card;
const { Option } = Select;
const items = [
    {
        key: '1',
        image: image1,
        user:user1,
        title: 'Bored Ape Yacht Club'
    },
    {
        key: '2',
        image: image2,
        user:user2,
        title: 'CryptoPunks'
    },
    {
        key: '3',
        image: image3,
        user:user3,
        title: 'Doodles'
    },
    {
        key: '4',
        image: image4,
        user:user4,
        title: 'Moonbirds'
    }
]
function AppCollection() {
    return (
        <div id="feature" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder d-flex just-between">
                    <div className='voomio-header'>Collections</div>
                    <div>    
                        <Select defaultValue="all" className='voomio-select mobileHidden' size='large'>
                            <Option value="all">All Categories</Option>
                            <Option value="part_1">Category 1</Option>
                            <Option value="part_2">Category 2</Option>
                        </Select>       
                    </div>
                </div>
                <Row className="row-list reveal" gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }} key={item.key}>

                                <Card 
                                    className='collection-card'
                                    hoverable
                                    cover={<><img alt={item.title} src={item.image} />
                                    </>}
                                >
                                    <Meta 
                                        className='trending-card'
                                        title={<div className='collection-title d-flex'><img src={item.user} alt={item.user}/><div className='colection-pd'>{item.title}<img src={icon_check} alt={icon_check}></img></div></div>} 
                                        />
                                </Card>

                            </Col>
                        );
                    })}
                    <a className="prev" href='/#'>&#10094;</a>
                    <a className="next" href='/#'>&#10095;</a>
                </Row>
            </div>
        </div>


    )
}

export default AppCollection
