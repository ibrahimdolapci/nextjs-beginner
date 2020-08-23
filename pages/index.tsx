import Head from 'next/head'
import Layout from '../components/layout/layout'
import { Main, Cover } from './home/home.style'

export default function Home() {

  return (
    <Layout title="Popular Titles" >
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <Cover>Popular Series</Cover>
        <Cover>Popular Movies</Cover>
      </Main>
    </Layout>
  )
}
