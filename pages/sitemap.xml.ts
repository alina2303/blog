import PostType from "../interfaces/post";
import { getAllPosts } from "../lib/api";

const EXTERNAL_URL = 'https://alinabo.com/';
const EXTERNAL_DATA_URL = `${EXTERNAL_URL}/posts`;

function generateSiteMap(posts : PostType[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_URL}</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_URL}${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = getAllPosts();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;