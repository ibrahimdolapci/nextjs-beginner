import Head from 'next/head'
import { Main, Cover, Wrapper } from './home.style'
import { Layout } from '../../components/layout'
import { Row, Column } from '../../components/grid'

export default function Home() {
  return (
    <Layout title="Popular Titles" >
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <Row>
          <Column lg="8">
            <Wrapper>
              <Cover href="/popular/series">Series</Cover>
              <span>Populer Series</span>
            </Wrapper>
            <Wrapper>
              <Cover href="/popular/movie">Movies</Cover>
              <span>Populer Movies</span>
            </Wrapper>
          </Column>
        </Row>
      </Main>
    </Layout>
  )
}
