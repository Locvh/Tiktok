import { useEffect, useState, useRef } from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import HeadLeassTippy from "@tippyjs/react//headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as PopperWrapper } from "~/Components/Propper";
import AccountItem from "~/Components/AccountItem";
import { useDebounce } from "~/hook";
// import axios from "axios";
import * as searchService from '~/api-service/searchService'

const cx = classNames.bind(styles);
function Search() {
  const [searchValues, setSearchValues] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  // cách chạy
  // lần 1 mới chạy nó đưa vào chuỗi rỗng ' '
  // lần 2 nếu nhập kí tự ' h '
  const debounced = useDebounce(searchValues, 500);

  const currentRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    // setShowLoading(true);

    const fetchapi = async () =>{
      setShowLoading(true);
      const result = await searchService.searchService(debounced);
      setSearchResult(result);
      setShowLoading(false);
    }

    fetchapi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValues("");
    setSearchResult([]);
    currentRef.current.focus();
  };

  const handHideResults = () => {
    setShowResult(false);
  };
  return (
    <HeadLeassTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handHideResults}
    >
      <div className={cx("search")}>
        <input
          ref={currentRef}
          value={searchValues}
          placeholder="Search account and video"
          spellCheck={false}
          onChange={(e) => setSearchValues(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValues && !showLoading && (
          <button className={cx("clear-btn")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
        )}
        {showLoading && (
          <FontAwesomeIcon
            className={cx("loading")}
            icon={faSpinner}
          ></FontAwesomeIcon>
        )}

        {/* Loading */}
        {/* <Tippy content="Tìm kiếm" placement="right"> */}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </HeadLeassTippy>
  );
}

export default Search;
