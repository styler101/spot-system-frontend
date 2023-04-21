import * as yup from "yup";

const schema = () => {
  return yup.object({
    thumbnail: yup.string().required("O link do spot é obrigatório"),
    company: yup.string().required("O campo empresa é obrigatório"),
    techs: yup.string().required("O campo de techs é obrigatório"),
    price: yup.string().notRequired().nullable(),
  });
};

export default schema;
