import React from 'react';
import {
  BaseElement,
  TextElement,
  CodeElement,
  ImageElement,
  isTextElement,
  isCodeElement,
  isImageElement
} from '../lib/baseElement';


type ElementProps = {
  element: BaseElement;
};

export const Element: React.FC<ElementProps> = ({ element }) => {


  if (isTextElement(element)) {
    const { className, value } = element;
    return <p className={className}>{value}</p>;
  }

  if (isCodeElement(element)) {
    const { className, value } = element;
    return (
      <pre className={className}>
        <code>{value}</code>
      </pre>
    );
  }

  if (isImageElement(element)) {
    const { className, src, alt } = element;
    return <img className={className} src={src} alt={alt || ''} />;
  }
  return null;
};