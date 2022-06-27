import { useState, forwardRef } from "react";
import { images, Images } from "~/asset/images";
import styles from "./Image.module.scss";
import classNames from "classnames";
function Image({ src, alt, className, ...props }, ref) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
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

export default forwardRef(Image);
