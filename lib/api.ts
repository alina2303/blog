import fs from 'fs'
import { join } from 'path'
import { isCodeElement } from './baseElement';

const currentDirectory = process.cwd();
const postsDirectory = join(currentDirectory, '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.json'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const post = JSON.parse(fileContents);
  post.slug = realSlug;

  processPostContent(post);

  return post;
}

function processPostContent(post: any): void {
  for (const element of post.content) {
    if (isCodeElement(element)) {
      const { filePath } = element;

      if (filePath) {
        const fullFilePath = join(currentDirectory, '_code' , filePath);
        const fileContents = fs.readFileSync(fullFilePath, 'utf8');
        element.value = fileContents;
      }
    }
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
