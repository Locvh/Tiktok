import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import PropTypes from 'prop-types';
const cx = classNames.bind(style);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  large = false,
  small = false,
  disable = false,
  rounded = false,
  children,
  onClick,
  className,
  leftIcon,
  rightIcon,
  ...passprops
}) {
  let Comp = "button";

  const props = {
    onClick,
    // ...passprops,
  };

  if (disable) {
    delete props.onClick;
    delete props.href;
  } else if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  // trong classNames thì đối số thứ 2 thay vì primary = primary thì khi ghi giống tên thì ES vẫn tự nhận
  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    small,
    disable,
    rounded,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}


Button.prototype={
  to:PropTypes.string,
  href:PropTypes.string,
  primary:PropTypes.bool,
  outline:PropTypes.bool,
  text:PropTypes.bool,
  large:PropTypes.bool,
  small:PropTypes.bool,
  disable:PropTypes.bool,
  rounded:PropTypes.bool,
  children:PropTypes.node.isRequired,
  onClick:PropTypes.func,
  className:PropTypes.string,
  leftIcon:PropTypes.node,
  rightIcon:PropTypes.node,
}
export default Button;
