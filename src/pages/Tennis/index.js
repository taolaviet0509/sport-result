import styles from './Tennis.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

const cx = classNames.bind(styles);

function Tennis() {
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
                <h2>Tennis - next 10 matches </h2>
                <span>Show all today's tennis match</span>
                <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
            </header>
            <table>
                <tbody>
                    <tr>
                        <th>ITF MEN - DOUBLES: M25 MARBURG, CLAY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>21:40</span>
                            <a>Hartenstein J. P. / Pavlenko P. - Recek D. / Siniakov D.</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>22:00</span>
                            <a>Bittoun C. / Somani P. - Gerch L. / Hassan B.</a>
                            <span>VTV3</span>
                        </td>
                    </tr>

                    <tr>
                        <th>ATP - SINGLES: WIMBLEDON, GRASS</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>22:00</span>
                            <a>Pella G. - Mayot H.</a>
                            <span>HTV8</span>
                        </td>
                    </tr>

                    <tr>
                        <th>ITF MEN - DOUBLES: M25 BIELLA, CLAY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Roveri Sidney G. / Yamacita F. - Schenekenberg G. / Schiessl J. E.</a>
                            <span>HTV TT</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>21:45</span>
                            <a>Eysseric J. / Molchanov D. - Gigante M. / Maestrelli F.</a>
                            <span>ESPN</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>21:45</span>
                            <a>Stephens S. - Vekic D.</a>
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
                        <th>CHALLENGER MEN - SINGLES: SANTA FE, CLAY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>22:00</span>
                            <a>Soto M. - Guillen Meza A.</a>
                            <span>Sport S</span>
                        </td>
                    </tr>

                    <tr>
                        <th>ITF WOMEN - DOUBLES: W60 MONTPELLIER, CLAY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>21:50</span>
                            <a>Anshba A. / Lansere S. - Andrianjafitrimo T. / Ferro F.</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>21:50</span>
                            <a>Lohoff J. / Mitu A. - Cascino E. / Sharma A.</a>
                            <span>Sport S</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={cx('up-coming')}>
                <header className={cx('header-wrap-section')}>
                    <h2>Tennis - yesterday's results</h2>
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

export default Tennis;
