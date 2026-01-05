import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { Logo } from "./constant";

const Header = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-20 flex items-center justify-between px-10">
      <img
        className="w-36"
        src={Logo}
        alt="Netflix Logo"
      />

      <button
        className="text-sm font-medium text-white border border-gray-500 px-4 py-1.5 rounded"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </header>
  );
};

export default Header;
