import { createBrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth",
    element: <Auth />
  }
])

export default appRouter
