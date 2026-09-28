import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "fitzone_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);

    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Please enter your email and password.",
      };
    }

    const storedAccount = localStorage.getItem(
      `fitzone_account_${email.toLowerCase()}`,
    );

    if (!storedAccount) {
      return {
        success: false,
        message: "No account found with this email.",
      };
    }

    const account = JSON.parse(storedAccount);

    if (account.password !== password) {
      return {
        success: false,
        message: "The password you entered is incorrect.",
      };
    }

    const loggedInUser = {
      name: account.name,
      email: account.email,
    };

    setUser(loggedInUser);

    return {
      success: true,
      user: loggedInUser,
    };
  };

  const register = (name, email, password) => {
    if (!name || !email || !password) {
      return {
        success: false,
        message: "Please complete all required fields.",
      };
    }

    const normalizedEmail = email.toLowerCase();

    const existingAccount = localStorage.getItem(
      `fitzone_account_${normalizedEmail}`,
    );

    if (existingAccount) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const account = {
      name,
      email: normalizedEmail,
      password,
    };

    localStorage.setItem(
      `fitzone_account_${normalizedEmail}`,
      JSON.stringify(account),
    );

    const loggedInUser = {
      name,
      email: normalizedEmail,
    };

    setUser(loggedInUser);

    return {
      success: true,
      user: loggedInUser,
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}
