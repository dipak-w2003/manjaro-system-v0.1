import { defaultDelay } from "@/constants/constants";
import { AppDispatch } from "@/Redux/store";
// Pass an action creator and its arguments if necessary
export async function DelayLog(dispatch: AppDispatch, action: () => any) {
  await new Promise((resolve) => setTimeout(resolve, defaultDelay));
  return dispatch(action());
}

