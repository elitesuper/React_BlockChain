import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;
const items = [
    {
        key: '1',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
    {
        key: '2',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
    {
        key: '3',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
    {
        key: '4',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
    {
        key: '5',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
    {
        key: '6',
        header: 'How to setup the theme?',
        answer: 'Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.'
    },
]

function AppFaq() {
    return (
        <div id="faq" className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Collapse defaultActiveKey={['1']}>
                    {items.map(item => {
                        return (
                            <Panel header={item.header} key={item.key}>
                                <p>{item.answer}</p>
                            </Panel>
                        );
                    })}

                </Collapse>



                <div className="quickSupport">
                    <h3>Want quick support?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
                    <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
                </div>
            </div>
        </div>



    )
}

export default AppFaq
