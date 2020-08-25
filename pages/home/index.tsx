import Head from 'next/head'
import { Main, Cover } from './home.style'
import { Layout } from '../../components/layout'
import { Row, Column } from '../../components/grid'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Popular Titles" >
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <Row>
          <Column lg="8">
            <Link href="/popular/[type]" as="/popular/series">
              <div className="wrapper">
                <Cover>Series</Cover>
                <span>Populer Series</span>
              </div>
            </Link>
            <Link href="/popular/[type]" as="/popular/movie">
              <div className="wrapper">
                <Cover>Movies</Cover>
                <span>Populer Movies</span>
              </div>
            </Link>
          </Column>
        </Row>
      </Main>
    </Layout>
  )
}
