import Head from 'next/head'
import Header from '../components/Header'
import CarsoulAndAboutOffice from '../components/Carsoul/CarsoulAndAboutOffice'
import VideoSection from '../components/videos/VideoSection'
import News from '../components/news/News'
import { useTranslations } from 'use-intl';

export default function Home(props) {
  // console.log(props.locale)
  const t = useTranslations('home');

  return (
    <div>
      <Head>
        <title>مرکز ایمپلنت دیجیتال و زیبایی دکتر سلام رحیمی</title>
        <meta name="description" content="ایمپلنت دندان - زیبابیی دندان - سلامتی دندان - مرکز ایمپلنت دیجیتال و زیبایی دکتر سلام رحیمی" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <CarsoulAndAboutOffice />
      <VideoSection />
      <News />
    </div>
  )
}



export function getStaticProps({ locale }) {

  return {
    props: {
      messages: require(`../lang/${locale}.json`),
      locale
    },
  };
}