import React from "react";
import { toast } from "react-toastify";
import schema from "../schema";
import { authentication } from "../services";
import { FormData } from "./interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function formValidation() {
  const form = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema()),
  });

  React.useEffect(() => {
    form.register("email");
  }, []);

  return {
    form,
  };
}

export function authenticationUseCase() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { form } = formValidation();
  const onSumbit = async ({ email }: FormData): Promise<void> => {
    setLoading(true);
    try {
      const { id } = await authentication(email);
      localStorage.setItem("@aircnc:user_id", id);
      toast.success("Usuário Autencidado!");
    } catch (error) {
      toast.error("Já Existe um usuário cadastrado com esse e-mail");
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return {
    form,
    loadings: { loading, setLoading },
    onSumbit,
  };
}
