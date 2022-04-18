import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  console.log(router.route)
  if (router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/confirmcode' || router.pathname === '/resetpassword' || router.pathname === '/sendSmsForResetPassword') {
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
  return (

    < Layout key={router.route}>
      <Component {...pageProps} />
    </Layout >

  )
}

export default MyApp
