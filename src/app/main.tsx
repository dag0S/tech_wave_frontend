import ReactDOM from "react-dom/client";
import { AppRouter } from "./routers";
import { Providers } from "./providers";

import "../shared/scss/main.scss";
import "@/shared/lib/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <AppRouter />
  </Providers>
);
