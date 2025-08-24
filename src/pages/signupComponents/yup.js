import * as Yup from "yup";

export const schema = Yup.object().shape({
  fullName: Yup.string()
    .required("نام کامل الزامی است")
    .min(3, "نام کامل باید حداقل ۳ کاراکتر باشد"),
  email: Yup.string()
    .required("ایمیل الزامی است")
    .email("ایمیل معتبر وارد کنید"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "رمز عبور و تکرارش باید یکی باشند")
    .required("تکرار رمز عبور الزامی است"),
});