import { faHeart, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faDev,
    faMedium,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Portfolio.module.css'
import ReactTooltip from "react-tooltip"
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { PortfolioTranslations as en } from '../../locales/en'
import { PortfolioTranslations as pt } from '../../locales/pt'
import { PortfolioTranslations as fr } from '../../locales/fr'

const Portfolio_data = [
    {
        id: 1,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }, {
        id: 2,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }, {
        id: 3,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }, {
        id: 4,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }, {
        id: 5,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }, {
        id: 6,
        category: 'Mobile',
        categories: ['frontend', 'backend'],
        totalLike: "600",
        title: "The services provide for design ",
        date: '01/10/2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto esse libero dicta voluptatibus commodi. Soluta sequi porro recusandae esse ullam cum ducimus nesciunt, neque iure ipsam accusantium nisi hic facere commodi. Impedit quisquam distinctio, culpa ad dicta quae provident unde nihil veritatis numquam animi ullam voluptatibus sint cum ex.',
        image: 'https://via.placeholder.com/800x800.png?text=One+nice_project',
        technologies: ['NextJs', 'GraphQL', 'ReactJs'],
        githubLink: 'https://google.com/',
        liveProjectLink: 'https://google.com/',
        blogPost: 'https://google.com/'
    }
]



const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if (modal) {
            document.body.classList.add(`${styles.activeModal}`)
        } else {
            document.body.classList.remove(`${styles.activeModal}`)
        }
    }, [])


    return (
        <>
            <ReactTooltip place="top" type="dark" effect="float" backgroundColor="#333" delayHide={500} />
            <div className={`${styles.box} ${styles.btn_shadow} portfolioItem`} onClick={toggleModal} data-tip={props.technologies.join(", ")}>
                <div className={styles.img}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={`${styles.category} ${styles.d_flex}`}>
                    <span onClick={toggleModal}>{props.category}</span>
                </div>
                <div className={styles.title}>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' className={styles.arrow} onClick={toggleModal}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className={styles.modal}>
                    <div onClick={toggleModal} className={styles.overlay}></div>
                    <div className={`${styles.modalContent} ${styles.d_flex}`}>
                        <div className={`${styles.modalImg} ${styles.left}`}>
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div className={`${styles.modalText} ${styles.right}`}>
                            <h4>{props.category}</h4>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <div className={`${styles.f_flex} ${styles.mtop} ${styles.buttons}`}>
                                <button className={`${styles.cta}`}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span className={styles.buttonText}>Github Repo</span>
                                </button>
                                <button className={`${styles.cta}`}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span className={styles.buttonText}>Github Repo</span>
                                </button>
                                <button className={`${styles.cta}`}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span className={styles.buttonText}>Github Repo</span>
                                </button>
                            </div>
                            <button className={`${styles.closeModal} ${styles.btn_shadow}`} onClick={toggleModal}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function Portfolio() {
    const [seeAllOpen, setSeeAllOpen] = useState(false)
    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)

    const seeMoreItems = () => {
        setSeeAllOpen(!seeAllOpen)
        console.log('see more', seeAllOpen)
        const seeMore = document.querySelector('#seeMore')
        const seeLess = document.querySelector('#seeLess')
        // console.log('children', typeof (document.querySelector('#seeMore').children))
        let items = Array.from(document.querySelectorAll('.portfolioItem'))
        items.forEach((item, index) => {
            console.log('lalala', index, item)
            if (seeAllOpen) {
                if (index > 2) {
                    item.style.display = 'unset'
                    seeMore.style.display = 'none'
                    seeLess.style.display = 'flex'
                }
            } else {
                if (index > 2) {
                    item.style.display = 'none'
                    seeMore.style.display = 'unset'
                    seeLess.style.display = 'none'
                }
            }
            return
        })

    }

    useEffect(() => {
        seeMoreItems()
    }, [])


    return (
        <section className={`${styles.Portfolio} ${styles.top}`} id='portfolio'>
            <div className={styles.container}>
                <div className={`${styles.heading} ${styles.textCenter}`}>
                    <h4>{t.preTitle}</h4>
                    <h2>{t.title}</h2>
                </div>

                <div id="portfolioItems" className={`${styles.content} ${styles.grid}`}>
                    {Portfolio_data.map((value, index) => {
                        return <Card
                            key={value.id}
                            id={value.id}
                            category={value.category}
                            categories={value.categories}
                            totalLike={value.totalLike}
                            title={value.title}
                            date={value.date}
                            description={value.description}
                            image={value.image}
                            technologies={value.technologies}
                            githubLink={value.githubLink}
                            liveProjectLink={value.liveProjectLink}
                            blogPost={value.blogPost}
                        />
                    })}
                </div>
                <div id="seeMore" className={styles.seeMore} onClick={seeMoreItems}>
                    {t.seeMore}
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div id="seeLess" className={styles.seeLessContainer} style={{ display: "none" }}>
                    <div className={styles.seeLess} onClick={seeMoreItems}>
                        {t.seeLess}
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className={styles.seeAll}>
                        {t.seeAll}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio