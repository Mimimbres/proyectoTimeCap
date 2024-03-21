import { useState, useEffect, createContext } from "react";
import { isUserLoggedIn } from "../service/auth";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const { data , isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: isUserLoggedIn,
    retry: 1,
  });
 
  // useEffect(() => {
  //   console.log(data);
  //   if (data?.user) {
  //     setCurrentUser(data?.user);
  //   } else {
  //     setCurrentUser(null);
  //   }
  // }, [data]);

  if (isLoading) {
    return "isLoading";
  }
  return (
    <AuthContext.Provider value={{ currentUser: data?.user }}>
      {children}
    </AuthContext.Provider>
  );
};
