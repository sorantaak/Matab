import Head from 'next/head'
import Header from '../components/Header'
import CarsoulAndAboutOffice from '../components/Carsoul/CarsoulAndAboutOffice'
import VideoSection from '../components/videos/VideoSection'
import News from '../components/news/News'
// import { useTranslations } from 'use-intl';
import { useEffect } from 'react'

export default function Home() {
  // console.log(props.locale)
  // const t = useTranslations('mainnavbar');
  // console.log(t('menu'));
  // useEffect(() => {
  //   if (props.locale === 'fa') {
  //     document.body.style.direction = "rtl";
  //     document.body.style.fontFamily = "Vazirmatn"
  //   } else {
  //     document.body.style.direction = "ltr";
  //     document.body.style.fontFamily = "Tahoma"
  //   }
  //   props.locale === 'fa'
  //     ? (document.body.style.direction = "rtl")
  //     : (document.body.style.direction = "ltr");
  // }, [props.locale])

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