import ReactDOM from "react-dom/client";
import { AppRouter } from "./routers";
import { Providers } from "./providers";

import "../shared/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <AppRouter />
  </Providers>
);
