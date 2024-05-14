import React from 'react'
import { useAuth } from '../contexts/authContext';
import Wrapper from '../components/Wrapper';

function Login() {
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <Wrapper>
      <form
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          onSubmit={handleSubmit}
          data-v0-t="card"
        >
          <div className="flex flex-col p-6 space-y-1 text-center">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">
              Sign in to your account
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below to access your account.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="username"
                  >Email
                </label>
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="Enter your email"
                type='email'
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center p-6">
            <button
              className="h-10 rounded-md w-full bg-black text-gray-50 hover:bg-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
    </Wrapper>
  )
}

export default Login
