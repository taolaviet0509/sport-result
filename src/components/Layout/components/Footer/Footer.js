import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('st-footer')}>
                <div className={cx('footer-sectioc')}>
                    <h3>About Us</h3>
                    <a>Term of Service</a>
                    <a>Privacy policy</a>
                    <a>About Robot Score</a>
                    <button title="Debug"> </button>
                </div>
                <div className={cx('footer-sectioc')}>
                    <h3>Contact & Service</h3>
                    <a>FAQ</a>
                    <a>Help Center</a>
                    <a>Customer Service & Support</a>
                </div>
                <div className={cx('footer-sectioc')}>
                    <h3>Business</h3>
                    <a>Opportunities</a>
                    <a>Affiliate Program</a>
                    <a>KOLS & Celeb</a>
                    <a>Become a Creater</a>
                </div>
                <div className={cx('footer-sectioc')}>
                    <h3> Discover</h3>
                    <a>Blog</a>
                    <a>Select</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
