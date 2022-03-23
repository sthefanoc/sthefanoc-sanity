import styles from "./Hero.module.css"
import { Typewriter } from "react-simple-typewriter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faCode, faFileAlt, faEnvelope, faFlag } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faDev,
    faMedium,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import ReactTooltip from "react-tooltip"
import Link from 'next/link'

import { useRouter } from 'next/router'
import { HeroTranslations as en } from '../../locales/en'
import { HeroTranslations as pt } from '../../locales/pt'
import { HeroTranslations as fr } from '../../locales/fr'


function Hero() {
    const { locale, locales } = useRouter();
    const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)
    return (
        <section className={styles.hero} id='home'>
            <div className={`${styles.container} ${styles.f_flex} ${styles.top}`}>
                <div className={`${styles.left} ${styles.top}`}>
                    <h4>{t.preTitle}</h4>
                    <h1>
                        {t.presentation} <span>Sthefano Carvalho</span>
                    </h1>
                    <h2>
                        {t.article}{' '}
                        <span>
                            <Typewriter words={t.words} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                        </span>
                    </h2>

                    <p>{t.shortPresentation}</p>

                    <div className={`${styles.hero_btn} ${styles.d_flex}`}>
                        <ReactTooltip place="top" type="dark" effect="float" backgroundColor="#333" delayHide={500} />
                        <div className={styles.col_1}>
                            <h4>{t.myWork}</h4>
                            <div className={styles.button}>
                                <a href="https://github.com/sthefanoc" target="blank" data-tip={t.githubTooltip}>
                                    <button className={styles.btn_shadow}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </a>

                                <a href="https://www.linkedin.com/in/sthefanocarvalho/" target="blank" data-tip={t.linkedinTooltip}>
                                    <button className={styles.btn_shadow}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </button>
                                </a>
                                <Link href='#portfolio'>
                                    <button className={`${styles.btn_shadow} ${styles.last_button}`} data-tip={t.portfolioTooltip}>
                                        <FontAwesomeIcon icon={faCode} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.col_1}>
                            <h4>My content</h4>
                            <div className={styles.button}>
                                <a href="https://dev.to/sthefanoc" target="blank" data-tip={t.devToTooltip}>
                                    <button className={styles.btn_shadow}>
                                        <FontAwesomeIcon icon={faDev} />
                                    </button>
                                </a>
                                <a href="https://twitter.com/intent/user?screen_name=Sthefanoc_Dev" target="blank" data-tip={t.twitterTooltip}>
                                    <button className={styles.btn_shadow}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </button>
                                </a>
                                <a href="https://medium.com/@sthefanoc" target="blank" data-tip={t.mediumTooltip}>
                                    <button className={styles.btn_shadow}>
                                        <FontAwesomeIcon icon={faMedium} />
                                    </button>
                                </a>
                                <Link href='#blog'>
                                    <button className={`${styles.btn_shadow} ${styles.last_button}`} data-tip={t.blogTooltip}>
                                        <FontAwesomeIcon icon={faFileAlt} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_img}>
                        <img src='https://via.placeholder.com/437x650.png?text=This+Is+My+Face' alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero