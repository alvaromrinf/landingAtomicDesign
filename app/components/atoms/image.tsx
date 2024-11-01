import styles from './image.module.scss'

export default function Image({ src, alt, fixHeight }) {
    return <img src={src} className={fixHeight ? [styles.image, styles.fixHeight].join(' ') : styles.image} alt={alt} />
}