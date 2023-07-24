import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import type PostType from '../interfaces/post'
import PostTitle from '../components/post-title'
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
// import typescript from 'highlight.js/lib/languages/typescript';
import csharp from 'highlight.js/lib/languages/csharp';
import { useEffect, useState } from 'react'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

function highlightCodeBlocks(html) {
  // Define the regular expression pattern to match code blocks
  var pattern = /<pre><code class="language-csharp">([\s\S]*?)<\/code><\/pre>/g;

  // Replace code blocks with highlighted versions
  var highlightedHTML = html.replace(pattern, function (match, code) {
    // Highlight the code using 'csharp' language
    var highlightedCode = hljs.highlight('csharp', code).value;

    // Return the highlighted version wrapped in <pre><code> tags
    return '<pre><code class="language-csharp">' + highlightedCode + '</code></pre>';
  });

  return highlightedHTML;
}

export default function Post({ post, morePosts, preview }: Props) {

  const router = useRouter()
  const [content, setContent] = useState(post.content);
  const title = `${post.title} | Alina Bo`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  hljs.registerLanguage('csharp', csharp);

  useEffect(() => {
    setContent(highlightCodeBlocks(post.content));
  }, [post.slug]);

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {post.ogImage && <meta property="og:image" content={post.ogImage?.url} />}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post
    },
  }
};

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
};
