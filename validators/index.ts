import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(55, 'Maximum 24 characters')
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])/, 'Must contain at least one upper case')
    .matches(/^(?=.*?[0-9])/, 'Must contain at least one digit')
    .matches(/^(?=.*?[a-z])/, 'Must contain at least one lower case')
    .min(8, 'Minimum 8 characters')
    .max(24, 'Maximum 24 characters')
    .required('Password is required'),
});
