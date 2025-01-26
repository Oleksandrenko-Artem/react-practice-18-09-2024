import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '@mdi/react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import { registerSchema } from '../../helpers/validation';
import { withUserAuth } from './../HOCs';
import styles from './Form.module.scss';

const RegisterForm = (props) => {
    const { setUser } = props;
    const [type, setType] = useState('password');
    const [showPassword, setShowPassword] = useState(mdiEyeOutline);
    const navigate = useNavigate();
    const changeType = () => {
        if (type === 'password') {
            setType('text');
            setShowPassword(mdiEyeOffOutline);
        } else {
            setType('password');
            setShowPassword(mdiEyeOutline);
        }
    }
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
                                <Field type='text' name='firstName' placeholder='first name' />
                                <ErrorMessage name='firstName' component='div' className={styles.error} />
                            </label>
                            <label>
                                <Field type='text' name='lastName' placeholder='last name' />
                                <ErrorMessage name='lastName' component='div' className={styles.error} />
                            </label>
                            <label>
                                <Field type='email' name='email' placeholder='email' />
                                <ErrorMessage name='email' component='div' className={styles.error} />
                            </label>
                            {<label>
                                <Field type={type} name='password' placeholder='password' />
                                <ErrorMessage name='password' component='div' className={styles.errorPassword}/>
                                <Icon path={showPassword} size={1.2} onClick={changeType} className={styles.showPassword} />
                            </label>}
                            <label>
                                <Field type='password' name='confirmPassword' placeholder='confirm password' />
                                <ErrorMessage name='confirmPassword' component='div' className={styles.error} />
                            </label>
                            <label>
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

RegisterForm.propTypes = {
    setUser: PropTypes.func,
}

const RegisterFormWithHOC = withUserAuth(RegisterForm);
export default RegisterFormWithHOC;
