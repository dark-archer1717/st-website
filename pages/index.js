import Head from 'next/head'
import Nav from '../components/nav'
import Feature from '../components/feature'
import Pricing from '../components/pricing'
import Footer from '../components/footer'
import Panel from '../components/panel'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {/* <Hero /> */}
        <Nav />
        <Panel />
        <Feature />
        <Pricing />
      </>
      <Footer />

    </div>
  )
}
