import { toast } from "react-toastify";
import { defaultDelay } from "./constants";
// ? Toast
export function SuccessToast() {
    return toast.success("Successfully Logged", {
        position: "bottom-right",
        delay: 100,
        autoClose: defaultDelay + 1000,
    });
}

export function UnsuccessToast() {
    toast.error("Login Error", {
        position: "bottom-right",
        autoClose: defaultDelay + 1000,
        delay: 100,
    });
}