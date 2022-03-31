import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from './Blog.module.css'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const BlogApi = [
    {
        id: 1,
        title: 'this is a title',
        slug: 'this-is-a-title',
        author: 'My name',
        mainImage: 'https://via.placeholder.com/800x800.png?text=This+is+a+blog+post',
        categories: ['category 1', 'category 2'],
        date: '2020-01-01 01:00',
        excerpt: 'this is a short description',
        body: 'this is a long description Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus aliquid sed repudiandae cupiditate saepe placeat magni, quisquam ipsum deleniti modi. Odit, repellendus, id debitis dolorem libero possimus maxime a modi aperiam esse consequuntur ut cumque officia dolorum voluptatibus deserunt earum, illo fugit. Voluptatum dolore iure aut ab aliquid sapiente.',
    },
    {
        id: 2,
        title: 'this is a title',
        slug: 'this-is-a-title',
        author: 'My name',
        mainImage: 'https://via.placeholder.com/800x800.png?text=This+is+a+blog+post',
        categories: ['category 1', 'category 2'],
        date: '2020-01-01 01:00',
        excerpt: 'this is a short description',
        body: 'this is a long description Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus aliquid sed repudiandae cupiditate saepe placeat magni, quisquam ipsum deleniti modi. Odit, repellendus, id debitis dolorem libero possimus maxime a modi aperiam esse consequuntur ut cumque officia dolorum voluptatibus deserunt earum, illo fugit. Voluptatum dolore iure aut ab aliquid sapiente.',
    },
    {
        id: 3,
        title: 'this is a title',
        slug: 'this-is-a-title',
        author: 'My name',
        mainImage: 'https://via.placeholder.com/800x800.png?text=This+is+a+blog+post',
        categories: ['category 1', 'category 2'],
        date: '2020-01-01 01:00',
        excerpt: 'this is a short description',
        body: 'this is a long description Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus aliquid sed repudiandae cupiditate saepe placeat magni, quisquam ipsum deleniti modi. Odit, repellendus, id debitis dolorem libero possimus maxime a modi aperiam esse consequuntur ut cumque officia dolorum voluptatibus deserunt earum, illo fugit. Voluptatum dolore iure aut ab aliquid sapiente.',
    }
]


const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if (modal) {
            document.body.classList.add("active-modal")
        } else {
            document.body.classList.remove("active-modal")
        }
    }, [modal])

    return (
        <>
            <div className={`${styles.box} ${styles.btn_shadow}`}>
                <div className={styles.img}>
                    <img src={props.mainImage} alt={props.title_one} onClick={toggleModal} />
                </div>
                <div className={`${styles.category} ${styles.d_flex}`}>
                    <span onClick={toggleModal}>{props.date}</span>
                </div>
                <div className={styles.title}>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    {/* Link to the post */}
                    <Link href={`/blog/${props.slug}`}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className={`${styles.modal} ${styles.modalBlog}`}>
                    <div onClick={toggleModal} className={styles.overlay}></div>
                    <div className={styles.modalContent}>
                        <div className={`${styles.modalImg} ${styles.left}`}>
                            <img src={props.mainImage} alt='' />
                        </div>
                        <div className={`${styles.modalText} ${styles.right}`}>
                            <span>{props.date}</span>
                            <h1>{props.title}</h1>
                            <p>{props.excerpt}</p>

                            <h1>{props.title}</h1>
                            <p>{props.excerpt}</p>

                            <h1>{props.title}</h1>
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
    return (
        <section className={`${styles.Portfolio} ${styles.Blog}`} id='blog'>
            <div className={`${styles.container} ${styles.top}`}>
                <div className={`${styles.heading} ${styles.textCenter}`}>
                    <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
                    <h1>My Blog</h1>
                </div>

                <div className={`${styles.content} ${styles.grid}`}>
                    {BlogApi.map((value, index) => {
                        return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blog