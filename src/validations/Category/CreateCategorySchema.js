import * as Yup from "yup";

const createCategoryValidation = Yup.object().shape({
  name: Yup.string().required("O campo name é obrigatório"),
});

export default createCategoryValidation;
