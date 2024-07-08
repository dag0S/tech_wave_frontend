import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Announcement } from "@/shared/ui";

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
        <Header />
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
