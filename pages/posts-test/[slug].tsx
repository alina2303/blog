import React from 'react';
import fs from 'fs';
import { join } from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import Post, { TextItem, CodeItem } from '../../components/post-test';
import { getPostBySlug } from '../../lib/api';

type Element = TextItem | CodeItem;

type BlogPostProps = {
  post: {
    Title: string;
    Picture: string;
    Elements: Array<Element>;
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { Title, Picture, Elements } = post;

  return (
    <div>
      <Post title={Title} picture={Picture} text={Elements} />
    </div>
  );
};

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
  }

export async function getStaticPaths() {  const postsDirectory = join(process.cwd(), '_posts');

  const fullPath = join(postsDirectory, `${params.slug}.json`);
  const post = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  return {
    props: {
      post,
    },
  };
};

export default BlogPost;
