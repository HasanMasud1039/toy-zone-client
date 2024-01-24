import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import UpdateToy from "../Pages/Home/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import CategoryToy from "../Pages/CategoryToy/CategoryToy";
import MyToy from "../Pages/MyToy/MyToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'}></Navigate>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: '/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/updatetoy',
        element: <UpdateToy></UpdateToy>
      },
      {
        path: '/mytoy/:email',
        element: <MyToy></MyToy>,
        loader: ({ params }) => fetch(`https://toy-zone-server-new.vercel.app/mytoys/${params.email}`),
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/category',
        element: <CategoryToy />,
      },
      {
        path: '/category/:category',
        element: <CategoryToy />,
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch(`https://toy-zone-server-new.vercel.app/toys`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },



]);

export default router;