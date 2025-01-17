import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name cannot be empty")
    .matches(/^[A-Za-z]+$/, "Letters only"),
  lastName: yup
    .string()
    .required("Last name cannot be empty")
    .matches(/^[A-Za-z]+$/, "Letters only"),
  street: yup.string().required("Street cannot be empty"),
  postCode: yup.string().required("Post Code cannot be empty"),
  email: yup.string().required().email(),
  phone: yup
    .string()
    .required("Phone Number cannot be empty")
    .matches(/^\+\d+$/, "+ & Numbers only {+000000000}")
    .min(9, "Min Length 9"),
});
