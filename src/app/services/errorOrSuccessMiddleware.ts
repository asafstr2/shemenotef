import { isRejectedWithValue, isFulfilled } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorOrSuccessLogger =
  (api: any) =>
  (next: any) =>
  (action: {
    meta: {
      arg: {
        type: string;
        originalArgs: { title: string; username: string };
      };
    };
    payload: {
      error?: string;
      data?: { error: { message: string } };
    };
  }) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    const PresentingTimeInSeconds = 2;
    const getTimeInSeconds = (sec: number) => sec * 1000;
    if (isRejectedWithValue(action)) {
      toast.error(
        action?.payload?.error || action?.payload?.data?.error?.message,
        {
          position: "top-left",
          autoClose: getTimeInSeconds(PresentingTimeInSeconds),
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        }
      );
    }
    if (isFulfilled(action)) {
      if (action.meta.arg.type === "mutation") {
        console.log({ action });
        const args = action?.meta?.arg?.originalArgs;
        const title = args.title && args.title + " saved successfully";
        const username = args.username && "welcome " + args.username;
        const payloadString =
          typeof action.payload === "string" ? action.payload : null;
        toast.success(payloadString || title || username, {
          position: "top-left",
          autoClose: getTimeInSeconds(PresentingTimeInSeconds),
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        });
      }
    }

    return next(action);
  };
