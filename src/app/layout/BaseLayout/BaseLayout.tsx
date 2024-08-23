import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { PageLoader } from "@/widgets/pageLoader";
import { Announcement } from "@/shared/ui";

const BaseLayout = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="">
      <div className="wrapper">
        <Announcement>
          <span>
            {t("Работу выполнил")}{" "}
            <a href="https://github.com/dag0S" target="_blank">
              {t("Данила Государев")}
            </a>
            .
          </span>
        </Announcement>
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
        <Announcement>
          {t(
            "Это fake сайт. Никаких реальных транзакций и операций не производится!"
          )}
        </Announcement>
      </div>
    </Suspense>
  );
};

export default BaseLayout;
