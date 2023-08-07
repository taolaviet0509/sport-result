import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>
                More <FontAwesomeIcon icon={faAnglesRight} />{' '}
            </p>
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
