import { useMutation } from "react-query";
import { axiosInstance } from "../utils/axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";

const login = async (values: any) => {
  const { data } = await axiosInstance.post(`user/login`, values);
  return data;
};

const validationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(6, { message: "Must be 6 or more characters" }),
});

export const useLogin = () => {
  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<any, Error>(
    login,
    {
      retry: false,
    }
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  return {
    handleSubmit: handleSubmit((values) => mutate(values)),
    register,
    formErrors: errors,
    responseError: error?.response?.data.message,
    mutate,
    isLoading,
    data,
    isResponseError: isError,
    isSuccess
  };
};
