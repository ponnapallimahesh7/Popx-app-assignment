import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, email, avatar) => {
    setUser({ username, email, avatar });
  };

  const logout = () => setUser(null);

  return (
    <ProfileContext.Provider value={{ user, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
