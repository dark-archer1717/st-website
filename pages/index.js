import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Feature from '../components/feature'
import Pricing from '../components/pricing'
import Footer from '../components/footer'
// import Contact from '../components/contact'
import Panel from '../components/panel'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        {/* <Hero /> */}
        <Nav />
        <Panel />
        <Feature />
        <Pricing />
      </main>
      {/* <Contact />  */}
      <Footer />

    </div>
  )
}
