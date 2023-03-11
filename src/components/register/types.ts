export type InitVal = {
  email: string;
  password: string;
  username: string;
  facebookId: string;
  googleId: string;
  profileImageUrl: string;
  resetEmail: string;
  showPassword: boolean;
};

export type FormType = {
  password: string;
  social: boolean;
  email: string;
  googleId?: string;
  facebookId?: string;
  username: string;
  profileImageUrl: string;
  remember?: string;
  resetEmail: string;
  showPassword: boolean;
};

export type AuthType = "signin" | "signup" | "socialsignin";
