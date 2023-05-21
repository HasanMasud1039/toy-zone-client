import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/Home/AllToys/AllToys";
// import AllToyCard from "../Pages/Home/AllToyCard/AllToyCard";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";
import ShowCardToy from "../Pages/ShowCard/ShowCardToy";
import AddToy from "../Pages/Home/AddToy/AddToy";

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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch(`http://localhost:5000/toys`),
      },
      {
        path: 'alltoys/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      }


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
        path: '/category/:id',
        element: <ShowCardToy></ShowCardToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/category/${params.id}`)
      }


    ]
  },



]);

export default router;