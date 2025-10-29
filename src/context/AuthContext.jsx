import { createContext, useContext, useState, useEffect } from "react";
import axios from "../utils/api";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await axios.get('/auth/checkAuth');
      setUser(res.data.user)
    } catch (error) {
      console.error("Session error:", error.response?.data || error.message);
      return { success: false, message: error.response?.data?.msg || "Something went wrong" };
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password, role) => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
        role,
      });
      if (!res.data) {
        return { success: false, message: "Login failed" };
      }
      setUser(res.data.user);
      return { success: true, user: res.data?.user };
    } catch (error) {
      console.error("Login error:", error.message);
      return { success: false, message: "Something went wrong" };
    }
  };

  const signup = async (email, name, password) => {
    try {

      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
      })

    } catch (error) {
      console.error("Signup error:", error.message);
      return { success: false, message: "Something went wrong" };
    }
  }


  const logout = async () => {
    try {
      await axios.get('/auth/logout')
      setUser(null)
    } catch (error) {
      return { success: false, message: "something went wrong" }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
