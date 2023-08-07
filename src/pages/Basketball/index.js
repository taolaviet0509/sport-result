import styles from './Basketball.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

const cx = classNames.bind(styles);

function Basketball() {
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
                <h2>Basketball - next 10 matches </h2>
                <span>Show all today's basketball match</span>
                <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
            </header>
            <table>
                <tbody>
                    <tr>
                        <th>BOLIVIA: LIBOBASQUET</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>10:00</span>
                            <a>CBP Sucre - Pichincha Potosi</a>
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
                        <th>USA: NBA SALT LAKE CITY SUMMER LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Philadelphia 76ers - Oklahoma City Thunder</a>
                            <span>VTV5</span>
                        </td>
                    </tr>

                    <tr>
                        <th>PUERTO RICO: BSN</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Connecticut Sun W - Seattle Storm W</a>
                            <span>HTV TT</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Guaros de Lara - Gladiadores</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Rakow - U. Cluj</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Teplice - Zizkov</a>
                            <span>Sport Live</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Warta Poznan - Pogon Szczecin</a>
                            <span>Sport Live</span>
                        </td>
                    </tr>

                    <tr>
                        <th>NEW ZEALAND: NBL</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Nelson Giants - Otago Nuggets</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Norths Bears - Inner West Bulls</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={cx('up-coming')}>
                <header className={cx('header-wrap-section')}>
                    <h2>Basketball - yesterday's results</h2>
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

export default Basketball;
