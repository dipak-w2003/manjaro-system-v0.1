import { FaGear } from "react-icons/fa6";
import { SiKde, SiKdeplasma } from "react-icons/si";
const LazyKdeLoad = () => {
  return (
    <div className="flex flex-col relative items-center text-white justify-center gap-y-40">
      <SiKdeplasma className="object-fill h-[300px]  p-2 ml-16 w-[300px]" />
      <FaGear className="text-4xl   animate-spin" />
      <footer className="absolute right-4 bottom-4 flex justify-center gap-2 items-center font-semibold">
        <SiKde className="text-4xl" />
        <h2>Plasma KDE</h2>
      </footer>
    </div>
  );
};

export default LazyKdeLoad;
