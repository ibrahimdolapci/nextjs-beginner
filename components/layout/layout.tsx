import Head from 'next/head';
import { Header } from './header';
import { Breadcrumb } from './breadcrumb';
export const title = 'Pankod'

export function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pankod Frontend Challange" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Breadcrumb title={title} />
      <main>{children}</main>
    </div>
  )
}
