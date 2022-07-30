import React from 'react'
import Image from 'next/image'
import Row from '../components/ui/row/Row'
function PageNotFound() {
    return (
        <Row>
            <div className='flex flex-row justify-center items-center gap-20 pt-5'>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-[200px] text-darkGold'>404</h4>

                </div>
                <div className='h-80 w-80'>
                    <Image src="/image/logo.png" width={900} height={679} layout="responsive" />
                </div>

            </div>
        </Row>
    )
}

export default PageNotFound