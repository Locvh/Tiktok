import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { images } from "~/asset/images";
import Tippy from "@tippyjs/react//headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as PopperWrapper } from "~/Components/Propper";
import AccountItem from "~/Components/AccountItem";
import Button from "~/Components/Button";
import Menu from "~/Components/Propper/Menu";
const cx = classNames.bind(styles);

function Header() {
  const MENU_ICON = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "keyboard shortcut",
    },
  ];

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and video" spellCheck={false} />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon
              className={cx("loading")}
              icon={faSpinner}
            ></FontAwesomeIcon>
            {/* Loading */}
            {/* <Tippy content="Tìm kiếm" placement="right"> */}

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          {/* onClick vẫn hoạt động khi click */}
          {/* Href link qua trang bên ngoài  */}
          {/* To Link trong trang nội bộ  */}
          {/* <Button rightIcon={<FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>} primary to="/login" href="https://fullstack.edu.vn/" onClick={()=> alert("hello")}>Log in</Button> */}
          {/* <Button primary>Log in</Button> */}
          <Button text>Upload</Button>
          <Button rounded className={cx("custom-login")}>
            Log in
          </Button>
          <Menu items={MENU_ICON}>
            <button className={cx("more-button")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
