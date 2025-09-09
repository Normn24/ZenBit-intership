import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { logOut } from "../../store/authSlice";

export default function Header() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <header className="absolute top-0 left-0 w-full py-4.5 md:px-20 px-4 z-1 flex justify-center md:justify-end items-center bg-[#172234]">
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="bg-[#B29F7E] py-3 w-35 md:w-40 h-10 rounded-md flex items-center justify-center text-white font-bold"
        >
          Log Out
        </button>
      ) : (
        <nav className="flex items-center space-x-2.5">
          <Link
            to="/login"
            className="text-[#B29F7E] py-3 w-35 md:w-40 h-10 rounded-md border border-[#B29F7E] flex items-center justify-center font-bold"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-[#B29F7E] py-3 w-35 md:w-40 h-10 rounded-md flex items-center justify-center text-white font-bold"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
