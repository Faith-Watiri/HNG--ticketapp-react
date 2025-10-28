import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("ticketapp_session");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === "test@example.com" && password === "password123") {
      const sessionUser = { email };
      localStorage.setItem("ticketapp_session", JSON.stringify(sessionUser));
      setUser(sessionUser);
      return { success: true };
    }
    return { success: false, message: "Invalid email or password." };
  };

  const signup = (email, password) => {
    const newUser = { email };
    localStorage.setItem("ticketapp_session", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
