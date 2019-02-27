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
          <Link href="https://zeit.co"><a target="_blank">View Site</a></Link>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/site.png`}
            width={2800/2.25}
            height={2102/2.25}
            margin={0}
          />
          <div className="cssda">
            <div className="image">
              <Image
                src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551067289/www/works/zeit/awards.png`}
                width={680/2}
                height={200/2}
                margin={0}
              />
            </div>
            <div className="award">
              <h3><b>Awarded</b></h3>
              <p><Link href="https://cssdesignawards.com/"><a target="_blank">CSSDA</a></Link>: Official Public Vote Award Certificate of Excellence:
    Innovation, UX Design and UI Design</p>
            </div>
            <div className="date">
            <p>FEB 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="now-desktop">
        <div className="wrapper">
          <div className="meta">
            <h4>NOW</h4>
            <h2><b>Desktop</b></h2>
            <Link href="https://zeit.co/download"><a target="_blank">Get App</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551068030/www/works/zeit/now-desktop.png`}
            width={1376/2}
            height={1196/2}
            margin={0}
          />
          <div className="electron">
            <div className="image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#2B2E3B"/>
              <path d="M43.2732 35.7469C36.7392 34.5568 31.5731 35.8024 29.5141 39.3686C27.9776 42.0299 28.4168 45.5582 30.5792 49.3298C30.7632 49.6508 31.1727 49.7619 31.4937 49.5778C31.8147 49.3938 31.9258 48.9843 31.7417 48.6633C29.7938 45.2658 29.4148 42.2207 30.6746 40.0387C32.385 37.0761 36.9931 35.9651 43.0331 37.0652C43.3971 37.1315 43.746 36.8901 43.8123 36.5261C43.8786 36.162 43.6373 35.8132 43.2732 35.7469ZM33.9771 53.9141C36.6191 56.8175 40.0514 59.5407 43.9659 61.8007C53.444 67.2729 63.5342 68.7355 68.507 65.3448C68.8128 65.1363 68.8916 64.7195 68.6832 64.4137C68.4747 64.108 68.0579 64.0292 67.7521 64.2376C63.3015 67.2723 53.7166 65.8829 44.6359 60.6402C40.8384 58.4477 37.5148 55.8108 34.9682 53.0123C34.7191 52.7386 34.2954 52.7186 34.0217 52.9677C33.748 53.2167 33.728 53.6405 33.9771 53.9141Z" fill="#9FEAF9"/>
              <path d="M66.9207 53.0987C71.199 48.0446 72.6928 42.9612 70.638 39.4023C69.1261 36.7836 65.9299 35.401 61.6821 35.3458C61.3121 35.3409 61.0083 35.637 61.0035 36.007C60.9986 36.377 61.2947 36.6809 61.6647 36.6857C65.485 36.7354 68.2387 37.9265 69.4776 40.0723C71.1843 43.0284 69.8521 47.5616 65.8979 52.2329C65.6588 52.5153 65.694 52.9381 65.9764 53.1772C66.2588 53.4163 66.6816 53.3811 66.9207 53.0987ZM55.9255 35.9696C52.0572 36.7984 47.9398 38.4189 43.9855 40.7019C34.2011 46.3509 27.8185 54.6806 28.7049 60.7204C28.7586 61.0865 29.099 61.3398 29.4651 61.286C29.8312 61.2323 30.0844 60.892 30.0307 60.5258C29.2437 55.1631 35.2937 47.2674 44.6555 41.8624C48.4915 39.6477 52.4783 38.0786 56.2062 37.2799C56.5681 37.2024 56.7985 36.8462 56.721 36.4844C56.6435 36.1226 56.2873 35.8921 55.9255 35.9696Z" fill="#9FEAF9"/>
              <path d="M40.0744 64.9078C42.3113 71.1541 45.9708 74.9998 50.0859 74.9998C53.087 74.9998 55.8637 72.954 58.029 69.3522C58.2196 69.0351 58.1171 68.6234 57.7999 68.4328C57.4828 68.2421 57.0711 68.3446 56.8805 68.6618C54.9346 71.8987 52.5444 73.6598 50.0859 73.6598C46.6676 73.6598 43.4036 70.2297 41.3359 64.4561C41.2112 64.1077 40.8276 63.9264 40.4793 64.0512C40.1309 64.1759 39.9496 64.5595 40.0744 64.9078ZM60.5067 63.686C61.6647 59.9855 62.2867 55.7166 62.2867 51.2682C62.2867 40.1681 58.4017 30.5994 52.8681 28.1423C52.5299 27.9921 52.134 28.1445 51.9838 28.4827C51.8336 28.8209 51.986 29.2168 52.3242 29.367C57.2596 31.5584 60.9467 40.6397 60.9467 51.2682C60.9467 55.5839 60.3444 59.718 59.2279 63.2858C59.1174 63.639 59.3141 64.0148 59.6672 64.1254C60.0204 64.2359 60.3962 64.0392 60.5067 63.686Z" fill="#9FEAF9"/>
              <path d="M73.1256 63.0295C73.1256 61.2585 71.6899 59.8228 69.9189 59.8228C68.1478 59.8228 66.7121 61.2585 66.7121 63.0295C66.7121 64.8006 68.1478 66.2363 69.9189 66.2363C71.6899 66.2363 73.1256 64.8006 73.1256 63.0295ZM71.7856 63.0295C71.7856 64.0605 70.9498 64.8963 69.9189 64.8963C68.8879 64.8963 68.0521 64.0605 68.0521 63.0295C68.0521 61.9986 68.8879 61.1628 69.9189 61.1628C70.9498 61.1628 71.7856 61.9986 71.7856 63.0295Z" fill="#9FEAF9"/>
              <path d="M30.2068 66.2363C31.9778 66.2363 33.4136 64.8006 33.4136 63.0295C33.4136 61.2585 31.9778 59.8228 30.2068 59.8228C28.4357 59.8228 27 61.2585 27 63.0295C27 64.8006 28.4357 66.2363 30.2068 66.2363ZM30.2068 64.8963C29.1758 64.8963 28.34 64.0605 28.34 63.0295C28.34 61.9986 29.1758 61.1628 30.2068 61.1628C31.2378 61.1628 32.0736 61.9986 32.0736 63.0295C32.0736 64.0605 31.2378 64.8963 30.2068 64.8963Z" fill="#9FEAF9"/>
              <path d="M50.0858 31.4136C51.8569 31.4136 53.2926 29.9778 53.2926 28.2068C53.2926 26.4357 51.8569 25 50.0858 25C48.3148 25 46.8791 26.4357 46.8791 28.2068C46.8791 29.9778 48.3148 31.4136 50.0858 31.4136ZM50.0858 30.0736C49.0549 30.0736 48.2191 29.2378 48.2191 28.2068C48.2191 27.1758 49.0549 26.34 50.0858 26.34C51.1168 26.34 51.9526 27.1758 51.9526 28.2068C51.9526 29.2378 51.1168 30.0736 50.0858 30.0736Z" fill="#9FEAF9"/>
              <path d="M50.5756 53.5362C49.3231 53.8068 48.0891 53.0108 47.8179 51.7583C47.5478 50.5057 48.3433 49.2717 49.5959 49.0006C50.8484 48.7299 52.0824 49.5259 52.3536 50.7785C52.6242 52.031 51.8282 53.265 50.5756 53.5362Z" fill="#9FEAF9"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>Featured</b></h3>
              <p>The application was highlighted along with other
renowned names such as: <Link href="https://code.visualstudio.com/"><a target="_blank">Visual Studio Code</a></Link>, <Link href="https://www.figma.com"><a target="_blank">Figma</a></Link>,
<Link href="https://www.skype.com"><a target="_blank">Skype</a></Link>, <Link href="https://www.slack.com"><a target="_blank">Slack</a></Link>, <Link href="https://discordapp.com/"><a target="_blank">Discord</a></Link> and many more.</p>
            </div>
            <div className="date">
            <p>Since 2017</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hyper">
        <div className="wrapper">
          <div className="meta">
            <h4>HYPER</h4>
            <h2><b>Terminal</b></h2>
            <Link href="https://hyper.is"><a target="_blank">Get App</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551077906/www/works/zeit/hyper.png`}
            width={2172/2}
            height={1822/2}
            margin={0}
          />
          <div className="electron">
            <div className="image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#2B2E3B"/>
              <path d="M43.2732 35.7469C36.7392 34.5568 31.5731 35.8024 29.5141 39.3686C27.9776 42.0299 28.4168 45.5582 30.5792 49.3298C30.7632 49.6508 31.1727 49.7619 31.4937 49.5778C31.8147 49.3938 31.9258 48.9843 31.7417 48.6633C29.7938 45.2658 29.4148 42.2207 30.6746 40.0387C32.385 37.0761 36.9931 35.9651 43.0331 37.0652C43.3971 37.1315 43.746 36.8901 43.8123 36.5261C43.8786 36.162 43.6373 35.8132 43.2732 35.7469ZM33.9771 53.9141C36.6191 56.8175 40.0514 59.5407 43.9659 61.8007C53.444 67.2729 63.5342 68.7355 68.507 65.3448C68.8128 65.1363 68.8916 64.7195 68.6832 64.4137C68.4747 64.108 68.0579 64.0292 67.7521 64.2376C63.3015 67.2723 53.7166 65.8829 44.6359 60.6402C40.8384 58.4477 37.5148 55.8108 34.9682 53.0123C34.7191 52.7386 34.2954 52.7186 34.0217 52.9677C33.748 53.2167 33.728 53.6405 33.9771 53.9141Z" fill="#9FEAF9"/>
              <path d="M66.9207 53.0987C71.199 48.0446 72.6928 42.9612 70.638 39.4023C69.1261 36.7836 65.9299 35.401 61.6821 35.3458C61.3121 35.3409 61.0083 35.637 61.0035 36.007C60.9986 36.377 61.2947 36.6809 61.6647 36.6857C65.485 36.7354 68.2387 37.9265 69.4776 40.0723C71.1843 43.0284 69.8521 47.5616 65.8979 52.2329C65.6588 52.5153 65.694 52.9381 65.9764 53.1772C66.2588 53.4163 66.6816 53.3811 66.9207 53.0987ZM55.9255 35.9696C52.0572 36.7984 47.9398 38.4189 43.9855 40.7019C34.2011 46.3509 27.8185 54.6806 28.7049 60.7204C28.7586 61.0865 29.099 61.3398 29.4651 61.286C29.8312 61.2323 30.0844 60.892 30.0307 60.5258C29.2437 55.1631 35.2937 47.2674 44.6555 41.8624C48.4915 39.6477 52.4783 38.0786 56.2062 37.2799C56.5681 37.2024 56.7985 36.8462 56.721 36.4844C56.6435 36.1226 56.2873 35.8921 55.9255 35.9696Z" fill="#9FEAF9"/>
              <path d="M40.0744 64.9078C42.3113 71.1541 45.9708 74.9998 50.0859 74.9998C53.087 74.9998 55.8637 72.954 58.029 69.3522C58.2196 69.0351 58.1171 68.6234 57.7999 68.4328C57.4828 68.2421 57.0711 68.3446 56.8805 68.6618C54.9346 71.8987 52.5444 73.6598 50.0859 73.6598C46.6676 73.6598 43.4036 70.2297 41.3359 64.4561C41.2112 64.1077 40.8276 63.9264 40.4793 64.0512C40.1309 64.1759 39.9496 64.5595 40.0744 64.9078ZM60.5067 63.686C61.6647 59.9855 62.2867 55.7166 62.2867 51.2682C62.2867 40.1681 58.4017 30.5994 52.8681 28.1423C52.5299 27.9921 52.134 28.1445 51.9838 28.4827C51.8336 28.8209 51.986 29.2168 52.3242 29.367C57.2596 31.5584 60.9467 40.6397 60.9467 51.2682C60.9467 55.5839 60.3444 59.718 59.2279 63.2858C59.1174 63.639 59.3141 64.0148 59.6672 64.1254C60.0204 64.2359 60.3962 64.0392 60.5067 63.686Z" fill="#9FEAF9"/>
              <path d="M73.1256 63.0295C73.1256 61.2585 71.6899 59.8228 69.9189 59.8228C68.1478 59.8228 66.7121 61.2585 66.7121 63.0295C66.7121 64.8006 68.1478 66.2363 69.9189 66.2363C71.6899 66.2363 73.1256 64.8006 73.1256 63.0295ZM71.7856 63.0295C71.7856 64.0605 70.9498 64.8963 69.9189 64.8963C68.8879 64.8963 68.0521 64.0605 68.0521 63.0295C68.0521 61.9986 68.8879 61.1628 69.9189 61.1628C70.9498 61.1628 71.7856 61.9986 71.7856 63.0295Z" fill="#9FEAF9"/>
              <path d="M30.2068 66.2363C31.9778 66.2363 33.4136 64.8006 33.4136 63.0295C33.4136 61.2585 31.9778 59.8228 30.2068 59.8228C28.4357 59.8228 27 61.2585 27 63.0295C27 64.8006 28.4357 66.2363 30.2068 66.2363ZM30.2068 64.8963C29.1758 64.8963 28.34 64.0605 28.34 63.0295C28.34 61.9986 29.1758 61.1628 30.2068 61.1628C31.2378 61.1628 32.0736 61.9986 32.0736 63.0295C32.0736 64.0605 31.2378 64.8963 30.2068 64.8963Z" fill="#9FEAF9"/>
              <path d="M50.0858 31.4136C51.8569 31.4136 53.2926 29.9778 53.2926 28.2068C53.2926 26.4357 51.8569 25 50.0858 25C48.3148 25 46.8791 26.4357 46.8791 28.2068C46.8791 29.9778 48.3148 31.4136 50.0858 31.4136ZM50.0858 30.0736C49.0549 30.0736 48.2191 29.2378 48.2191 28.2068C48.2191 27.1758 49.0549 26.34 50.0858 26.34C51.1168 26.34 51.9526 27.1758 51.9526 28.2068C51.9526 29.2378 51.1168 30.0736 50.0858 30.0736Z" fill="#9FEAF9"/>
              <path d="M50.5756 53.5362C49.3231 53.8068 48.0891 53.0108 47.8179 51.7583C47.5478 50.5057 48.3433 49.2717 49.5959 49.0006C50.8484 48.7299 52.0824 49.5259 52.3536 50.7785C52.6242 52.031 51.8282 53.265 50.5756 53.5362Z" fill="#9FEAF9"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>Featured</b></h3>
              <p>The application was highlighted along with other
