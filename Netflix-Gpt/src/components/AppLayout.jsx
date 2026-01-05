import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const AppLayout = () => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
