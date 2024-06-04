"use client";

import React, { useEffect, useState } from "react";
import { account } from "@/appwrite";
import { type Models } from "appwrite";
const Dashboard = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>();
  const getAccount = async () => {
    const accountData = await account.get();
    setUser(accountData);
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-3xl">Dashboard</h1>
      {user && (
        <div className="mt-3">
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div>
        <div className="w-[450px] bg-white text-gray-500">
          <input type="text" placeholder="add todo" name="todo" />

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
