import React from 'react';

type TextItem = {
  type: 'text';
  className: string;
  value: string;
};

type CodeItem = {
  type: 'code';
  className: string;
  value: string;
};

type PostProps = {
  title: string;
  picture: string;
  text: Array<TextItem | CodeItem>;
};

const Post: React.FC<PostProps> = ({ title, picture, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={picture} alt={title} />
      {text.map((item, index) => {
        switch (item.type) {
          case 'text':
            return <p key={index} className={item.className}>{item.value}</p>;
          case 'code':
            return <pre key={index} className={item.className}><code>{item.value}</code></pre>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Post;
