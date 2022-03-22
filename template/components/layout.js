import { useEffect } from 'react'
import Alert from '../components/alert'
import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import LayoutConfig from '../components/layoutConfig'
import styles from './layout.module.css'

export default function Layout({ preview, children, t }) {
  return (
    <div className={styles.layout}>
      <Meta />
      <Header t={t} />
      <main className="min-h-screen">
        {children}
      </main>
      <LayoutConfig />
      {/* <Footer /> */}
    </div>
  )
}
