import LoginTaskBar from "./LoginTaskBar";
import UserLogIn from "./UserLogIn";

const Login = () => {
  return (
    <div className="cursor-default h-[100vh] overflow-hidden bg-[url('https://wallpapercave.com/wp/wp1947767.jpg')] bg-no-repeat bg-cover *:motion-preset-slide-right-lg flex justify-center items-center  relative">
      <div className=" bg-white h-[260px] w-[440px] *:h-[260px] *:w-[440px] rounded absolute">
        <UserLogIn />
      </div>
      <div className="absolute bottom-0 bg-slate-900 h-7 *:h-full w-full">
        <LoginTaskBar />
      </div>
    </div>
  );
};

export default Login;
