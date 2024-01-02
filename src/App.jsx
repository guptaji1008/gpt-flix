import { createBrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />
  }
])

export default appRouter
