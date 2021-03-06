import PropTypes from "prop-types";
import Tippy from "@tippyjs/react//headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Propper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onclick={() => {
            if (isParent) {
              setHistory([...history, item.children]);
              // setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      hideOnClick={hideOnClick}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      delay={[0, 700]}
      offset={[15, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <HeaderMenu
                title={current.title}
                onBack={() => {
                  setHistory(history.slice(0, history.length - 1));
                  // setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}

            <div className={cx("menu-body")}>
              {" "}
              <h2>{renderItems()}</h2>
            </div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.prototype = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
