import styles from '@/styles/Home.module.scss'
import Head from 'next/head';

export default function Home() {
  return <div className={styles.wrapper}>
    <Head>
      <title>Mahyar Shabani</title>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <h1>Hello, My name is Mahyar Shabani. I am a Frontend engineer with 5 years of experience</h1>
  </div>
}
