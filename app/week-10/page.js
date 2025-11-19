"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  // Get user and auth functions from context
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Login handler
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className ="p-8 items-center ">
      <h1>Week 10</h1>
      <br />
      {!user && (
        <>
          <button 
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900">
            Login with GitHub
          </button>
        </>
      )}

      {user && (
        <>
          <p>
            Welcome {user.email}
          </p>
          <br />
         
          <Link href="/week-10/shopping-list">
            Go to Shopping List 
          </Link>

          <br /><br />

          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </>
      )}
    </main>
  );
}
