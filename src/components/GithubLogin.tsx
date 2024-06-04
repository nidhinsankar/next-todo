"use client";
import { account } from "@/appwrite";
import { OAuthProvider } from "appwrite";

const GithubLogin = () => {
  const login = () => {
    account.createOAuth2Session(
      OAuthProvider.Github,
      process.env.NEXT_PUBLIC_SUCCESS_REDIRECT,
      process.env.NEXT_PUBLIC_FAILURE_REDIRECT
    );
  };
  return (
    <div>
      <button
        className="btn"
        // className="btn bg-gray-500 px-4 py-2 rounded-md shadow-lg"
        onClick={login}
      >
        login with GITHUB
      </button>
    </div>
  );
};

export default GithubLogin;
