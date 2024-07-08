import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/">
      <img src="./public/svg/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
