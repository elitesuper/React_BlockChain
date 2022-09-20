import React from 'react'
import { Button, Card, Col, Row} from 'antd';


import image1 from '../../assets/trending/trend_1.png';
import image2 from '../../assets/trending/trend_2.png';
import image3 from '../../assets/trending/trend_3.png';
import image4 from '../../assets/trending/trend_4.png';



const { Meta } = Card;


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
const mhead = (
    <>
        <div className='d-flex just-between'>
            <div className='create-vol'>
                <h3>12</h3>
                <p>Following</p>
            </div>
            <div className='create-vol'>
                <h3>12m</h3>
                <p>Follows</p>
            </div>
            <div className='create-vol'>
                <h3>15</h3>
                <p>Collections</p>
            </div>
        </div>
    </>
);
const mdesc = (
    <>
        <div className='wd-100'>
            <div className='wd-100 text-center'><Button className='creator-btn' shape='round'>+ Follow</Button></div>
            <div className='wd-100 text-center pd-t-10'><Button className='creator-btn creator-btn-out' shape='round'>0x007...373px</Button></div>
        </div>
    </>
);
function AppTopCreator() {
    return (
        <div id="feature" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder d-flex just-between">
                    <div className='voomio-header text-3xl lg:text-4xl 2xl:text-5xl'>Top Creators</div>
                </div>
                <Row className="row-list reveal" gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={item.key}>

                                <Card
                                    hoverable
                                    cover={<div className='card-cover'>
                                            <img className="creator-img" alt={item.title} src={item.image} />
                                            <h3>Gordon Gonner</h3>
                                            <h3 className='creator-email'>@gordongonner</h3>
                                        </div>}
                                >
                                    <Meta 
                                        className='trending-card'
                                        title={mhead}
                                        description={mdesc}
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

export default AppTopCreator
