import Header from '../components/layout/Header'
import Banner from '../components/getting-started/Banner'
import IntegratingSteps from '../components/getting-started/IntegratingSteps'
import AccessSteps from '../components/getting-started/AccessSteps'
import ChooseProducts from '../components/getting-started/ChooseProducts'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <IntegratingSteps />
      <AccessSteps />
      <ChooseProducts />
      <Footer />
    </>
  )
}

export default Home