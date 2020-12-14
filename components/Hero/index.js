import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <h1>
        Hi, I'm {""}
        <b id="name">Nicolás Garro,</b><br className={styles.ipadbr} />
        <span id="akatext">a.k.a&nbsp;</span>
        <b id="evil">Evil Rabbit.</b>
      </h1>
      <h3 id="headof">
        Head of Design at {" "}
        <a href="https://vercel.com" target="_blank">
          Vercel
        </a>
      </h3>
      <div className={styles.line} />
    </section>
  );
};

export default Hero;
