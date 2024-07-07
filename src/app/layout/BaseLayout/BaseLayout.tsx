import { Outlet } from "react-router-dom";
import Announcement from "@/shared/ui/Announcement/Announcement";

const BaseLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Announcement>
          <span>
            Работу выполнил{" "}
            <a href="https://github.com/dag0S" target="_blank">
              Данила Государев
            </a>
            .
          </span>
        </Announcement>
        <header>header</header>
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
        <Announcement>
          Это fake сайт. Никаких реальных транзакций и операций не производится!
        </Announcement>
      </div>
    </>
  );
};

export default BaseLayout;