renowned names such as: <Link href="https://code.visualstudio.com/"><a target="_blank">Visual Studio Code</a></Link>, <Link href="https://www.figma.com"><a target="_blank">Figma</a></Link>,
<Link href="https://www.skype.com"><a target="_blank">Skype</a></Link>, <Link href="https://www.slack.com"><a target="_blank">Slack</a></Link>, <Link href="https://discordapp.com/"><a target="_blank">Discord</a></Link> and many more.</p>
            </div>
            <div className="date">
            <p>Since 2017</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sharelock">
        <div className="wrapper">
          <div className="meta">
            <h4>SHARELOCK</h4>
            <h2><b>Product</b></h2>
            <Link href="https://sharelock.io/"><a target="_blank">Try It Now</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551213036/www/works/auth0/desktop-app.png`}
            width={1240/2}
            height={876/2}
            margin={0}
          />
          <div className="electron">
            <div className="image">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#FF6600"/>
                <path d="M52.9863 71V55.417L66.4072 32.9521H59.8682L50.165 49.748H49.9805L40.2773 32.9521H33.6855L47.0801 55.417V71H52.9863Z" fill="white"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>HN Front Page</b></h3>
              <p>The app was featured on the main page of Hacker News.</p>
            </div>
            <div className="date">
            <p>FEB 2015</p>
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
      .cssda {
        display: flex;
        justify-content: center;
        margin-top: -50px;
      }
      .date {
        text-align: left;
        padding-left: 50px;
      }
      .electron {
        display: flex;
        justify-content: center;
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
        margin: 0;
      }
      h4 {
        margin: 0;
      }
      .hyper {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .sharelock {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .intro {
        max-width: 980px;
        padding: 0 30px;
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
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
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
      .wrapper {
        max-width: 980px;
      }
      .zeit {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
      }
      @media screen and (max-width: 1200px) {
        .award  {
          border-right: none;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          margin: auto;
        }
        .date {
          text-align: center;
          padding-left: 0;
        }
        .cssda {
          flex-direction: column;
        }
        .electron {
          flex-direction: column;
        }
        .electron .image {
          transform: scale(0.75);
          margin-bottom: 10px;
        }
        .electron .date {
          margin-bottom: 75px;
        }
        .image {
          width: 250px;
          margin: 0 auto;
        }
        .hyper {
          padding-bottom: 0;
          padding-top: 75px;
        }

        .intro {
          margin-top: 100px;
        }
        .now-desktop {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .sharelock {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .line {
          margin-bottom: 100px;
        }
        .wrapper {
          width: 100vw;
        }
        .zeit {
          padding-bottom: 50px;
        }
      }
      @media screen and (max-width: 992px) {
        section  {
          height: auto;
        }
      }
      @media screen and (max-width: 576px) {
        h1 {
          font-size: 22vw;
        }
        .intro {
          margin-top: 50px;
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
