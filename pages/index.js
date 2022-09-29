import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
        </h1>
        <h1 className={styles.title}>
          <a href="https://lemundo.atlassian.net/wiki/spaces/DT/pages/2011758615/Ecommerce+Analytics">Lemundo's Ecommerce Analytics API</a>
        </h1>

        <p className={styles.description}>
          Get started by enabling your module and setting your endpoint to
          <code className={styles.code}>/api/bigquery</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
