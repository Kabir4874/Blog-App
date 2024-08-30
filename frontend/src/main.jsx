import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./redux/store.js";
import Router from "./routes/Router.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
    <Toaster position="top-center" reverseOrder={false} />
  </Provider>
);
