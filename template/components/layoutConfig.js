import styles from './layoutConfig.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const layoutConfig = () => {
    const [isConfigOpen, setConfigOpen] = useState(0);
    const [themeColor, setThemeColor] = useState('pink');
    const [themeSkin, setThemeSkin] = useState('light');
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const { locale } = useRouter();
    const router = useRouter();

    const colorScheme = {
        pink: ["#F56C82", "#EC1839", "#980018", "#88E565", "#4AD516"],
        blue: ["#77BEF5", "#2198F3", "#0367B4", "#FFC372", "#FF9A13"],
        orange: ["#FF9B6B", "#FA5B0F", "#9D3300", "#51C19A", "#0AA870"],
        yellow: ["#FFD164", "#FFB400", "#9B6E00", "#5B6DC3", "#1531AE"],
        green: ["#B3E77A", "#71B626", "#396D00", "#DF769D", "#AF2558"],
    }

    const skinColors = {
        light: ['#fdf9ff', '#e8dfec', '#f2f2fc', '#000', '#302e4d'],
        dark: ['#222', '#393939', '##151515', '#fff', '#e9e9e9']
    }

    const retrieveFromLocalStorage = (property, defaultValue) => {
        const retrievedValue = window.localStorage.getItem(`sthefanoc.com/${property}`)
        return retrievedValue ? retrievedValue : defaultValue
    }

    const addBorderToSelectedColor = (color) => {
        const selectedColorItem = [...document.querySelector('#styleSwitcher').querySelectorAll('button')].filter(item => item.title === color)
        const notSelectedColorItems = [...document.querySelector('#styleSwitcher').querySelectorAll('button')].filter(item => item.title !== color)
        selectedColorItem[0].style.border = '0.15rem solid var(--template-color-03)'
        notSelectedColorItems.forEach(item => item.style.border = '')
    }

    const changeTemplateColors = (color) => {
        const newColor = colorScheme[color]
        for (let i = 0; i < 5; i++) {
            document.documentElement.style.setProperty(`--template-color-0${i + 1}`, newColor[i])
        }
    }

    const changeTemplateTheme = (theme) => {
        const newTheme = skinColors[theme]
        for (let i = 0; i < 3; i++) {
            document.documentElement.style.setProperty(`--template-bg-color-0${i + 1}`, newTheme[i])
        }
        for (let j = 0; j < 2; j++) {
            document.documentElement.style.setProperty(`--template-font-color-0${j + 1}`, newTheme[j + 3])
        }
    }

    const changeSelectedLanguage = (language) => {
        Array.from(document.querySelectorAll('.set-language')).forEach(item => {
            let itemValue = item.value ? item.value.toLowerCase() : ''
            if (itemValue === language) {
                console.log('equal', language, item.value)
                item.checked = true
            } else {
                console.log('not equal', language, item.value)
                item.checked = false
            }
        })
        setCookie(language)
    }

    const setCookie = (locale) => {
        document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    }

    useEffect(() => {
        setConfigOpen(Number(retrieveFromLocalStorage('isConfigOpen', 0)))
        setThemeColor(retrieveFromLocalStorage('themeColor', 'pink'))
        setThemeSkin(retrieveFromLocalStorage('themeSkin', 'light'))
        setSelectedLanguage(retrieveFromLocalStorage('selectedLanguage', 'en'))
        console.log('STATES', isConfigOpen, themeColor, themeSkin, selectedLanguage)
    }, [])

    useEffect(() => {
        if (isConfigOpen) {
            document.querySelector('#styleSwitcher').style.transform = 'translateX(0%)'
            document.querySelector('#faCog').style.animation = ''
            document.querySelector('#faCog').style.opacity = 1
        } else {
            document.querySelector('#styleSwitcher').style.transform = 'translateX(100%)'
            document.querySelector('#faCog').style.animation = 'spin infinite 3s linear'
            document.querySelector('#faCog').style.opacity = 0.7
        }
        localStorage.setItem('sthefanoc.com/isConfigOpen', isConfigOpen)
    }, [isConfigOpen])

    useEffect(() => {
        addBorderToSelectedColor(themeColor)
        changeTemplateColors(themeColor)
        localStorage.setItem('sthefanoc.com/themeColor', themeColor)
    }, [themeColor])

    useEffect(() => {
        changeTemplateTheme(themeSkin)
        localStorage.setItem('sthefanoc.com/themeSkin', themeSkin)
        // document.querySelectorAll('.set-language').forEach(item=>)
        Array.from(document.querySelectorAll('.body-skin')).forEach(i => {
            if (i.value == themeSkin) {
                i.checked = true
            } else {
                i.checked = false
            }
        })
    }, [themeSkin])

    useEffect(() => {
        localStorage.setItem('sthefanoc.com/selectedLanguage', selectedLanguage)
        changeSelectedLanguage(selectedLanguage)
    }, [selectedLanguage])

    useEffect(() => {
        // alert(selectedLanguage)
        // alert(locale)
        console.log('selectedLanguage', selectedLanguage)
        console.log('locale', locale)
        // router.push('/', '/', { locale: locale })
    }, [])


    return (
        <div id='styleSwitcher' className={styles.styleSwitcher} >
            <div className={styles.toggleStyleSwitcher}>
                <FontAwesomeIcon id='faCog' icon={faCog} onClick={() => setConfigOpen(isConfigOpen ? 0 : 1)} className="fa-spin" />
            </div>
            <h5>Settings</h5>
            <ul>
                <li><button title='pink' style={{ backgroundColor: "#ec1839" }} onClick={() => setThemeColor('pink')}></button></li>
                <li><button title='blue' style={{ backgroundColor: "#2196f3" }} onClick={() => setThemeColor('blue')}></button></li>
                <li><button title='orange' style={{ backgroundColor: "#fa5b0f" }} onClick={() => setThemeColor('orange')}></button></li>
                <li><button title='yellow' style={{ backgroundColor: "#ffb400" }} onClick={() => setThemeColor('yellow')}></button></li>
                <li><button title='green' style={{ backgroundColor: "#72b626" }} onClick={() => setThemeColor('green')}></button></li>
            </ul>
            <h5>Body Skin</h5>
            <div className="body-skin">
                <label >
                    <input
                        type="radio"
                        className="body-skin"
                        name="body-style"
                        value="light"
                        defaultChecked={themeSkin == 'light' ? "true" : "false"}
                        onClick={() => setThemeSkin('light')}
                    />
                    Light
                </label>
                <label >
                    <input
                        type="radio"
                        className="body-skin"
                        name="body-style"
                        value="dark"
                        defaultChecked={themeSkin == 'dark' ? "true" : "false"}
                        onClick={() => setThemeSkin('dark')}
                    />
                    Dark
                </label>
            </div>

            <h5>Language</h5>
            <div className="set-language">
                <label >
                    <input
                        type="radio"
                        className="set-language"
                        name="language"
                        value="EN"
                        defaultChecked={locale == 'en' ? "true" : "false"}
                        onClick={() => {
                            router.push('/', '/', { locale: 'en' });
                            setSelectedLanguage('en')
                        }}
                    />
                    EN
                </label>
                <label >
                    <input
                        type="radio"
                        className="set-language"
                        name="language"
                        value="PT"
                        defaultChecked={locale == 'pt' ? "true" : "false"}
                        onClick={() => {
                            router.push('/', '/', { locale: 'pt' });
                            setSelectedLanguage('pt')
                        }}
                    />
                    PT
                </label>
                <label >
                    <input
                        type="radio"
                        className="set-language"
                        name="language"
                        value="FR"
                        defaultChecked={locale == 'fr' ? "true" : "false"}
                        onClick={() => {
                            router.push('/', '/', { locale: 'fr' });
                            setSelectedLanguage('fr')
                        }}
                    />
                    FR
                </label>
            </div>
        </div>
    )
}

export default layoutConfig