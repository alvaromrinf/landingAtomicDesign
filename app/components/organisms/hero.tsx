import styles from './hero.module.scss'
import Button from '../atoms/button'
import Paragraph from '../atoms/paragraph'
import TitleWithText from '../molecules/title-with-text'

export default function Hero() {
    const buttonAction = async () => {
        'use server';
        console.log('Clicked button!')
    }

    return <section className={styles.hero}>
        <div className='col-6'>
            <TitleWithText titleCategory={"h1"} title="Introduce Your Product Quickly & Effectively">
                <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                <Paragraph>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
            </TitleWithText>
            <div className={styles.buttons}>
                <Button appeareance={["big"]} onClick={buttonAction}>Purchase UI Kit</Button>
                <Button appeareance={["big", "secondary"]} onClick={buttonAction}>Learn more</Button>
            </div>
        </div>
    </section>
}
