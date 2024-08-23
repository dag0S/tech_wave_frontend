import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";

const Logo: FC = memo(() => {
  return (
    <Link to={paths.home}>
      <img src="/svg/logo.svg" alt="logo" />
    </Link>
  );
});

export default Logo;
