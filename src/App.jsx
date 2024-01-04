import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { auth } from "./utils/firbase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/slices/userSlice";

const PreAuthLogic = () => {

  // const userInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid, email, name: displayName }))
        navigate("/")
      } else {
        dispatch(removeUser())
        navigate("/auth")
      }
    });
  }, [])

  return
}

const AppLayout = () => {

  return (
    <Provider store={appStore}>
      <PreAuthLogic />
      <Outlet />
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/auth",
        element: <Auth />
      }
    ]
  }
])

export default appRouter
