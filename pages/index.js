import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Gaurav. I'm a blockchain developer. I'm very passionate about aerospace,rockets 🚀and jets. You can contact me on{' '}
        <a href="https://twitter.com/i_amgauravkumar" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
        <p>
         I like to write about blockchain, because this tech amazes me and have lots of potential to achieve and revolutionalize the future.
         You can read my blogs{' '}<a href="https://medium.com/@imgauravkumar7" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </section>
    </Layout>
  );
}