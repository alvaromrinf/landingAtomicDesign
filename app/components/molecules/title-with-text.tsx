import styles from './title-with-text.module.scss'
import Title from '../atoms/title'

export default function TitleWithText({ titleCategory, title, style = null, children }) {
    return <div className={styles.titleWithText} style={style}>
        <Title category={titleCategory}>{title}</Title>
        {children}
    </div>
}