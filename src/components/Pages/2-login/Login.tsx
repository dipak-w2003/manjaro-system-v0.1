import { Suspense } from "react";
import LoginTaskBar from "./LoginTaskBar";
import UserLogIn from "./UserLogIn";
import { AiOutlineReload } from "react-icons/ai";

const Login = () => {
  // Default background class

  return (
    <Suspense
      fallback={
        <AiOutlineReload className="animate-spin absolute top-1/2 left-1/2" />
      }
    >
      <div
        className={`cursor-default h-[100vh] noto-sans overflow-hidden bg-no-repeat 
        bg-cover flex justify-center items-center relative bg-black 
        `}
      >
        <div className=" *:h-full *:full overflow-hidden  h-[190px] w-[380px] rounded-md absolute">
          <UserLogIn />
        </div>
        <div className="absolute bottom-0 bg-slate-900 h-7 w-full">
          <LoginTaskBar />
        </div>
      </div>
    </Suspense>
  );
};

export default Login;
