/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface State {
  user: any;
  isLoggedIn: boolean;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  user: null,
  isLoggedIn: false,
};

interface AuthContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

interface ProviderProps {
  children?: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const GetUser = () => {
  const user = Cookies.get("user");
  return JSON.parse(user || "{}");
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    const storedIsLoggedIn = Cookies.get("isLoggedIn");

    if (storedUser && storedIsLoggedIn === "true") {
      const parsedUser = JSON.parse(storedUser);
      dispatch({
        type: "LOGIN",
        payload: parsedUser,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
