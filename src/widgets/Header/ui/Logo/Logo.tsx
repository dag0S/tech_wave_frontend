import { paths } from "@/shared/lib/react-router";
import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to={paths.home}>
      <img src="/svg/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
