import fs from 'fs'
import { join } from 'path'
import { XMLParser } from 'fast-xml-parser'


const currentDirectory = process.cwd();
const postsDirectory = join(currentDirectory, '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.xml'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.xml$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.xml`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const parser = new XMLParser();

  const content = parser.parse(fileContents);
  const post = content.post;
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
