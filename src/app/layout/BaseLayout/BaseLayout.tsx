import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactNotifications } from "react-notifications-component";
import { Header } from "@/widgets/Header";
import { PageLoader } from "@/widgets/pageLoader";
import { Announcement } from "@/shared/ui";
import { addNotification } from "@/shared/lib/notification";

const BaseLayout = () => {
  const { t } = useTranslation();

  useEffect(() => {
    addNotification({
      title: t("Внимание"),
      message: t(
        "При первом заходе данные с сервера могут медлено грузиться, т.к. сервер бесплатный. Чтобы исправить это, перезапустите сайт :)"
      ),
      type: "info",
      duration: 10000,
    });
  }, []);

  return (
    <Suspense fallback="">
      <div className="wrapper">
        <ReactNotifications />
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
