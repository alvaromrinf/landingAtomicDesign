import styles from './footer.module.scss'
import BlockLink from '../atoms/block-link'
import Button from '../atoms/button'
import Logo from '../atoms/logo'
import LinkList from '../molecules/link-list'

export default function Footer() {
    const buttonAction = async () => {
        'use server';
        console.log('Clicked button!')
    }

    return <div className={styles.footer}>
        <div className={[styles.top, "row"].join(' ')}>
            <div className="col-5">
                <span className={styles.copy}>©2023 Yourcompany</span>
            </div>
            <div className="col-2 row items-center"><Logo /></div>
            <div className="col-5 row items-right">
                <Button appeareance={["withAuto"]} onClick={buttonAction}>Purchase now</Button>
            </div>
        </div>
        <div className={[styles.bottom, "row"].join(' ')}>
            <div className="col-6">
                <nav>
                    <LinkList>
                        <BlockLink href="/">Home</BlockLink>
                        <BlockLink href="/">About</BlockLink>
                        <BlockLink href="/">Contact</BlockLink>
                    </LinkList>
                </nav>
            </div>
            <div className="col-6 row items-right">
            </div>
        </div>
    </div>
}