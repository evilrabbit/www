import Head from 'next/head'
import Header from "../components/header";
import Image from "../components/image";
import Link from "next/link";

export default () => (
  <main>
    <Head>
      <title>Evil Rabbit</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    </Head>
    <Header />
    <section className="intro">
      <h1>Hi, I'm <span className="line-through"><b>Nicolás Garro</b>, a.k.a</span> <b>Evil Rabbit.</b></h1>
      <h3>Head of Design at <b>ZEIT</b></h3>
      <div className="line"></div>
    </section>
    <section className="project">
      <div className="zeit">
        <div className="wrapper">
          <h4>ZEIT</h4>
          <h2><b>Website</b></h2>
          <Link href="https://zeit.co"><a target="_blank">zeit.co/</a></Link>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/site.png`}
            width={2800/2.25}
            height={2102/2.25}
            margin={0}
          />
          <div className="extra-info">
            <Image
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551067289/www/works/zeit/awards.png`}
              width={680/2}
              height={200/2}
              margin={0}
            />
            <div className="award">
              <h2><b>Awarded</b></h2>
              <p>Official Public Vote Award Certificate of Excellence:
    Innovation, UX Design and UI Design</p>
            </div>
            <div className="date">
            <p><b>CSS Design Awards</b><br/>FEB 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="now-desktop">
        <div className="wrapper">
          <div className="meta">
            <h4>NOW</h4>
            <h2><b>Desktop App</b></h2>
            <Link href="https://zeit.co/download"><a target="_blank">zeit.co/download</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551068030/www/works/zeit/now-desktop.png`}
            width={1376/2}
            height={1196/2}
            margin={0}
          />
        </div>
      </div>
    </section>
    <section>
    </section>
    <style jsx>{`
      @keyframes fadein {
  			from { opacity: 0; }
  			to   { opacity: 1; }
  		}
      a {
        color: #999;
        text-decoration: none;
        transition: color .2s ease;
      }
      a :hover {
        color: #000;
      }
      .award  {
        text-align: left;
        max-width: 400px;
        border-right: 1px solid #eaeaea;
        padding-left: 50px;
        padding-right: 50px;
      }
      b {
        font-weight: 600;
      }
      .extra-info {
        display: flex;
        justify-content: center;
        margin-top: -50px;
      }
      .date {
        text-align: left;
        padding-left: 50px;
      }
      h1 {
        font-size: 6.250em;
        font-weight: 300;
        margin: 0;
      }
      h2 {
        font-size: 3.375em;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 1.625em;
        font-weight: 300;
      }
      h4 {
        margin: 0;
      }
      .intro {
        max-width: 980px;
        padding: 0 20px;
      }
      .line {
        border-left: 1px solid #000;
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
      .now-desktop {
        background: #fafafa;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 100px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
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
      .wrapper {
        max-width: 1100px;
      }
      .zeit {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
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
