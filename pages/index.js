import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Chessboard from "../components/chessboard";
import ButtonControls from "../components/buttoncontrols";

export default function Home({ allPostsData }) {
  return (
      <Layout home>
          <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <section className={utilStyles.headingMd}>
            <p>Hello I'm <b>Simon</b>, this is my attempt at creating a react based chess game</p>
          </section>

        <ButtonControls/>

          <div>
              <Chessboard/>
          </div>

      </Layout>
  )
}