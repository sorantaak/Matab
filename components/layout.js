import TopNavbarContact from './TopNavBar/TopNavbarContact'


export default function Layout({ children }) {
    return (
        <>
            <TopNavbarContact />
            <main>{children}</main>

        </>
    )
}
