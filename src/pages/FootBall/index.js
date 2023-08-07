import styles from './Football.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const cx = classNames.bind(styles);
function Football() {
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
    // const fetch = function () {
    //     return new Promise((resolve, reject) => {
    //         // Trạng thái "pending" khi Promise mới được tạo
    //         // Giả sử đây là một công việc bất đồng bộ, ví dụ: gọi API hoặc thực hiện timeout
    //         setTimeout(() => {
    //             const data = {
    //                 name: 'Viet',
    //                 age: 19,
    //                 country: 'Viet Nam',
    //                 bet: 'debet ',
    //             };
    //             // Giả sử công việc thành công, resolve với giá trị "Success"
    //             resolve(data);
    //         }, 2000);
    //     });
    // };

    // fetch()
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((err) => {
    //         console.err('Error fetching', err);
    //     })
    //     .finally(() => {
    //         console.log('vldfkglkfd');
    //     });

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-wrap-section')}>
                <h2>Football - next 10 matches </h2>
                <span>Show all today's football match</span>
                <FontAwesomeIcon className={cx('more-btn')} icon={faAngleRight} />
            </header>
            <table>
                <tbody>
                    <tr>
                        <th>WORLD: CLUB FRIENDLY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>10:00</span>
                            <a>Budaorsi SC - BKV Elore</a>
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
                        <th>MYANMAR: NATIONAL LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Yangon Utd - Shan Utd</a>
                            <span>VTV5</span>
                        </td>
                    </tr>

                    <tr>
                        <th>WORLD: CLUB FRIENDLY</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Liberec - Varnsdorf</a>
                            <span>HTV TT</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>11:00</span>
                            <a>Povazska Bystrica - Skalica</a>
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
                        <th>ETHIOPIA: PREMIER LEAGUE</th>
                    </tr>
                    <tr>
                        <td className={cx('match-item')}>
                            <span>19:00</span>
                            <a>Hawassa - Arba Menche</a>
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
                    <h2>Football - yesterday's results</h2>
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

export default Football;
