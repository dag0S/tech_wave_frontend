import { CSSProperties, FC, memo, useMemo } from "react";
import cn from "classnames";
import { AvatarProps } from "./AvatarProps";

import styles from "./Avatar.module.scss";

export const Avatar: FC<AvatarProps> = memo(({ className, src, alt, size }) => {
  const inlineStyles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      className={cn(styles["avatar"], className)}
      src={src}
      alt={alt}
      style={inlineStyles}
    />
  );
});
