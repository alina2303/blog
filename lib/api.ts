import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.json'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const post = JSON.parse(fileContents);
  post.slug = realSlug;

  return post;
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
