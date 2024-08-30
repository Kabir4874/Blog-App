import React from "react";
import admin from "../../assets/admin.png";
import { NavLink } from "react-router-dom";
const AdminNavigation = () => {
  return (
    <div className="space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between">
      <div>
        <div className="mb-5">
          <img src={admin} alt="" className="size-14" />
          <p className=" font-semibold">Admin</p>
        </div>
        <hr className="my-4"/>
        <ul className=" space-y-4">
          <li>
            <NavLink to={"/dashboard"} className={"font-medium"}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/add-new-post"} className={"font-medium"}>
              Add New Post
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-items"} className={"font-medium"}>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/users"} className={"font-medium"}>
              Users
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mb-3">
        <hr />
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AdminNavigation;
