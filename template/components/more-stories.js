import PostPreview from '../components/post-preview'
import { useRouter } from 'next/router'

export default function MoreStories({ posts }) {
  const { locale, locales } = useRouter();
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug[locale].current}
            title={post.title[locale]}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug[locale].current}
            excerpt={post.excerpt[locale]}
          />
        ))}
      </div>
    </section>
  )
}
