import { FC, MouseEvent, useCallback, useEffect } from "react";
import cn from "classnames";
import { ModalProps } from "./ModalProps";

import styles from "./Modal.module.scss";
import { Portal } from "../portal/Portal";

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return (
    <Portal>
      <div
        className={cn(styles["modal"], className, {
          [styles["is-open"]]: isOpen,
        })}
      >
        <div className={styles["overlay"]} onClick={handleClose}>
          <div className={styles["content"]} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};