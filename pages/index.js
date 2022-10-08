import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AskAndAnswer from "../components/AskAndAnswer/AskAndAnswer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1 className='text-center font-bold'>Bla Bla Bla</h1>
        <AskAndAnswer />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
