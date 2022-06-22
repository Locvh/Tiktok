import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { images } from "~/asset/images";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

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
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>

        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
