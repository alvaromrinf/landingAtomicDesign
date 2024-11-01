import styles from './link-list.module.scss'

export default function LinkList({ children }) {
    return <ul className={styles.linkList}>
        {children.map((item, key) => <li key={"list-element" + key + 1} >{item}</li>)}
    </ul>
}