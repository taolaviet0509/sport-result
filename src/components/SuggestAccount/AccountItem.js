import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
    return (
        <div className={cx('account-item')}>
            <table className={cx('table-main')}>
                <tbody className={cx('item-info')}>
                    <tr>
                        <th className={cx('th-info')}>
                            <span className={cx('date-time')}> 22.07.2023 </span>
                            <span className={cx('round')}>Round 1</span>
                        </th>
                    </tr>
                    <tr className={cx('h2h')}>
                        <td>
                            <a>Mỹ - Việt Nam</a>
                        </td>
                    </tr>
                    <tr className={cx('h2h')}>
                        <td>
                            <a>Hà Lan - Bồ Đào Nha</a>
                        </td>
                    </tr>

                    <tr>
                        <th className={cx('th-info')}>
                            <span className={cx('date-time')}> 27.07.2023 </span>
                            <span className={cx('round')}>Round 2</span>
                        </th>
                    </tr>
                    <tr className={cx('h2h')}>
                        <td>
                            <a>Mỹ - Hà Lan</a>
                        </td>
                    </tr>
                    <tr className={cx('h2h')}>
                        <td>
                            <a>Bồ Đào Nha - Việt Nam</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

AccountItem.propTypes = {
    label: PropTypes.node.isRequired,
};

export default AccountItem;
