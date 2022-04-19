import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getNewsById } from '../../data/newsDat'

function news() {
    const router = useRouter();
    const news = getNewsById(router.query.newsId)
    console.log(news)
    if (!news) {
        return (<p>loading...</p>)
    }
    return (
        <div className='text-center p-40'>
            <p>test</p>
            {news.title}
        </div>
    )
}

export default news