import Head from 'next/head';
// import Image from 'next/image';
import About from '../components/about';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Header from '../components/header';
import Nav from '../components/nav';
import Portfolio from '../components/portfolio';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>Ultimate Portfolio</title>
        <meta
          name="Web dev portfolio - nextjs tailwind"
          content="Web dev portfolio using Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
}
