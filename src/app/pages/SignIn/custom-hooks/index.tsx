import React from "react";
import { FormData } from "./protocols/interfaces";
import { authentication } from "../services";
import schema from "../schema";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const onSumbit = async ({ email }: FormData): Promise<void> => {
    setLoading(true);
    try {
      const userData = await authentication(email);
      localStorage.setItem("@aircnc:user", JSON.stringify(userData));
      toast.success("Usuário Autencidado!");
      navigate("/dashboard");
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
