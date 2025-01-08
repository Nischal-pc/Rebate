import * as Yup from "yup"
export const validationSchema= Yup.object().shape({


    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(
        /^\d{3}\d{3}\d{4}$/,
        'Phone number must be 10 Digits'
      )
      .required('Phone Number is required'),
    date: Yup.date().nullable().required('Preferred Date is required'),
    time: Yup.string().required('Preferred Time is required'),
    address: Yup.string().required('Address is required'),
})
