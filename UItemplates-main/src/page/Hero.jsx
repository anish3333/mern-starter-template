import React from 'react'
import Hero1 from '../components/hero/Hero1'
import Hero2 from '../components/hero/Hero2'
import Hero3 from '../components/hero/Hero3'
import { FloatButton } from 'antd';


function Hero() {
    return (
        <div>
            {/* devui */}
            <Hero1 />
            <Hero2 />
            {/* antui */}
            <Hero3 />
            <FloatButton.BackTop />
        </div>
    )
}

export default Hero