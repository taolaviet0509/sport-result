import { useState, useRef } from 'react';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Register from '../../../Register/Register';
import Login from '../../../Login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import {
    faBasketball,
    faHouse,
    faMagnifyingGlass,
    faTableTennis,
    faVolleyball,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PropperWrapper } from '../Popper';

const cx = classNames.bind(style);

function Header() {
    const [search, setSearch] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [activeLogin, setIsActiveLogin] = useState(false);
    const inputRef = useRef();
    const handleClear = () => {
        inputRef.current.value = '';
    };

    const toggleRegister = () => {
        setIsActive(!isActive);
    };

    const toggleLogin = () => {
        setIsActiveLogin(!activeLogin);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-1')}>
                <div className={cx('logo')}>RobotScore</div>

                <Tippy
                    interactive
                    visible={search.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-content')} tabIndex={-1} {...attrs}>
                            <PropperWrapper>
                                <label className={cx('search-title')}>Team </label>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Find a team" spellCheck="false" ref={inputRef}></input>
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon className={cx('icon-btn')} icon={faCircleXmark} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('icon-btn')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <button className={cx('show-login')} onClick={toggleLogin}>
                        Login
                    </button>
                    {activeLogin ? <Login toggle={toggleLogin} /> : null}
                    <button className={cx('show-register')} onClick={toggleRegister}>
                        Register
                    </button>
                    {isActive ? <Register toggle={toggleRegister} /> : null}
                </div>
            </div>
            <div className={cx('inner')}>
                <Link to={'/'}>
                    <FontAwesomeIcon className={cx('sport-icon')} icon={faHouse} />
                    Home
                </Link>

                <Link to={'/football'}>
                    <FontAwesomeIcon className={cx('sport-icon')} icon={faFutbol} />
                    Football
                </Link>

                <Link to={'/basketball'}>
                    <FontAwesomeIcon className={cx('sport-icon')} icon={faBasketball} />
                    Basketball
                </Link>

                <Link to={'/volleyball'}>
                    <FontAwesomeIcon className={cx('sport-icon')} icon={faVolleyball} />
                    Volleyball
                </Link>

                <Link to={'/tennis'}>
                    <FontAwesomeIcon className={cx('sport-icon')} icon={faTableTennis} />
                    Tennis
                </Link>
            </div>
        </header>
    );
}

export default Header;
