

import { toast } from "react-toastify";
import { useMemo } from "react";
import { defaultDelay } from "./constants";

type ToastOptions = {
    position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
    autoClose: number;
    delay: number;
};

// ? Toast Hook
export function useToast() {
    // Memoize options to prevent recreation on every render
    const successOptions = useMemo<ToastOptions>(
        () => ({
            position: "bottom-right",
            delay: 100,
            autoClose: defaultDelay + 1000,
        }),
        [defaultDelay]
    );

    const errorOptions = useMemo<ToastOptions>(
        () => ({
            position: "bottom-right",
            delay: 100,
            autoClose: defaultDelay + 1000,
        }),
        [defaultDelay]
    );

    // Success Toast
    const SuccessToast = () => toast.success("Successfully Logged", successOptions);

    // Unsuccess Toast
    const UnsuccessToast = () => toast.error("Login Error", errorOptions);

    return { SuccessToast, UnsuccessToast };
}
