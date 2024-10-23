import {
  FC,
  memo,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { ButtonHamburger, Container } from "@/shared/ui";
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import { useClickOutside } from "@/shared/lib/hooks";

import styles from "./Header.module.scss";

export const Header: FC = memo(() => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ignoreRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useClickOutside((event: MouseEvent | TouchEvent) => {
    if (!ignoreRef?.current?.contains(event?.target as Node)) {
      setToggleMenu(false);
    }
  });

  const handleToggleMenu = useCallback((e: ReactMouseEvent) => {
    e.stopPropagation();
    setToggleMenu((prev) => !prev);
  }, []);

  return (
    <header className={styles["header"]}>
      <Container>
        <div className={styles["header__inner"]}>
          <Logo />
          <Navigation
            className={cn({
              [styles["mobile-menu-active"]]: toggleMenu,
            })}
            onClick={() => setToggleMenu(false)}
            ref={mobileMenuRef}
          />
          <ButtonHamburger
            toggle={toggleMenu}
            onClick={handleToggleMenu}
            ref={ignoreRef}
          />
        </div>
      </Container>
    </header>
  );
});
