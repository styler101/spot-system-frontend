import React, { useEffect, useState } from "react";
import schema from "../schema";
import { createSpot } from "../services";
import { FormData } from "../protocols";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

export function useValidationUseCase() {
  const form = useForm<FormData>({
    reValidateMode: "onBlur",
    mode: "onBlur",
    defaultValues: {
      techs: [],
      company: "",
      price: null,
      thumbnail: "",
    },
    resolver: yupResolver(schema()),
  });

  useEffect(() => {
    form.register("company");
    form.register("price");
    form.register("thumbnail");
    form.register("techs");
  }, []);

  return {
    form,
  };
}

export function saveSpotUseCase() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const storagedUser: any = localStorage.getItem("@aircnc:user");
  const onSubmit = async (data: FormData) => {
    let payload: any = {
      company: data.company,
      price: data.price === "" ? 0.0 : Number(data.price),
      techs: data.techs.map((item) => item.split(",")),
      thumbnail: data.thumbnail,
      user: JSON.parse(storagedUser),
    };
    setLoading(true);
    try {
      await createSpot(payload);
      toast.success("Spot cadastradado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      toast.error("Erro ao cadastrar o spot");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    onSubmit,
  };
}
