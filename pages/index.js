import Fetch from "isomorphic-unfetch"
import Layout from '../components/Layout'

import Prices from '../components/Prices'

function Index(props) {
  return (
    <Layout>
      <div>
        <h1>Welcome to BTC Price Tracker 🐼🐼🐼</h1>
        <p>Check current Bitcoin price:</p>
        <Prices bpi={props.bpi} />
        <br />
        <br />
        <br />
        Website created utilizing Coindesk API and Next.js framework.
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

  const data = await res.json()

  return {
    bpi: data.bpi,
  }
}

export default Index