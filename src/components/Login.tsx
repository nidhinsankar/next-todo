"use client";
import { useState } from "react";
import { account, ID } from "@/appwrite";
import { type Models } from "appwrite";
import GoogleLogin from "@/components/GoogleLogin";
import GithubLogin from "@/components/GithubLogin";

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
    <div className="w-[350px] flex flex-col p-6  bg-primary">
      <form className="card w-96 bg-base-100 shadow-lg ">
        <input
          type="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="button"
          onClick={() => login(email, password)}
          className="btn-primary"
        >
          Login
        </button>
        <button type="button" onClick={register} className="btn-primary">
          Register
        </button>
      </form>
      <div>
        <GoogleLogin />
        <GithubLogin />
      </div>
    </div>
  );
};

export default LoginPage;
