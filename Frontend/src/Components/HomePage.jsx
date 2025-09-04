import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

        

const HomePage = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
  return (
   <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
    <Navbar />
        <div className="p-4 text-center w-fit h-screen m-auto">
            <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-2">This is a simple e-commerce application.</p>
        </div>

    <Footer />
   </div>
  );
}

export default HomePage