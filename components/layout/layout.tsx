import Head from 'next/head';
import Header from './header/header.component';
import Breadcrumb from './breadcrumb/breadcrumb.component';
export const title = 'Pankod'

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
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
