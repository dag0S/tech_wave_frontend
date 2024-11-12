import { FC, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Input } from "@/shared/ui";
import { clearSearchValue, setSearchValue } from "../model/slice";
import { SearchProps } from "./Search.props";

import styles from "./Search.module.scss";

export const Search: FC<SearchProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const searchRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    } else {
      dispatch(clearSearchValue());
    }
  }, [isOpen, dispatch]);

  const handlerSearchDevices = useCallback(
    (value: string) => {
      dispatch(setSearchValue(value));
      console.log(value);
    },
    [dispatch]
  );

  const handlerClearSearchInput = useCallback(() => {
    dispatch(clearSearchValue());
    onClose();
  }, [dispatch, onClose]);

  return (
    <div className={styles["search"]}>
      <img
        className={styles["search-icon"]}
        src="/svg/search.svg"
        alt="search"
      />
      <Input
        className={styles["search-line"]}
        placeholder="Поиск..."
        value={searchValue}
        onChange={handlerSearchDevices}
        ref={searchRef}
      />
      <button
        className={styles["close-icon"]}
        onClick={handlerClearSearchInput}
      >
        <img src="/svg/close.svg" alt="search" />
      </button>
    </div>
  );
};
