/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { auth } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getUserName = (email) => {
    if (email) {
      const name = email.split("@")[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return "User";
  };

  const handleAddTree = () => {
    if (user) {
      navigate("/add-tree");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="w-full shadow-md font-medium">
      <div className="upper bg-green-800 flex justify-end gap-6 text-white text-[12px] md:text-[15px] pr-6 py-[0.4rem] md:py-[0.6rem]">
        {user ? (
          <>
            <span className="cursor-pointer">
              Hello, {getUserName(user.email)}
            </span>
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="cursor-pointer">
              Login
            </Link>
            <Link to="/signup" className="flex gap-2 cursor-pointer">
              Sign up
              <img
                src="https://uploads-ssl.webflow.com/6411205aa4059e3917a059f4/645dae6436e891a354921aab_arrow-external.svg"
                alt=""
              />
            </Link>
          </>
        )}
      </div>
      <div className="lower flex justify-between items-center p-4 md:px-7 lg:px-10 pr-5 md:pr-14">
        <div className="logo w-[150px] md:w-[200px]">
          <Link to="/" className="text-xl lg:text-3xl font-bold text-green-800">
            Tree Insights
          </Link>
        </div>
        <div className="links gap-12 font-[500] text-slate-600 hidden md:flex">
          <div
            className="relative hoverable-element"
            onClick={() => navigate(`/categories/trees`)}
          >
            Trees <div className="line absolute h-[2px] bg-green-700 "></div>
          </div>
          <div
            className="hoverable-element"
            onClick={() => navigate(`/categories/shrubs`)}
          >
            Shrubs <div className="line h-[2px] bg-green-700 "></div>
          </div>
          <div
            className="hoverable-element"
            onClick={() => navigate(`/categories/herbs`)}
          >
            Herbs <div className="line h-[2px] bg-green-700 "></div>
          </div>
          <div
            className="hoverable-element"
            onClick={() => navigate(`/categories/climber`)}
          >
            Climber <div className="line  h-[2px] bg-green-700 "></div>
          </div>
          <button onClick={handleAddTree} className="hoverable-element">
            Add Your Tree <div className="line  h-[2px] bg-green-700 "></div>
          </button>
          {/* <div className="hoverable-element">
            Contact <div className="line  h-[2px] bg-green-700 "></div>
          </div> */}
        </div>
        <a href="mailto:arshquadri111@gmail.com">
          <div className="touchBtn text-sm md:text-lg font-[500] text-slate-900 bg-green-200 px-3 py-1 md:py-2 rounded-full cursor-pointer hover:bg-green-300">
            Get in touch
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
