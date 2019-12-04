import Head from 'next/head'
import Header from "../../components/zeit-header";
import Image from "../../components/image";
import Link from "next/link";

export default () => (
  <main>
    <Head>
      <title>Elliot</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="theme-color" content="white" />
  	<meta name="twitter:card" content="summary_large_image" />
  	<meta name="twitter:site" content="@evilrabbit_" />
  	<meta name="twitter:creator" content="@evilrabbit_" />
  	<meta name="twitter:title" content="Evil Rabbit + Elliot" />
  	<meta name="twitter:description" content="Elliot is a no-code ecommerce platform that allows anyone to instantly setup, sell, and ship to 130+ countries with no technical knowledge required." />
  	<meta name="twitter:image" content="https://evilrabb.it/static/elliot-og-image.png" />
  	<meta property="og:title" content="Evil Rabbit + Elliot" />
  	<meta property="og:type" content="website" />
  	<meta property="og:description" content="Elliot is a no-code ecommerce platform that allows anyone to instantly setup, sell, and ship to 130+ countries with no technical knowledge required." />
  	<meta property="og:url" content="https://evilrabb.it" />
  	<meta property="og:image" content="https://evilrabb.it/static/elliot-og-image.png" />
  	<meta name="apple-mobile-web-app-capable" content="yes" />
  	<meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Head>
    <Header />
    <section className="intro">
      <div className="elliot-logotype">
        <div className="image">
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1575425974/www/contests/elliot/elliot-logotype.png`}
            width={400/2.5}
            height={400/2.5}
            margin={0}
          />
        </div>
      </div>
      <h1>Working with Elliot</h1>
      <div className="line"></div>
    </section>
    <section className="intro">
    <h3><Link href="https://elliot.store/"><a target="_blank">Elliot</a></Link> is a no-code ecommerce platform that allows anyone to <b>instantly setup, sell, and ship</b> to 130+ countries with no technical knowledge required. <Link href="https://zeit.co/"><a target="_blank">ZEIT</a></Link> is teaming up with Elliot to provide the best hosting experience to their customers who want to modify their store through an easy-to-modify template package. ZEIT is also working with Elliot to provide a better experience to their no-code customers so that their stores are instantly accessible from anywhere in the world, through a world-class CDN, to match where you can sell.
Elliot paired up with me to choose a winner for their light-mode competition and I was happy to select <Link href="https://twitter.com/iakshatmittal"><a target="_blank">Akshat Mittal</a></Link> for creating an on-brand beautiful light theme.</h3>
    </section>
    <section className="project">
      <div className="winner">
        <div className="wrapper">
          <h3><b>Winner 🎉</b></h3>
          <h2><b>Akshat Mittal</b></h2>
          <Link href="https://twitter.com/sir_gee_ohhhhh/status/1200135866116694017?s=20"><a target="_blank">View Proposal</a></Link>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1575432066/www/contests/elliot/akshat-mittal.png`}
            width={2640/2}
            height={1594/2}
            margin={0}
          />
        </div>
      </div>
      <div className="submissions">
        <div className="wrapper">
          <h3><b>Submissions</b></h3>
          <Link href="https://twitter.com/sir_gee_ohhhhh/status/1200131403805085696?s=21"><a target="_blank">View All</a></Link>

          <div className="submissions-container">
            <div className="submission">
              <div className="thumb one"></div>
              <h4>Will Merchan</h4>
            </div>

            <div className="submission">
              <div className="thumb two"></div>
              <h4>Traf</h4>
            </div>

            <div className="submission">
              <div className="thumb three"></div>
              <h4>Sobbuh</h4>
            </div>
            
            <div className="submission">
              <div className="thumb four"></div>
              <h4>Karan</h4>
            </div>

            <div className="submission">
              <div className="thumb five"></div>
              <h4>Hamoba Bamoha</h4>
            </div>

            <div className="submission">
              <div className="thumb six"></div>
              <h4>Marciano</h4>
            </div>

            <div className="submission">
              <div className="thumb seven"></div>
              <h4>Aulia V. Afif</h4>
            </div>

            <div className="submission">
              <div className="thumb eight"></div>
              <h4>Piotr Monwid-Olechnowicz</h4>
            </div>

            <div className="submission">
              <div className="thumb nine"></div>
              <h4>Alisha</h4>
            </div>

            <div className="submission">
              <div className="thumb ten"></div>
              <h4>Chrisas</h4>
            </div>

            <div className="submission">
              <div className="thumb eleven"></div>
              <h4>JavaScriptErika</h4>
            </div>

            <div className="submission">
              <div className="thumb twelve"></div>
              <h4>Eduardo Mejía</h4>
            </div>

          </div>

        </div>
      </div> 
    </section>
    <style jsx>{`
      @keyframes fadein {
  			from { opacity: 0; }
  			to   { opacity: 1; }
  		}
      a {
        color: #0076FF;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border .2s ease;
      }
      a :hover {
        border-bottom: 1px solid #0076FF;
      }
      b {
        font-weight: 600;
      }
      .elliot-logotype {
        display: flex;
        justify-content: center;
      }
      .elliot-logotype .image {
        width: 180px;
        height: 180px;
      }
      h1 {
        font-size: 6.250em;
        font-weight: 700;
        margin: 0;
      }
      h2 {
        font-size: 3.375em;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 1.625em;
        line-height: 1.5; 
        font-weight: 300;
        margin: 0;
      }
      h4 {
        margin: 0;
      }
      .intro {
        max-width: 980px;
        padding: 0 30px;
      }
      .intro h1 {
        text-align: center;
        margin-bottom: 24px;
      }
      .intro h3 {
        text-align: left;
      }
      .line {
        border-left: 1px solid transparent;
        height: 100px;
        margin: 0 auto;
        margin-top: 100px;
      }
      .line-through {
        text-decoration:line-through;
      }
      main {
        animation: fadein 2s;
      }
      .meta {
        margin-bottom: 50px;
      }
      p {
        font-size: 0.875em;
        line-height: 1.500em;
      }
      .project {
        height: auto;
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: auto;
      }
      .submission {
        width: 320px;
        height: 240px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        margin-top: 40px;
      }
      .submission .thumb {
        background: white;
        border-radius: 8px;
        width: 300px;
        height: 200px;
        border: 1px solid #eaeaea;
        margin-bottom: 20px;
      }

      .submission .one {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575436424/www/contests/elliot/Will-Merchan.jpg");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .two {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575436425/www/contests/elliot/Traf.jpg");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .three {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575436425/www/contests/elliot/Sobbuh.jpg");
        background-repeat: no-repeat;
        background-size: 1100px;
      }

      .submission .four {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575436424/www/contests/elliot/KaranRBeghi.jpg");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .five {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437197/www/contests/elliot/Hamoba.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .six {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437197/www/contests/elliot/Martian.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .seven {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437197/www/contests/elliot/Aulia.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .eight {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437765/www/contests/elliot/Piotr.png");
        background-repeat: no-repeat;
        background-size: 1300px;
      }

      .submission .nine {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437765/www/contests/elliot/Alisha.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .ten {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575437765/www/contests/elliot/Chrisas.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submission .eleven {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575438246/www/contests/elliot/JavaScriptErika.png");
        background-repeat: no-repeat;
        background-size: 1400px;
      }

      .submission .twelve {
        background-image: url("https://res.cloudinary.com/evilrabbit/image/upload/v1575438246/www/contests/elliot/Eduardo-Mejia.png");
        background-repeat: no-repeat;
        background-size: 1000px;
      }

      .submissions {
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .submissions-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .winner {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
      }
      .wrapper {
        max-width: 980px;
      }
      @media screen and (max-width: 1200px) {
        .image {
          width: 250px;
          margin: 0 auto;
        }
        .submissions {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .winner {
          padding-bottom: 50px;
        }
        .wrapper {
          width: 100vw;
        }
      }
      @media screen and (max-width: 992px) {
        .line {
          display: none;
        }
        .intro {
          border-bottom: 1px solid #EAEAEA;
          margin-bottom: 150px;
          padding-bottom: 150px;
        }
        section  {
          height: auto;
        }
      }
      @media screen and (max-width: 576px) {
        h1 {
          font-size: 16vw;
        }
        .intro {
          margin-bottom: 100px;
          margin-top: 50px;
          margin-bottom: 100px;
          padding-bottom: 160px;
        }
      }
    `}</style>
    <style global jsx>{`
      ::selection {
        background: #000;
        color: #FFF;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        margin: 0;
      }
    `}</style>
  </main>
);
