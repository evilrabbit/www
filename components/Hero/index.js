import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Hi, I'm{' '}
        <span className={styles.line__through}>
          <b>Nicolás Garro</b>, a.k.a
        </span>{' '}
        <b>Evil Rabbit.</b>
      </h1>
      <h3>
        Head of Design at <b>Vercel</b>
      </h3>
      <div className={styles.line} />
    </section>
  );
};

export default Hero;
