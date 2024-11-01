import classNames from "classnames"
import styles from './button.module.scss'

export default function Button({ appeareance, onClick, children }) {
    return <button className={classNames([styles.button, ...appeareance.map(i => styles[i]).filter(e => e !== undefined)])} onClick={onClick}>{children}</button>
}