import { useState, useEffect } from "react";
import LoginTaskBar from "./LoginTaskBar";
import UserLogIn from "./UserLogIn";

const Login = () => {
  // Default background class
  const [bgClass, setBgClass] = useState<string>("bg-black");

  useEffect(() => {
    //  TODO :on network or media issue custom styling not applying i.e bg & color
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
      className={`cursor-default h-[100vh] noto-sans overflow-hidden bg-no-repeat bg-cover flex justify-center items-center relative bg-black `}
    >
      <div className=" *:h-full *:full overflow-hidden  h-[190px] w-[380px] rounded-md absolute">
        <UserLogIn />
      </div>
      <div className="absolute bottom-0 bg-slate-900 h-7 w-full">
        <LoginTaskBar />
      </div>
    </div>
  );
};

export default Login;
