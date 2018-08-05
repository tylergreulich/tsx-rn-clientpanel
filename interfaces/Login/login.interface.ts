export interface LoginState {
  email: string;
  password: string;
  errors: {
    email?: string | null;
    password?: string | null;
  };
}

export interface LoginProps {
  loginUser: (userData: object, startMainTabs: () => void) => any;
  toggleRegister: () => any;
  errors: {
    email?: string;
    password?: string;
  };
}
