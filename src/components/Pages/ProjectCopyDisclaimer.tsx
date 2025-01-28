import React from "react";
import { RiAlertFill } from "react-icons/ri";
import { IoConstructSharp } from "react-icons/io5";

export const ProjectCopyDisclaimer: React.FC = () => {
  return (
    <div className="h-[96%] p-6 absolute top-0 left-0 w-full noto-sans bg-black ">
      <span className="flex justify-center items-center gap-2 ">
        <header className={"text-3xl"}>Disclaimer</header>
        <RiAlertFill className="text-4xl text-red-700 animate-pulse" />
      </span>
      <br />
      <article className="text-justify text-xl ">
        Disclaimer This project is inspired by the design and functionalities of
        the Manjaro operating system. It is an independent frontend
        implementation created for educational and non-commercial purposes. This
        project is not affiliated with, endorsed by, or associated with the
        official Manjaro team.
      </article>
      <br />
      <br />
      <article className="text-justify text-xl">
        All trademarks, logos, and copyrights belong to their respective owners.
        This project aims to replicate certain features and interfaces while
        adding unique implementations. If you have any concerns or believe that
        any content infringes on rights, please feel free to contact the project
        maintainer.
      </article>
      <br />
      <footer className="text-center text-4xl mt-[20%] flex flex-col justify-center gap-6 items-center text-amber-400">
        <IoConstructSharp className="animate-pulse" />
        <h3>
          Manjaro Clone is Under Development.
          <br />
          <br />
          <a
            href="https://github.com/dipak-w2003"
            target="_blank"
            className="text-blue-700"
          >
            Github: <strong> dipak-w2003 </strong>
          </a>
        </h3>
      </footer>
    </div>
  );
};
