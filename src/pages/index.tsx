import styles from '@/styles/Home.module.scss'
import Head from 'next/head';
import {useRef, useState} from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [iframeSrc, setIframeSrc] = useState<string>("");

  const clicked = () => {
    setIframeSrc(inputRef.current?.value || "");
  }

  return <div className={styles.wrapper}>
    <Head>
      <title>Mahyar Shabani</title>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <input ref={inputRef} type="text"/>
    <button onClick={clicked}>Click</button>
    {iframeSrc ? <iframe src={iframeSrc} style={{width: "400px", height: "200px"}}></iframe> : null}
  </div>
}
