import {  Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <div className="h-screen w-full hero-bg">
      <div className="flex justify-center items-center mt-20 mx-3">
        <Outlet />
      </div>
    </div>
  );
};
