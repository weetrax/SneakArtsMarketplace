import * as React from "react";
import PropTypes from "prop-types";
import styles from "./FullscreenLoader.module.scss";

type FullscreenLoaderProps = {
  //
};

const FullscreenLoader: React.FC<FullscreenLoaderProps> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
      </div>
      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="18"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

FullscreenLoader.propTypes = {
  //
};

export default FullscreenLoader;
