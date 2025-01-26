import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import { useState } from 'react';
import { loginSchema } from '../../helpers/validation';
import { withUserAuth } from './../HOCs/index';
import { PropTypes } from 'prop-types';
import styles from './Form.module.scss';

const LoginForm = (props) => {
    const { setUser } = props;
    const [type, setType] = useState('password');
    const [showPassword, setShowPassword] = useState(mdiEyeOutline);
    const navigate = useNavigate();
    const changeType = () => {
        if (type==='password') {
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
                                <Field type='email' name='email' placeholder='email' />
                                <ErrorMessage name='email' component='div' className={styles.error} />
                            </label>
                            {<label>
                                <Field type={type} name='password' placeholder='password' />
                                <ErrorMessage name='password' component='div' className={styles.errorPassword} />
                                <Icon path={showPassword} size={1.2} onClick={changeType} className={styles.showPassword} />
                            </label>}
                            <button type='submit' className={styles.button}>log in</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

LoginForm.propTypes = {
    setUser: PropTypes.func,
}

const LoginFormWithHOC = withUserAuth(LoginForm)
export default LoginFormWithHOC;
