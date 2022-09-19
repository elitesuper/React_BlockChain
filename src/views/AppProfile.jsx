import {Row, Col, Button, Tabs} from 'antd';
import { MailOutlined, MoreOutlined, InstagramFilled, TwitterOutlined} from '@ant-design/icons';
import character from '../assets/images/character.png';
import TabPage from '../components/profile/TabPage';
import AppSignup from '../components/home/AppSignup';
import React from 'react';
// import ActivityTabPage from '../components/profile/ActivityTabPage';



function AppProfile() {
    const tablist = [
        "Collection",
        "Created",
        "Activity",
        "Favorited",
        "More"
    ]
    return (
        <div className="block pd-b-0">
            <div className='pd-y-80 w-100 sub-header'>
            </div>
            <div className='container-fluid'>
                <div className='pd-t-20'>
                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 4 }}>
                            <img src={character} alt={character} className='profile-character'></img>
                        </Col>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:20}}>
                            <div className="titleHolder profile-info">
                                <div className='voomio-header profile-name'>
                                    Extrasoho
                                    <Row className='pd-t-10'>
                                        <Col span={12}><div className='profile-email'>@extrasoho</div></Col>
                                        <Col span={12} className="m-a"><div className='profile-tag'><span>JOINED MAY 2022</span></div></Col>
                                    </Row>
                                </div>
                                <div className='d-flex just-between profile-action'>
                                    <Button className='creator-btn wd-40' shape='round'>+ Follow</Button>
                                    <Button className='creator-btn creator-btn-out wd-40' shape='round'>0x007...373px</Button>
                                    <Button className='profile-icon' shape="circle" icon={<MailOutlined />} />
                                    <Button className='profile-icon' shape="circle" icon={<MoreOutlined />} />
                                </div>
                            </div>
                            <Row>
                                <Col xs={{span:24}} sm={{span:10}} md={{span:10}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                                </Col>
                                <Col xs={{span:12}} sm={{span:5}} md={{span:2}}>
                                    <p className='m-b-2 f-s-14'>Following</p>
                                    <h3 className='termina-ft'>12</h3>
                                </Col>
                                <Col xs={{span:12}} sm={{span:5}} md={{span:2}}>
                                    <p className='m-b-2 f-s-14'>Followers</p>
                                    <h3 className='termina-ft'>1.2m</h3>
                                </Col>
                                <Col xs={{span:24}} sm={{span:5}} md={{span:2}} className="d-flex just-even">
                                    <Button className='profile-icon' shape="circle" icon={<TwitterOutlined />} />
                                    <Button className='profile-icon' shape="circle" icon={<InstagramFilled />} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className='wd-100 pd-t-20'>
                        <Tabs
                            defaultActiveKey="1"
                            items={tablist.map((name, i) => {
                            const id = String(i + 1);
                            const tabname = name
                            return {
                                label: tabname,
                                key: id,
                                children: <TabPage tabid={id}></TabPage>,
                            };
                            })}
                        />
                    </div>
                </div>
            </div>
            <AppSignup></AppSignup>
        </div>
    )
}

export default AppProfile