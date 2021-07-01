import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import blogData from '../components/blogData'
import Blog from '../components/blog'

export default function Home() {
  const blogComponent = blogData.map(blog => {
    return (
      <Blog blogDetails={blog} key={blog.id} />
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <Header />

      <main className={styles.main}>
        <div className="flex flex-wrap mx-5">
          {blogComponent}
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
