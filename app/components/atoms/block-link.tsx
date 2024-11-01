import styles from './block-link.module.scss'

export default function BlockLink({ href, children }) {
    return <a className={styles.blockLink} href={href}>{children}</a>
}