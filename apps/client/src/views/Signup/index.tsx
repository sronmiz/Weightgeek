import React from "react";
import {
  FormDivider,
  FormButton,
  SocialLoginButton,
  FormInput,
} from "../../components";
import { useSignup } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer, FormAlert } from "../../components";
import { HiOutlineMail as MailIcon } from "react-icons/hi";
import { RiLockPasswordLine as PasswordIcon } from "react-icons/ri";

export const Signup = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
    isSuccess,
  } = useSignup();

  return (
    <MainContainer>
      {isSuccess && <Redirect to="/" />}
      <div className="flex w-full">
        <div className="flex h-screen w-full justify-center items-center md:(justify-center w-1/2)">
          <div className="card w-full h-screen p-10 md:(w-1/2 min-w-[350px] max-w-[450px] h-auto)">
            <div className="mb-8 text-4xl font-extrabold text-center header">
              Sign Up
            </div>
            <div className="flex gap-[15px] flex-col">
              <SocialLoginButton variation="google" />
              <SocialLoginButton variation="facebook" />
            </div>
            <div className="flex mt-6 mb-6">
              <FormDivider text="OR" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-[15px] flex-col">
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
                  maxLength={24}
                />
                <FormButton isLoading={isLoading} text="Sign Up" />
              </div>
            </form>
            <div className="divider mt-10 -ml-10 -mr-10 md:block"></div>
            <div className="mt-10">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
