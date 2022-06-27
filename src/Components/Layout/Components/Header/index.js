import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faPerson,
  faSignOut,
  faSpinner,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { images } from "~/asset/images";
import Tippy from "@tippyjs/react";
import HeadLeassTippy from "@tippyjs/react//headless";
import "tippy.js/dist/tippy.css"; // optional

import { Wrapper as PopperWrapper } from "~/Components/Propper";
import AccountItem from "~/Components/AccountItem";
import Button from "~/Components/Button";
import Menu from "~/Components/Propper/Menu";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  const MENU_ICON = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "English",
            type: "Languge",
          },
          {
            code: "vn",
            title: "Tieng Viet",
            type: "Languge",
          },
        ],
      },
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

  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case "Languge":
        // Handle change Languge
        break;
      default:
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const USER_MENU = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@Hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ICON,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate:true
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        <HeadLeassTippy
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
        </HeadLeassTippy>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {/* onClick vẫn hoạt động khi click */}
              {/* Href link qua trang bên ngoài  */}
              {/* To Link trong trang nội bộ  */}
              {/* <Button rightIcon={<FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>} primary to="/login" href="https://fullstack.edu.vn/" onClick={()=> alert("hello")}>Log in</Button> */}
              {/* <Button primary>Log in</Button> */}
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? USER_MENU : MENU_ICON}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://2.bp.blogspot.com/-sUOMYoXfNbk/VkB5ptrT4-I/AAAAAAAAT80/JPOfvtWSDwU/s1600/coloawap.net.0_1.jpg"
                className={cx("user-avartar")}
                alt="nguyen vane A"
              />
            ) : (
              <button className={cx("more-button")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
