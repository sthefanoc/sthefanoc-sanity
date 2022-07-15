import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import en from '../locales/en'
// import { HeaderTranslations as en } from '../locales/en'
// import { HeaderTranslations as en } from '../locales/en'
// import { HeaderTranslations as en } from '../locales/en'

import { Hero, Features, Portfolio, Testimonial, Blog, Contact } from '../components/Home'

export default function Index({ allPosts, preview }) {
  const { locale, locales } = useRouter();
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  // const t = locale === 'pt' ? pt : (locale === 'fr' ? fr : en)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>SthefanoC.com | Full Stack Developer</title>
        </Head>

        <Hero />
        <Features />
        <Portfolio />
        {/* <Testimonial /> */}
        <Blog />
        <Contact />

        {/* <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title[locale]}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug[locale].current}
              excerpt={heroPost.excerpt[locale]}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
