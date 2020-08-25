import Head from 'next/head'
import { Main } from './movies.style'
import { SearchInput, Dropdown,Layout,Row, Column } from '../../components'

export default function Home() {
    return (
        <Layout title="Popular Movies" >
            <Head>
                <title>Home</title>
            </Head>
            <Main>
                <Row>
                    <Column lg="8">
                        <SearchInput />
                        <Dropdown />
                    </Column>
                </Row>
            </Main>
        </Layout>
    )
}
