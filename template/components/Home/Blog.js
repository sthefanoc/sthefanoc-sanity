import { faHeart, faTimes, faArrowRight, faArrowLeft, faGlobe, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faDev,
    faMedium,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Blog.module.css'
import ReactTooltip from "react-tooltip"
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { BlogTranslations as en } from '../../locales/en'
import { BlogTranslations as pt } from '../../locales/pt'
import { BlogTranslations as fr } from '../../locales/fr'

const Blog_data = [
    {
        id: 1,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    },
    {
        id: 2,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    },
    {
        id: 3,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    },
    {
        id: 4,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    },
    {
        id: 5,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    },
    {
        id: 6,
        title: 'Nice Title',
        slug: 'nice-title',
        author: 'SthefanoC',
        mainImage: 'https://via.placeholder.com/800x800.png?text=An+Incredible+Blog+Post',
        categories: ['Web Design', 'Web Development'],
        publishedAt: '01/10/2021',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quo sunt nam! Iusto placeat veritatis possimus, dignissimos pariatur doloremque odio excepturi tempore, eum ratione neque, impedit quas aperiam earum. Neque nesciunt unde aliquid iure maxime, labore error, at vitae quis eius deleniti inventore nemo eveniet molestiae accusamus quaerat commodi quibusdam.'
    }
]



const Card = (props) => {
    const [modal, setModal] = useState(false)
    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)

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

    const modalLinks = [{
        description: t.github,
        link: props.githubLink,
        icon: faGithub
    }, {
        description: t.live,
        link: props.liveProjectLink,
        icon: faGlobe
    }, {
        description: t.blog,
        link: props.blogPost,
        icon: faPencilAlt
    },]


    return (
        <>
            <ReactTooltip place="top" type="dark" effect="float" backgroundColor="#333" delayHide={500} />
            <div className={`${styles.box} ${styles.btn_shadow} blogItem`} onClick={toggleModal} data-tip={props.excerpt}>
                <div className={styles.img}>
                    <img src={props.mainImage} alt={props.title} />
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
                            <img src={props.mainImage} alt={props.title} />
                        </div>
                        <div className={`${styles.modalText} ${styles.right}`}>
                            <h4>{props.category}</h4>
                            <h2>{props.title}</h2>
                            
                            <p>{props.title}</p>
                            <p>{props.slug}</p>
                            <p>{props.author}</p>
                            <p>{props.mainImage}</p>
                            <p>{props.categories}</p>
                            <p>{props.publishedAt}</p>
                            <p>{props.excerpt}</p>
                            
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

function Blog() {
    const [seeAllOpen, setSeeAllOpen] = useState(false)
    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)

    const seeMoreItems = () => {
        setSeeAllOpen(!seeAllOpen)
        console.log('see more', seeAllOpen)
        const seeMore = document.querySelector('#seeMore')
        const seeLess = document.querySelector('#seeLess')
        // console.log('children', typeof (document.querySelector('#seeMore').children))
        let items = Array.from(document.querySelectorAll('.blogItem'))
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
        <section className={`${styles.Blog} ${styles.top}`} id='blog'>
            <div className={styles.container}>
                <div className={`${styles.heading} ${styles.textCenter}`}>
                    <h4>{t.preTitle}</h4>
                    <h2>{t.title}</h2>
                </div>

                <div id="blogItems" className={`${styles.content} ${styles.grid}`}>
                    {Blog_data.map((value, index) => {
                        return <Card
                            key={value.id}
                            title={value.title}
                            slug={value.slug}
                            author={value.author}
                            mainImage={value.mainImage}
                            categories={value.categories}
                            publishedAt={value.publishedAt}
                            excerpt={value.excerpt}
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

export default Blog