import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('team')}>CLB Hà Nội </span> <h4 className={cx('nation')}> (Việt Nam)</h4>
        </div>
    );
}

export default AccountItem;
