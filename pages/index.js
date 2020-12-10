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
    const rabbitContainer = document.querySelector("#rabbitContainer");
    const rabbitIcon = document.querySelector("#rabbitIcon");

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
        ease: "sine",
        duration: 0.6,
      },
    });

    tl.current.set(titleAKAText, { opacity: 0 });

    tl.current.from(rabbitContainer, {
      delay: 1,
      autoAlpha: 0,
    });
    tl.current.from(rabbitIcon, {
      ease: "back.out(1)",
      duration: 0.5,
      autoAlpha: 0,
      y: 30,
    });
    tl.current.to(rabbitIcon, {
      delay: 0.5,
      ease: "back.out(1)",
      duration: 0.5,
      autoAlpha: 0,
      y: -30,
    });
    tl.current.to(rabbitContainer, {
      autoAlpha: 0,
    });
    tl.current.to(mainRef.current, {
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
    tl.current.from(titleEvilSplit.chars, {
      autoAlpha: 0,
      stagger: 0.01,
      onComplete: () => {
        titleNameSplit.revert();
      },
    });
    tl.current.to(title, {
      "--before-width": "100%",
    });
    tl.current.from(headof, {
      ease: "back.out(1)",
      duration: 0.5,
      y: 30,
      autoAlpha: 0,
    });
    tl.current.fromTo(
      header,
      {
        y: -30,
      },
      {
        ease: "back.out(1)",
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
      }
    );

    tl.current.timeScale(1).play();
  }, [mainRef]);
  return (
    <>
      <CustomHead />
      <Header />
      <div id="rabbitContainer" className={styles.rabbit}>
        <svg
          id="rabbitIcon"
          width="42"
          height="44"
          viewBox="0 0 42 44"
          fill="none"
        >
          <path
            d="M38.3995 1.95211L38.3885 1.96087L38.3779 1.97004L32.7027 6.84536C32.7021 6.84584 32.7015 6.84633 32.701 6.84682C31.4823 7.88223 29.8859 9.77441 29.0689 11.208L26.7611 15.128C26.7607 15.1287 26.7602 15.1295 26.7598 15.1303C26.4459 15.6531 25.9258 16.1572 25.3267 16.5345C24.7212 16.9158 24.1072 17.1227 23.6343 17.1351C22.3505 17.1685 20.1553 17.1685 18.8714 17.1351C18.4003 17.1227 17.7689 16.9087 17.1518 16.5213C16.5389 16.1364 16.029 15.6359 15.7558 15.1473L15.7517 15.1401L15.7475 15.1329L13.4341 11.2033L13.4341 11.2033L13.4311 11.1984C12.6171 9.83958 10.9901 7.92032 9.82118 6.86124L9.81299 6.85381L9.80458 6.84664L4.09452 1.97151C3.77431 1.69159 3.44006 1.47024 3.10152 1.34999C2.76247 1.22957 2.33573 1.18537 1.94138 1.40569C1.54426 1.62758 1.36045 2.01658 1.29087 2.3704C1.22159 2.72277 1.24511 3.12047 1.32598 3.53084L1.32616 3.53176L2.62312 10.0698L2.62301 10.0699L2.62578 10.0826C2.96677 11.6574 4.03991 13.846 5.15236 15.0695L5.15453 15.0719L9.25343 19.5411C9.25378 19.5415 9.25414 19.5419 9.2545 19.5423C9.66 19.9888 9.99736 20.6639 10.1852 21.4091C10.3737 22.1566 10.3914 22.8932 10.2411 23.4476L10.2369 23.4633L10.2333 23.4792L10.0616 24.2429C9.65649 25.7495 9.4398 28.2265 9.58675 29.7704L9.72626 31.6924C9.72627 31.6925 9.72627 31.6925 9.72628 31.6926C9.72628 31.6926 9.72628 31.6927 9.72628 31.6927C9.78528 32.5097 10.0079 33.3788 10.2958 34.1267C10.5768 34.8567 10.9545 35.5615 11.376 35.9915L11.383 35.9986L11.3903 36.0057C11.9579 36.5544 12.7675 37.6877 13.0725 38.4539L13.0771 38.4656L13.0822 38.4773C13.3221 39.0252 13.7689 39.6285 14.259 40.173C14.7579 40.7274 15.3466 41.2702 15.9165 41.6925L15.9166 41.6926C16.5343 42.1502 17.2805 42.4696 17.9842 42.6299C18.6559 42.7829 19.4172 42.8193 20.0167 42.5613C20.3257 42.4387 20.7564 42.3649 21.209 42.3649C21.6692 42.3649 22.075 42.4411 22.3358 42.5556L22.3358 42.5557L22.3469 42.5604C22.9639 42.8197 23.7278 42.7746 24.4069 42.6164C25.1116 42.4522 25.8518 42.137 26.4876 41.7146L26.4876 41.7147L26.4968 41.7084C27.1009 41.294 27.7067 40.7334 28.2069 40.1686C28.6944 39.6181 29.1304 39.009 29.3537 38.4767C29.7101 37.699 30.4964 36.5364 31.0453 36.0058C31.4788 35.5869 31.8596 34.8805 32.1399 34.1521C32.4285 33.4021 32.6506 32.5243 32.7094 31.6916C32.7094 31.6914 32.7094 31.6913 32.7094 31.6912L32.8495 29.7618L32.8495 29.7615C32.9592 28.2413 32.7823 25.7621 32.374 24.2428L32.2023 23.4792L32.1987 23.4632L32.1945 23.4475C32.0429 22.8883 32.0545 22.1493 32.2381 21.4055C32.4216 20.6624 32.7575 19.9928 33.1737 19.5504L33.1737 19.5504L33.1801 19.5434L37.2811 15.0719L37.2832 15.0695C37.8502 14.446 38.4028 13.5881 38.8476 12.7106C39.2916 11.8347 39.6551 10.8864 39.8129 10.0676C39.8131 10.067 39.8132 10.0663 39.8133 10.0656L41.1046 3.55608C41.2102 3.15786 41.2595 2.76833 41.2116 2.41823C41.1619 2.05441 40.9887 1.64546 40.5743 1.41661C40.1792 1.19846 39.7509 1.24921 39.4206 1.35996C39.0816 1.47367 38.737 1.68352 38.3995 1.95211ZM21.3107 39.3944C21.1726 39.1431 21.0101 38.8707 20.8382 38.603C21.017 38.6214 21.1961 38.6301 21.3712 38.6301C21.506 38.6301 21.6431 38.6249 21.7805 38.6141C21.7621 38.6415 21.7439 38.6688 21.726 38.6961C21.5747 38.9262 21.4315 39.1656 21.3107 39.3944Z"
            fill="var(--background)"
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <main id="main" ref={mainRef} className={styles.main}>
        <Hero />
        <Project
          company="Vercel"
          category="Website"
          cta="Visit Site"
          image={
            <Image
              quality={95}
              loading="eager"
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
                loading="eager"
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
              loading="eager"
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
              loading="eager"
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
              loading="eager"
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
              loading="eager"
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
