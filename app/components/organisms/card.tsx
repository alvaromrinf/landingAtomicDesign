import styles from './card.module.scss'
import Image from '../atoms/image'
import TitleWithText from '../molecules/title-with-text'

export default function Card({ img, imgAlt, title, vertical = false, children }) {
    return <article className={vertical ? [styles.card, styles.vertical].join(' ') : styles.card}>
        <div className={vertical ? 'col-12' : 'col-7'}>
            <Image src={img} alt={imgAlt} fixHeight={vertical}/>
        </div>
        <div className={vertical ? 'col-12' : 'col-5'}>
            <TitleWithText titleCategory={"h2"} title={title} style={vertical ? {paddingTop: '20px'} : {paddingLeft: '17px'}}>
                {children}
            </TitleWithText>
        </div>
    </article>
}