import { useRouter } from 'next/router'

function aboutus() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h2>id is : {router.query.id}</h2>
            <p>title : {router.query.title}</p>
        </div>
    )
}

export default aboutus