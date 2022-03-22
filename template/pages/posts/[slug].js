import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Form from '../../components/form'
// import { } from 'prismjs/components/prism-javascript'
// import { Prism } from 'react-syntax-highlighter'

const prism = require("prismjs")
require('prismjs/components/prism-python')
// require('prismjs/components/prism-javascript');

export default function Post({ post, morePosts, preview }) {
  console.log('prism', prism)
  useEffect(() => {
    prism.highlightAll();
  }, []);
  const router = useRouter()
  if (!router.isFallback && !post?.slug[router.locale].current) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[router.locale]} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title[router.locale]}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body[router.locale]} />
            </article>

            <Comments comments={post.comments} />
            <Form _id={post._id} />

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug.en.current,
        },
      })) || [],
    fallback: true,
  }
}
