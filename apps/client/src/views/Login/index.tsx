import React from "react";
import {
  FormDivider,
  FormButton,
  SocialLoginButton,
  FormInput,
  FormAlert,
} from "../../components";
import tw, { styled, theme } from "twin.macro";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";
import { HiOutlineMail as MailIcon } from "react-icons/hi";
import { RiLockPasswordLine as PasswordIcon } from "react-icons/ri";

export const Login = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
    isSuccess,
  } = useLogin();

  return (
    <MainContainer>
      {isSuccess && <Redirect to="/" />}
      <div className="flex w-full">
        <div className="flex h-screen w-full justify-center items-center md:(justify-center w-1/2)">
          <div className="w-full rounded-lg h-screen p-10 md:(w-1/2 min-w-[350px] max-w-[450px] h-auto) bg-white shadow-2xl">
            <div className="mb-8 text-4xl font-extrabold text-center">
              Welcome Back!
            </div>
            <div className="flex gap-[15px] justify-center">
              <a href="http://localhost:4444/auth/google/redirect">
                <SocialLoginButton variation="google" />
              </a>
              <a href="http://localhost:4444/auth/facebook/redirect">
                <SocialLoginButton variation="facebook" />
              </a>
            </div>
            <div className="flex mt-6 mb-6">
              <FormDivider text="OR" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-flow-row gap-[15px]">
                {isResponseError && (
                  <FormAlert message={responseError} variation="error" />
                )}
                <FormInput
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="email"
                  isInvalid={formErrors.email}
                  icon={<MailIcon size="20px" />}
                  errorMessage={formErrors.email?.message}
                />
                <FormInput
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  isInvalid={formErrors?.password}
                  icon={<PasswordIcon size="20px" />}
                  errorMessage={formErrors.password?.message}
                  maxLength="24"
                />
                <FormButton isLoading={isLoading} text="Login" />
              </div>
            </form>
            <div className="divider mt-10 -ml-10 -mr-10 md:block"></div>
            <div className="mt-10">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
