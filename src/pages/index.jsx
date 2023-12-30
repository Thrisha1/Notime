import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../common/UI/homepage/HomePage.jsx'
import Bg from "../../public/assets/background.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NoTime</title>
        <meta name="description" content="Ignite Your Tech Journey with Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <HomePage/>
        
      </main>
    </div>
  )
}
