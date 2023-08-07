import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../config';
import Menu from './Menu/Menu';
import { MenuItem } from './Menu';
import SuggestAccount from '../SuggestAccount/SuggestAccount';

const cx = classNames.bind(styles);
function Sidebar() {
    const [noOfElement, setNoOfElement] = useState(5);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const slice = data.slice(0, noOfElement);
    const loadMore = () => {
        setNoOfElement(noOfElement + 5);
    };

    console.log(noOfElement);
    const url = new URL('https://633f9eb4e44b83bc73bdb5fb.mockapi.io/countries');
    // url.searchParams.append('page', 1);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => err);
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <h2>Soccer - All countries</h2>

            <Menu>
                {slice &&
                    slice.map((item) => <MenuItem title={item.country} to={config.routes[item.url]} img={item.flag} />)}
            </Menu>
            <button className={cx('more-btn')} onClick={() => loadMore()}>
                {loading ? '...loading' : 'Load more'}
            </button>
            <SuggestAccount label="Poppular Match" />
        </aside>
    );
}

export default Sidebar;
