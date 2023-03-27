import React, { useRef, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/vs2015.css';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript' }) => {
  const codeBlockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeBlockRef.current) {
      hljs.highlightBlock(codeBlockRef.current);
    }
  }, []);

  return (
    <pre>
      <code ref={codeBlockRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
