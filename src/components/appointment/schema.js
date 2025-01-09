import * as Yup from "yup"
export const validationSchema= Yup.object().shape({
    date: Yup.date().nullable().required('Preferred Date is required'),
    time: Yup.string().required('Preferred Time is required'),
    customer: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("First name is required"),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().min(10,"Invalid phone number").required('Phone Number is required'),
    }),
    address: Yup.object().shape({
      fullAddress:Yup.string().required("address is required"),
      city: Yup.string().optional(),
      province: Yup.string().optional(),
      postalCode: Yup.string().optional(),
      street: Yup.string().optional(),
      country: Yup.string().optional(),
    }),
})
