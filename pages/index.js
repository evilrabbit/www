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
    </section>
    <section className="zeit">
      <h4>ZEIT</h4>
      <h2><b>Website</b></h2>
      <Image
        src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/website.png`}
        width={2800/2.25}
        height={2102/2.25}
        margin={0}
      />
    </section>
    <section className="now-desktop">
    </section>
    <style global jsx>{`
      ::selection {
        background: #000;
        color: #FFF;
      }
      body {
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        margin: 0;
      }
      b {
        font-weight: 600;
      }
      h1 {
        font-size: 6.250em;
        font-weight: 300;
        margin: 0;
      }
      h2 {
        font-size: 3.375em;
        margin: 0;
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
      }
      .line-through {
        text-decoration:line-through;
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: auto;
      }
      .zeit {
        text-align: center;
        max-width: 980px;
      }
    `}</style>
  </main>
);
