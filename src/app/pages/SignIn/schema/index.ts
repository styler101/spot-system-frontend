import * as yup from "yup";

const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email("Por favor Informe um e-mail válido!")
      .required("O Campo E-mail é Obrigatório!"),
  });
};

export default schema;
