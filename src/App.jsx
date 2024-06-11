import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ModalProvider } from "./context/modal.context";
import ExpenditureProvider from "./provider/ExpenditureProvider";
import QueryProvider from "./provider/QueryProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <QueryProvider>
        <ModalProvider>
          <ExpenditureProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ExpenditureProvider>
        </ModalProvider>
      </QueryProvider>
    </>
  );
}

export default App;
