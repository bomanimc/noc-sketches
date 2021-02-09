import Head from 'next/head'
import dynamic from 'next/dynamic';
const Vasoconstriction = dynamic(() => import('../components/Vasoconstriction'), { ssr: false })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vasoconstriction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Vasoconstriction />
    </div>
  )
}
