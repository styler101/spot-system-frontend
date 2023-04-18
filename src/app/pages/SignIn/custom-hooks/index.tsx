import React from "react";
import schema from "../schema";
import { authentication } from "../services";
import { FormData } from "./interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function authenticationUseCase() {
  const [loading, setLoading] = React.useState<boolean>(false);
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

  const onSumbit = async ({ email }: FormData): Promise<void> => {
    setLoading(true);
    try {
      const { id } = await authentication(email);
      localStorage.setItem("@aircnc:user_id", id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loadings: { loading, setLoading },
    onSumbit,
  };
}
