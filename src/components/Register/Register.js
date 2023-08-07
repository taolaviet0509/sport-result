import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
// import validation from './validation';

const cx = classNames.bind(styles);
function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (username === '') {
            formErrors.username = 'This field must be required';
        } else if (username.length < 8) {
            formErrors.username = 'Username must be more than 8 ';
        }

        if (email === '') {
            formErrors.email = 'This field must be required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is not valid !';
        }

        if (password === '') {
            formErrors.password = 'This field must be required';
        } else if (password.length < 9) {
            formErrors.password = 'Password must be more than 9 characters';
        }

        if (confirm === '') {
            formErrors.confirm = 'This field must be required';
        } else if (confirm !== password) {
            formErrors.confirm = 'Confirm password not match';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert('Đăng ký thành công:');
            props.toggle();
        }
        console.log(2 == '3');
    };

    return (
        <div className={cx('popup')}>
            <form onSubmit={handleSubmit} action="" method="POST" class="form" id="form-1">
                <h3 class="heading">Register</h3>

                <div class="spacer"></div>
                <button className={cx('close-btn')} onClick={props.toggle}>
                    Close
                </button>
                <div className={cx('form-group')}>
                    <label for="fullname" class="form-label">
                        Username
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        placeholder="Your name "
                        value={username}
                        type="text"
                        onChange={(event) => setUsername(event.target.value.replace(/\s/g, ''))}
                        className={cx('form-control')}
                    ></input>
                    {errors.username && <span className={cx('error')}>{errors.username}</span>}
                </div>

                <div className={cx('form-group')}>
                    <label for="email" class="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        className={cx('form-control')}
                        onChange={(event) => setEmail(event.target.value.replace(/\s/g, ''))}
                        placeholder="7640173@gmail.com"
                    ></input>
                    {errors.email && <span className={cx('error')}>{errors.email}</span>}
                </div>

                <div className={cx('form-group')}>
                    <label for="password" class="form-label">
                        Password
                    </label>
                    <input
                        className={cx('form-control')}
                        id="password"
                        name="password"
                        value={password}
                        type="password"
                        onChange={(event) => setPassword(event.target.value.replace(/\s/g, ''))}
                    ></input>
                    {errors.password && <span className={cx('error')}>{errors.password}</span>}
                </div>

                <div className={cx('form-group', 'form-pw-confirm')}>
                    <label for="password_confirmation" class="form-label">
                        Re-password
                    </label>
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        value={confirm}
                        onChange={(event) => setConfirm(event.target.value.replace(/\s/g, ''))}
                        className={cx('form-control')}
                    ></input>
                    {errors.confirm && <span className={cx('error')}>{errors.confirm}</span>}
                </div>

                {/* <div className={cx('form-group-check')}>
                    <input type="checkbox" className={cx('form-checkbox')}></input>
                    <label for="password_confirmation" class="form-label">
                        Remember me
                    </label>
                </div> */}

                <button className={cx('form-submit')}> Register</button>
            </form>
            {/* <validation error={errors} func={setErrors} username={username} email={email} password={password} /> */}
        </div>
    );
}

export default Register;
