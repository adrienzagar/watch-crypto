import Layout from "../components/Layout";

export default function Home({ res }) {
      console.log(res)

  return (
    <Layout page='Crypto Watch - Accueil'>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch(
      'https://api.nomics.com/v1/currencies/ticker?key=a0b0f7eb963189c1d3e375e8b0681c2d&ids=BTC,ETH,AAVE&interval=1d,30d,365d'
    ).then((res) => res.json());
    return {
      props: {res}
    }
  } catch (err) {
    console.log(err)
  }
}
