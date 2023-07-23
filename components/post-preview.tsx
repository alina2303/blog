import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  categories: string[]
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories
}: Props) => {
  const _categories = typeof (categories) === 'string' ? [categories] : categories;
  return (
    <div>
      {coverImage && <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${slug}`}
          href="/[slug]"
          className="title_post-preview"
        >
          {title}
        </Link>
      </h3>
      <div className="text-gray-500 text-xs mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <p className='post-tag_wrapper'>
        {_categories.map((x, i) => <span key={`post-tag-${i}`} className='post-tag text-sm'>{x}</span>)}
      </p>
    </div>
  )
}

export default PostPreview
