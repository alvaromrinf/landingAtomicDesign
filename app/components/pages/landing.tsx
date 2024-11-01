import TemplateBoxedContent from '../templates/template-boxed-content'
import Header from '../organisms/header'
import Hero from '../organisms/hero'
import Card from '../organisms/card'
import Paragraph from '../atoms/paragraph'
import Footer from '../organisms/footer'
import HeroBackground from '../atoms/hero-background'

export default function Landing() {
    return <TemplateBoxedContent
        header={<Header />}
        content={
            <>
                <HeroBackground />
                <Hero />
                <section>
                    <Card
                        img={"/img1.png"}
                        imgAlt={"Image 1"}
                        title={"Light, Fast & Powerful"}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                    <Card
                        img={"/img2.png"}
                        imgAlt={"Image 2"}
                        title={"Light, Fast & Powerful"}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                    <Card
                        img={"/img3.png"}
                        imgAlt={"Image 3"}
                        title={"Light, Fast & Powerful"}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                </section>
                <section style={{ display: 'flex', flexDirection: 'row', gridGap: "0px 100px", marginBottom: '90px' }}>
                    <Card
                        img={"/img1.png"}
                        imgAlt={"Image 1"}
                        title={"Light, Fast & Powerful"}
                        vertical={true}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                    <Card
                        img={"/img2.png"}
                        imgAlt={"Image 2"}
                        title={"Light, Fast & Powerful"}
                        vertical={true}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                    <Card
                        img={"/img3.png"}
                        imgAlt={"Image 3"}
                        title={"Light, Fast & Powerful"}
                        vertical={true}
                    >
                        <Paragraph small={true}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</Paragraph>
                        <Paragraph small={true}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Paragraph>
                    </Card>
                </section>
            </>
        }
        footer={<Footer />}
    />
}