"use client";
import { account } from "@/appwrite";
import { OAuthProvider } from "appwrite";

const GoogleLogin = () => {
  const login = () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      process.env.NEXT_PUBLIC_SUCCESS_REDIRECT,
      process.env.NEXT_PUBLIC_FAILURE_REDIRECT
    );
  };

  console.log(process.env.NEXT_PUBLIC_SUCCESS_REDIRECT);
  return (
    <div>
      <button
        className="bg-gray-500 px-4 py-2 rounded-md shadow-lg"
        onClick={() => login()}
      >
        login with GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;