import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Sidebar from '../../SideBar/Sidebar';
import Footer from '../components/Footer/Footer';
import Legacy from '../components/LegacyButton/Legacy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const [theme, setTheme] = useState('light');
    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState('normal');
    // const toggleTheme = () => {
    //     theme === 'light' ? setTheme('dark') : setTheme('light');
    // };
    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme]);
    const handleLegacy = () => {
        setActive(!active);
        disable === 'normal' ? setDisable('disable') : setDisable('normal');
    };
    return (
        <div className={cx('wrapper', `${disable}`)}>
            <Header />

            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                    {/* <button onClick={toggleTheme}>Dark Mode</button> */}
                </div>
                <Sidebar />
            </div>

            {/* <div className={cx('container')}>
                <div className={cx('content')}>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, { msg: TurkeyFlag });
                        }
                        return child;
                    })}
                </div>
                <Sidebar />
            </div> */}
            {/* this snippet code to send prop attach receive children from App component */}

            <Footer />

            <button className={cx('btn-legacy')} onClick={handleLegacy}>
                <FontAwesomeIcon className={cx('details-logo')} icon={faEllipsis} />
            </button>
            {active ? <Legacy toggle={handleLegacy} /> : null}
        </div>
    );
}

export default DefaultLayout;
