import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({ to, href, primary, children, onClick }) {
    let Comp = 'button';

    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper');
    return (
        <Comp classNames={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
