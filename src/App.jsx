import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { auth } from "./utils/firbase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/slices/userSlice";
import Header from "./components/Header";
import SearchMovieList from "./components/SearchMovieList";
import AiSearch from "./components/AiSearch";
import About from "./components/About";
import { changeAboutState } from "./utils/slices/aboutSlice";

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

const HomeAppLayOut = () => {

  const about = useSelector(state => state.about)
  const dispatch = useDispatch()

  return (
    <>
      <Header className="fixed top-0 right-0 left-0 z-50" />
      <Outlet />
      {about && <About onCancel={() => dispatch(changeAboutState(false))}/>}
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeAppLayOut />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/search",
            element: <SearchMovieList />
          },
          {
            path: "/aisearch",
            element: <AiSearch />
          }
        ]
      },
      {
        path: "/auth",
        element: <Auth />
      }
    ]
  }
])

export default appRouter
