import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { AuthProvider } from "./provider/AuthProvider";
import ExpenditureProvider from "./provider/ExpenditureProvider";
import { ModalProvider } from "./provider/ModalProvider";
import QueryProvider from "./provider/QueryProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <QueryProvider>
        <ModalProvider>
          <AuthProvider>
            <ExpenditureProvider>
              <GlobalStyle />
              <RouterProvider router={router} />
            </ExpenditureProvider>
          </AuthProvider>
        </ModalProvider>
      </QueryProvider>
    </>
  );
}

export default App;
