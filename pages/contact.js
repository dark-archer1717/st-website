import { useRouter } from 'next/router'
import Nav from '../components/nav'
import Info from '../components/info'

const Contact = () => {

  const router = useRouter()


  return (
    <>
      <Nav />
      <Info />
    </>
  )
}

export default Contact
