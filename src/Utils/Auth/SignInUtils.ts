import Cookies from "js-cookie";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { AxiosResponse } from "axios";

interface User {
  profile: {
    dateCreation: string | null;
  };
}

interface Action {
  type: string;
  payload: User;
}

export const handleResponse = (
  res: AxiosResponse,
  dispatch: Dispatch<Action>,
  navigate: NavigateFunction
): void => {
  const user = res?.data.items[0].user;
  if (user) {
    Cookies.set("user", JSON.stringify(user), { expires: 7 });
    Cookies.set("isLoggedIn", "true", { expires: 7 });

    dispatch({ type: "LOGIN", payload: user });

    if (user.profile.dateCreation == null) {
      navigate("/welcome");
    } else {
      navigate("/dashboard");
    }
  }
};
