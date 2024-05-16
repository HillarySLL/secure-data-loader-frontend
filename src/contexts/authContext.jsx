import * as React from "react";
import { baseUrl, tokenKey } from "../constants";

const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const savedToken = window.localStorage.getItem(tokenKey);

    if (savedToken) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  async function login(email, password) {
    const options = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(baseUrl + "/authentication/login", options);

    if (response.ok) {
      const { token } = await response.json();
      window.localStorage.setItem(tokenKey, token);
      setIsAuthenticated(true);
    } else {
      const body = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
    }
  }

  async function signup(username, password, email, firstName, lastName) {
    const options = {
      method: "POST",
      body: JSON.stringify({username, password, email, firstName, lastName}),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(baseUrl + "/authentication/signup", options);

    if (response.ok) {
      const { data } = await response.json();
      window.localStorage.setItem(tokenKey, data.token);
      setIsAuthenticated(true);
      return;
    } else {
      const body = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
    }
  }

  async function logout() {
    window.localStorage.removeItem(tokenKey);
    setIsAuthenticated(false);
  }

  return (
    <authContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {!isLoading && children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(authContext);
}
