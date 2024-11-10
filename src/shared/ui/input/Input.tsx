import { ChangeEvent, forwardRef } from "react";
import { InputProps } from "./InputProps";
import cn from "classnames";

import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      id,
      name,
      type,
      placeholder,
      value,
      onChange,
      theme = "normal",
      disabled,
      ...otherProps
    },
    ref
  ) => {
    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div
        className={cn(styles["input-container"], className, styles[theme], {
          [styles["disable"]]: disabled,
        })}
      >
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handlerOnChange}
          disabled={disabled}
          ref={ref}
          {...otherProps}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);
