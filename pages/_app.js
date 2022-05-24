import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './dashboard';
import DahsboardLayout from '../components/layout/dahsboardLayout';
import { useEffect } from 'react';


function MyApp({ Component, pageProps, router }) {

  const { locale } = router;
  console.log(router.pathname);
  useEffect(() => {

    if (!router.pathname.includes('dashboard')) {
      if (locale === "fa") {
        document.body.dir = "rtl";
        document.body.style.direction = "rtl";
        document.body.style.removeProperty("font-family");
      } else if (locale === "en") {
        document.body.dir = "ltr";
        document.body.style.direction = "ltr";
        document.body.style.fontFamily = "Tahoma";
      }
    }


  }, [locale]);
  if (router.pathname === '/news/[newsId]' || router.pathname === '/' || router.pathname === '/404') {
    return (

      <Layout>
        <Component {...pageProps} />
      </Layout >

    )
  }

  if (router.pathname.includes('dashboard')) {

    return (
      <DahsboardLayout>
        <AnimatePresence>
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ type: 'linear' }} exit="pageExit" variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                delay: 0.05,
              },
            },
            pageExit: {
              backgroundColor: 'white',
              // filter: `invert()`,
              opacity: 0,
              transition: {
                delay: 0.05,
              },
            }
          }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </DahsboardLayout>
    )
  }


  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0,
          transition: {
            delay: 1,
          },
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
