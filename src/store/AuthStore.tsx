import { createContext, useReducer, ReactNode, Dispatch, useMemo } from 'react';
import { User } from '@types';

export interface Action {
  type: string;
  payload?: any;
}

export interface AuthState {
  userInfo: User | null;
  loadingUser: boolean;
  dispatcher: ReturnType<typeof dispatcher>;
}

export interface UserStateWrapperProps {
  children: ReactNode;
}

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

export const authInitialState: AuthState = {
  userInfo: {
    id: 11,
    name: 'name',
  },
  loadingUser: false,
  dispatcher: {},
};

const authContext = createContext(authInitialState);
const { Provider } = authContext;

const dispatcher = (dispatch: Dispatch<Action>): any => ({
  userLogin: (payload: {
    user: string;
    token: string;
    refreshToken: string;
    rememberMe: boolean;
  }) =>
    dispatch({
      type: USER_LOGIN,
      payload,
    }),
  userLogout: () =>
    dispatch({
      type: USER_LOGOUT,
    }),
});

const authReducer = (reducerState: AuthState, action: Action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const { user } = action.payload;
      return { ...reducerState, userInfo: user };
    }
    case USER_LOGOUT: {
      return { ...reducerState };
    }
    default:
      return { ...reducerState };
  }
};

const AuthProvider = ({ children }: UserStateWrapperProps) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const contextValue = useMemo(
    () => ({
      ...state,
      dispatcher: dispatcher(dispatch),
    }),
    [state, dispatch],
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export { authContext, AuthProvider };
