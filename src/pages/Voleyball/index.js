import styles from './Voleyball.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

const cx = classNames.bind(styles);
function Volleyball() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    var matchs = 'https://633f9eb4e44b83bc73bdb5fb.mockapi.io/matches';

    useEffect(() => {
        axios
            .get(matchs)
            .then((res) => {
                setPost(res.data);
                setLoading(true);
            })
            .catch((err) => err);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-wrap-section')}>
                <h2>Voleyball - next 10 matches </h2>
                <span>Show all today's volleyball match</span>
                <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
            </header>
            <table>
                <tbody>
                    <tr>
                        <th>EUROPE: GOLDEN EUROPEAN LEAGUE WOMEN</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>10:00</span>
                            <a>Ukraine W - Sweden W</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>10:00</span>
                            <a>Presov - Trebisov</a>
                            <span>VTV3</span>
                        </td>
                    </tr>

                    <tr>
                        <th>NORTH & CENTRAL AMERICA: CENTRAL AMERICAN & CARIBBEAN GAMES WOMEN</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Cuba W - Trinidad & Tobago W</a>
                            <span>VTV5</span>
                        </td>
                    </tr>

                    <tr>
                        <th>EUROPE: SILVER EUROPEAN LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Hungary - Latvia</a>
                            <span>HTV TT</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Poland - Brazil</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Bulgaria - Iran</a>
                            <span>ESPN</span>
                        </td>
                    </tr>

                    <tr>
                        <th>NORTH & CENTRAL AMERICA: CENTRAL AMERICAN & CARIBBEAN GAMES WOMEN</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Dominican Republic W - Puerto Rico W</a>
                            <span>Sport S</span>
                        </td>
                    </tr>

                    <tr>
                        <th>WORLD: NATIONS LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Serbia - Cuba</a>
                            <span>Sport S</span>
                        </td>
                    </tr>

                    <tr>
                        <th>WORLD: NATIONS LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Argentina - Germany</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Wolkite Ketema - Adama City</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={cx('up-coming')}>
                <header className={cx('header-wrap-section')}>
                    <h2>Volleyball - yesterday's results</h2>
                    <span>Show all yesterday's football results</span>
                    <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
                </header>

                <table>
                    <tbody>
                        {loading ? (
                            post.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={cx('get-api')}>
                                            <span>{item.dateTime}</span>
                                            <a className={cx('match-game')}>{item.matchName}</a>
                                            <span>{item.channel}</span>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <Loading />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Volleyball;
