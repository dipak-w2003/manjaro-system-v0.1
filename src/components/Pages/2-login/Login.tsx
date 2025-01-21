import LoginTaskBar from "./LoginTaskBar";
import UserLogIn from "./UserLogIn";

const Login = () => {
  // Default background class

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
