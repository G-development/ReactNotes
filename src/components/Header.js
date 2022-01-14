// import { MdToggleOff } from "react-icons/md";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="title">🖊️ React Notes App</h1>
      {/* <MdToggleOff/> */}
      <button
        onClick={() => handleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save-btn"
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
