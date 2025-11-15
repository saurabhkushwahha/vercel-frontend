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
      if (res?.data?.success) {
        setUser(res.data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Session error:", error.response?.data || error.message);
      setUser(null)
      return { success: false, message: error.response?.data?.message || error.message || "Something went wrong" };
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
      // Expecting backend shape: { success: true|false, message: "...", user: {...} }
      if (res?.data) {
        if (res.data.success) {
          setUser(res.data.user);
          return { success: true, user: res.data.user, message: res.data.message };
        }
        return { success: false, message: res.data.message || "Login failed" };
      }
      return { success: false, message: "No response from server" };

    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      const msg = error.response?.data?.message || error.response?.data?.msg || error.message || "Something went wrong";
      return { success: false, message: msg };
    }

  };

  const signup = async (name, email, password) => {
    try {
      // backend expects { name, email, password }
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
      });

      // Handle expected backend shape: { success: boolean, message: string, user: {...} }
      if (res?.data) {
        if (res.data.success) {
          // set user in context (backend also sets cookie)
          setUser(res.data.user);
          return { success: true, message: res.data.message || "Signup successful", user: res.data.user };
        }
        return { success: false, message: res.data.message || "Signup failed" };
      }

      return { success: false, message: "No response from server" };

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      const msg = error.response?.data?.message || error.message || "Something went wrong";
      return { success: false, message: msg };
    }
  };


  const logout = async () => {
    try {
      await axios.get('/auth/logout')
      setUser(null)
      return { success: true }
    } catch (error) {
      const msg = error.response?.data?.message || error.message || "something went wrong";
      return { success: false, message: msg }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
