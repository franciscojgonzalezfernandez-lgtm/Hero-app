import React from "react";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-blue-500 flex flex-col gap-2">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
