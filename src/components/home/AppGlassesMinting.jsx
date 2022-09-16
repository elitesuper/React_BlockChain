import React from 'react'
import { Button, Carousel } from 'antd';

import DegenToonz from '../../assets/anim-images/DegenToonz.png';
import CloneX from '../../assets/anim-images/CloneX.png';
import Moonbirds from '../../assets/anim-images/Moonbirds.png';
import CyberKongs from '../../assets/anim-images/CyberKongs.png';



function onChange(a, b, c) {
    console.log(a, b, c);
}

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };

const item = {
        key: '1',
        title: 'Gassless Minting',
        content: 'Voomio is an omni-friendly shop for buying and selling NFTs. With everything from multi-wallet purchasing to gassless minting we’re sure you’re going to love it here.',
}

function AppGlassesMinting() {
    return (
        <div id="hero" className="heroBlock">
            <Carousel>
                {
                    <div className='d-flex just-center'>
                        <div className='image-anim mobileHidden'>
                            <img className='dagentoonz-left' src={DegenToonz} alt="DegenToonz"></img>
                            <img className='cyberkongs-left' src={CyberKongs} alt="CyberKongs"></img>
                        </div>
                        <div className="content">
                            <h3 className='header-title'>{item.title}</h3>
                            <p>{item.content}</p>
                            <div className="btnHolder d-flex just-center">
                                <Button className="voomio-btn" type="primary" shape="round" size="large">Explore</Button>
                                <Button className="voomio-btn-outline" shape="round" size="large">Create</Button>
                            </div>
                        </div>
                        <div className='image-anim mobileHidden'>
                            <img className='moonbirds-right' src={Moonbirds} alt="Moonbirds"></img>
                            <img className='clonex-right' src={CloneX} alt="CloneX"></img>
                        </div>
                    </div>
                }
            </Carousel>
        </div>
    )
}

export default AppGlassesMinting
