import { FC } from "react";
import { InputProps } from "./InputProps";

import styles from "./Input.module.scss";

export const Input: FC<InputProps> = ({
  className,
  label,
  id,
  name,
  type,
  placeholder,
  ...otherProps
}) => {
  return (
    <div className={styles["input-container"]}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
