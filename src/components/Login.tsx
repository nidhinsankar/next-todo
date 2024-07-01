"use client";
import { useState } from "react";
import { account, ID } from "@/utils/appwrite";
import { type Models } from "appwrite";
import GoogleLogin from "@/components/GoogleLogin";
import GithubLogin from "@/components/GithubLogin";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to next todo app</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter Your Email" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <Button>Login</Button>
        </form>
        <CardFooter>
          <GoogleLogin />
          <GithubLogin />
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default LoginPage;

// <div className="w-[600px] flex flex-col p-6 bg-red-500">
//       <form className="card w-96 bg-base-100 shadow-lg ">
//         <input
//           type="email"
//           className="input input-bordered w-full max-w-xs"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="input input-bordered w-full max-w-xs"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           className="input input-bordered w-full max-w-xs"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button
//           type="button"
//           onClick={() => login(email, password)}
//           className="btn-primary"
//         >
//           Login
//         </button>
//         <button type="button" onClick={register} className="btn-primary">
//           Register
//         </button>
//       </form>
//       <div>
//         <GoogleLogin />
//         <GithubLogin />
//       </div>
//     </div>
