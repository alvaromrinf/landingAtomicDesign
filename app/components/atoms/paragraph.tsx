import styles from './paragraph.module.scss'

export default function Paragraph({ small = false, children }) {
    return <p className={small ? [styles.paragraph, styles.small].join(' ') : styles.paragraph}>{children}</p>
}