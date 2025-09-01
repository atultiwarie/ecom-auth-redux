import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "./Redux/slices/darkModeSlice";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dark Mode with Redux</h1>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}

export default App;
