import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/Login.module.css";
import Image from "next/image";

interface LoginProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
const login = ({ setIsLoggedIn }: LoginProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.centered}>Board.</div>
      </div>
      <div className={styles.right}>
        {/* Heading and OAuths */}
        <div className={styles.headers}>
          <div className={styles.title}>Sign In</div>
          <div className={styles.subtitle}>Sign in to your account</div>
          <div className={styles.social}>
            <button className={styles.socialbtn}>
              <Image
                src={require("@/public/google.svg")}
                alt="Google"
                className={styles.socialicon}
              />
              Sign in with google
            </button>
            <button className={styles.socialbtn}>
              <Image
                src={require("@/public/apple.svg")}
                alt="Apple"
                className={styles.socialicon}
              />
              Sign in with apple
            </button>
          </div>
        </div>
        {/* Sign In Form */}
        <form className={styles.form}>
          <label className={styles.label}>Email Address</label>
          <input type="text" className={styles.inputbox} />
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.inputbox} />
          <a href="#" className={styles.link}>
            Forgot Password?
          </a>
          <button className={styles.btn} onClick={() => setIsLoggedIn(true)}>
            Sign In
          </button>
        </form>
        <div className={styles.register}>
          Don&apos;t have an Account?{" "}
          <a href="#" className={styles.link}>
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default login;
