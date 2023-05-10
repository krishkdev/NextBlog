import { Inter } from "@next/font/google";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Layout>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      )}
    </Layout>
  );
}
