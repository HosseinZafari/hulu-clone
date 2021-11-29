import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>hulu movie company </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Start */}
      <Header />

      <Nav />

      <Results rows={results}/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre
  const call  = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url ||
    request.fetchTrending.url}`).then((res) => res.json())

  return {
    props: {
      results: call.results
    }
  }
}