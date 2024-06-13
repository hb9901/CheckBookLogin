import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import { ModalProvider } from "./provider/ModalProvider";
import MonthProvider from "./provider/MonthProvider";
import QueryProvider from "./provider/QueryProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <QueryProvider>
        <ModalProvider>
          <MonthProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
          </MonthProvider>
        </ModalProvider>
      </QueryProvider>
    </>
  );
}

export default App;
