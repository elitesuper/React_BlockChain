import React from 'react'
import { Input, Button } from 'antd';


function AppSignup() {
    return (
        <div id="contact" className="block contactBlock ">
            <div className="container-fluid">
                <div className="titleHolder text-left w-5-10 m-a">
                    <h2 className='stay-loop'>Stay in the loop</h2>
                    <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops and tips and tricks for navigating Voomio.</p>
                    <div className='d-flex just-center'>
                        <Input className='email-input' placeholder="Your email address"/>
                        <Button className='creator-btn w-4-10' shape='round' size="large">Sign up</Button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AppSignup
