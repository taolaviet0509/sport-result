import classNames from 'classnames/bind';
import styles from './Legacy.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { element } from 'prop-types';

const cx = classNames.bind(styles);
function Legacy(props) {
    const [selectItem, setSelectItem] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataItem();
    }, []);

    const handleItemClick = (item) => {
        setSelectItem(item);
        fetchDataFromApi(item);
    };

    const fetchDataItem = () => {
        const apiUrl = 'https://64a7ca11dca581464b84c869.mockapi.io/legacy';

        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log('error fetching data : ', error);
            });
    };

    const fetchDataFromApi = (item) => {
        const apiUrl = 'https://64a7ca11dca581464b84c869.mockapi.io/legacy/${item.id}';
        axios
            .get(apiUrl)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('error fetching data : ', error);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('trust')}>
                <div className={cx('header')}>
                    <img
                        className={cx('logo')}
                        src="https://cdn.cookielaw.org/logos/static/ot_logo.png"
                        alt="trust-logo"
                    ></img>
                    <h2>About Your Privacy</h2>
                </div>
                <div className={cx('content')}>
                    <div className={cx('tab-list')}>
                        <ul>
                            {data &&
                                data.map((item, index) => (
                                    <li onClick={() => handleItemClick(item)} key={index}>
                                        <div className={cx('list-item')}>
                                            <h3 className={cx('txt')}>{item.tab}</h3>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('sub-content')}>
                            {selectItem ? <h4 className={cx('i-header')}>{selectItem.tab}</h4> : null}
                            {selectItem ? <p>{selectItem.content}</p> : null}
                        </div>
                    </div>
                </div>
                <div className={cx('btn-group')}>
                    <button className={cx('refuse-all')} onClick={props.toggle}>
                        Reject All
                    </button>
                    <button className={cx('allow-all')} onClick={props.toggle}>
                        Allow All
                    </button>
                </div>

                <div className={cx('footer')}>
                    <img src="https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg"></img>
                </div>
            </div>
        </div>
    );
}

export default Legacy;
