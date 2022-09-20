import React from 'react'
import { Button, Carousel } from 'antd';

import image1 from '../../assets/anim2-images/image1.png';
import image2 from '../../assets/anim2-images/image2.png';
import image3 from '../../assets/anim2-images/image3.png';
import image4 from '../../assets/anim2-images/image4.png';
import image5 from '../../assets/anim2-images/image5.png';
import image6 from '../../assets/anim2-images/image6.png';
import image7 from '../../assets/anim2-images/image7.png';
import image8 from '../../assets/anim2-images/image8.png';

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
                    <div className='d-flex just-center pd-b-10'>
                        <div className='image-anim mobileHidden'>
                            <img className='left_1' src={image1} alt={image1}></img>
                            <img className='left_4' src={image4} alt={image4}></img>
                            <img className='left_3' src={image3} alt={image3}></img>
                            <img className='left_2' src={image2} alt={image2}></img>
                        </div>
                        <div className="content glasses-info">
                                <h2 className='text-center text-3xl 2xl:text-8xl md:text-6xl'>Glasses Minting</h2>                            <div>
                                {items.map(item=>(
                                    <div className='w-1-1 d-flex just-center minting-item'>
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
                                <Button className="voomio-btn m-r-10" type="primary" shape="round" size="large">Explore</Button>
                                <Button className="voomio-btn-outline" shape="round" size="large">Create</Button>
                            </div>
                        </div>
                        <div className='image-anim mobileHidden'>
                            <img className='right_3' src={image5} alt={image5}></img>
                            <img className='right_2' src={image7} alt={image7}></img>
                            <img className='right_1' src={image8} alt={image8}></img>
                            <img className='right_4' src={image6} alt={image6}></img>
                        </div>
                    </div>
                }
            </Carousel>
        </div>
    )
}

export default AppGlassesMinting
