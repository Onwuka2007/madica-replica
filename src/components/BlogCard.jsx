export default function BlogCard({ post, variant = 'grid' }) {
  const isFeaturedLarge = variant === 'featuredLarge'
  const isFeaturedSmall = variant === 'featuredSmall'

  const cardClass = isFeaturedLarge
    ? 'flex h-full gap-3 flex-col border border-[#304950] bg-[#f1f2f2] p-4 md:p-5 transform-gpu transition-transform duration-300 ease-out hover:-rotate-1'
    : isFeaturedSmall
      ? 'flex h-fit gap-3 flex-col border border-[#304950] bg-[#f1f2f2] p-4 transform-gpu transition-transform duration-300 ease-out hover:-rotate-1'
      : 'flex h-full gap-3 flex-col border border-[#304950] bg-[#f1f2f2] p-4 transform-gpu transition-transform duration-300 ease-out hover:-rotate-1'

  const imageClass = isFeaturedLarge
    ? 'mt-4 aspect-[16/8] overflow-hidden'
    : isFeaturedSmall
      ? 'mt-4 aspect-[16/8] overflow-hidden'
      : 'mt-4 aspect-[16/6] overflow-hidden'

  const titleClass = isFeaturedLarge
    ? 'm-0 mt-5 text-[1.4rem] leading-[1.25] font-semibold text-[#112e34]'
    : isFeaturedSmall
      ? 'm-0 mt-4 text-[1.25rem] leading-[1.25] font-semibold text-[#112e34]'
      : 'm-0 mt-4 text-[0.95rem] leading-[1.3] font-semibold text-[#112e34]'

  const excerptClass = isFeaturedLarge
    ? 'm-0 mt-3 text-[0.9rem] leading-[1.5] text-[#27444a]'
    : isFeaturedSmall
      ? 'm-0 mt-3 text-[0.85rem] leading-[1.5] text-[#27444a]'
      : 'm-0 mt-2 text-[0.82rem] leading-[1.45] text-[#27444a]'

  return (
    <article className={cardClass}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex min-h-7 min-w-[120px] items-center justify-center rounded-full border border-[#4f666b] px-3 text-[0.65rem] font-medium uppercase tracking-[0.04em] text-[#18373e]">
          {post.category}
        </span>
        <span className="text-[0.65rem] text-[#405a60]">{post.date}</span>
      </div>

      <div className={imageClass}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className={titleClass}>{post.title}</h3>
      <p className={excerptClass}>{post.excerpt}</p>
    </article>
  )
}
