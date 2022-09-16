import React, { useState } from 'react'

import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import logoicon from '../../assets/icons/logo_icon.png';

const { Option } = Select;



function AppHeader() {
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
                        <Button type="primary" className='connect-btn mobile-state-btn' shape="round" size="large">
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

                <Button type="primary" className='connect-btn mobileHidden' shape="round" size="large">
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
