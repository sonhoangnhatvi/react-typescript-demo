import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
