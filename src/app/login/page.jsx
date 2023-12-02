"use client";

import React from "react";
import styles from "./loginpage.module.css";
import { signIn, useSession } from "next-auth/react";
import Loading from "../../components/LoadingPage/Loading";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const Router = useRouter();

  if (status == "loading") {
    return <Loading />;
  }
  if (status == "authenticated") {
    Router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => {
            signIn("google");
          }}
        >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
