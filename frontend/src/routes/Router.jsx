import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ContactUs from "../pages/ContactUs";
import SingleBlog from "../components/blogs/SingleBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddPost from "../pages/admin/AddPost";
import ManagePosts from "../pages/admin/ManagePosts";
import UpdatePost from "../pages/admin/UpdatePost";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-new-post",
            element: <AddPost />,
          },
          {
            path: "manage-items",
            element: <ManagePosts />,
          },
          {
            path: "update-items/:id",
            element: <UpdatePost />,
          },
        ],
      },
    ],
  },
]);
export default Router;
