"use client";
import { useEffect, useState } from "react";
import { handleLogin } from "../../helpers/authHelper";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoginPageComponent from "@/components/pages/auth/LoginPageComponent";

export default function LoginPage() {
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    isLogged();
  }, []);

  const isLogged = async () => {
    try {
      const bearerToken = Cookies.get("token");
      if (!bearerToken) {
        return router.push("/auth");
      }

      return router.push("/dashboard");
    } catch (err) {
      return;
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (await handleLogin(email, password)) {
        router.push("/dashboard");
      } else {
        // console.log("here");
        setFailedLogin(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setFailedLogin(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModalAuth = () => {
    setFailedLogin(false);
  };

  return (
    <LoginPageComponent
      props={{
        email: email,
        emailError: emailError,
        password: password,
        handleEmailChange: handleEmailChange,
        handlePasswordChange: handlePasswordChange,
        handleSubmit: handleSubmit,
        isLoading: isLoading,
        openModalAuthFail: failedLogin,
        closeModalAuthFail: handleCloseModalAuth,
      }}
    />
  );
}
