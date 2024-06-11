import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { AuthProvider } from "./provider/AuthProvider";
import ExpenditureProvider from "./provider/ExpenditureProvider";
import { ModalProvider } from "./provider/ModalProvider";
import MonthProvider from "./provider/MonthProvider";
import QueryProvider from "./provider/QueryProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <QueryProvider>
        <ModalProvider>
          <AuthProvider>
            <ExpenditureProvider>
              <MonthProvider>
                <GlobalStyle />
                <RouterProvider router={router} />
              </MonthProvider>
            </ExpenditureProvider>
          </AuthProvider>
        </ModalProvider>
      </QueryProvider>
    </>
  );
}

export default App;
