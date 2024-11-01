import styles from './header.module.scss'
import BlockLink from '../atoms/block-link'
import Button from '../atoms/button'
import Logo from '../atoms/logo'
import LinkList from '../molecules/link-list'

export default function Header() {
    const buttonAction = async () => {
        'use server';
        console.log('Clicked button!')
    }

    return <div className={styles.header}>
        <div className="col-5">
            <nav>
                <LinkList>
                    <BlockLink href="/">Home</BlockLink>
                    <BlockLink href="/">About</BlockLink>
                    <BlockLink href="/">Contact</BlockLink>
                </LinkList>
            </nav>
        </div>
        <div className="col-2 row items-center"><Logo /></div>
        <div className="col-5 row items-right">
            <Button appeareance={[]} onClick={buttonAction}>Buy Now</Button>
        </div>
    </div>
}