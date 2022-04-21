import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { getNewsById } from '../../data/newsData'
import Row from '../../components/ui/row/Row';
import Image from 'next/image';
import Head from 'next/head';
import * as BiIcons from "react-icons/bi";

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
            <Row bgColor="bg-gray-50">
                <div className='pt-10 shadow-lg bg-white rounded-lg px-5 py-5'>
                    <div className='flex flex-row justify-between'>
                        <div><h2 className='mb-5 font-bold text-gray-600'>{news.title}</h2></div>
                        <div className='text-gray-400 text-2xl'><BiIcons.BiArrowBack
                            className="cursor-pointer"
                            onClick={() => router.push('/#news')}
                        /></div>
                    </div>

                    <div className='text-center p-10'>
                        <Image src={news.image} width={900} height={600} layout="responsive" />
                    </div>
                    <p className='text-gray-600 text-justify leading-10'>{news.newsBody}</p>
                </div>

            </Row>
        </Fragment>
    )
}

export default news