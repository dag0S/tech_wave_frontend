import { ChangeEvent, FC, memo } from "react";
import { InputProps } from "./InputProps";
import cn from "classnames";

import styles from "./Input.module.scss";

export const Input: FC<InputProps> = memo(
  ({
    className,
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    ...otherProps
  }) => {
    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={cn(styles["input-container"], className)}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handlerOnChange}
          {...otherProps}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);
