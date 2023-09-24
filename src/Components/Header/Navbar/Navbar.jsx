import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <nav className=" flex gap-5 py-10 shadow-lg items-center justify-between px-3">
        <Logo></Logo>
        <div className=" flex gap-5 font-medium ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-purple-200 bg-yellow-700 p-1 rounded-lg"
                : "text-base"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-purple-200 bg-yellow-700 p-1 rounded-lg"
                : "text-base"
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-purple-200 bg-yellow-700 p-1 rounded-lg"
                : "text-base"
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
