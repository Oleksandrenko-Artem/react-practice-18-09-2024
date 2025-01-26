import * as Yup from 'yup';

const nameSchema = Yup.string().trim().min(3).max(15).required('required');
const emailSchema = Yup.string().trim().email('enter correct email, please').required('required');
const passwordSchema = Yup.string().min(6, 'must be more than 6').max(16).required('required');

export const registerSchema = Yup.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'passwords must match').required('required'),
    year: Yup.number().min(1900).max(new Date().getFullYear(), 'year cannot be in the future').required('required'),
})

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
})