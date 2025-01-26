import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../helpers/validation';
import { withUserAuth } from './../HOCs/index';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
                const savedUser = JSON.parse(localStorage.getItem('user'));
                if (savedUser &&
                    savedUser.email === values.email &&
                    savedUser.password === values.password
                ) {
                    alert('login success!');
                    setUser(savedUser);
                    navigate('/');
                } else {
                    alert('Email or password is wrong!');
                }
            }}
        >
            {
                () => {
                    return (
                        <Form className={styles.form}>
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
                            <button type='submit' className={styles.button}>log in</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

const LoginFormWithHOC = withUserAuth(LoginForm)
export default LoginFormWithHOC;
