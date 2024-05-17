/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

import Cookies from "js-cookie";

interface State {
  user: null | any;
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

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const authReducer = (state: State, action: Action) => {
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

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    const storedIsLoggedIn = Cookies.get("isLoggedIn");
    console.log(storedUser, storedIsLoggedIn);

    if (storedUser && storedIsLoggedIn) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser !== null) {
        dispatch({
          type: "LOGIN",
          payload: parsedUser,
        });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
