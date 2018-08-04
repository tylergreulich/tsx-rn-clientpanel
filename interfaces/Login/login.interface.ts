export interface LoginState {
  email: string;
  password: string;
  errors: {
    email?: string | null;
    password?: string | null;
  };
}

export interface LoginProps {
  loginUser: (userData: object, startMainTabs: () => void) => void;
  toggleRegister: () => void;
  errors: {
    email?: string;
    password?: string;
  };
}
