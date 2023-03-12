import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className={styles.wrapper}>
    <h1>Hello, My name is Mahyar Shabani. I am a senior Frontend engineer with 5 years of experience</h1>
  </div>
}
