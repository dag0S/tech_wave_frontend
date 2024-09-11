import { CSSProperties, FC } from "react";
import cn from "classnames";
import { SkeletonProps } from "./SkeletonProps";

import styles from "./Skeleton.module.scss";

export const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  width,
  border,
}) => {
  const stylesInline: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={cn(styles["skeleton"], className)} style={stylesInline} />
  );
};
