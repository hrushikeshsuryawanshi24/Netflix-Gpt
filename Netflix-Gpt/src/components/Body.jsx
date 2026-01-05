import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import LoginForm from "./LoginForm";
import Browse from "./Browse";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
