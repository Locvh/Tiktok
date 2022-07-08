import classNames from "classnames/bind";
import style from "./Popper.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(style);

function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

Wrapper.prototype = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Wrapper;
