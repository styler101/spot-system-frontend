import React from "react";
import { FormData } from "./interfaces";
import schema from "../schema";
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

  return {
    form,
    loadings: { loading, setLoading },
  };
}
