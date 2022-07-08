import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { images } from "~/asset/images";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";
import config from '~/config'
import Button from "~/components/Button";
import Menu from "~/components/Propper/Menu";
import { UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
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
          },
          {
            code: "vn",
            title: "Tieng Viet",
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
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok" /></Link>
        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {/* onClick vẫn hoạt động khi click */}
              {/* Href link qua trang bên ngoài  */}
              {/* To Link trong trang nội bộ  */}

              {/* children truyền vào là 1 function */}
              {/* VD như ở button thì children truyền vào là 1 func của FontAwesomeIcon  */}
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
              <Image
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
