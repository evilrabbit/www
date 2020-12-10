import styles from './hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <h1>
        Hi, I'm {''}
        <b id="name">Nicolás Garro,</b>
        <span id="akatext">a.k.a</span>&nbsp;
        <b id="evil">&nbsp;Evil Rabbit.</b>
      </h1>
      <h3 id="headof">
        Head of Design at <b>Vercel</b>
      </h3>
      <div className={styles.line} />
    </section>
  );
};

export default Hero;
