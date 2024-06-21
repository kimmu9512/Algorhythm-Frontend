import TitlePage from "./components/TitlePage";
import SignInPage from "./components/user/SignInPage";
import SignUpPage from "./components/user/SignUpPage";
import QuestionDetailPage from "./components/question/QuestionDetailPage";
import QuestionCreationPage from "./components/createquestion/QuestionCreationPage";
import UserDashboard from "./components/user/UserDashboard/UserDashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import NotFound from "./components/common/NotFound";
export const routes = [
  { path: "/", element: <TitlePage /> },
  {
    path: "/dashboard",
    element: <PrivateRoute element={UserDashboard} />,
    private: true,
  },
  {
    path: "/question/:id",
    element: <PrivateRoute element={QuestionDetailPage} />,
    private: true,
  },
  {
    path: "/new-question",
    element: <PrivateRoute element={QuestionCreationPage} />,
    private: true,
  },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "*", element: <NotFound /> },
];
