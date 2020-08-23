import Head from 'next/head'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header></header>
      <main>{children}</main>
    </div>
  )
}
