import { useState, forwardRef } from "react";
import { images, Images } from "~/asset/images";
import styles from "./Image.module.scss";
import classNames from "classnames";
import PropTypes from 'prop-types';
function Image({ src, alt, className,fallback:customFallback = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}
Image.prototype={
  src:PropTypes.string, 
  alt:PropTypes.string, 
  className:PropTypes.string,
  fallback:PropTypes.string
}
export default forwardRef(Image);
