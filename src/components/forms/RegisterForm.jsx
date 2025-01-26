import { useNavigate } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from 'formik';
import { registerSchema } from '../../helpers/validation';
import { withUserAuth } from './../HOCs';
import styles from './RegisterForm.module.scss';

const RegisterForm = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                year: '',
            }}
            onSubmit={(values) => {
                const user = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    year: values.year,
                }
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                alert('Registration success!');
                navigate('/');
            }}
            validationSchema={registerSchema}
        >
            {
                () => {
                    return (
                        <Form className={styles.form}>
                            <label>
                                <span>first name:</span>
                                <Field type='text' name='firstName' placeholder='first name' />
                                <ErrorMessage name='firstName' component='div' className={styles.error} />
                            </label>
                            <label>
                                <span>last name:</span>
                                <Field type='text' name='lastName' placeholder='last name' />
                                <ErrorMessage name='lastName' component='div' className={styles.error} />
                            </label>
                            <label>
                                <span>email:</span>
                                <Field type='email' name='email' placeholder='email' />
                                <ErrorMessage name='email' component='div' className={styles.error} />
                            </label>
                            <label>
                                <span>password:</span>
                                <Field type='password' name='password' placeholder='password' />
                                <ErrorMessage name='password' component='div' className={styles.error} />
                            </label>
                            <label>
                                <span>confirm password:</span>
                                <Field type='password' name='confirmPassword' placeholder='confirm password' />
                                <ErrorMessage name='confirmPassword' component='div' className={styles.error} />
                            </label>
                            <label>
                                <span>year</span>
                                <Field type='number' name='year' placeholder='year' />
                                <ErrorMessage name='year' component='div' className={styles.error} />
                            </label>
                            <button type='submit' className={styles.button}>register</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

const RegisterFormWithHOC = withUserAuth(RegisterForm);

export default RegisterFormWithHOC;
