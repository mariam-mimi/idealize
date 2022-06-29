import Head from 'next/head'
import Image from 'next/image'

import SortedPostCardList from '../components/SortedPostCardList';

export default function Home() {
  return (
    <>
      <SortedPostCardList />

      {/* Load more posts */}
      <div className="text-center">
            <a href="#" className="load-more">Load more</a>
      </div>

      {/* Back to top */}
      <button className="back-to-top">Back to top</button>    
nh    </>
  )
}
