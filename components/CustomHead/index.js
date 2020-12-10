import Head from 'next/head';

const CustomHead = () => (
  <Head>
    <title>Evil Rabbit</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300:400;600;700&display=swap" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="white" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@evilrabbit_" />
    <meta name="twitter:creator" content="@evilrabbit_" />
    <meta name="twitter:title" content="Evil Rabbit" />
    <meta name="twitter:description" content="Head of Design at Vercel" />
    <meta name="twitter:image" content="https://dev.evilrabb.it/static/og-image.png" />
    <meta property="og:title" content="Evil Rabbit" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Head of Design at Vercel" />
    <meta property="og:url" content="https://dev.evilrabb.it" />
    <meta property="og:image" content="https://dev.evilrabb.it/static/og-image.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
  </Head>
);

export default CustomHead;
