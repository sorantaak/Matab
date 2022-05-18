import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './dashboard';
import DahsboardLayout from '../components/layout/dahsboardLayout';


function MyApp({ Component, pageProps, router }) {
  console.log(pageProps)
  console.log(router.pathname);
  console.log(router.locale);
  if (router.pathname === '/news/[newsId]' || router.pathname === '/en/news/[newsId]' || router.pathname === '/fa/news/[newsId]' || router.pathname === '/') {
    return (

      <Layout>
        <Component {...pageProps} />
      </Layout >

    )
  }

  if (router.pathname === '/dashboard' || router.pathname === '/dashboard/visits') {

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
