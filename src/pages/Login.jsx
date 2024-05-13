import React from 'react'

function Login() {
  return (
    <div
        className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950"
      >
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center justify-center">
            <a
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg
              ><span className="sr-only">Acme Inc</span></a
            >
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col p-6 space-y-1 text-center">
              <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">
                Sign in to your account
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter your username and password below to access your account.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="username"
                    >Username
                  </label>
                </div>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="username"
                  placeholder="Enter your username"
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
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
