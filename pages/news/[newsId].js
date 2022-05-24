import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { getNewsById, newsData } from '../../data/newsData'
// import  from '../../data/newsData';
import Row from '../../components/ui/row/Row';
import Image from 'next/image';
import Head from 'next/head';
import * as BiIcons from "react-icons/bi";


function News(props) {
    const news = props.loadNews;
    const router = useRouter();
    // const t = useTranslations('mainnavbar');
    // console.log(t('menu'));
    // const news = getNewsById(router.query.newsId)
    // console.log(news)
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
                    <div className='flex rtl:flex-row ltr:flex-row-reverse justify-between'>
                        <div>
                            <h2 className='mb-5 font-bold text-gray-600'>{news.title}</h2>
                        </div>
                        <div className='text-gray-400 text-2xl'><BiIcons.BiArrowBack
                            className="cursor-pointer"
                            onClick={() => router.push('/#news')}
                        /></div>
                    </div>

                    <div className='text-center p-10'>
                        <Image src={news.image} width={900} height={600} layout="responsive" alt={news.title} />
                    </div>
                    <p className='text-gray-600 text-justify leading-10'>{news.newsBody}</p>
                </div>

            </Row>
        </Fragment>
    )
}

export default News

export async function getStaticProps({ params, locale }) {
    // const { params } = context;
    console.log(locale);

    const news = await getNewsById(params.newsId);
    console.log(`../../lang/${locale}.json`)
    if (!news) {
        return { notFound: true } //return 404 page when product is empty
    }
    return {
        props: {
            loadNews: news,
            // test: "aaaaaaa",

        }
    }
}

export async function getStaticPaths() {
    const data = newsData;
    const ids = data.map(item => item.id);
    const pathsWithParams = ids.map((id) => ({ params: { newsId: id } }));
    // console.log(pathsWithParams);
    return {
        paths: pathsWithParams,
        // [
        //     { params: { pid: "p1" } },
        //     // { params: { pid: "p2" } },
        //     // { params: { pid: "p3" } },
        // ],
        // fallback: false
        // fallback: 'blocking'
        fallback: true
    }
}

