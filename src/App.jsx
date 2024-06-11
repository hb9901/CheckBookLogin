import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ModalProvider } from "./context/modal.context";
import ExpenditureProvider from "./provider/ExpenditureProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <ModalProvider>
        <ExpenditureProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ExpenditureProvider>
      </ModalProvider>
    </>
  );
}

export default App;
