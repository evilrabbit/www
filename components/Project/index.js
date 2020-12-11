import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useIsInViewport from "use-is-in-viewport";

import Link from "next/link";

import styles from "./project.module.css";

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? ` ${styles.disabeld}` : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrow__left} ${disabeld}`}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="var(--foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowRight = (props) => {
  const disabeld = props.disabled ? ` ${styles.disabeld}` : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrow__right} ${disabeld}`}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="var(--foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Project = ({
  category,
  company,
  cta,
  description,
  images,
  visitLink,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const [isInViewport, targetRef] = useIsInViewport();

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      const key = event.key || event.which;

      if (isInViewport) {
        if (key === "ArrowRight" || key === 39) {
          slider.next();
        }
        if (key === "ArrowLeft" || key === 37) {
          slider.prev();
        }
      }
    });
  }, [isInViewport]);

  return (
    <section className={styles.project}>
      <div className="wrapper">
        <h4>{company}</h4>
        <h2>
          <b>{category}</b>
        </h2>
        <Link href={visitLink}>
          <a target="_blank">{cta}</a>
        </Link>
      </div>
      <div className={styles.slider} ref={targetRef}>
        <div className="keen-slider" ref={sliderRef}>
          {images &&
            images.map((image, index) => {
              return (
                <div key={index} className="keen-slider__slide">
                  {image}
                </div>
              );
            })}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
        {slider && (
          <div className={styles.dots}>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={
                    `${styles.dot}` +
                    (currentSlide === idx ? ` ${styles.active}` : "")
                  }
                />
              );
            })}
          </div>
        )}
      </div>
      {description && (
        <div className="wrapper">
          <div className={styles.description}>
            <div className={styles.image__container}>{description.image}</div>
            <div className={styles.content}>
              <h3>
                <b>{description.title}</b>
              </h3>
              <p>{description.content}</p>
            </div>
            <div className={styles.date}>
              <p>{description.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
