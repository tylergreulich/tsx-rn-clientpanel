export interface RegisterState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  errors: {
    email?: string | null;
    username?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
  };
}

export interface RegisterProps {
  registerUser: (userData: object) => any;
  toggleLogin: () => any;
  errors: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
}
