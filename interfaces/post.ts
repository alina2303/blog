import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage?: {
    url: string
  }
  content: string
  categories: {
    category: string[]
  }
}

export default PostType
