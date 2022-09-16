import { Button } from 'antd'
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'

function AppWork() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={showModal}><i className="fas fa-play"></i></Button>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}

                    footer={null}
                >
                    <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                </Modal>
            </div>
        </div>
    )
}

export default AppWork
