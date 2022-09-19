import React from 'react'
import { Row, Col } from 'antd';
import { FacebookOutlined,InstagramOutlined,TwitterOutlined,GithubOutlined,DribbbleOutlined } from '@ant-design/icons'


import logoicon from '../../assets/icons/logo_icon.png';


const solutionlist = [
    {data:"Marketing"},
    {data:"Analytics"},
    {data:"Commerce"},
    {data:"Insights"},
]
const supportlist = [
    {data:"Pricing"},
    {data:"Documentation"},
    {data:"Guides"},
    {data:"API Status"},
]
const companylist = [
    {data:"About"},
    {data:"Blog"},
    {data:"Jobs"},
    {data:"Press"},
    {data:"Partners"},
]
const legallist = [
    {data:"Claim"},
    {data:"Privacy"},
    {data:"Terms"},
]

function AppFooter() {

    return (
        <div className="container-fluid my-footer">
            <div className="footer d-flex just-between">
                <div className='nft-logo text-left'>
                    <img src={logoicon} alt={logoicon}></img>
                    <p>Voomio is an omni-friendly shop for buying and selling NFTs.</p>
                    <div className='d-flex icon-list'>
                        <FacebookOutlined/>
                        <InstagramOutlined/>
                        <TwitterOutlined/>
                        <GithubOutlined/>
                        <DribbbleOutlined/>
                    </div>
                </div>
                <div className='nft-contact'>
                    <Row className='text-left'>
                        <Col span={6}>
                            <div className='footer-header'>SOLUTIONS</div>
                            {solutionlist.map((data, key)=>(
                                <p className='footer-content' key={key}>{data.data}</p>
                            ))}
                        </Col>
                        <Col span={6}>
                            <div className='footer-header'>SUPPORT</div>  
                            {supportlist.map((data, key)=>(
                                <p className='footer-content' key={key}>{data.data}</p>
                            ))}                              
                        </Col>
                        <Col span={6}>
                            <div className='footer-header' >COMPANY</div>
                            {companylist.map((data, key)=>(
                                <p className='footer-content' key={key}>{data.data}</p>
                            ))}
                        </Col>
                        <Col span={6}>
                            <div className='footer-header'>LEGAL</div>
                            {legallist.map((data, key)=>(
                                <p className='footer-content' key={key}>{data.data}</p>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pd-t-20 ft-neue'>© 2022 Voomio, LLC. All rights reserved.</div>
        </div>
    )
}

export default AppFooter
