import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function AccountItem({data}) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("Wrapper")}>
      <Image
        className={cx("avatar")}
        src={data.avatar}
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.first_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx("username")}>{data.full_name}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
