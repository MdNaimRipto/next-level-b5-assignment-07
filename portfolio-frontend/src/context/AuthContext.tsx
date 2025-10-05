"use client";
import { getMe } from "@/actions/auth";
import Loader from "@/components/Loader";
import { IUser } from "@/types/users";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
// import Loader from "@/components/common/loader/Loader";

interface UserContextType {
  user: null | IUser;
  setUser: React.Dispatch<SetStateAction<IUser | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | IUser>(null);
  const [contextLoading, setContextLoading] = useState(true);

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const res = await getMe();
        if (res?.success) {
          setUser(res.data as IUser);
        } else {
          setUser(null);
        }
      } finally {
        setContextLoading(false);
      }
    };

    handleGetUser();
  }, []);

  const value = {
    user: user ? user : null,
    setUser: setUser,
  };

  if (contextLoading) {
    return <Loader />;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default AuthContext;

export function useUserContext(): UserContextType {
  return useContext(UserContext);
}
