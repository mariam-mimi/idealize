import Head from 'next/head'
import Image from 'next/image'

import SortedPostCardList from '../components/SortedPostCardList';

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <SortedPostCardList />

      {/* Load more posts */}
      <div className="text-center">
            <a href="#" className="load-more">Load more</a>
      </div>

      {/* Back to top */}
      <button className="back-to-top">Back to top</button>
    
      <Footer />
    </>
  )
}
