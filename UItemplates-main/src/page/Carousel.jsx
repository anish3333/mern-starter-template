import { FloatButton } from 'antd';

import React from 'react'
import Carousel1 from '../components/Carousel/Carousel1'
import Carousel2 from '../components/Carousel/Carousel2'
import Carousel3 from '../components/Carousel/Carousel3'
import Carousel4 from '../components/Carousel/Carousel4'
import Carousel5 from '../components/Carousel/Carousel5'

function Carousel() {
    return (
        <div>
            <Carousel1 />
            <Carousel2 />
            <Carousel3 />
            <Carousel4 />
            <Carousel5 />
            <FloatButton.BackTop />
        </div>
    )
}

export default Carousel


