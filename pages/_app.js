import '../styles/globals.css'
import Fonts from "../components/fonts"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Fonts /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
