import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faCode, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import styles from './header.module.css'
import { useRouter } from 'next/router'
import { HeaderTranslations as en } from '../locales/en'
import { HeaderTranslations as pt } from '../locales/pt'
import { HeaderTranslations as fr } from '../locales/fr'

export default function Header() {
  const { locale, locales } = useRouter();
  const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)
  const links = [
    // { icon: faHome, text: "Home", href: "/" },
    { icon: faUser, text: t.about, href: t.aboutLink },
    { icon: faBriefcase, text: t.services, href: t.servicesLink },
    { icon: faCode, text: t.portfolio, href: t.portfolioLink },
    { icon: faFileAlt, text: t.blog, href: t.blogLink },
    { icon: faEnvelope, text: t.contact, href: t.contactLink },
  ]

  const openCloseMenu = () => {
    const menu = document.querySelector('#links')
    if (!menu) { return }
    menu.classList.toggle(styles.active)

    const burger = document.querySelector('#burger')
    if (!burger) { return }

    console.log('burgerDivs', burger.querySelectorAll('div'))
    burger.querySelectorAll('div').forEach((item, index) => {
      if (index == 0) {
        item.classList.toggle(styles.open1)
      } else if (index == 2) {
        item.classList.toggle(styles.open2)
      } else {
        item.classList.toggle(styles.open3)
      }
    })

    // if (menu.style.display == 'flex') {
    //   menu.style.display = 'none'
    // } else {
    //   menu.style.display = 'flex'
    // }
  }

  return (
    <header className={styles.flex}>
      <div className={styles.logo}>
        <Link href={"/"}>SthefanoC</Link>
      </div>
      <div id='burger' className={styles.burger} onClick={openCloseMenu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <ul id='links' className={styles.links}>
        {links.map(item => (
          <li key={item.text}>
            <Link href={item.href}>
              <div className={styles.link}>
                {/* <FontAwesomeIcon icon={item.icon} /> */}
                <div className={styles.text}>
                  {item.text}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className={styles.bottom}>
        Powered by <a target='blank' href="https://masteradin.com/">Masteradin</a>
      </div> */}
    </header>
  )
}