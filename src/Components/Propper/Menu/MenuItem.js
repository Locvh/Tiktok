import Button from "~/Components/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data,onclick }) {
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to} onClick={onclick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
