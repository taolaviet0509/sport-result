import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faPeopleArrows,
    faPeopleGroup,
    faPerson,
    faPersonDress,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-wrap-section')}>
                <h2>Upcoming Events </h2>
                <span>Show all today's matches</span>
                <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
            </header>
            <article>
                <h3>Football</h3>
                <div className={cx('homepage-football')}>
                    <ul className={cx('left-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/1.svg"></img>
                            <Link>Africa</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/dz.svg"></img>
                            <Link>Algeria</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ar.svg"></img>
                            <Link>Argentina</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/au.svg"></img>
                            <Link>Australia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/bo.svg"></img>
                            <Link>Bolivia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/br.svg"></img>
                            <Link>Brazil</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ca.svg"></img>
                            <Link>Canada</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/cl.svg"></img>
                            <Link>Chile</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/co.svg"></img>
                            <Link>Colombia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/hr.svg"></img>
                            <Link>Croatia</Link>
                        </li>
                    </ul>
                    <ul className={cx('right-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/kz.svg"></img>
                            <Link>Kazakhstan</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/lv.svg"></img>
                            <Link>Latvia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ml.svg"></img>
                            <Link>Mali</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/mx.svg"></img>
                            <Link>Mexico</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/mm.svg"></img>
                            <Link>Myanmar</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/no.svg"></img>
                            <Link>Norway</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/py.svg"></img>
                            <Link>Paraguay</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/se.svg"></img>
                            <Link>Sweden</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/us.svg"></img>
                            <Link>USA</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ve.svg"></img>
                            <Link>Venezuela</Link>
                        </li>
                    </ul>
                </div>
            </article>

            <article className={cx('sub-article')}>
                <h3>Basketball</h3>
                <div className={cx('homepage-basketball')}>
                    <ul className={cx('left-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/1.svg"></img>
                            <Link>Africa</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/dz.svg"></img>
                            <Link>Algeria</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ar.svg"></img>
                            <Link>Argentina</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/au.svg"></img>
                            <Link>Australia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/bo.svg"></img>
                            <Link>Bolivia</Link>
                        </li>
                    </ul>
                    <ul className={cx('right-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/kz.svg"></img>
                            <Link>Kazakhstan</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/lv.svg"></img>
                            <Link>Latvia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ml.svg"></img>
                            <Link>Mali</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/mx.svg"></img>
                            <Link>Mexico</Link>
                        </li>
                    </ul>
                </div>
            </article>

            <article className={cx('sub-article')}>
                <h3>Volleyball</h3>
                <div className={cx('homepage-volleyball')}>
                    <ul className={cx('left-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/1.svg"></img>
                            <Link>Africa</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/dz.svg"></img>
                            <Link>Algeria</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/ar.svg"></img>
                            <Link>Argentina</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/au.svg"></img>
                            <Link>Australia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/nz.svg"></img>
                            <Link>Newzealand</Link>
                        </li>
                    </ul>
                    <ul className={cx('right-football-tbl')}>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/pr.svg"></img>
                            <Link>Puerto Rico</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/lv.svg"></img>
                            <Link>Latvia</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/vn.svg"></img>
                            <Link>Vietnam</Link>
                        </li>
                        <li>
                            <img src="https://www.betexplorer.com/res/images/flags/4x3/8.svg"></img>
                            <Link>World</Link>
                        </li>
                    </ul>
                </div>
            </article>

            <article className={cx('tennis-article')}>
                <h3>Tennis</h3>
                <div className={cx('homepage-volleyball')}>
                    <ul className={cx('left-football-tbl')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPerson} />
                            <Link>ATP - Singles</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPersonDress} />
                            <Link>WTA - Singles</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPeopleGroup} />
                            <Link>ATP - Doubles</Link>
                        </li>
                    </ul>
                    <ul className={cx('right-football-tbl')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPeopleGroup} />
                            <Link>WTA - Doubles</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPeopleArrows} />
                            <Link>Mixed Doubles</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPerson} />
                            <Link>Challenger Men - Singles</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPersonDress} />
                            <Link>Challenger Women - Singles</Link>
                        </li>

                        <li>
                            <FontAwesomeIcon className={cx('icon-tennis')} icon={faPeopleGroup} />
                            <Link>Challenger Men - Doubles</Link>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default HomePage;
