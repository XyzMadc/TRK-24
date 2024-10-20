import { useForm } from "react-hook-form";
import { FormData } from "@/type";

export const useFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return { register, handleSubmit, errors };
};
