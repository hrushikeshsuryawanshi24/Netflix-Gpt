import React from 'react'
import LoginForm from './LoginForm';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
