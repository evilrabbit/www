import Link from 'next/link';
import Image from '../image';

import styles from './project.module.css';

const Project = ({ company, category, visitLink }) => {
  return (
    <section className={styles.project}>
      <div className="wrapper">
        <h4>{company}</h4>
        <h2>
          <b>{category}</b>
        </h2>
        <Link href={visitLink}>
          <a target="_blank">View Site</a>
        </Link>
        <Image src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/site.png`} width={2800 / 2.25} height={2102 / 2.25} margin={0} />
        <div className={styles.description}>
          <div className={styles.image__container}>
            <Image src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551067289/www/works/zeit/awards.png`} width={680 / 2} height={200 / 2} margin={0} />
          </div>
          <div className={styles.content}>
            <h3>
              <b>Awarded</b>
            </h3>
            <p>
              <Link href="https://cssdesignawards.com/">
                <a target="_blank">CSSDA</a>
              </Link>
              : Official Public Vote Award Certificate of Excellence: Innovation, UX Design and UI Design
            </p>
          </div>
          <div className={styles.date}>
            <p>FEB 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
