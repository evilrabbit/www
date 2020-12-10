import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
// import Image from '../components/image';
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Project from "../components/Project";

import styles from "../styles/homepage.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const Homepage = () => {
  const mainRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    if (!mainRef.current) return;

    const title = document.querySelectorAll("#hero h1");
    const titleName = document.querySelector("#name");
    const titleEvil = document.querySelector("#evil");
    const titleAKAText = document.querySelector("#akatext");
    const headof = document.querySelector("#headof");
    const header = document.querySelector("#header");

    const titleNameSplit = new SplitText(titleName, {
      type: "chars, words, lines",
    });

    const titleEvilSplit = new SplitText(titleEvil, {
      type: "chars, words, lines",
    });

    tl.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        const body = document.querySelector("body");
        gsap.delayedCall(0.3, () => (body.style.overflow = "initial"));
      },
      defaults: {
        ease: "power2",
        duration: 0.65,
      },
    });

    // tl.current.set("#hero", { perspective: 400 });
    tl.current.set(titleAKAText, { opacity: 0 });

    tl.current.to(mainRef.current, {
      delay: 1,
      autoAlpha: 1,
    });
    tl.current.from(titleNameSplit.chars, {
      autoAlpha: 0,
      stagger: 0.01,
      onComplete: () => {
        titleNameSplit.revert();
      },
    });
    tl.current.to(
      titleAKAText,
      {
        opacity: 1,
      },
      "> -.2"
    );
    tl.current.to(title, {
      "--before-width": "100%",
    });
    tl.current.from(titleEvilSplit.chars, {
      autoAlpha: 0,
      stagger: 0.01,
      onComplete: () => {
        titleNameSplit.revert();
      },
    });
    tl.current.from(headof, {
      y: 30,
      autoAlpha: 0,
    });
    tl.current.fromTo(
      header,
      {
        y: -30,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    );

    tl.current.timeScale(.8).play();
  }, [mainRef]);
  return (
    <>
      <CustomHead />
      <Header />
      <main id="main" ref={mainRef} className={styles.main}>
        <Hero />
        <Project
          company="Vercel"
          category="Website"
          cta="Visit Site"
          image={
            <Image
              quality={95}
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/site.png`}
              width={2800 / 2.25}
              height={2102 / 2.25}
            />
          }
          visitLink="https://vercel.com"
          description={{
            title: "Awarded",
            image: (
              <Image
                quality={95}
                src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551067289/www/works/zeit/awards.png`}
                width={680 / 2}
                height={200 / 2}
              />
            ),
            content: (
              <>
                <Link href="https://cssdesignawards.com/">
                  <a target="_blank">CSSDA</a>
                </Link>
                : Official Public Vote Award Certificate of Excellence:
                Innovation, UX Design and UI Design{" "}
              </>
            ),
            date: "FEB 2019",
          }}
        />
        <Project
          company="NOW"
          category="Desktop"
          cta="Get App"
          image={
            <Image
              quality={95}
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551068030/www/works/zeit/now-desktop.png`}
              width={1376 / 2}
              height={1196 / 2}
            />
          }
          visitLink="https://zeit.co/download"
          description={{
            title: "Featured",
            image: (
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#2B2E3B" />
                <path
                  d="M43.2732 35.7469C36.7392 34.5568 31.5731 35.8024 29.5141 39.3686C27.9776 42.0299 28.4168 45.5582 30.5792 49.3298C30.7632 49.6508 31.1727 49.7619 31.4937 49.5778C31.8147 49.3938 31.9258 48.9843 31.7417 48.6633C29.7938 45.2658 29.4148 42.2207 30.6746 40.0387C32.385 37.0761 36.9931 35.9651 43.0331 37.0652C43.3971 37.1315 43.746 36.8901 43.8123 36.5261C43.8786 36.162 43.6373 35.8132 43.2732 35.7469ZM33.9771 53.9141C36.6191 56.8175 40.0514 59.5407 43.9659 61.8007C53.444 67.2729 63.5342 68.7355 68.507 65.3448C68.8128 65.1363 68.8916 64.7195 68.6832 64.4137C68.4747 64.108 68.0579 64.0292 67.7521 64.2376C63.3015 67.2723 53.7166 65.8829 44.6359 60.6402C40.8384 58.4477 37.5148 55.8108 34.9682 53.0123C34.7191 52.7386 34.2954 52.7186 34.0217 52.9677C33.748 53.2167 33.728 53.6405 33.9771 53.9141Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M66.9207 53.0987C71.199 48.0446 72.6928 42.9612 70.638 39.4023C69.1261 36.7836 65.9299 35.401 61.6821 35.3458C61.3121 35.3409 61.0083 35.637 61.0035 36.007C60.9986 36.377 61.2947 36.6809 61.6647 36.6857C65.485 36.7354 68.2387 37.9265 69.4776 40.0723C71.1843 43.0284 69.8521 47.5616 65.8979 52.2329C65.6588 52.5153 65.694 52.9381 65.9764 53.1772C66.2588 53.4163 66.6816 53.3811 66.9207 53.0987ZM55.9255 35.9696C52.0572 36.7984 47.9398 38.4189 43.9855 40.7019C34.2011 46.3509 27.8185 54.6806 28.7049 60.7204C28.7586 61.0865 29.099 61.3398 29.4651 61.286C29.8312 61.2323 30.0844 60.892 30.0307 60.5258C29.2437 55.1631 35.2937 47.2674 44.6555 41.8624C48.4915 39.6477 52.4783 38.0786 56.2062 37.2799C56.5681 37.2024 56.7985 36.8462 56.721 36.4844C56.6435 36.1226 56.2873 35.8921 55.9255 35.9696Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M40.0744 64.9078C42.3113 71.1541 45.9708 74.9998 50.0859 74.9998C53.087 74.9998 55.8637 72.954 58.029 69.3522C58.2196 69.0351 58.1171 68.6234 57.7999 68.4328C57.4828 68.2421 57.0711 68.3446 56.8805 68.6618C54.9346 71.8987 52.5444 73.6598 50.0859 73.6598C46.6676 73.6598 43.4036 70.2297 41.3359 64.4561C41.2112 64.1077 40.8276 63.9264 40.4793 64.0512C40.1309 64.1759 39.9496 64.5595 40.0744 64.9078ZM60.5067 63.686C61.6647 59.9855 62.2867 55.7166 62.2867 51.2682C62.2867 40.1681 58.4017 30.5994 52.8681 28.1423C52.5299 27.9921 52.134 28.1445 51.9838 28.4827C51.8336 28.8209 51.986 29.2168 52.3242 29.367C57.2596 31.5584 60.9467 40.6397 60.9467 51.2682C60.9467 55.5839 60.3444 59.718 59.2279 63.2858C59.1174 63.639 59.3141 64.0148 59.6672 64.1254C60.0204 64.2359 60.3962 64.0392 60.5067 63.686Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M73.1256 63.0295C73.1256 61.2585 71.6899 59.8228 69.9189 59.8228C68.1478 59.8228 66.7121 61.2585 66.7121 63.0295C66.7121 64.8006 68.1478 66.2363 69.9189 66.2363C71.6899 66.2363 73.1256 64.8006 73.1256 63.0295ZM71.7856 63.0295C71.7856 64.0605 70.9498 64.8963 69.9189 64.8963C68.8879 64.8963 68.0521 64.0605 68.0521 63.0295C68.0521 61.9986 68.8879 61.1628 69.9189 61.1628C70.9498 61.1628 71.7856 61.9986 71.7856 63.0295Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M30.2068 66.2363C31.9778 66.2363 33.4136 64.8006 33.4136 63.0295C33.4136 61.2585 31.9778 59.8228 30.2068 59.8228C28.4357 59.8228 27 61.2585 27 63.0295C27 64.8006 28.4357 66.2363 30.2068 66.2363ZM30.2068 64.8963C29.1758 64.8963 28.34 64.0605 28.34 63.0295C28.34 61.9986 29.1758 61.1628 30.2068 61.1628C31.2378 61.1628 32.0736 61.9986 32.0736 63.0295C32.0736 64.0605 31.2378 64.8963 30.2068 64.8963Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M50.0858 31.4136C51.8569 31.4136 53.2926 29.9778 53.2926 28.2068C53.2926 26.4357 51.8569 25 50.0858 25C48.3148 25 46.8791 26.4357 46.8791 28.2068C46.8791 29.9778 48.3148 31.4136 50.0858 31.4136ZM50.0858 30.0736C49.0549 30.0736 48.2191 29.2378 48.2191 28.2068C48.2191 27.1758 49.0549 26.34 50.0858 26.34C51.1168 26.34 51.9526 27.1758 51.9526 28.2068C51.9526 29.2378 51.1168 30.0736 50.0858 30.0736Z"
                  fill="#9FEAF9"
                />
                <path
                  d="M50.5756 53.5362C49.3231 53.8068 48.0891 53.0108 47.8179 51.7583C47.5478 50.5057 48.3433 49.2717 49.5959 49.0006C50.8484 48.7299 52.0824 49.5259 52.3536 50.7785C52.6242 52.031 51.8282 53.265 50.5756 53.5362Z"
                  fill="#9FEAF9"
                />
              </svg>
            ),
            content: (
              <>
                The application was highlighted on{" "}
                <Link href="https://electronjs.org/">
                  <a target="_blank">Electron</a>
                </Link>{" "}
                front page along with other well-known apps such as:{" "}
                <Link href="https://code.visualstudio.com/">
                  <a target="_blank">Visual Studio Code</a>
                </Link>
                ,{" "}
                <Link href="https://www.figma.com">
                  <a target="_blank">Figma</a>
                </Link>
                ,{` `}
                <Link href="https://www.skype.com">
                  <a target="_blank">Skype</a>
                </Link>
                ,{" "}
                <Link href="https://www.slack.com">
                  <a target="_blank">Slack</a>
                </Link>
                ,{" "}
                <Link href="https://discordapp.com/">
                  <a target="_blank">Discord</a>
                </Link>
                , and many more.
              </>
            ),
            date: "Since 2017",
          }}
        />
        <Project
          company="HYPER"
          category="Terminal"
          cta="Get App"
          image={
            <Image
              quality={95}
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551419978/www/works/zeit/hyper-app.png`}
              width={2192 / 2}
              height={1774 / 2}
            />
          }
          visitLink="https://hyper.is"
          description={{
            title: "Featured",
            image: (
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#2B2E3B" />
                <path
                  d="M43.273 35.747c-6.534-1.19-11.7.055-13.759 3.622-1.536 2.66-1.097 6.19 1.065 9.96a.67.67 0 101.163-.666c-1.948-3.397-2.327-6.442-1.067-8.624 1.71-2.963 6.318-4.074 12.358-2.974a.67.67 0 00.24-1.318zm-9.296 18.167c2.642 2.904 6.074 5.627 9.989 7.887 9.478 5.472 19.568 6.934 24.541 3.544a.67.67 0 00-.755-1.107c-4.45 3.034-14.035 1.645-23.116-3.598-3.798-2.192-7.121-4.83-9.668-7.628a.67.67 0 10-.99.902z"
                  fill="#9FEAF9"
                />
                <path
                  d="M66.92 53.099c4.279-5.054 5.773-10.138 3.718-13.697-1.512-2.618-4.708-4.001-8.956-4.056a.67.67 0 10-.017 1.34c3.82.05 6.574 1.24 7.813 3.386 1.706 2.956.374 7.49-3.58 12.16a.67.67 0 001.023.867zm-10.995-17.13c-3.868.83-7.985 2.45-11.94 4.733C34.202 46.35 27.82 54.68 28.706 60.72a.67.67 0 101.326-.194c-.787-5.363 5.263-13.259 14.625-18.664 3.836-2.214 7.822-3.783 11.55-4.582a.67.67 0 10-.28-1.31z"
                  fill="#9FEAF9"
                />
                <path
                  d="M40.074 64.908C42.311 71.154 45.971 75 50.086 75c3.001 0 5.778-2.046 7.943-5.648a.67.67 0 00-1.149-.69c-1.945 3.237-4.336 4.998-6.794 4.998-3.418 0-6.682-3.43-8.75-9.204a.67.67 0 10-1.262.452zm20.433-1.222c1.158-3.7 1.78-7.97 1.78-12.418 0-11.1-3.885-20.669-9.419-23.126a.67.67 0 10-.544 1.225c4.936 2.191 8.623 11.273 8.623 21.901 0 4.316-.603 8.45-1.72 12.018a.67.67 0 001.28.4zM73.126 63.03a3.207 3.207 0 10-6.414 0 3.207 3.207 0 006.414 0zm-1.34 0a1.867 1.867 0 11-3.734 0 1.867 1.867 0 013.734 0zM30.207 66.236a3.207 3.207 0 100-6.413 3.207 3.207 0 000 6.413zm0-1.34a1.867 1.867 0 110-3.733 1.867 1.867 0 010 3.733z"
                  fill="#9FEAF9"
                />
                <path
                  d="M50.086 31.414a3.207 3.207 0 100-6.414 3.207 3.207 0 000 6.414zm0-1.34a1.867 1.867 0 110-3.734 1.867 1.867 0 010 3.734zM50.576 53.536a2.32 2.32 0 11-.98-4.536 2.32 2.32 0 01.98 4.536z"
                  fill="#9FEAF9"
                />
              </svg>
            ),
            content: (
              <>
                The application was highlighted on{" "}
                <Link href="https://electronjs.org/">
                  <a target="_blank">Electron</a>
                </Link>{" "}
                front page along with other well-known apps such as:{" "}
                <Link href="https://code.visualstudio.com/">
                  <a target="_blank">Visual Studio Code</a>
                </Link>
                ,{" "}
                <Link href="https://www.figma.com">
                  <a target="_blank">Figma</a>
                </Link>
                ,{` `}
                <Link href="https://www.skype.com">
                  <a target="_blank">Skype</a>
                </Link>
                ,{" "}
                <Link href="https://www.slack.com">
                  <a target="_blank">Slack</a>
                </Link>
                ,{" "}
                <Link href="https://discordapp.com/">
                  <a target="_blank">Discord</a>
                </Link>
                , and many more.
              </>
            ),
            date: "Since 2017",
          }}
        />
        <Project
          company="SHARELOCK"
          category="Product"
          cta="Try It Now"
          image={
            <Image
              quality={95}
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551419158/www/works/auth0/sharelock-io.png`}
              width={1240 / 2}
              height={876 / 2}
            />
          }
          visitLink="https://sharelock.io/"
          description={{
            title: "Featured",
            image: (
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#FF6600" />
                <path
                  d="M52.9863 71V55.417L66.4072 32.9521H59.8682L50.165 49.748H49.9805L40.2773 32.9521H33.6855L47.0801 55.417V71H52.9863Z"
                  fill="var(--foreground)"
                />
              </svg>
            ),
            content: (
              <>
                The app was featured on{" "}
                <Link href="https://news.ycombinator.com/">
                  <a target="_blank">Hacker News</a>
                </Link>{" "}
                front page.
              </>
            ),
            date: "FEB 2015",
          }}
        />
        <Project
          company="GUARDIAN"
          category="Product"
          cta="Try It Now"
          image={
            <Image
              quality={95}
              src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551337683/www/works/auth0/auth0-guardian.png`}
              width={1536 / 2}
              height={1668 / 2}
            />
          }
          visitLink="https://auth0.com/multifactor-authentication"
        />
      </main>
    </>
  );
};

export default Homepage;
