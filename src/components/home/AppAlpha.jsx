import React from 'react'
import { Card, Col, Row } from 'antd';



import image1 from '../../assets/alphas/alpha1.png';
import image2 from '../../assets/alphas/alpha2.png';
import image3 from '../../assets/alphas/alpha3.png';

const { Meta } = Card;
const items = [
    {
        key: '1',
        image: image1,
        title: 'These upcoming NFTS will 10x!'
    },
    {
        key: '2',
        image: image2,
        title: 'These upcoming NFTS will 10x!'
    },
    {
        key: '3',
        image: image3,
        title: 'These upcoming NFTS will 10x!'
    },
    {
        key: '4',
        image: image1,
        title: 'These upcoming NFTS will 10x!'
    },
    {
        key: '5',
        image: image2,
        title: 'These upcoming NFTS will 10x!'
    },
    {
        key: '6',
        image: image3,
        title: 'These upcoming NFTS will 10x!'
    },
]

const mdesc = (
    <>
        <div className='wd-100'>
            <div className='wd-100'>CryptoGuruTV</div>
            <div className='wd-100 pd-t-10'>1M views - 8 hours ago</div>
        </div>
    </>
);
function AppAlpha() {
    return (
        <div id="feature" className="block aboutBlock">
            <div className="container-fluid special-list">
                <div className="titleHolder d-flex just-between">
                    <div className='voomio-header'>Top Creators</div>
                </div>
                <Row className="row-list spec-pos" gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} key={item.key}>
                                <Card
                                    hoverable
                                    cover={<img className="p-l-6" alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} description={mdesc} />
                                </Card>
                            </Col>
                        );
                    })}
                    <a className="prev">&#10094;</a>
                    <a className="next next-spec">&#10095;</a>
                </Row>
            </div>
        </div>


    )
}

export default AppAlpha
