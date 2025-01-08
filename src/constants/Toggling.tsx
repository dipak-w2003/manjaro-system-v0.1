// ? This Custom is being used to Login Taskbar menus and else further
// ? In order to avoide large line of useState code in every component this custom hook is made up
import React from "react";
const Toggling = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const setToggling = () => setToggle((prev) => prev != prev);
  const setToggleTrue = () => setToggle((prev) => (prev = true));
  const setToggleFalse = () => setToggle((prev) => (prev = false));
  return { toggle, setToggling, setToggleTrue, setToggleFalse };
};

export default Toggling;
