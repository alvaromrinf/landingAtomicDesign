import styles from './title.module.scss'
import classNames from 'classnames';

export default function Title({ category, children }) {
    let element;
    switch (category) {
        case "h1": {
            // element = <h1 className={classNames([styles.title, styles.h1])}>{children}</h1>
            element = <h1 className={[styles.title, styles.h1].join(' ')}>{children}</h1>
            break
        }
        case "h2": {
            element = <h2 className={[styles.title, styles.h2].join(' ')}>{children}</h2>
            break
        }
        default: {
            break
        }
    }
    return element;
}