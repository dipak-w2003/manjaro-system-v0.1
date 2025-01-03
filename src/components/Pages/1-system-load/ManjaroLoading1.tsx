import { PiTrademarkRegisteredThin } from "react-icons/pi";
import { SiManjaro } from "react-icons/si";
const ManjaroLoading1 = () => {
  return (
    <main className="text-white bg-black h-full max-h-full cursor-default overflow-hidden  w-full flex  justify-center items-center">
      <div className="wrap flex  items-center justify-center flex-col space-y-28  tracking-tight space-x-6  mt-[30%]">
        {/* ? blinker */}
        <div className="flex  mt-1 items-center h-fit   w-fit space-x-4   *:bg-white *:rounded-full *:h-3 *:w-3 manjaro-loading *:opacity-[1] ">
          <span className="animate-blink-ball-1"></span>
          <span className="animate-blink-ball-2"></span>
          <span className="animate-blink-ball-3"></span>
          <span className="animate-blink-ball-4"></span>
        </div>
        {/* ? Logo */}
        <section className="text-6xl  flex font-serif justify-center items-center space-x-3 relative">
          <SiManjaro className="rounded-lg" />
          <h2 className="font-bold">Manjaro</h2>
          <PiTrademarkRegisteredThin className="text-3xl absolute -right-7 -top-[1px]" />
        </section>
      </div>
    </main>
  );
};

export default ManjaroLoading1;
