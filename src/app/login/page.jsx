"use client";

import React, { useEffect } from "react";
import Styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Loading from "../../components/loadingPage/Loadingpage";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const { data, status } = useSession();
  const Router = useRouter();

  if (status == "loading") {
    return <Loading />;
  }
  if (status == "authenticated") {
    toast.success("Logged in successfully.");
    Router.push("/");
  }

  console.log(data);
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div
          className={Styles.socialButton}
          onClick={() => {
            signIn("google");
          }}
        >
          Sign in with Google
        </div>
        <div
          className={Styles.socialButton}
          onClick={() => {
            signIn("github");
          }}
        >
          Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
