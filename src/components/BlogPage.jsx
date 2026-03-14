import BlogCard from './BlogCard'
import { blogPosts } from '../data/blogPosts'

export default function BlogPage() {
  const featuredPrimary = blogPosts[0]
  const featuredSecondary = blogPosts[1]
  const gridPosts = blogPosts.slice(2)

  return (
    <>
      <section className="bg-[#011D21] px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="m-0 max-w-[720px] text-[clamp(1.7rem,3.4vw,3.2rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#e6f0f1]">
            Access all the latest insights
          </h1>

          <span className="mt-10 block h-px w-full bg-[#9db2b8]" />

          <div className="mt-7 grid gap-1 xl:grid-cols-[2fr_1fr]">
            <BlogCard post={featuredPrimary} variant="featuredLarge" />
            <BlogCard post={featuredSecondary} variant="featuredSmall" />
          </div>
        </div>
      </section>

      <section className="bg-[#e7e8e8] px-5 py-8 md:px-10 md:py-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-4">
            {gridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
