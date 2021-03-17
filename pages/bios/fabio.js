import Head from 'next/head'

import Image from 'next/image'

const profilePic = () => (
    <Image
    src= "/images/nome facil.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
    />
)

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bio | Blob</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div>
                
                <h1 className="title">
                     Fábio
                     
                </h1>
             <h2>
                 guilherme chupa minhas bolas
             </h2>
             {profilePic()}
            </div>
        </main>
    </div>
  )
}
