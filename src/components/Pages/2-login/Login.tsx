import { useState, useEffect } from "react";
import LoginTaskBar from "./LoginTaskBar";
import UserLogIn from "./UserLogIn";

const Login = () => {
  // Default background class
  const [bgClass, setBgClass] = useState<string>("bg-black");

  useEffect(() => {
    const imageUrl = "https://wallpapercave.com/wp/wp1947767.jpg";
    const img = new Image();

    // ? onerror ->
    img.onload = () => setBgClass(`bg-[url('${imageUrl}')]`);
    // ? The onerror event handler in JavaScript is triggered when an error occurs during the loading of an image or other media resource (e.g., scripts, stylesheets).
    img.onerror = () => setBgClass("bg-black");

    img.src = imageUrl;
  }, []);

  return (
    <div
      className={`cursor-default h-[100vh] overflow-hidden ${bgClass} bg-no-repeat bg-cover flex justify-center items-center relative bg-black `}
    >
      <div className="bg-cyan-700 *:h-full *:full overflow-hidden  h-[260px] w-[440px] rounded-md absolute">
        <UserLogIn />
      </div>
      <div className="absolute bottom-0 bg-slate-900 h-7 w-full">
        <LoginTaskBar />
      </div>
    </div>
  );
};

export default Login;
