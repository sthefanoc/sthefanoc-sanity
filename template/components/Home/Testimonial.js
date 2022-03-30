import { useState, useEffect } from "react"

import styles from './Testimonial.module.css'

import { useRouter } from 'next/router'
import { TestimonialTranslations as en } from '../../locales/en'
import { TestimonialTranslations as pt } from '../../locales/pt'
import { TestimonialTranslations as fr } from '../../locales/fr'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const TestimonialApi = [
    {
        id: 1,
        image: "https://via.placeholder.com/400x400.png?text=Someone+who+likes+me",
        design: "NCD - DESIGN",
        name: "Mevine Thoda",
        offcer: "Marketing Officer",
        post: "CEO - Marketing",
        date: "Thoda Department - Mar 4, 2018 - Aug 30, 2021",
        desc: "Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/400x400.png?text=Someone+who+likes+me",
        design: "Default name",
        name: "Davei Luace",
        offcer: "Chief Operating Manager",
        post: "Android App Development",
        date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        desc: "When managment is so important. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/400x400.png?text=Someone+who+likes+me",
        design: "Rainbow-Themes",
        name: "Nevine Acotanza",
        offcer: "Chief Operating Officer",
        post: "Android App Development",
        date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
        desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/400x400.png?text=Someone+who+likes+me",
        design: "Bound - Trolola",
        name: "Jone Duone Joe",
        offcer: "Operating Officer",
        post: "Web App Development",
        date: "Upwork - Mar 4, 2016 - Aug 30, 2021",
        desc: "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
    {
        id: 5,
        image: "https://via.placeholder.com/400x400.png?text=Someone+who+likes+me",
        design: "Glassfisom",
        name: "Nevine Dhawan",
        offcer: "CEO Of Officer",
        post: "Android App Design",
        date: "Fiver - Mar 4, 2015 - Aug 30, 2021",
        desc: "No more question for design. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris	.",
    },
]

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
    let position = "nextSlide"
    if (valueIndex === index) {
        position = "activeSlide"
    }
    if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
        position = "lastSlide"
    }

    return (
        <>
            <article className={`${styles.d_flex} ${position === 'nextSlide' ? styles.nextSlide : position === 'activeSlide' ? styles.activeSlide : styles.lastSlide} ${styles.article}`} key={id}>
                {/*<div className='box d_flex' className={position} key={id}>*/}
                <div className={`${styles.left} ${styles.box_shadow}`}>
                    <div className={styles.img}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`${styles.details} ${styles.mtop}`}>
                        <span className={styles.primary_color}>{design}</span>
                        <h3>{name}</h3>
                        <h4>{offcer}</h4>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.icon}>
                        <div className={styles.quote}>
                            <FontAwesomeIcon icon={faQuoteRight} />
                        </div>
                    </div>

                    <div className={`${styles.content} ${styles.box_shadow} ${styles.mtop}`}>
                        <h3>{post}</h3>
                        <span>{date}</span>
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
        </>
    )
}



function Testimonial() {
    const [data, setdata] = useState(TestimonialApi)
    const [index, setIndex] = useState(0)

    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)

    useEffect(() => {
        const lastIndex = data.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, data])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 4000)
        return () => clearInterval(slider)
    }, [index])



    return (
        <section className={styles.Testimonial} id='clients'>
            <div className={styles.container}>
                <div className={`${styles.heading} ${styles.textCenter}`}>
                    <h4>WHAT CLIENTS SAY</h4>
                    <h2>Testimonial</h2>
                </div>
                <div className={styles.slide}>

                    {data.map((value, valueIndex) => {
                        return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
                    })}

                    <div className={styles.slide_button}>
                        <button className={`${styles.btn_shadow} ${styles.prev_btn}`} onClick={() => setIndex(index - 1)}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className={`${styles.btn_shadow} ${styles.next_btn}`} onClick={() => setIndex(index + 1)}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial