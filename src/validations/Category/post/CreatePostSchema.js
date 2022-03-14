import * as Yup from "yup";

const createPostValidation = Yup.object().shape({
  title: Yup.string().required("O campo title é obrigatório"),
  content: Yup.string().required("O campo content é obrigatório"),
  cover_url: Yup.string(),
  category_id: Yup.number().required("O campo category_id é obrigatório"),
  user_id: Yup.number().required("O campo user_id é obrigatório"),
});

export default createPostValidation;
