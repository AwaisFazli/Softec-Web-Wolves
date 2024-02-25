import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCookie } from "../../services/CookieManager";
import { updateMenu } from "../../store/slices/adminSectionSlice";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const selectedMenu = useSelector((state) => state.adminState?.menu);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    removeCookie("userAccessToken");
    removeCookie("userAdminRole")
    navigate("/")
  }

  return (
    <div className="border-b-2 border-black w-full px-10 flex items-center justify-between">
      <button className="text-3xl font-medium" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="flex items-center h-20 gap-8">
        <button className="text-xl font-medium h-full pr-10 text-red-500" onClick={() => logoutHandler()}>Log out</button>
        <button
          className={`text-2xl font-medium h-full px-2 transition-all ${
            selectedMenu === "sponsors" &&
            "bg-hoverWhite border-b-4 border-mainGreen"
          }`}
          onClick={() => dispatch(updateMenu("sponsors"))}
        >
          Sponsors
        </button>
        <button
          className={`text-2xl font-medium h-full px-2 transition-all ${
            selectedMenu === "addCultures" &&
            "bg-hoverWhite border-b-4 border-mainGreen"
          }`}
          onClick={() => dispatch(updateMenu("addCultures"))}
        >
          Add Cultures
        </button>
        <button
          className={`text-2xl font-medium h-full px-2 transition-all ${
            selectedMenu === "chat" &&
            "bg-hoverWhite border-b-4 border-mainGreen"
          }`}
          onClick={() => dispatch(updateMenu("chat"))}
        >
          Chat
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
