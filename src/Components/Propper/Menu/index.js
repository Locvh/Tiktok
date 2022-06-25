import Tippy from "@tippyjs/react//headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/Components/Propper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            <h2>{renderItems()}</h2>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
