"use client";
import { useState } from "react";
import { account, ID } from "@/appwrite";
import { type Models } from "appwrite";
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";
const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] =
    useState<Models.User<Models.Preferences> | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser?.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="w-[350px] flex flex-col justify-center items-center">
      <p>Not logged in</p>
      <h3 className="">okay</h3>
      <form className="flex flex-col gap-y-4 border-gray-400 shadow-lg">
        <input
          type="email"
          className=""
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="text-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className="text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="button"
          onClick={() => login(email, password)}
          className="bg-white text-black"
        >
          Login
        </button>
        <button
          type="button"
          onClick={register}
          className="bg-white text-black"
        >
          Register
        </button>
        <GoogleLogin />
        <GithubLogin />
      </form>
    </div>
  );
};

export default LoginPage;
