import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { getNewsById } from '../../data/newsData'
import Row from '../../components/ui/row/Row';
import Image from 'next/image';
import Head from 'next/head';

function news() {
    const router = useRouter();
    const news = getNewsById(router.query.newsId)
    console.log(news)
    if (!news) {
        return (<p>loading...</p>)
    }
    return (
        <Fragment>
            <Head>
                <title>{news.title}</title>
                <meta name="description" content={news.newSummary} />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <Row>
                <div className='mt-10'>
                    <h2 className='mb-5 font-bold text-gray-600'>{news.title}</h2>
                    <div className='text-center'>
                        <Image src={news.image} width={900} height={600} layout="responsive" />
                    </div>
                </div>
                <p className='my-7 text-gray-600 text-justify leading-10'>{news.newsBody}</p>
            </Row>
        </Fragment>
    )
}

export default news