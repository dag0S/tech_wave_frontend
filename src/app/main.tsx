import ReactDOM from "react-dom/client";
import { AppRouter } from "./routers";
import { Providers } from "./providers";

import "../shared/scss/main.scss";
import "@/shared/lib/i18n/i18n";
import "react-notifications-component/dist/theme.css";
import 'animate.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <AppRouter />
  </Providers>
);
