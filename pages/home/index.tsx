import Head from 'next/head'
import { Main, Cover, Wrapper } from './home.style'
import { Row, Column, Layout } from '../../components'

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
              <Cover href="/series">Series</Cover>
              <span>Populer Series</span>
            </Wrapper>
            <Wrapper>
              <Cover href="/movies">Movies</Cover>
              <span>Populer Movies</span>
            </Wrapper>
          </Column>
        </Row>
      </Main>
    </Layout>
  )
}
