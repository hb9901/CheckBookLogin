import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import expenditureLoader from "../loaders/expenditure.loader";
import userInfoLoader from "../loaders/userInfo.loader";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import PostDetailPage from "../pages/PostDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Private from "./Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => userInfoLoader(),
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: expenditureLoader,
      },
      {
        path: "/:id",
        element: <PostDetailPage />,
        loader: expenditureLoader,
      },
    ],
  },
  {
    element: <Private />,
    children: [
      {
        path: "/mypage",
        element: <MyPage />,
        loader: () => userInfoLoader(),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
]);
export default router;
