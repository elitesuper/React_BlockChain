import React from 'react'
import { Button, Carousel } from 'antd';

import DegenToonz from '../../assets/anim-images//DegenToonz.png';
import CloneX from '../../assets/anim-images/CloneX.png';
import Moonbirds from '../../assets/anim-images/Moonbirds.png';
import CyberKongs from '../../assets/anim-images/CyberKongs.png';

import icon_1 from '../../assets/minting/icon_1.png';
import icon_2 from '../../assets/minting/icon_2.png';
import icon_3 from '../../assets/minting/icon_3.png';


const items = [
    {
        key :'1',
        icon_img:icon_1, 
        subtitle: 'Set up Your Wallet',
        content: 'Once you’ve set up your wallet of choice, connect it by clicking the wallet icon in the top right corner. '
    },
    {
        key :'2',
        icon_img:icon_2,
        subtitle: 'Create Your Collection',
        content: 'Upload your work (image, video, audio, or 3D art), add a title and description. '
    },
    {
        key :'3',
        icon_img:icon_3,
        subtitle: 'List them for sale',
        content: 'You choose how you want to sell your NFTs, and we help you sell them!'
    }
]
function AppGlassesMinting() {
    return (
        <div id="hero">
            <Carousel>
                {
                    <div className='d-flex just-center'>
                        <div className='image-anim mobileHidden'>
                            <img className='dagentoonz-left' src={DegenToonz} alt="DegenToonz"></img>
                            <img className='cyberkongs-left' src={CyberKongs} alt="CyberKongs"></img>
                        </div>
                        <div className="content">
                            <h3 className='header-title text-center'>Gassless Minting</h3>
                            <div>
                                {items.map(item=>(
                                    <div className='w-1-1 d-flex just-center'>
                                        <div className='w-1-3'>
                                            <img className="m-a" src={item.icon_img} alt={item.icon_img}></img>
                                        </div>
                                        <div className='w-2-3'>
                                            <h3 className='mint-subtitle'>{item.subtitle}</h3>
                                            <p className='mint-content'>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
