import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal'



export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" />
      </Head>

     
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}
