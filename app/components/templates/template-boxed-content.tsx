import styles from './template-boxed-content.module.scss'

export default function TemplateBoxedContent({ header, content, footer }) {
    return <div className={styles.templateBoxedContent}>
        <header className={styles.header}>
            {header}
        </header>
        <main className={styles.content}>
            {content}
        </main>
        <div className={styles.footerBg}>
            <footer className={styles.footer}>
                {footer}
            </footer>
        </div>
    </div>
}