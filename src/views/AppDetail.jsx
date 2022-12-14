import React from 'react'
import {Row, Col, Card} from 'antd'
import { EyeOutlined, HeartOutlined,LineChartOutlined } from '@ant-design/icons';

import detail_img from '../assets/trending/trend_3.png';
import icon_check from '../assets/icons/BadgeCheck.png';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';


const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
};

const labels = ['2/14', '3/16', '4/19', '5/10', '6/4', '7/20', '8/17', '9/9', '10/31', '11/20'];

export const data = {
    labels,
    datasets: [
      {
        data: [2,3,4,5,6,7,5,4,7,11,14,15],
        borderColor: '#7B61FF',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

const {Meta} = Card

const detailinfo = () => {
    return <div className='flex justify-between w-100'>
        <div className='font-spec-1'>
            <div className="text-1xl md:text-xs lg:text-2xl 2xl:text-3xl flex col-spec-2">Doodles<img className="my-auto" src={icon_check} alt={icon_check}></img></div>
            <div className='text-2xl md:text-1xl lg:text-3xl 2xl:text-3xl'>#5543</div>
            <div className='text-base md:text-base lg:text-1xl 2xl:text-1xl'>Owned by <span className='col-spec-2'>AVDR3W_WC</span></div>
        </div>
        <div className='pd-t-10 font-spec-2'>
            <div className='flex'>
                <EyeOutlined className='mr-2'/>
                <div className='text-sm lg:text-xs 2xl:text-1xl'> 7.3K views</div>
            </div>
            <div className='flex'>
                <HeartOutlined className='mr-2'/>
                <div className='text-sm lg:text-xs 2xl:text-1xl'> 46 favorties</div>
            </div>
        </div>
    </div>
}
function AppDetail(props){
    return(
        <div className="main">
            <div className="container-fluid pd-t-80">
                <Row className='pd-t-40' gutter={16}>
                    <Col xs={{span:24}} md={{span:10}}>
                        <Card
                            hoverable
                            className='w-4/5 m-auto ra-2 border-none filter-spec-1'
                            cover={<img alt={detail_img} src={detail_img} />}
                        >
                            <Meta
                                className='meta-spec-1'
                                title={detailinfo()}
                            />
                        </Card>
                    </Col>
                    <Col xs={{span:24}} md={{span:14}}>
                    <div className='w-5/6'>
                        <div className='flex text-1xl 2xl:text-2xl' >
                            <LineChartOutlined className='mr-2 my-auto'/>
                            <div className='my-auto font-spec-2'>Pricing History</div>
                        </div>
                        <Line options={options} data={data} />
                    </div>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppDetail