import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import PostDetailPage from "../pages/PostDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
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
