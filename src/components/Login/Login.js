import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = 'http://localhost:3000/football';
            alert('Login success!');
        }
    };

    const validateForm = () => {
        const err = {};

        if (email === '') {
            err.email = 'This field must be required!!!';
        } else if (email !== '7640173@gmail.com' || !email) {
            err.email = 'Email is not register !!!';
        }

        if (password === '') {
            err.password = 'This field must be required!!!';
        } else if (password !== '123456789' || !password) {
            err.password = 'Your username or password incorrect, please try it again !!!';
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };
    return (
        <div className={cx('popup')}>
            <form onSubmit={handleSubmit} action="" method="POST" class="form" id="form-1">
                <h3 class="heading">Login</h3>

                <div class="spacer"></div>
                <button className={cx('close-btn')} onClick={props.toggle}>
                    Close
                </button>

                <div className={cx('form-group')}>
                    <label for="email" class="form-label">
                        <span className={cx('title-login')}>Email</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className={cx('form-control')}
                        placeholder="7640173@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
                    ></input>
                    {errors.email && <span className={cx('error')}>{errors.email}</span>}
                </div>

                <div className={cx('form-group')}>
                    <label for="password" class="form-label">
                        <span className={cx('title-login')}>Password</span>
                    </label>
                    <input
                        className={cx('form-control')}
                        value={password}
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))}
                    ></input>
                    {errors.password && <span className={cx('error')}>{errors.password}</span>}
                </div>

                <div className={cx('forgot-pw')}>
                    <a>Forgot password </a>
                </div>
                <button className={cx('form-submit')}> Login</button>
            </form>
        </div>
    );
}

export default Login;
