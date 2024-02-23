import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
const Button1 = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <>
            <div className='flex flex-col justify-center w-fit mx-auto bg-green-600'>

                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <Divider orientation="left" plain>
                    Preview
                </Divider>
                <Flex gap="small" align="flex-start" vertical>
                    <Flex gap="small" wrap="wrap">
                        <Button type="primary" size={size}>
                            Primary
                        </Button>
                        <Button size={size}>Default</Button>
                        <Button type="dashed" size={size}>
                            Dashed
                        </Button>
                    </Flex>
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <Flex gap="small" wrap="wrap">
                        <Button type="primary" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                        <Button type="primary" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                    </Flex>
                </Flex>
            </div>
            <div className='bg-black h-1 m-1' />
        </>
    );
};
export default Button1;