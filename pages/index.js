import Head from 'next/head'
import Header from '../components/Header'
import CarsoulAndAboutOffice from '../components/Carsoul/CarsoulAndAboutOffice'
import VideoSection from '../components/videos/VideoSection'
import News from '../components/news/News'
import Footer from '../components/footer/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CarsoulAndAboutOffice />
      <VideoSection />
      <News />
      <Footer />
    </div>
  )
}
