import { faArrowRight, faChartGantt, faCode, faCogs, faLaptopCode, faPhoneAlt, faWifiStrong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Features.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { FeaturesTranslations as en } from '../../locales/en'
import { FeaturesTranslations as pt } from '../../locales/pt'
import { FeaturesTranslations as fr } from '../../locales/fr'


function Features() {
    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)
    const data = [
        {
            id: 1,
            image: faCode,
            title: "Business Stratagy",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
            id: 2,
            image: faPhoneAlt,
            title: "App Development",
            desc: " It uses a dictionary of over 200 Latin words, combined witha handful of model sentence.",
        },
        {
            id: 3,
            image: faLaptopCode,
            title: "App Development",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
            id: 4,
            image: faCogs,
            title: "Mobile App",
            desc: "There are many variations of passages of Lorem Ipsum	available, but the majority.",
        },
        {
            id: 5,
            image: faChartGantt,
            title: "CEO Marketing",
            desc: "always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
            id: 6,
            image: faWifiStrong,
            title: "Personal Portfolio April",
            desc: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
        },
    ]

    const Card = (props) => {
        return (
            <Link href="#">
                <div className={`${styles.box} ${styles.btn_shadow}`}>
                    {/* <img src={props.image} alt='' /> */}
                    <FontAwesomeIcon icon={props.image} />
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <a href='/'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </Link>
        )
    }
    return (
        <section className={`${styles.features} ${styles.top}`} id='features'>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h4>{t.preTitle}</h4>
                    <h2>{t.title}</h2>
                </div>

                <div className={`${styles.content} ${styles.grid}`}>
                    {data.map((val, index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features