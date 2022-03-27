import { useRouter } from 'next/router';

function SingleArticle() {
    const router = useRouter();
    console.log(router, router.query)
    return (
        <div>SingleArticle
            <div>{router.query.title}</div>
            <div>{router.query.id}</div>
        </div>

    )
}

export default SingleArticle