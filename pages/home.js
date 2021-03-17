import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>B\ob</title>
        <link rel="icon" href="/logo1.png" />
      </Head>

        <navbar>
            <navlogo>
              <img src=" /logo1.svg " alt="logo1" className="logoNav" />
              <p>B/ob</p>
            </navlogo>

            <navlinks>
              <Link href=""><a>./bios</a></Link>
              <Link href=""><a>./posts</a></Link>
            </navlinks>
        </navbar> 

      <main>
        <div className="navbar">
        </div>    
         <h1 className="title">Bem vindo ao B\ob</h1>
          <p className="description"> Apenas mais um compendium de informações</p>
            
        <div className="grid">
          <a href="/posts" className="card">
            <h3>Posts &rarr;</h3>
            <p>Lista dos nossos posts</p>
          </a>

          <a href="/bios" className="card">
            <h3>Bios &rarr;</h3>
            <p>Conheça os autores!</p>
          </a>

          
        </div>
      </main>
      <footer>
        <div className="footerbox">
          <a target="_blank" rel="noopener noreferrer">
            <img src=" /logo1.svg " alt="logo1" className="logo" />
          </a>
        </div>
      </footer>
        <style jsx>{`  

        navbar{
          background:#202020;
          width:100%;
          min-height: 33%;
          padding: 0;
          margin: 0;
          padding:0 20% 0 20%;
          display: flex;
          flex-direction: row;
          align-items: center;

        }
        navlogo{
          color: #dcdcdc;
          display: flex;
          flex-direction: row;
          align-items: center; 
        }
    

        navlinks a{
          margin: 0 0 0 15vh;
        }

        navlinks a:hover{
          color: #ffa500;
          border-bottom: 3px solid #ffa500;
          font-style: bold;
        }

        .logoNav{
          width:60px;
        }

        .container {
          background:url("images/headerb.jpg");
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;  
        }

        main { 
          width: 66%;
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        footer {
          margin: 1rem 0 0 0;
          background: #202020;
          width: 100%;
          height: 7vh;
          border-top: 1px solid #bcbcbc;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: border-color 0.5s ease
        }

      
        Footer:hover{
          border-color: #adff2f
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: 	#dcdcdc;
          text-decoration: none;
        }

        .title a {
          color: 	#dcdcdc;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          transition: color 0.5s ease
        }

        .title,
        .subtitle,
        .description {
          color: 	black;
          text-align: center;
          font-family: 'Inter', sans-serif;
        }
        
        .title:hover{
          color: #ffa500;
        } 
        
        .description:hover{
          color: #adff2f;
        }

        
        .subtitle {
          margin: 0;
          color: 	#bcbcbc;
          line-height: 1.5;
          font-size: 1.7rem;
          text-align: center;
        }

        .description, {
          line-height: 1.5;
          font-size: 1.5rem;
          transition: color 0.5s ease
        }

        code {
          color: 	#bcbcbc;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: left;
          justify-content: center;
          flex-wrap: flex;
          width: 80%;
          margin-top: 4rem;
        }


        .card {
          background: #f0f0f0;
          margin: 1rem;
          flex-basis: 45%;
          padding: 2rem;
          text-align: center;
          color: 	black;
          text-decoration: none;
          border: 1px solid #bcbcbc;
          border-radius: 15px;
          transition: 0.5s ease;
        }

        .card:hover {
          color: #004000;
          border-color: #004000;
          transform: scale(1.1);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {}
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


